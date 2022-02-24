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

                <h3 class="dashboard-title">{{ $t('domicilePT') }}</h3>

                <b-card class="input-focus">
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
                </b-card>
                
                <b-card class="input-focus">
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
                </b-card>
                
                <b-card class="input-focus">
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
                </b-card>
                
                <b-card class="input-focus">
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
                </b-card>
                
                <b-card class="input-focus">
                    <label>{{ $t('subdistrict') }}</label>
                    
                    <b-form-select 
                    id="input-village"
                    v-model="matrix.village_id" 
                    class="form-control big">
                        <option :value="village.id" v-for="village in opt_village" :key="village.id">
                            {{ village.name }}
                        </option>
                    </b-form-select>
                </b-card>

                <b-card class="input-focus">
                    <label>{{ $t('building') }}</label>

                    <b-form-input v-model="matrix.gedung" type="text" class="big"></b-form-input>
                </b-card>

                <b-card class="input-focus d-none">
                    <label>Maps Latitude</label>

                    <b-form-input v-model="matrix.maps_lat" type="text" class="big" placeholder="-6.21462"></b-form-input>
                </b-card>
                
                <b-card class="input-focus d-none">
                    <label>Maps Longitude</label>

                    <b-form-input v-model="matrix.maps_lng" type="text" class="big" placeholder="106.84513"></b-form-input>
                </b-card>
                
                <b-link :to="localePath({ name: 'dashboard-incorporation-id-business-fields', params: { id: $route.params.id } })" class="btn btn-secondary w-100 big rounded-shadow" :disabled="loading">{{ $t('continue') }}</b-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    layout: 'dashboard-with-sidebar',
    middleware: 'auth',
    loading: false,
    data(){
        return {
            matrix:{
                idmatrix: null,
                alamat: "",
                province_id: null,
                city_id: null,
                district_id: null,
                village_id: null,
                gedung: "",
                maps_lat: "",
                maps_lng: "",
            },
            loading: false,
            opt_province: [],
            opt_city: [],
            opt_district: [],
            opt_village: [],
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
    },
    created(){ 
        this.$nextTick(function() {
            this.getMatrix();
            this.getProvince();
        });   
        this.debouncedGetProvince = _.debounce(this.getProvince, 100);
        this.debouncedGetCity = _.debounce(this.getCity, 100);
        this.debouncedGetDisctrict = _.debounce(this.getDisctrict, 100);
        this.debouncedGetVillage = _.debounce(this.getVillage, 100);
        this.debouncedSaveMatrix = _.debounce(this.saveMatrix, 2500)
    },
    methods: {
        async getMatrix() {
            let dataMatrix = await this.$matrix.getDetailMatrix(this.$route.params.id);
            return this.matrix = dataMatrix.data;
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
            await this.$matrix.saveMatrix(this.matrix);
            this.loading = false;
            this.$store.commit("incorp/updateMatrix", false);
        },
    }
}
</script>

