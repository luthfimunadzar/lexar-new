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

                <h3 class="dashboard-title">Pemohon Merek</h3>

                <b-card class="input-focus">
                    <template>
                        <label class="mt-0">Tipe Pemohon</label>

                        <div class="wrap-radio">
                            <b-form-radio
                            id="checkbox-barang"
                            v-model="pemohon.jenis_pemohon"
                            value="Individu"
                            class="pl-4 ml-1"
                            >
                                Saya mengajukan untuk merek sendiri
                            </b-form-radio>
                            <b-form-radio
                            id="checkbox-jasa"
                            v-model="pemohon.jenis_pemohon"
                            value="Badan"
                            class="pl-4 ml-1"
                            >
                                Saya mengajukan untuk badan hukum (perusahaan)
                            </b-form-radio>
                        </div>
                    </template>

                    <template v-if="pemohon.jenis_pemohon === 'Badan'">
                        <label class="mt-0">Nama Direktur Utama</label>

                        <b-form-input
                        v-model="pemohon.nama_pemohon"
                        type="text"
                        name="Nama Direktur Utama"
                        v-validate="'required'"
                        :class="[{'is-invalid': errors.has('Nama Direktur Utama')}, 'big', errors.has('Nama Direktur Utama') ? 'mb-1' : 'mb-3']"
                        placeholder="John Doe"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nama Direktur Utama') : '' }}</span>
                    </template>

                    <template v-if="pemohon.jenis_pemohon === 'Individu'">
                        <label class="mt-0">Nama Lengkap</label>

                        <b-form-input
                        v-model="pemohon.nama_pemohon"
                        type="text"
                        name="Nama Lengkap"
                        v-validate="'required'"
                        :class="[{'is-invalid': errors.has('Nama Lengkap')}, 'big', errors.has('Nama Lengkap') ? 'mb-1' : 'mb-3']"
                        placeholder="John Doe"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nama Lengkap') : '' }}</span>
                    </template>

                    <template>
                        <label class="mt-0">Warga Negara</label>

                        <b-form-select 
                        id="input-status-kantor"
                        v-model="pemohon.kewarganegaraan"
                        name="Warga Negara"
                        v-validate="'required'"
                        :class="['form-control', 'big', errors.has('Warga Negara') ? 'mb-1' : 'mb-3']">
                            <option value="wni">Warga Negara Indonesia</option>
                            <option value="wna">Warga Negara Asing</option>
                        </b-form-select>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Warga Negara') : '' }}</span>
                    </template>

                    <template>
                        <label class="mt-0">Nomor Handphone</label>

                        <b-form-input
                        v-model="pemohon.phone"
                        type="text"
                        name="Nomor Handphone"
                        v-validate="'required'"
                        :class="[{'is-invalid': errors.has('Nomor Handphone')}, 'big', errors.has('Nomor Handphone') ? 'mb-1' : 'mb-3']"
                        placeholder="087822004421"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nomor Handphone') : '' }}</span>
                    </template>

                    <template>
                        <label class="mt-0">Email</label>

                        <b-form-input
                        v-model="pemohon.email"
                        type="text"
                        name="Email"
                        v-validate="'required|email'"
                        :class="[{'is-invalid': errors.has('Email')}, 'big', errors.has('Email') ? 'mb-1' : 'mb-3']"
                        placeholder="johndoe@gmail.com"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Email') : '' }}</span>
                    </template>

                    <template>
                        <label class="mt-0">Alamat</label>

                        <b-form-input
                        v-model="pemohon.alamat"
                        type="text"
                        name="Alamat"
                        v-validate="'required'"
                        :class="[{'is-invalid': errors.has('Alamat')}, 'big', errors.has('Alamat') ? 'mb-1' : 'mb-3']"
                        placeholder="Jalan Kembang Jaya No 196"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Alamat') : '' }}</span>
                    </template>

                    <template>
                        <label class="mt-0">Provinsi</label>

                        <b-form-select 
                        id="input-province"
                        v-model="pemohon.province_id" 
                        @change="getCity"
                        v-validate="'required'"
                        name="Provinsi"
                        :class="['form-control', 'big', errors.has('Provinsi') ? 'mb-1' : 'mb-3']">
                            <option :value="province.id" v-for="province in opt_province" :key="province.id">
                                {{ province.name }}
                            </option>
                        </b-form-select>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Provinsi') : '' }}</span>
                    </template>
                    
                    <template>
                        <label class="mt-0">Kota</label>

                        <b-form-select 
                        id="input-city"
                        v-model="pemohon.city_id" 
                        v-validate="'required'"
                        name="Kota"
                        :class="['form-control', 'big', errors.has('Kota') ? 'mb-1' : 'mb-3']">
                            <option :value="city.id" v-for="city in opt_city" :key="city.id">
                                {{ city.name }}
                            </option>
                        </b-form-select>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Kota') : '' }}</span>
                    </template>

                    <template v-if="pemohon.jenis_pemohon === 'Badan'">
                        <label class="mt-0">Nama Badan Hukum (perusahaan)</label>

                        <b-form-input
                        v-model="pemohon.nama_perusahaan"
                        type="text"
                        name="Nama Badan Hukum"
                        v-validate="'required'"
                        :class="[{'is-invalid': errors.has('Nama Badan Hukum')}, 'big', errors.has('Nama Badan Hukum') ? 'mb-1' : 'mb-3']"
                        placeholder="PT Sinar Bahagia Selamanya"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nama Badan Hukum') : '' }}</span>
                    </template>

                    <template>
                        <label class="mt-0">Nomor Induk KTP</label>

                        <b-form-input
                        v-model="pemohon.no_ktp"
                        type="text"
                        name="Nomor Induk KTP"
                        v-validate="'required'"
                        :class="[{'is-invalid': errors.has('Nomor Induk KTP')}, 'big', errors.has('Nomor Induk KTP') ? 'mb-1' : 'mb-3']"
                        placeholder="327123123123"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nomor Induk KTP') : '' }}</span>
                    </template>

                    <template v-if="pemohon.jenis_pemohon === 'Individu'">
                        <label class="mt-0">Kartu Tanda Penduduk</label>

                        <file-wrapper
                            v-model="file.ktp"
                            placeholder="file ktp"
                            :class="['big', errors.has('Kartu Tanda Penduduk') ? 'mb-2' : 'mb-4']"
                            name="Kartu Tanda Penduduk"
                            v-validate="'required|size:2050'"
                        /> 

                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Kartu Tanda Penduduk') : '' }}</span>
                    </template>

                    <template v-if="pemohon.jenis_pemohon === 'Badan'">
                        <label class="mt-0">Kartu Tanda Penduduk Direktur</label>

                        <file-wrapper
                            v-model="file.ktp"
                            placeholder="file ktp direktur"
                            :class="['big', errors.has('Kartu Tanda Penduduk Direktur') ? 'mb-2' : 'mb-4']"
                            name="Kartu Tanda Penduduk Direktur"
                            v-validate="'required|size:2050'"
                        /> 

                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Kartu Tanda Penduduk Direktur') : '' }}</span>
                    </template>

                    <template>
                        <label class="mt-0">Nomor Induk NPWP</label>

                        <b-form-input
                        v-model="pemohon.no_npwp"
                        type="text"
                        name="Nomor Induk NPWP"
                        v-validate="'required'"
                        :class="[{'is-invalid': errors.has('Nomor Induk NPWP')}, 'big', errors.has('Nomor Induk NPWP') ? 'mb-1' : 'mb-3']"
                        placeholder="09.254.294.3-407.000"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nomor Induk NPWP') : '' }}</span>
                    </template>

                    <template v-if="pemohon.jenis_pemohon === 'Individu'">
                        <label class="mt-0">Nomor Pokok Wajib Pajak</label>

                        <file-wrapper
                            v-model="file.npwp"
                            placeholder="file npwp"
                            :class="['big', errors.has('Nomor Pokok Wajib Pajak') ? 'mb-2' : 'mb-4']"
                            name="Nomor Pokok Wajib Pajak"
                            v-validate="'required|size:2050'"
                        /> 
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nomor Pokok Wajib Pajak') : '' }}</span>
                    </template>

                    <template v-if="pemohon.jenis_pemohon === 'Badan'">
                        <label class="mt-0">Nomor Pokok Wajib Pajak Direktur</label>

                        <file-wrapper
                            v-model="file.npwp"
                            placeholder="file npwp direktur"
                            :class="['big', errors.has('Nomor Pokok Wajib Pajak Direktur') ? 'mb-2' : 'mb-4']"
                            name="Nomor Pokok Wajib Pajak Direktur"
                            v-validate="'required|size:2050'"
                        /> 
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nomor Pokok Wajib Pajak Direktur') : '' }}</span>
                    </template>

                    <template v-if="pemohon.jenis_pemohon === 'Badan'">
                        <label class="mt-0">Nomor Induk NPWP Badan</label>

                        <b-form-input
                        v-model="pemohon.no_npwp_badan"
                        type="text"
                        name="Nomor Induk NPWP Badan"
                        v-validate="'required'"
                        :class="[{'is-invalid': errors.has('Nomor Induk NPWP Badan')}, 'big', errors.has('Nomor Induk NPWP Badan') ? 'mb-1' : 'mb-3']"
                        placeholder="09.254.294.3-407.000"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nomor Induk NPWP Badan') : '' }}</span>
                    </template>

                    <template v-if="pemohon.jenis_pemohon === 'Badan'">
                        <label class="mt-0">NPWP Badan / Perusahaan</label>

                        <file-wrapper
                            v-model="file.npwp_perusahaan"
                            placeholder="file npwp badan"
                            :class="['big', errors.has('NPWP Badan / Perusahaan') ? 'mb-2' : 'mb-4']"
                            name="NPWP Badan / Perusahaan"
                            v-validate="'required|size:2050'"
                        /> 
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('NPWP Badan / Perusahaan') : '' }}</span>
                    </template>

                    <template v-if="pemohon.jenis_pemohon === 'Badan'">
                        <label class="mt-0">Akta Pendirian / Akta Perubahan</label>

                        <file-wrapper
                            v-model="file.akta_pendirian"
                            placeholder="file akta pendirian"
                            :class="['big', errors.has('Akta Pendirian / Akta Perubahan') ? 'mb-2' : 'mb-4']"
                            name="Akta Pendirian / Akta Perubahan"
                            v-validate="'required|size:2050'"
                        /> 
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Akta Pendirian / Akta Perubahan') : '' }}</span>
                    </template>

                </b-card>

                <b-link :to="localePath({ name: 'dashboard-trademark-id-pratinjau', params: { id: $route.params.id } })" class="btn btn-secondary w-100 big rounded-shadow" :disabled="loading">{{ $t('continue') }}</b-link>
            </b-col>
        </b-row>

    </div>
</template>

<script>
import _ from "lodash";

export default {
    layout: 'dashboard-with-sidebar-trademark',
    middleware: 'auth',
    loading: false,
    data(){
        return {
            pemohon:{
                jenis_pemohon: "Individu",
                kewarganegaraan: "",
                nama_perusahaan: "",
                phone: "",
                email: "",
                alamat: "",
                city_id: "",
                province_id: "",
                nama_pemohon: "",
                no_ktp: "",
                no_npwp: "",
                no_npwp_badan: "",
            },
            file: {
                akta_pendirian: null,
                npwp_perusahaan: null,
                ktp: null,
                npwp: null,
            },
            loading: false,
            opt_province: [],
            opt_city: [],
        }
    },
    computed: {
    },
    mounted() {
    },
    watch: {
        'pemohon.jenis_pemohon': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
        },
        'pemohon.nama_pemohon': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
        },
        'pemohon.kewarganegaraan': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
        },
        'pemohon.nama_perusahaan': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
        },
        'pemohon.phone': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
        },
        'pemohon.email': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
        },
        'pemohon.alamat': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
        },
        'pemohon.province_id': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
            this.debouncedGetProvince();
        },
        'pemohon.city_id': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
            this.debouncedGetCity();
        },
        'pemohon.no_ktp': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
        },
        'pemohon.no_npwp': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
        },
        'pemohon.no_npwp_badan': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedSaveMatrix();
        },
        'file.ktp': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedUploadFile();
        },
        'file.npwp': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedUploadFile();
        },
        'file.npwp_perusahaan': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedUploadFile();
        },
        'file.akta_pendirian': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.debouncedUploadFile();
        },
    },
    created(){ 
        this.$nextTick(function() {
            this.getMatrix();
            this.getProvince();
        });
        this.debouncedGetProvince = _.debounce(this.getProvince, 100);
        this.debouncedGetCity = _.debounce(this.getCity, 100);
        this.debouncedSaveMatrix = _.debounce(this.saveMatrix, 2500);
        this.debouncedUploadFile = _.debounce(this.uploadFile, 2500);
    },
    methods: {
        async getMatrix() {
            let dataMatrix = await this.$trademark.getDetailTrademark(this.$route.params.id);
            this.$store.commit("trademark/sendStatus", dataMatrix.data.status_trademark.status);
            
            this.pemohon = dataMatrix.data;
        },
        async getProvince(){
            const province = await this.$profile.getProvince();
            this.opt_province = province.data;
            this.loadCity = false;
        },
        async getCity(){
            const city = await this.$profile.getCity(this.pemohon.province_id);
            this.opt_city = city.data.detail;
            this.loadDistrict = false;
        },
        async saveMatrix(){
            try{
                this.loading = true;
                let tempMatrix = await this.$trademark.saveMatrix(this.pemohon);
                this.loading = false;
            } catch(error){
                this.loading = false;
                this.$toast.error(error).goAway(3000);
            }
        },
        async uploadFile(){
            if(this.pemohon.jenis_pemohon === "Individu"){
                try{
                    this.loading = true;
                    var dataFile = new FormData();
                    dataFile.append('id', this.$route.params.id);
                    dataFile.append('ktp', this.file.ktp);
                    dataFile.append('npwp', this.file.npwp);

                    let tempMatrix = await this.$trademark.uploadFile(dataFile);
                    this.loading = false;
                } catch(error){
                    this.loading = false;
                    this.$toast.error(error).goAway(3000);
                }
            } else {
                try{
                    this.loading = true;
                    var dataFile = new FormData();
                    dataFile.append('id', this.$route.params.id);
                    dataFile.append('ktp', this.file.ktp);
                    dataFile.append('npwp', this.file.npwp);
                    dataFile.append('akta_pendirian', this.file.akta_pendirian);
                    dataFile.append('npwp_perusahaan', this.file.npwp_perusahaan);

                    let tempMatrix = await this.$trademark.uploadFile(dataFile);
                    this.loading = false;
                } catch(error){
                    this.loading = false;
                    this.$toast.error(error).goAway(3000);
                }
            }
        },
    }
}
</script>

