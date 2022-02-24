<template>
    <div>
        <b-row>
            <b-col md="8" lg="6" offset-md="2" offset-lg="3">
                <div class="loader-wrap" v-if="loading">
                    <span>{{ $t('updating') }}</span>
                    <b-spinner small  type="grow" label="Spinning"></b-spinner>
                </div>
                <div class="loader-wrap" v-else>
                    <span class="d-none d-lg-inline-block">{{ $t('changeSaved') }}</span>
                    <span class="d-inline-block d-lg-none">{{ $t('changeSavedMini') }}</span>
                </div>


                <div class="video-wrap">
                    <b-button :class="!showVideo ? 'collapsed' : null" :aria-expanded="showVideo ? 'true' : 'false'" @click="toggleVideo()">Video Tutorial Pembuatan Perseroan Terbatas</b-button>
                    <b-collapse id="collapse-video" class="video-contain" v-model="showVideo">
                        <div class="contain">
                            <vue-plyr ref="plyr">
                                <div data-plyr-provider="youtube" data-plyr-embed-id="lRIAHYWgwZ0"></div>
                            </vue-plyr>
                        </div>
                    </b-collapse>
                </div>

                <h3 class="dashboard-title">{{ $t('companyDetail') }}</h3>
                
                <b-card class="input-focus">
                    
                    <template>
                        <label class="mt-0">{{ $t('companyName') }}</label>
                        
                        <div class="help-text">
                            <p v-html="$t('companyNameHelpText')">
                            </p>
                        </div>

                        <b-form-input
                        v-model="matrix.nama_perseroan"
                        type="text"
                        name="company_name"
                        data-vv-name="company name"
                        v-validate="{required: true, regex: /([a-zA-Z]+\s?\b){4,}/, alpha_spaces: true }"
                        :class="[{'is-invalid': errors.has('company name')}, 'big']"
                        placeholder="PT Integrasi Pasokan Logistik"
                        autofocus
                        ref="inputCompanyName"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('company name') : '' }}</span>
                    </template>

                    
                    <template>
                        <label>{{ $t('companyNameAlt') }}</label>
                        
                        <div class="help-text">
                            <p v-html="$t('companyNameHelpText')">
                            </p>
                        </div>
                        
                        <b-form-input
                        v-model="matrix.alternatif_nama[0]"
                        type="text"
                        name="alternatif_nama"
                        data-vv-name="alternative name one"
                        v-validate="{required: true, regex: /([a-zA-Z]+\s?\b){4,}/, alpha_spaces: true }"
                        :class="[{'is-invalid': errors.has('alternative name one')}, 'big']"
                        placeholder="PT Glubelle Kreatif Indonesia"
                        autofocus
                        ref="inputCompanyName"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('alternative name one') : '' }}</span>

                        <b-form-input
                        v-model="matrix.alternatif_nama[1]"
                        type="text"
                        name="alternatif_nama2"
                        data-vv-name="alternative name two"
                        v-validate="{required: true, regex: /([a-zA-Z]+\s?\b){4,}/, alpha_spaces: true }"
                        :class="[{'is-invalid': errors.has('alternative name two')}, 'big']"
                        placeholder="PT Glubelle Berkarya Kreatif"
                        autofocus
                        ref="inputCompanyName"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('alternative name two') : '' }}</span>

                        <b-form-input
                        v-model="matrix.alternatif_nama[2]"
                        type="text"
                        name="alternatif_nama3"
                        data-vv-name="alternative name three"
                        v-validate="{required: true, regex: /([a-zA-Z]+\s?\b){4,}/, alpha_spaces: true }"
                        :class="[{'is-invalid': errors.has('alternative name three')}, 'big']"
                        placeholder="PT Ide Kreatif Glubelle"
                        autofocus
                        ref="inputCompanyName"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('alternative name three') : '' }}</span>
                    </template>

                    <template>
                        <label>{{ $t('kbli') }}</label>

                        <div class="help-text">
                            <p>
                                {{ $t('kbliHelpText') }}
                            </p>
                        </div>
                        <b-link :to="localePath('kbli')" class="link-citiplan mt-3 w-100" target="_blank">{{ $t('kbliLink') }} <i class="fa fa-external-link"></i></b-link>
                        <v-select multiple v-model="matrix.kbli" :options="optKbli" :reduce="optKbli => optKbli.id" label="codetitle" />
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('business classications') : '' }}</span>
                    </template>

                    <template>                        
                        <b-form-checkbox
                        id="checkbox-vo"
                        v-model="matrix.status_kantor"
                        v-validate="'required'"
                        value="Virtual Office"
                        unchecked-value="0"
                        switch>
                            {{ $t('prematrixLabel3') }}
                        </b-form-checkbox>
                    </template>

                    <template v-if="matrix.status_kantor === '0'">
                        <template>
                            <label>{{ $t('address') }}</label>

                            <div class="help-text">
                                <p v-html="$t('addressHelpText')">
                                </p>
                            </div>

                            <input
                            class="form-control big"
                            :value="matrix.alamat"
                            @input="matrix.alamat = $event.target.value"
                            ref="autocomplete"
                            type="text"
                            name="office address"
                            :class="[{'is-invalid': errors.has('office address')}, 'big']"
                            :placeholder="$t('addressPlaceholder')"
                            id="searchLocation" />
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('office address') : '' }}</span>
                        </template>

                        <template>
                            <label>{{ $t('province') }}</label>
                            
                            <b-form-select 
                            id="input-province"
                            v-model="matrix.province_id" 
                            @change="getCity"
                            class="form-control big">
                                <option :value="province.id" v-for="province in opt_province" :key="province.id">
                                    {{ province.name }}
                                </option>
                            </b-form-select>
                        </template>

                        <template>    
                            <label>{{ $t('city') }}</label>
                            
                            <b-form-select 
                            id="input-city"
                            v-model="matrix.city_id" 
                            class="form-control big"
                            @change="getDisctrict">
                                <option :value="city.id" v-for="city in opt_city" :key="city.id">
                                    {{ city.name }}
                                </option>
                            </b-form-select>
                        </template>

                        <template>
                            <label>{{ $t('district') }}</label>
                            
                            <b-form-select 
                            id="input-disctrict"
                            v-model="matrix.district_id" 
                            class="form-control big"
                            @change="getVillage">
                                <option :value="district.id" v-for="district in opt_district" :key="district.id">
                                    {{ district.name }}
                                </option>
                            </b-form-select>
                        </template>

                        <template>
                            <label>{{ $t('subdistrict') }}</label>
                            
                            <b-form-select 
                            id="input-village"
                            v-model="matrix.village_id" 
                            class="form-control big">
                                <option :value="village.id" v-for="village in opt_village" :key="village.id">
                                    {{ village.name }}
                                </option>
                            </b-form-select>
                        </template>

                        <template>
                            <label>{{ $t('building') }}</label>

                            <b-form-input v-model="matrix.gedung" type="text" class="big"></b-form-input>
                        </template>
                    </template>

                    <template v-else>
                        <label>Virtual Office</label>
                        
                        <div class="vo-info">
                            <h5>
                                Untuk alamat anda memakai Virtual Office
                            </h5>
                            <h5>
                                Nama Virtual Office : <b>{{ dataVO.office.virtual_office }}</b> 
                            </h5>
                            <h5>
                                Branch : <b>{{ dataVO.branch_name }}</b> 
                            </h5>
                            <h5>
                                Alamat : <b>{{ dataVO.address }}</b>
                            </h5>
                        </div>
                        
                    </template>
                    
                </b-card>

                <b-link :to="localePath({ name: 'dashboard-incorporation-id-business-fields', params: { id: $route.params.id } })" class="btn btn-secondary w-100 rounded-shadow big" :disabled="loading">{{ $t('continue') }}</b-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import _ from "lodash";
import Multiselect from 'vue-multiselect'

export default {
    layout: 'dashboard-with-sidebar',
    middleware: 'auth',
    loading: false,
    components: {
        Multiselect
    },
    asyncData(){
        return {
            matrix: {
                idmatrix: null,
                nama_perseroan: "",
                alternatif_nama: ['','',''],
                kbli: [],
                alamat: "",
                province_id: null,
                city_id: null,
                district_id: null,
                village_id: null,
                gedung: "",
                maps_lat: "",
                maps_lng: "",
                status_kantor: "0",
            },
            loading: false,
            optKbli: [],
            showVideo: true,
            opt_province: [],
            opt_city: [],
            opt_district: [],
            opt_village: [],
            dataVO: null,
        }
    },
    mounted(){
        this.matrix.idmatrix = this.$route.params.id;

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

            this.matrix.alamat = place.formatted_address;
            // this.form.lat = lat;
            // this.form.lng = lng;
        });
    },
    watch: {
        'matrix.nama_perseroan': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.alternatif_nama': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.kbli': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.alamat': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.province_id': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
            this.debouncedGetProvince();
        },
        'matrix.city_id': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
            this.debouncedGetCity();
        },
        'matrix.district_id': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
            this.debouncedGetDisctrict();
        },
        'matrix.village_id': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
            this.debouncedGetVillage();
        },
        'matrix.gedung': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.maps_lat': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.maps_lng': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.status_kantor': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.saveMatrix();
            this.getMatrix();
        },
    },
    created(){
        this.$nextTick(function() {
            this.getMatrix();
            this.getKbli();
            this.getProvince();
        });
        this.debouncedGetProvince = _.debounce(this.getProvince, 100);
        this.debouncedGetCity = _.debounce(this.getCity, 100);
        this.debouncedGetDisctrict = _.debounce(this.getDisctrict, 100);
        this.debouncedGetVillage = _.debounce(this.getVillage, 100);
        this.debouncedSaveMatrix = _.debounce(this.saveMatrix, 2500);

        const dict = {
            custom: {
                company_name: {
                    regex: 'Company name must consist of 3 Words with "PT" in first, No Number and Required'
                }
            }
        };

        this.$validator.localize('en', dict);
        this.showVideo = this.$store.state.incorp.showVideo;
    },
    methods: {
        async getMatrix() {
            let dataMatrix = await this.$matrix.getDetailMatrix(this.$route.params.id);
            
            // if(dataMatrix.data.status_kantor === "Virtual Office"){
            //     let tempVO = await this.$matrix.getDetailVO(dataMatrix.data.vo_id);
            //     this.dataVO = tempVO.data;
            // } else {
            //     this.dataVO = null;
            // }
            
            // VO
            let tempVO = await this.$matrix.getDetailVO(1);
            this.dataVO = tempVO.data;

            if(dataMatrix.data.alternatif_nama == null)
            {
                dataMatrix.data.alternatif_nama = ['','','']
            }
            this.matrix = dataMatrix.data;
            
        },
        async getKbli() {
            let dataKbli = await this.$matrix.getKbli();
            var reformattedArray = dataKbli.data.map(obj =>{ 
                obj["codetitle"] = obj.code + " - " + obj.title;
                return obj;
            });
            return this.optKbli = reformattedArray;
        },
        async getProvince(){
            const province = await this.$profile.getProvince();
            this.opt_province = province.data;
        },
        async getCity(){
            const city = await this.$profile.getCity(this.matrix.province_id);
            this.opt_city = city.data.detail;
        },
        async getDisctrict(){
            const disctrict = await this.$profile.getDisctrict(this.matrix.city_id);
            this.opt_district = disctrict.data.detail;
        },
        async getVillage(){
            const village = await this.$profile.getVillage(this.matrix.district_id);
            this.opt_village = village.data.detail;
        },
        async saveMatrix() {
            if(this.matrix.vo_id === '0' && this.matrix.vo_id === null){
                this.$delete(this.matrix, 'vo_id');
            }
            if(this.matrix.vo_branch === '0' && this.matrix.vo_branch === null){
                this.$delete(this.matrix, 'vo_branch');
            }
            await this.$matrix.saveMatrix(this.matrix);
            this.loading = false;
            this.$store.commit("incorp/updateMatrix", false);
        },
        toggleVideo(){            
            this.showVideo = !this.showVideo;
            if(this.showVideo === false){
                this.$refs.plyr.player.stop();
            }
            this.$store.commit("incorp/updateShowVideo", this.showVideo);
        }
    }
}
</script>

