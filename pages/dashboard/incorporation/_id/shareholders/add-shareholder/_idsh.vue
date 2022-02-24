<template>
    <div>
        <div class="dashboard-wrap">
            <b-container>
                <form action="">
                    <b-row>
                        <b-col md="12">
                            <h3 class="dashboard-title float-left">{{ $t('shareholderTitleAdd') }}</h3>
                            <b-link :to="localePath({ name: 'dashboard-incorporation-id-shareholders', params: { id: this.$route.params.id } })" class="btn btn-primary rounded-shadow  btn-sm  float-left float-md-right mb-3 mb-md-0">Back</b-link>
                            <b-button variant="outline-primary" class="btn-sm rounded-shadow float-left float-md-right mb-3 mb-md-0 mr-3" v-if="!dataShareholder" @click="useShareholderData"><i class="fa fa-plus ml-1"></i> Use Your Profile Data</b-button>
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
                                                type="text"
                                                name="name"
                                                v-validate="'required'"
                                                @change="checkErrorPerson"
                                                :class="{'is-invalid': errors.has('name')}"
                                                placeholder="John Doe"
                                                ></b-form-input>
                                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
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
                                                placeholder="Pegawai Swasta"
                                                ></b-form-input>
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
                                                @change="checkErrorPerson"
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
                                                :label="$t('city')"
                                                label-for="input-city"
                                                class="load-data"
                                            >
                                                <b-form-select 
                                                id="input-city"
                                                v-model="profile.city_id" 
                                                class="form-control"
                                                @change="districtPerson"
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
                                                :label="$t('district')"
                                                label-for="input-district"
                                                class="load-data"
                                            >
                                                <b-form-select 
                                                id="input-disctrict"
                                                v-model="profile.district_id" 
                                                class="form-control"
                                                @change="villagePerson"
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
                                                :label="$t('subdistrict')"
                                                label-for="input-village"
                                                class="load-data"
                                            >
                                                <b-form-select 
                                                id="input-village"
                                                v-model="profile.village_id" 
                                                name="village"
                                                v-validate="'required'"
                                                @change="checkErrorPerson"
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
                                                :label="$t('gender')"
                                                label-for="input-jenis-kelamin"
                                            >
                                                <b-form-radio v-model="profile.jenis_kelamin" value="L">{{$t('man')}}</b-form-radio>
                                                <b-form-radio v-model="profile.jenis_kelamin" value="P">{{$t('woman')}}</b-form-radio>
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
                                                type="number"
                                                name="nik"
                                                v-validate="'numeric'"
                                                @change="checkErrorIndent"
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
                                                type="number"
                                                name="Phone Number"
                                                v-validate="'numeric'"
                                                @change="checkErrorIndent"
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
                                                type="email"
                                                name="email"
                                                v-validate="'required|email'"
                                                @change="checkErrorIndent"
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
                                                <a :href="this.profile.foto_ktp" class="view-image" target="_blank" v-if="this.profile.foto_ktp">View Image</a>
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
                                                <a :href="this.profile.foto_kk" class="view-image" target="_blank" v-if="this.profile.foto_kk">View Image</a>
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
                                                <a :href="this.profile.foto_npwp" class="view-image" target="_blank" v-if="this.profile.foto_npwp">View Image</a>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                    
                                    <b-button variant="primary" class="w-25 float-left" @click="tabIndex--"><i class="fa fa-angle-left mr-1"></i> {{ $t('prevTabs') }}</b-button>
                                    <b-button variant="secondary" class="w-25 float-right" @click="tabIndex++">{{ $t('nextTabs') }} <i class="fa fa-angle-right ml-1"></i></b-button>
                                    <div class="clearfix"></div>
                                </b-tab>
                                <b-tab ref="shares" :title-item-class="[{'is-error': this.shareError === true}]" @click="checkErrorShare">
                                    <template v-slot:title>
                                        <span class="step-num">3</span>
                                        <span class="text">{{ $t('shares') }}</span>
                                    </template>
                                    <b-row>
                                        <b-col md="4">
                                            <b-form-group
                                                :label="$t('numberofShare')"
                                                label-for="input-nos"
                                            >
                                                <b-form-input
                                                id="input-nos"
                                                v-model="profile.jumlah_saham"
                                                type="number"
                                                name="jumlah saham"
                                                v-validate="{required: true, max_value: maxSaham }"
                                                @change="checkErrorShare"
                                                :class="{'is-invalid': errors.has('jumlah saham')}"
                                                placeholder="1000"
                                                :max="maxSaham"
                                                :disabled="dataMatrix.nominal_saham === null"
                                                ></b-form-input>
                                                <p class="validator pt-2 text-dark mb-0" v-if="dataMatrix.nominal_saham != null">{{ $t('nominalValue') }} : <span v-if="!isNaN(nominalSaham)">Rp. {{ nominalSaham.toLocaleString('id') }}</span> <span v-if="!isNaN(percentageSaham)">({{ percentageSaham.toFixed(2) }}%)</span></p>
                                                <span class="validator pt-1 text-dark" v-if="dataMatrix.nominal_saham != null">{{ $t('sahamRemain') }} : {{ maxSaham }} ({{ maxSahamPercentage.toFixed(2) }}%)</span>
                                                <p class="share-notes pt-2" v-if="dataMatrix.nominal_saham === null">{{ $t('fillCapital') }} <nuxt-link :to="localePath({ name: 'dashboard-incorporation-id-capital-structure', params: { id: $route.params.id } })">Click Here</nuxt-link></p>
                                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('jumlah saham') : '' }}</span>
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="6">
                                            <b-form-group
                                                :label="$t('shareType')"
                                                label-for="input-st"
                                            >
                                                <div class="helper-wrap">
                                                    <b-form-input
                                                    id="input-st"
                                                    v-model="profile.type_saham"
                                                    type="text"
                                                    name="shares type"
                                                    v-validate="'required'"
                                                    @change="checkErrorShare"
                                                    :class="{'is-invalid': errors.has('shares type')}"
                                                    :placeholder="$t('placeholderShares')"
                                                    ></b-form-input>
                                                    <span class="helptext" v-b-tooltip.hover :title="$t('helpShares')"><i class="fa fa-question-circle"></i></span>
                                                </div>
                                                <span class="validator pt-2 text-danger">{{ errors ? errors.first('shares type') : '' }}</span>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <b-button variant="primary" class="w-25" @click="tabIndex--"><i class="fa fa-angle-left mr-1"></i> {{ $t('prevTabs') }}</b-button>
                                    <b-button variant="secondary" class="w-25 mr-2 float-right" @click.prevent="onSubmit" :disabled="loading">Save</b-button>                                
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

export default {
    layout: "dashboard",
    middleware: 'auth',
    data(){
        return {
            profile: {
                matrix_idmatrix: null,
                jumlah_saham:  null,
                type_saham: "",
                nik:  0,
                npwp:  "",
                nama: "",
                tempat_lahir: "",
                tanggal_lahir: "",
                golongan_darah: null,
                agama: null,
                status_perkawinan: null,
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
            shareError: false,
            personError: false,
            indentError: false,
            dataShareholder: false,
            dataMatrix: {},
            maxSaham: 0,
            maxSahamPercentage: 0,
            totalSaham: 0,
            nominalSaham: 0,
            percentageSaham: 0,
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
        'profile.jumlah_saham': function(oldMaxSaham, newMaxSaham){
            this.nominalSaham = Number(this.profile.jumlah_saham) * Number(this.dataMatrix.nominal_saham); 
            this.percentageSaham = (Number(this.profile.jumlah_saham) / Number(this.dataMatrix.jumlah_saham)) * 100; 
        }
    },
    created(){    
        this.$nextTick(function() {
            this.getShareholder();
        });
        if(this.$route.params.idsh){
            this.getShareholderDetail();
        }
        this.profile.matrix_idmatrix = this.$route.params.id;
        this.debouncedGetProvince = _.debounce(this.getProvince, 100);
        this.debouncedGetCity = _.debounce(this.getCity, 100);
        this.debouncedGetDisctrict = _.debounce(this.getDisctrict, 100);
        this.debouncedGetVillage = _.debounce(this.getVillage, 100);
    },
    methods: {
        async getShareholder(){
            let tempShare = await this.$matrix.getShareholder(this.$route.params.id);
            let tempMatrix = await this.$matrix.getDetailMatrix(this.$route.params.id);
            
            if (tempShare.meta.message === "Data Found"){
                this.dataShareholder = tempShare.data;

                let arraySaham = [];
                Object.entries(this.dataShareholder).forEach(([key, val]) => {
                    arraySaham.push(val.jumlah_saham) // the value of the current key.
                });

                this.totalSaham = arraySaham.reduce(function(total, num){ return total + num }, 0);
            }

            this.dataMatrix = tempMatrix.data;
            this.maxSaham = Number(this.dataMatrix.jumlah_saham) - Number(this.totalSaham);
            this.maxSahamPercentage = (Number(this.maxSaham) / Number(this.dataMatrix.jumlah_saham)) * 100;
        },
        useShareholderData(){
            this.profile = this.$auth.user.data;

            this.$toast.success('Your data has been load!').goAway(2000);
        },
        async getShareholderDetail(){
            const shDetail = await this.$matrix.getShareholderDetail(this.$route.params.idsh);
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
            this.checkErrorShare();
            this.checkErrorPerson();
            this.checkErrorIndent();

            if(validated) {
                try {
                    //Form data KTP
                    var dataKTP = new FormData();
                    dataKTP.append('mode', 'saham');
                    dataKTP.append('image', this.foto_ktp);
                    dataKTP.append('type', 'KTP');
                    dataKTP.append('id', this.$route.params.idsh);

                    //Form data NPWP
                    var dataNPWP = new FormData();
                    dataNPWP.append('mode', 'saham');
                    dataNPWP.append('image', this.foto_npwp);
                    dataNPWP.append('type', 'NPWP');
                    dataNPWP.append('id', this.$route.params.idsh);

                    //Form data KK
                    var dataKK = new FormData();
                    dataKK.append('mode', 'saham');
                    dataKK.append('image', this.foto_kk);
                    dataKK.append('type', 'KK');
                    dataKK.append('id', this.$route.params.idsh);

                    (this.foto_ktp) ? await this.$matrix.uploadGambar(dataKTP) : "";
                    (this.foto_npwp) ? await this.$matrix.uploadGambar(dataNPWP) : "";
                    (this.foto_kk) ? await this.$matrix.uploadGambar(dataKK) : "";
                    
                    await this.$matrix.saveShareholder(this.profile);
                    this.loading= true;
                    this.$router.push(this.localePath({ name: 'dashboard-incorporation-id-shareholders', params: { id: this.$route.params.id } }));
                } catch (error) {
                    console.log(error)
                    this.loading = false;
                    this.$toast.error(error.response.data.message).goAway(2000);
                }
            }
        },
        checkErrorShare(){
            let tabEl = this.$refs.shares;
            let inputEl = tabEl.$el.querySelectorAll('.form-control');
            let i;
            let indexError = 0;
            for(i = 0; i < inputEl.length; i++){            
                if(inputEl[i].classList.contains('is-invalid')){
                    indexError++
                }
            };

            (indexError > 0) ? this.shareError = true : this.shareError = false;
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