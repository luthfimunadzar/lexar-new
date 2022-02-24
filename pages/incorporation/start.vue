<template>
    <div>
        <div class="wrap-prematrix">
            <!-- <div class="head-plain">
                <nuxt-link :to="localePath('needs')" class="link-back d-none"><img src="/lexar/back.png" alt=""></nuxt-link>
                
                <div class="switcher-plain mr-0">
                    <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
                    <nuxt-link :to="switchLocalePath('id')">ID</nuxt-link>
                </div>
                <button v-if="$auth.loggedIn" class="btn btn-secondary mr-3 float-right" @click.once="logout">Logout</button>
                <nuxt-link v-else class="btn btn-secondary mr-3 float-right" :to="localePath('login') + '?incorp=true'">Login</nuxt-link>
                
                <b-progress :value="nilai" :max="max" show-progress animated class="progress-global"></b-progress>
            </div> -->
            <div class="prematrix" ref="prematrix">
                <h5 class="plain-title" v-html="$t('prematrixTitle')"></h5>
                
                <b-form @submit="onSubmit" >
                    <b-card class="input-focus">

                        <b-form-checkbox
                        id="checkbox-ktp"
                        v-model="adaKtp"
                        name="KTP"
                        v-validate="'required'"
                        switch>
                            Saya Sudah Memiliki KTP
                        </b-form-checkbox>

                        <b-form-checkbox
                        id="checkbox-npwp"
                        v-model="adaNpwp"
                        name="NPWP"
                        v-validate="'required'"
                        switch>
                            Saya Sudah Memiliki NPWP Perorangan/Perusahaan
                        </b-form-checkbox>
                        <span class="validator pt-0 text-danger">{{ errors ? errors.first('NPWP') : '' }}</span>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('KTP') : '' }}</span>

                        <template v-if="!$auth.loggedIn">
                            <label>{{ $t('prematrixLabel1') }}</label>

                            <div class="help-text">
                                <p>
                                    {{ $t('prematrixHelpText1') }}
                                </p>
                            </div>

                            <b-form-input
                            v-model="form.name"
                            type="text"
                            name="name"
                            @change="checkFilled"
                            v-validate="'required'"
                            :class="[{'is-invalid': errors.has('name')}, 'big']"
                            :placeholder="$t('prematrixPlaceholder1')"
                            ref="inputNama"></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                        </template>
                        
                        <template>
                            <label>{{ $t('prematrixLabel2') }}</label>

                            <div class="help-text">
                                <p v-html="$t('prematrixHelpText2')">
                                </p>
                            </div>

                            <div class="prefix-wrap">
                                <span class="prefix">PT</span>
                                <b-form-input
                                v-model="form.nama_perseroan"
                                type="text"
                                name="company_name"
                                @change="checkFilled"
                                data-vv-name="company name"
                                v-validate="{required: true, regex: /([a-zA-Z]+\s?\b){3,}/, alpha_spaces: true }"
                                :class="[{'is-invalid': errors.has('company name')}, 'big']"
                                :placeholder="$t('prematrixPlaceholder2')"
                                ref="inputCompanyName"></b-form-input>
                            </div>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('company name') : '' }}</span>
                        </template>

                        <template>
                            <b-form-checkbox
                            id="checkbox-vo"
                            v-model="useVO"
                            v-validate="'required'"
                            switch>
                                {{ $t('prematrixLabel3') }}
                            </b-form-checkbox>

                            <div class="help-text">
                                <p>
                                    {{ $t('prematrixHelpText3') }}
                                </p>
                            </div>

                            <!-- Pake Domisili.id -->
                            <template v-if="useVO">
                                <h5 class="use-domisili">Anda akan memakai virtual office Domisili.id</h5>
                                <div class="domisili-desc">
                                    <h5>Domisili.id</h5>
                                    <p>
                                        Domisili.id adalah Virtual Office yang terjangkau dan mudah Di Jantung Kota Jakarta.
                                    </p>
                                    <h6>++ IDR 2.000.000 <span class="line-through">IDR 3.000.000</span></h6>
                                </div>
                            </template>

                            <!-- Punya alamat kantor -->
                            <template v-if="useVO === false">
                                <a href="return: false;" class="link-citiplan mt-3 mb-0 w-100" v-b-modal.modal-citiplan>{{ $t('linkCitiplan') }} <i class="fa fa-external-link"></i></a>

                                <a href="return: false;" @click="closeDomisili()" class="link-back mb-2 d-none"><i class="fa fa-angle-left"></i> Back</a>

                                <input
                                :value="form.alamat"
                                @input="form.alamat = $event.target.value"
                                @change="checkFilled"
                                ref="autocomplete"
                                type="text"
                                name="office address"
                                v-validate="'required'"
                                :class="[{'is-invalid': errors.has('office address')}, 'big', 'form-control']"
                                :placeholder="$t('prematrixPlaceholder3')"
                                id="searchLocation" 
                                />

                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('office address') : '' }}</span>
                                
                                <div class="help-text mt-2">
                                    <span class="ket">Bila Domisili milik sendiri, dokumen yg dipersiapkan</span>
                                    <p>
                                        - Sertifikat Tanah <br/>
                                        - PBB Tahun Terakhir <br/>
                                        - Izin Mendirikan Bangunan
                                    </p>
                                    
                                    <span class="ket">Bila Domisili adalah sewa, dokumen yg dipersiapkan</span>
                                    <p>
                                        - Perjanjian Sewa <br/>
                                        - Surat Keterangan berdomisili dari Penyewa<br/>
                                        - PBB tahun terakhir
                                    </p>
                                </div>
                            </template>

                            <!-- Pilihan VO atau alamat -->
                            <!-- <b-row v-if="choiceDomisili">
                                <b-col md="6">
                                    <a href="return: false;" class="btn btn-secondary w-100 rounded" @click="openDomisili()">Sudah punya Domisili</a>
                                </b-col>
                                <b-col md="6">
                                    <a href="return: false;" class="btn btn-primary w-100 rounded" @click="openVO()">Pakai Virtual Office</a>
                                </b-col>
                            </b-row> -->
                            
                            <!-- <span class="validator pt-2 text-danger" v-if="filledDomisili">The office address field is required</span> -->

                            <!-- Pilih VO -->
                            <!-- <template v-if="useVO"> -->
                            <!-- <template v-if="choiceDomisili">
                                <h5 class="label-vo float-left">
                                    Virtual Office City 
                                    <div class="spinner-border small" role="status" v-if="loadingCity">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </h5>
                                <a href="return: false;" @click="closeVO()" class="link-back mb-2 float-right"><i class="fa fa-angle-left"></i> Back</a>

                                <select
                                v-model="cityVO"
                                @change="pickCity(cityVO)"
                                ref="autocomplete"
                                name="vo brand"
                                v-validate="'required'"
                                :class="[{'is-invalid': errors.has('vo brand')}, 'form-control']"
                                >
                                    <option>Bandung</option>
                                    <option>Jakarta</option>
                                </select>

                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('vo brand') : '' }}</span>
                            </template> -->

                            <!-- Pilih Brand -->
                            <!-- <template v-if="openBrand">
                                <template v-if="dataCity.meta.code === 200">
                                    <h5 class="label-vo float-left">
                                        Virtual Office Brand 
                                        <div class="spinner-border small" role="status" v-if="loadingBrand">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </h5>

                                    <select
                                    v-model="brandVO"
                                    @change="pickBrand()"
                                    ref="autocomplete"
                                    name="vo brand"
                                    v-validate="'required'"
                                    :class="[{'is-invalid': errors.has('vo brand')}, 'form-control']"
                                    >
                                        <option v-for="data in dataCity.data" :key="data.id" :value="data.id">
                                            {{ data.virtual_office }}
                                        </option>
                                    </select>

                                    <span class="validator pt-2 text-danger">{{ errors ? errors.first('vo brand') : '' }}</span>
                                </template>
                                <template v-else>
                                    <span class="text-danger">Sorry, Theres is no Virtual Office in this city</span>
                                </template>
                            </template> -->

                            <!-- Pilih Branch -->
                            <!-- <template v-if="openBranch">
                                <template v-if="dataCity.data[brandVO - 1]">
                                    <h5 class="label-vo float-left">Virtual Office Branch</h5>

                                    <select
                                    v-model="branchVO"
                                    ref="autocomplete"
                                    name="vo branch"
                                    v-validate="'required'"
                                    @change="getAddressBranch(branchVO)"
                                    :class="[{'is-invalid': errors.has('vo branch')}, 'form-control']"
                                    >
                                        <option v-for="data in dataCity.data[brandVO - 1].branch" :key="data.id" :value="data.id">
                                            {{ data.branch_name }}
                                        </option>
                                    </select>

                                    <span class="validator pt-2 text-danger">{{ errors ? errors.first('vo branch') : '' }}</span>
                                    <h5 class="label-vo float-left">Virtual Office Package</h5>

                                    <select
                                    v-model="packageVO"
                                    ref="autocomplete"
                                    name="vo package"
                                    v-validate="'required'"
                                    :class="[{'is-invalid': errors.has('vo package')}, 'form-control']"
                                    >
                                        <option v-for="data in dataCity.data[brandVO - 1].package" :key="data.id" :value="data.id">
                                            {{ data.package_name }} - {{ data.price }}
                                        </option>
                                    </select>

                                    <span class="validator pt-2 text-danger">{{ errors ? errors.first('vo package') : '' }}</span>
                                </template>
                                <template v-else>
                                    <span class="text-danger">Sorry, Theres is no branch and package in this city</span>
                                </template>
                            </template> -->
                        </template>

                        <template v-if="!$auth.loggedIn">
                            <label>{{ $t('prematrixLabel4') }}</label>

                            <div class="help-text">
                                <h6>{{ $t('prematrixLabel4') }}</h6>
                                <p>
                                    {{ $t('prematrixHelpText4') }}
                                </p>
                            </div>
                                
                            <b-form-input
                            id="input-email"
                            v-model="form.email"
                            @change="checkFilled"
                            type="email"
                            name="email"
                            v-validate="'required|email'"
                            :class="[{'is-invalid': errors.has('email')}, 'big']"
                            :placeholder="$t('prematrixPlaceholder4')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger" v-if="emailAvailable.code === 400">{{ emailAvailable.message }}</span>
                            <span class="validator pt-2 text-info" v-if="emailAvailable.code === 200">{{ emailAvailable.message }}</span>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                        </template>
                    </b-card>

                    <button class="btn btn-secondary w-100 big rounded-shadow" @click.prevent="onSubmit" type="submit" :disabled="loading == true">{{ $t('proceed') }}</button>

                    <div class="clearfix mt-3 text-center" v-show="loading">
                        <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
                    </div>
                </b-form>
            </div>

            <b-modal id="modal-citiplan" size="xl" hide-footer :title="$t('modalCitiplan')">
                <iframe src="https://labs.cityplan.id/rdtr-module/" class="citiplan" frameborder="0"></iframe>
            </b-modal>
        </div>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    layout: "default",
    data() {
        return{
            form:{
                name: "",
                nama_perseroan: "",
                alamat: "",
                email: "",
                lat: "",
                lng: "",
            },
            loading: false,
            nilai: 0,
            max: 100,
            emailAvailable: {},
            cityVO: "",
            brandVO: "",
            branchVO: "",
            addressVO: "",
            packageVO: "",
            adaKtp: "",
            adaNpwp: "",
            choiceDomisili: false,
            filledDomisili: false,
            useDomisli: true,
            useVO: true,
            dataCity: "",
            loadingCity: false,
            dataBranch: "",
            loadingBrand: false,
            dataPackage: "",
            openBrand: false,
            openBranch: false,
        }
    },
    watch: {
        'form.email': function(oldEmail, newEmail){
            this.debouncedGetEmail();
        },
    },
    created(){
        const dict = {
            custom: {
                company_name: {
                    regex: 'Company name must consist of 3 Words, No Number and Required'
                }
            }
        };

        this.$validator.localize('en', dict);
        this.debouncedGetEmail = _.debounce(this.getEmail, 100)
    },
    mounted() {
        var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng("-5.776674", "106.636043"),
        new google.maps.LatLng("-7.962216", "108.830691"));
        var options = {
            // bounds: defaultBounds,
            componentRestrictions: {country: "id"},
            strictBounds: true,
            types: []};
        this.autocomplete = new google.maps.places.Autocomplete(
            (this.$refs.autocomplete),  options
        );

        this.autocomplete.addListener('place_changed', () => {
            let place = this.autocomplete.getPlace();
            let ac = place.address_components;
            let lat = place.geometry.location.lat();
            let lng = place.geometry.location.lng();
            let city = ac[0]["short_name"];

            this.form.alamat = place.formatted_address;
            this.form.lat = lat;
            this.form.lng = lng;
        });

        if(!this.$auth.loggedIn){
            this.$nextTick(() => this.$refs.inputNama.focus())
        } else {
            this.$nextTick(() => this.$refs.inputCompanyName.focus())
        }
    },
    methods: {
        checkFilled() {
            let elems = document.querySelectorAll('.form-control')
            const $elems = [].slice.call(elems)

            let total = $elems.length;
            let isi = 0;
            $elems.map( (elem) => { 
             if(elem.value){
                 isi ++
             }
            })

            var calc = isi / total * 100;
            this.nilai = calc;
        },
        async getEmail(params){
            let tempEmail = await this.$matrix.checkEmail({
                email : this.form.email
            });

            this.emailAvailable = tempEmail.meta;
        },
        async logout() {
            await this.$auth.logout();
        },
        async onSubmit(evt) {
            const validated = await this.$validator.validateAll();
            console.log(validated)
            if(this.$auth.loggedIn){
                if(validated) {
                    try {      
                        // show loading
                        this.loading = true; 

                        // save prematrix
                        const dataPrematrix = await this.$incorp.savePrematrix({
                            nama_perseroan: "PT " + this.form.nama_perseroan,
                            alamat: (this.addressVO) ? this.addressVO : this.form.alamat,
                            status_kantor: (this.useVO) ? "Virtual Office" : "",
                            // vo_city: (this.cityVO) ? this.cityVO : "",
                            // vo_id: (this.brandVO) ? this.brandVO : "",
                            // vo_branch: (this.branchVO) ? this.branchVO : "",
                            // vo_package: (this.packageVO) ? this.packageVO : "",
                        });
                        this.$store.commit("incorp/saveDataPrematrix", dataPrematrix.data);

                        this.$router.replace('/request-order?login=true');
                    } catch (error) {
                        console.log(error)
                        
                        // hide loading
                        this.loading = false;
                        this.$toast.error(error.response.data.message).goAway(2000);
                    }
                }
            }
            else{
                if(validated && this.emailAvailable.message === "Available") {
                    try {   
                        // show loading
                        this.loading = true; 

                        // register incorp
                        const userIncorp = await this.$incorp.register({
                            name: this.form.name,
                            email: this.form.email
                        });
                        this.$store.commit("incorp/saveUserIncorp", userIncorp.data);

                        // login
                        await this.$auth.loginWith('password', {
                            data: {
                                username: userIncorp.data.email,
                                password: userIncorp.data.password
                            }
                        });
                        
                        // save prematrix
                        const dataPrematrix = await this.$incorp.savePrematrix({
                            nama_perseroan: "PT " + this.form.nama_perseroan,
                            alamat: (this.addressVO) ? this.addressVO : this.form.alamat,
                            status_kantor: (this.useVO) ? "Virtual Office" : "",
                            // vo_city: (this.cityVO) ? this.cityVO : "",
                            // vo_id: (this.brandVO) ? this.brandVO : "",
                            // vo_branch: (this.branchVO) ? this.branchVO : "",
                            // vo_package: (this.packageVO) ? this.packageVO : "",
                        });
                        this.$store.commit("incorp/saveDataPrematrix", dataPrematrix.data);

                        this.$router.replace('/request-order');
                    } catch (error) {
                        console.log(error)

                        // hide loading
                        this.loading = false;
                        this.$toast.error(error).goAway(3000);
                    }
                }
            }
            
        },
        openDomisili(){
            this.useDomisli = !this.useDomisli;
            this.choiceDomisili = !this.choiceDomisili;
            this.filledDomisili = false;
        },
        closeDomisili(){
            this.useDomisli = !this.useDomisli;
            this.choiceDomisili = !this.choiceDomisili;
        },
        openVO(){
            this.useVO = !this.useVO;
            this.choiceDomisili = !this.choiceDomisili;
            this.filledDomisili = false;
        },
        closeVO(){
            this.choiceDomisili = true;
            this.useVO = false;
            this.openBrand = false;
            this.openBranch = false;
            this.cityVO = "";
            this.brandVO = "";
            this.branchVO = "";
            this.packageVO = "";
        },
        async pickCity(params){
            try{
                // nullify
                this.loadingCity = true;
                this.openBranch = false;
                this.brandVO = "";
                this.branchVO = "";
                this.packageVO = "";

                let tempVoCity = await this.$incorp.pickCity(params);
                this.dataCity = tempVoCity;

                this.openBrand = true;
                this.loadingCity = false;
            } catch(error) {
                this.$toast.error(error.response.data.message).goAway(3000);
            }
        },
        async pickBrand(){
            try{
                this.loadingBrand = true;
                this.openBranch = true;
                this.loadingBrand = false;
            } catch(error) {
                this.$toast.error(error.response.data.message).goAway(3000);
            }
        },
        async getAddressBranch(params){
            try{
                let tempVoBranch = await this.$incorp.pickBranch(params);
                this.addressVO = tempVoBranch.data.address;
            } catch(error) {
                this.$toast.error(error.response.data.message).goAway(3000);
            }
        }
    },
}
</script>

