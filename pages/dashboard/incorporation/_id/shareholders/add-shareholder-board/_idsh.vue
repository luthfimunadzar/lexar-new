<template>
    <div>
        <div class="dashboard-wrap">
            <b-container>
                <form action="">
                    <b-row>
                        <b-col md="12">
                            <h3 class="dashboard-title">Add Shareholder Board</h3>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Number of Shares"
                                label-for="input-nos"
                            >
                                <b-form-input
                                id="input-nos"
                                v-model="profile.jumlah_saham"
                                type="number"
                                name="jumlah saham"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('jumlah saham')}"
                                placeholder="1000 Shares"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('jumlah saham') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Shares Type"
                                label-for="input-st"
                            >
                                <b-form-input
                                id="input-st"
                                v-model="profile.type_saham"
                                type="text"
                                name="shares type"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('shares type')}"
                                placeholder="Series A"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('shares type') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Deed Title"
                                label-for="input-ja"
                            >
                                <b-form-input
                                id="input-ja"
                                v-model="profile.judul_akta"
                                type="text"
                                name="deed title"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('deed title')}"
                                placeholder="Akta Pendirian"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('deed title') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Deed Number"
                                label-for="input-na"
                            >
                                <b-form-input
                                id="input-na"
                                v-model="profile.no_akta"
                                type="text"
                                name="deed number"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('deed number')}"
                                placeholder="0123456789"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('deed number') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Tanggal Akta"
                                label-for="input-akta"
                            >
                            <no-ssr>
                                <date-picker
                                class="plain"
                                v-model="profile.tanggal_akta"
                                format="DD/MM/YYYY" 
                                value-type="format"  
                                placeholder="DD/MM/YYYY"
                                name="deed date"
                                v-validate="'required'"
                                :not-after="new Date()" 
                                :not-before="new Date('1950-01-01T00:00:00')" 
                                :class="{'is-invalid': errors.has('deed date')}"
                                lang="en"></date-picker>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('deed date') : '' }}</span>
                            </no-ssr>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Notary Name"
                                label-for="input-na"
                            >
                                <b-form-input
                                id="input-na"
                                v-model="profile.nama_notaris"
                                type="text"
                                name="notary name"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('notary name')}"
                                placeholder="John Doe"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('notary name') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Notary Domicile"
                                label-for="input-na"
                            >
                                <b-form-input
                                id="input-na"
                                v-model="profile.domisili_notaris"
                                type="text"
                                name="notary domicile"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('notary domicile')}"
                                placeholder="Jakarta"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('notary domicile') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Tax ID Number"
                                label-for="input-npwp"
                            >
                                <b-form-input
                                id="input-npwp"
                                v-model="profile.npwp"
                                type="text"
                                name="npwp"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('npwp')}"
                                placeholder="09.254.294.3-407.000"></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('npwp') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Name"
                                label-for="input-nama"
                            >
                                <b-form-input
                                id="input-nama"
                                v-model="profile.nama"
                                type="text"
                                name="name"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('name')}"
                                placeholder="John Doe"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Address"
                                label-for="input-alamat"
                            >
                                <b-form-input
                                id="input-alamat"
                                v-model="profile.alamat"
                                type="text"
                                name="Address"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('Address')}"
                                placeholder="Jalan Bahureksa No 196"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('Address') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Postal Code"
                                label-for="input-kode-pos"
                            >
                                <b-form-input
                                id="input-kode-pos"
                                v-model="profile.kodepos"
                                type="number"
                                placeholder="40162"
                                name="Postal Code"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('Address')}"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('Postal Code') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Province"
                                label-for="input-province"
                            >
                                <b-form-select 
                                id="input-province"
                                v-model="profile.province_id" 
                                @change="getCity"
                                name="province"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('province')}"
                                class="form-control">
                                    <option :value="province.id" v-for="province in opt_province" :key="province.id">
                                        {{ province.name }}
                                    </option>
                                </b-form-select>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('province') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="City"
                                label-for="input-city"
                                class="load-data"
                            >
                                <b-form-select 
                                id="input-city"
                                v-model="profile.city_id" 
                                class="form-control"
                                @change="getDisctrict"
                                name="city"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('city')}"
                                :disabled="loadCity">
                                    <option :value="city.id" v-for="city in opt_city" :key="city.id">
                                        {{ city.name }}
                                    </option>
                                </b-form-select>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('city') : '' }}</span>
                                
                                <div class="loader text-center" v-show="loadCity">
                                    <b-spinner label="Small Spinner"></b-spinner>
                                </div>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="District"
                                label-for="input-district"
                                class="load-data"
                            >
                                <b-form-select 
                                id="input-disctrict"
                                v-model="profile.district_id" 
                                class="form-control"
                                @change="getVillage"
                                name="district"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('district')}"
                                :disabled="loadDistrict">
                                    <option :value="district.id" v-for="district in opt_district" :key="district.id">
                                        {{ district.name }}
                                    </option>
                                </b-form-select>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('district') : '' }}</span>
                                
                                <div class="loader text-center" v-show="loadDistrict">
                                    <b-spinner label="Small Spinner"></b-spinner>
                                </div>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Village"
                                label-for="input-village"
                                class="load-data"
                            >
                                <b-form-select 
                                id="input-village"
                                v-model="profile.village_id" 
                                name="village"
                                v-validate="'required'"
                                :class="{'is-invalid': errors.has('village')}"
                                :disabled="loadVillage"
                                class="form-control">
                                    <option :value="village.id" v-for="village in opt_village" :key="village.id">
                                        {{ village.name }}
                                    </option>
                                </b-form-select>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('village') : '' }}</span>

                                <div class="loader text-center" v-show="loadVillage">
                                    <b-spinner label="Small Spinner"></b-spinner>
                                </div>
                            </b-form-group>
                        </b-col>
                        <b-col md="4">
                            <b-form-group
                                label="Phone Number"
                                label-for="input-telp"
                            >
                                <b-form-input
                                id="input-telp"
                                v-model="profile.no_telp"
                                type="number"
                                name="Phone Number"
                                v-validate="'numeric|required'"
                                :class="{'is-invalid': errors.has('Phone Number')}"
                                placeholder="089911233451"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('Phone Number') : '' }}</span>
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
                                type="email"
                                name="email"
                                v-validate="'required|email'"
                                :class="{'is-invalid': errors.has('email')}"
                                placeholder="johndoe@gmail.com"
                                ></b-form-input>
                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                            </b-form-group>
                        </b-col>
                        <b-col md="12" class="mb-5 text-center">
                            <button class="btn btn-secondary w-50 mr-2" @click.prevent="onSubmit" :disabled="loading">Save</button>
                            <b-link :to="localePath({ name: 'dashboard-incorporation-id-shareholders', params: { id: this.$route.params.id } })" class="btn btn-primary w-25">Back</b-link>
                            <div class="clearfix mt-3 text-center" v-show="loading">
                                <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
                            </div>
                        </b-col>
                    </b-row>
                </form>
            </b-container>
        </div>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    layout: "dashboard",
    middleware: 'auth',
    data(){
        return {
            profile: {
                matrix_idmatrix: null,
                judul_akta: "",
                nama_notaris: "",
                domisili_notaris: "",
                no_akta: "",
                jumlah_saham:  null,
                type_saham: "",
                npwp:  "",
                nama: "",
                alamat: "",
                kodepos: "",
                village_id: null,
                district_id: null,
                city_id: null,
                province_id: null,
                no_telp: "",
                email: "",
            },
            loading: false,
            loadCity: true,
            loadDistrict: true,
            loadVillage: true,
            opt_golongan_darah: ['A', 'B', 'AB', 'O', 'None'],
            opt_agama: ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Budha', 'None'],
            opt_status_perkawinan: [ { value: 'KAWIN', text: 'Kawin'} , { value: 'BELUM KAWIN', text: 'Belum Kawin'}, { value: 'BERCERAI', text: 'Bercerai'} ],
            opt_province: [],
            opt_city: [],
            opt_district: [],
            opt_village: [],
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.getProvince();
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
        if(this.$route.params.idsh){
            this.getShareholderBadanDetail();
        }
        this.profile.matrix_idmatrix = this.$route.params.id;
        this.debouncedGetProvince = _.debounce(this.getProvince, 100)
        this.debouncedGetCity = _.debounce(this.getCity, 100)
        this.debouncedGetDisctrict = _.debounce(this.getDisctrict, 100)
        this.debouncedGetVillage = _.debounce(this.getVillage, 100)
    },
    methods: {
        async getShareholderBadanDetail(){
            const shDetail = await this.$matrix.getShareholderBadanDetail(this.$route.params.idsh);
            this.profile = shDetail.data;
        },
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
            if(validated) {
                try {
                    await this.$matrix.saveShareholderBadan(this.profile);
                    this.loading= true;
                    this.$router.push(this.localePath({ name: 'dashboard-incorporation-id-shareholders', params: { id: this.$route.params.id } }));
                } catch (error) {
                    console.log(error)
                    this.loading = false;
                    this.$toast.error(error.response.data.message).goAway(2000);
                }
            }
        }
    },

}
</script>