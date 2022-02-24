<template>
    <div>
        <div class="dashboard-wrap">
            <b-container>
                <form action="">
                    <b-row>
                        <b-col md="12">
                            <b-alert show variant="warning" class="alert-dashboard" v-if="!dataVerified.verified">{{ $t('alertEmail') }} <b-link class="d-none"><b>{{ $t('alertEmailLink') }}</b></b-link></b-alert>

                            <h3 class="dashboard-title">{{ $t('editProfile') }}</h3>
                        </b-col>
                        <b-col md="12">
                            <b-tabs v-model="tabIndex" content-class="px-4 py-4">
                                <b-tab active ref="personalization" :title-item-class="[{'is-error': this.personError === true}]" @click="checkErrorPerson">
                                    <template v-slot:title>
                                        <span class="step-num">1</span>
                                        <span class="text">{{ $t('personal') }}</span>
                                    </template>
                                    <b-row>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('name')"
                                                label-for="input-nama"
                                            >
                                                <b-form-input
                                                id="input-nama"
                                                v-model="profile.nama"
                                                @change="checkErrorPerson"
                                                type="text"
                                                name="nama"
                                                v-validate="'required'"
                                                :class="{'is-invalid': errors.has('nama')}"
                                                placeholder="John Doe"
                                                ></b-form-input>
                                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('nama') : '' }}</span>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('birthPlace')"
                                                label-for="input-tempat-lahir"
                                            >
                                                <b-form-input
                                                id="input-tempat-lahir"
                                                v-model="profile.tempat_lahir"
                                                @change="checkErrorPerson"
                                                type="text"
                                                placeholder="Bandung"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('birthDate')"
                                                label-for="input-tanggal-lahir"
                                            >
                                            <no-ssr>
                                                <date-picker
                                                class="plain"
                                                v-model="profile.tanggal_lahir"
                                                @change="checkErrorPerson"
                                                format="DD/MM/YYYY" 
                                                value-type="format"  
                                                placeholder="DD/MM/YYYY"
                                                :not-after="new Date()" 
                                                :not-before="new Date('1950-01-01T00:00:00')" 
                                                lang="en"></date-picker>
                                            </no-ssr>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('bloodType')"
                                                label-for="input-golongan-darah"
                                            >
                                                <b-form-select 
                                                id="input-golongan-darah"
                                                v-model="profile.golongan_darah" 
                                                @change="checkErrorPerson"
                                                class="form-control"
                                                :options="opt_golongan_darah"></b-form-select>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('religion')"
                                                label-for="input-agama"
                                            >
                                                <b-form-select 
                                                id="input-agama"
                                                v-model="profile.agama" 
                                                @change="checkErrorPerson"
                                                class="form-control"
                                                :options="opt_agama"></b-form-select>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('maritalStatus')"
                                                label-for="input-status-perkawinan"
                                            >
                                                <b-form-select 
                                                id="input-status-perkawinan"
                                                v-model="profile.status_perkawinan" 
                                                @change="checkErrorPerson"
                                                class="form-control"
                                                :options="opt_status_perkawinan"></b-form-select>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('profession')"
                                                label-for="input-pekerjaan"
                                            >
                                                <b-form-input
                                                id="input-pekerjaan"
                                                v-model="profile.pekerjaan"
                                                @change="checkErrorPerson"
                                                type="text"
                                                placeholder=""
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('citizenship')"
                                                label-for="input-kewarganegaraan"
                                            >
                                                <b-form-radio v-model="profile.kewarganegaraan" value="WNI">{{$t('indonesian')}}</b-form-radio>
                                                <b-form-radio v-model="profile.kewarganegaraan" value="WNA">{{$t('foreign')}}</b-form-radio>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('address')"
                                                label-for="input-alamat"
                                            >
                                                <b-form-input
                                                id="input-alamat"
                                                v-model="profile.alamat"
                                                @change="checkErrorPerson"
                                                type="text"
                                                placeholder="Jalan Bahureksa No 196"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('postalCode')"
                                                label-for="input-kode-pos"
                                            >
                                                <b-form-input
                                                id="input-kode-pos"
                                                v-model="profile.kodepos"
                                                type="number"
                                                placeholder="40162"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('province')"
                                                label-for="input-province"
                                            >
                                                <b-form-select 
                                                id="input-province"
                                                v-model="profile.province_id" 
                                                @change="cityPerson"
                                                class="form-control">
                                                    <option :value="province.id" v-for="province in opt_province" :key="province.id">
                                                        {{ province.name }}
                                                    </option>
                                                </b-form-select>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('city')"
                                                label-for="input-city"
                                                class="load-data"
                                            >
                                                <b-form-select 
                                                id="input-city"
                                                v-model="profile.city_id" 
                                                class="form-control"
                                                @change="districtPerson"
                                                :disabled="loadCity">
                                                    <option :value="city.id" v-for="city in opt_city" :key="city.id">
                                                        {{ city.name }}
                                                    </option>
                                                </b-form-select>
                                                
                                                <div class="loader text-center" v-show="loadCity">
                                                    <b-spinner label="Small Spinner"></b-spinner>
                                                </div>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('district')"
                                                label-for="input-district"
                                                class="load-data"
                                            >
                                                <b-form-select 
                                                id="input-disctrict"
                                                v-model="profile.district_id" 
                                                class="form-control"
                                                @change="villagePerson"
                                                :disabled="loadDistrict">
                                                    <option :value="district.id" v-for="district in opt_district" :key="district.id">
                                                        {{ district.name }}
                                                    </option>
                                                </b-form-select>
                                                
                                                <div class="loader text-center" v-show="loadDistrict">
                                                    <b-spinner label="Small Spinner"></b-spinner>
                                                </div>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('subdistrict')"
                                                label-for="input-village"
                                                class="load-data"
                                            >
                                                <b-form-select 
                                                id="input-village"
                                                v-model="profile.village_id" 
                                                @change="checkErrorPerson"
                                                :disabled="loadVillage"
                                                class="form-control">
                                                    <option :value="village.id" v-for="village in opt_village" :key="village.id">
                                                        {{ village.name }}
                                                    </option>
                                                </b-form-select>

                                                <div class="loader text-center" v-show="loadVillage">
                                                    <b-spinner label="Small Spinner"></b-spinner>
                                                </div>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('gender')"
                                                label-for="input-jenis-kelamin"
                                            >
                                                <b-form-radio v-model="profile.jenis_kelamin" value="L">{{$t('man')}}</b-form-radio>
                                                <b-form-radio v-model="profile.jenis_kelamin" value="P">{{$t('woman')}}</b-form-radio>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                    
                                    <b-button variant="secondary" class="w-25 float-right" @click="tabIndex++">{{ $t('nextTabs') }} <i class="fa fa-angle-right ml-1"></i></b-button>
                                    <div class="clearfix"></div>
                                </b-tab>
                                <b-tab ref="indentification" :title-item-class="[{'is-error': this.indentError === true}]" @click="checkErrorIndent">
                                    <template v-slot:title>
                                        <span class="step-num">2</span>
                                        <span class="text">{{ $t('indentification') }}</span>
                                    </template>
                                    <b-row>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('ktpMain')"
                                                label-for="input-nik"
                                            >
                                                <b-form-input
                                                id="input-nik"
                                                v-model="profile.nik"
                                                @change="checkErrorIndent"
                                                type="number"
                                                name="nik"
                                                v-validate="'numeric'"
                                                :class="{'is-invalid': errors.has('nik')}"
                                                placeholder="3506230505650004"
                                                ></b-form-input>
                                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('nik') : '' }}</span>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('taxNumber')"
                                                label-for="input-npwp"
                                            >
                                                <b-form-input
                                                id="input-npwp"
                                                v-model="profile.npwp"
                                                @change="checkErrorIndent"
                                                type="text"
                                                name="npwp"
                                                placeholder="09.254.294.3-407.000"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('phoneNumber')"
                                                label-for="input-telp"
                                            >
                                                <b-form-input
                                                id="input-telp"
                                                v-model="profile.no_telp"
                                                @change="checkErrorIndent"
                                                type="number"
                                                name="Phone Number"
                                                v-validate="'numeric'"
                                                :class="{'is-invalid': errors.has('Phone Number')}"
                                                placeholder="089911233451"
                                                ></b-form-input>
                                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('Phone Number') : '' }}</span>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('passportNumber')"
                                                label-for="input-passport"
                                            >
                                                <b-form-input
                                                id="input-passport"
                                                v-model="profile.no_passport"
                                                @change="checkErrorIndent"
                                                type="text"
                                                placeholder="A 9601796"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                label="Email"
                                                label-for="input-email"
                                            >
                                                <b-form-input
                                                id="input-email"
                                                v-model="profile.email"
                                                @change="checkErrorIndent"
                                                type="email"
                                                name="email"
                                                v-validate="'required|email'"
                                                :class="{'is-invalid': errors.has('email')}"
                                                placeholder="johndoe@gmail.com"
                                                ></b-form-input>
                                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('fotoKTP')"
                                                label-for="input-foto-ktp"
                                            >
                                                <b-form-file
                                                v-model="foto_ktp"
                                                placeholder="foto-ktp.png"
                                                class="plain"
                                                ></b-form-file>
                                                <a :href="this.profile.foto_ktp" class="view-image" target="_blank" v-if="this.profile.foto_ktp">{{$t('viewImage')}}</a>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('fotoKK')"
                                                label-for="input-foto-kk"
                                            >
                                                <b-form-file
                                                v-model="foto_kk"
                                                placeholder="foto-kk.png"
                                                class="plain"
                                                ></b-form-file>
                                                <a :href="this.profile.foto_kk" class="view-image" target="_blank" v-if="this.profile.foto_kk">{{$t('viewImage')}}</a>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('fotoNPWP')"
                                                label-for="input-foto-npwp"
                                            >
                                                <b-form-file
                                                v-model="foto_npwp"
                                                placeholder="foto-npwp.png"
                                                class="plain"
                                                ></b-form-file>
                                                <a :href="this.profile.foto_npwp" class="view-image" target="_blank" v-if="this.profile.foto_npwp">{{$t('viewImage')}}</a>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <b-button variant="primary" class="w-25 float-left" @click="tabIndex--"><i class="fa fa-angle-left mr-1"></i> {{ $t('prevTabs') }}</b-button>
                            
                                    <button class="btn btn-secondary w-25 float-right" @click.prevent="onSubmit">Save</button>
                                    <b-spinner class="float-right" style="width: 3rem; height: 3rem; margin-right: 15px;" label="Large Spinner" v-show="loading"></b-spinner>
                                    <div class="clearfix"></div>
                                </b-tab>
                            </b-tabs>
                        </b-col>
                    </b-row>
                </form>
            </b-container>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
import moment from 'moment';

export default {
    layout: "dashboard",
    middleware: 'auth',
    computed: {
        ...mapGetters(["isAuthenticated", "loggedInUser"])
    },
    async asyncData({ app }){
        let verification = await app.$matrix.getVerification();

        return { dataVerified: verification.data }
    },
    data(){
        return {
            profile: {
                nik:  0,
                npwp:  "",
                nama: "",
                tempat_lahir: "",
                tanggal_lahir: "",
                golongan_darah: "",
                agama: "",
                status_perkawinan: "",
                pekerjaan: "",
                kewarganegaraan: "",
                alamat: "",
                kodepos: "",
                village_id: null,
                district_id: null,
                city_id: null,
                province_id: null,
                jenis_kelamin: null,
                no_telp: "",
                email: "",
                no_passport: "",
                foto_ktp: "",
                foto_kk: "",
                foto_npwp: "",
            },
            foto_ktp: "",
            foto_kk: "",
            foto_npwp: "",
            loading: false,
            loadCity: true,
            loadDistrict: true,
            loadVillage: true,
            tabIndex: 1,
            opt_golongan_darah: ['A', 'B', 'AB', 'O', 'None'],
            opt_agama: ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Budha', 'None'],
            opt_status_perkawinan: [ { value: 'KAWIN', text: 'Kawin'} , { value: 'BELUM KAWIN', text: 'Belum Kawin'}, { value: 'BERCERAI', text: 'Bercerai'} ],
            opt_province: [],
            opt_city: [],
            opt_district: [],
            opt_village: [],
            personError: false,
            indentError: false,
            dataVerified: null,
        }
    },
    mounted() {
        this.$nextTick(function() {
            let tempProfile = this.$auth.user.data;
            delete tempProfile['detail'];
            this.profile = tempProfile;
        });
    },
    watch: {
        'profile.province_id': function(oldProvinceID, newProvinceID){
            this.debouncedGetProvince();
            this.loadCity = true;
        },
        'profile.city_id': function(oldCityID, newCityID){
            this.debouncedGetCity();
            this.loadDistrict = true;
        },
        'profile.district_id': function(oldDisctrictID, newDisctrictID){
            this.debouncedGetDisctrict();
            this.loadVillage = true;
        },
        'profile.village_id': function(oldVillageID, newVillageID){
            this.debouncedGetVillage();
        },
    },
    created(){    
        this.debouncedGetProvince = _.debounce(this.getProvince, 100)
        this.debouncedGetCity = _.debounce(this.getCity, 100)
        this.debouncedGetDisctrict = _.debounce(this.getDisctrict, 100)
        this.debouncedGetVillage = _.debounce(this.getVillage, 100)
    },
    methods: {
        async getProvince(){
            const province = await this.$profile.getProvince();
            this.opt_province = province.data;
            this.loadCity = false;
        },
        async getCity(){
            const city = await this.$profile.getCity(this.profile.province_id);
            this.opt_city = city.data.detail;
            this.loadDistrict = false;
        },
        async getDisctrict(){
            const disctrict = await this.$profile.getDisctrict(this.profile.city_id);
            this.opt_district = disctrict.data.detail;
            this.loadVillage = false;
        },
        async getVillage(){
            const village = await this.$profile.getVillage(this.profile.district_id);
            this.opt_village = village.data.detail;
        },
        async onSubmit(){
            const validated = await this.$validator.validateAll();
            this.checkErrorPerson();
            this.checkErrorIndent();

            if(validated) {
                try {
                    //Form data KTP
                    var dataKTP = new FormData();
                    dataKTP.append('mode', 'client');
                    dataKTP.append('image', this.foto_ktp);
                    dataKTP.append('type', 'KTP');
                    // dataKTP.append('id', this.$auth.user.data.id);

                    //Form data NPWP
                    var dataNPWP = new FormData();
                    dataNPWP.append('mode', 'client');
                    dataNPWP.append('image', this.foto_npwp);
                    dataNPWP.append('type', 'NPWP');
                    // dataNPWP.append('id', this.$auth.user.data.id);

                    //Form data KK
                    var dataKK = new FormData();
                    dataKK.append('mode', 'client');
                    dataKK.append('image', this.foto_kk);
                    dataKK.append('type', 'KK');
                    // dataKK.append('id', this.$auth.user.data.id);

                    (this.foto_ktp) ? await this.$matrix.uploadGambar(dataKTP) : "";
                    (this.foto_npwp) ? await this.$matrix.uploadGambar(dataNPWP) : "";
                    (this.foto_kk) ? await this.$matrix.uploadGambar(dataKK) : "";
                    
                    await this.$profile.saveProfile(this.profile);
                    this.$toast.success("Your Data has been Saved!").goAway(2000);
        
                    setTimeout(this.$router.push(this.localePath('dashboard')), 2000);
                } catch (error) {
                    console.log(error)
                    this.loading = false;
                    this.$toast.error(error.response.data.message).goAway(2000);
                }
            }
        },
        checkErrorIndent(){
            let tabEl = this.$refs.indentification;
            let inputEl = tabEl.$el.querySelectorAll('.form-control');
            let i;
            let indexError = 0;
            for(i = 0; i < inputEl.length; i++){            
                if(inputEl[i].classList.contains('is-invalid')){
                    indexError++
                } 
            }

            (indexError > 0) ? this.indentError = true : this.indentError = false;
        },
        checkErrorPerson(){
            let tabEl = this.$refs.personalization;
            let inputEl = tabEl.$el.querySelectorAll('.form-control');
            let i;
            let indexError = 0;
            for(i = 0; i < inputEl.length; i++){            
                if(inputEl[i].classList.contains('is-invalid')){
                    indexError++
                }
            }

            (indexError > 0) ? this.personError = true : this.personError = false;
        },
        cityPerson(){
            this.checkErrorPerson();
            this.getCity();
        },
        districtPerson(){
            this.checkErrorPerson();
            this.getDisctrict();
        },
        villagePerson(){
            this.checkErrorPerson();
            this.getVillage();
        },
    },

}
</script>