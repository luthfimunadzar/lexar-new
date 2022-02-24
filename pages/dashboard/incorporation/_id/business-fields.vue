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

                <h3 class="dashboard-title">{{ $t('businessField') }}</h3>

                <b-card class="input-focus">
                    <template>
                        <label class="mt-0">{{ $t('officeStatus') }}</label>

                        <div class="help-text">
                            <p>
                                {{ $t('officeHelpText') }}
                            </p>
                        </div>

                        <!-- <b-form-input v-model="matrix.status_kantor" type="text" class="big" placeholder="Rent"></b-form-input> -->
                        <b-form-select 
                        id="input-status-kantor"
                        v-model="matrix.status_kantor"
                        class="form-control big">
                            <option value="sewa">Sewa</option>
                            <option value="milik-sendiri">Milik Sendiri</option>
                        </b-form-select>
                    </template>

                    <template>
                        <label>{{ $t('phoneNumber') }}</label>

                        <b-form-input v-model="matrix.no_telp" type="text" class="big" placeholder="087822004425"></b-form-input>
                    </template>
                    
                    <template>
                        <label>{{ $t('faxNumber') }}</label>

                        <b-form-input v-model="matrix.no_fax" type="text" class="big" placeholder="087822004425"></b-form-input>
                    </template>
                    
                    <template>
                        <label>{{ $t('emailCompany') }}</label>

                        <b-form-input v-model="matrix.email" v-validate="'email'" name="email" type="text" class="big" placeholder="johndoe@gmail.com"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                    </template>
                    
                    <template>
                        <label>{{ $t('noEmployees') }}</label>

                        <b-form-input v-model="matrix.jumlah_karyawan" type="text" class="big" placeholder="20"></b-form-input>
                    </template>
                    
                    <template>
                        <label>{{ $t('authorizedCapital') }}</label>

                        <div class="help-text">
                            <p v-html="$t('authorizedCapitalHelpText')">
                            </p>
                        </div>

                        <currency-input
                            v-model="matrix.modal_dasar"
                            currency="IDR"
                            class="form-control big"
                            locale="id"
                            :decimal-length="0"
                            ref="inputFirst"/>
                    </template>
                    
                    <template>
                        <label>{{ $t('paidCapital') }}</label>

                        <div class="help-text">
                            <p v-html="$t('paidCapitalHelpText')">
                            </p>
                        </div>

                        <currency-input
                            v-model="matrix.modal_disetor"
                            currency="IDR"
                            class="form-control big"
                            :decimal-length="0"
                            locale="id"/>
                    </template>
                    
                    <template>
                        <label>{{ $t('nominalValue') }}</label>

                        <div class="help-text">
                            <p v-html="$t('nominalValueHelpText')">
                            </p>
                        </div>

                        <currency-input
                            v-model="matrix.nominal_saham"
                            currency="IDR"
                            class="form-control big"
                            :decimal-length="0"
                            locale="id"
                            />
                    </template>
                    
                    <template>
                        <label>{{ $t('shareIssued') }}</label>

                        <b-form-input :value="jumlahCountShow" type="text" class="big" disabled></b-form-input>
                    </template>
                </b-card>

                <b-link :to="localePath({ name: 'dashboard-incorporation-id-shareholders', params: { id: $route.params.id } })" class="btn btn-secondary w-100 big rounded-shadow" :disabled="loading">{{ $t('continue') }}</b-link>
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
                npwp_badan: "",
                status_kantor: "",
                status_kepemilikan: "",
                no_telp: "",
                no_fax: "",
                email: "",
                jumlah_karyawan: "",
                maksud_tujuan: "",
                modal_dasar: null,
                modal_disetor: null,
                nominal_saham: null,
                jumlah_saham: 0,
            },
            loading: false,
            money: {
                thousands: '.',
                prefix: 'Rp ',
                precision: 0,
                masked: false,
            }
        }
    },
    computed: {
        jumlahCountShow: function(){
            if(this.matrix.modal_disetor != null && this.matrix.nominal_saham != null){
                let count = this.matrix.modal_disetor / this.matrix.nominal_saham;
                let formattedCount = count.toLocaleString('id');
                
                return formattedCount;
            }
        },
        jumlahCount: function(){
            if(this.matrix.modal_disetor != null && this.matrix.nominal_saham != null){
                let count = this.matrix.modal_disetor / this.matrix.nominal_saham;

                return this.matrix.modal_disetor / this.matrix.nominal_saham;
            }
        }
    },
    mounted(){
        this.matrix.idmatrix = this.$route.params.id;
    },
    watch: {
        'matrix.npwp_badan': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.status_kantor': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.status_kepemilikan': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.no_telp': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.no_fax': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.email': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.jumlah_karyawan': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.maksud_tujuan': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.modal_dasar': function(oldMatrixID, newMatrixID){
            this.loading = true;            
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.modal_disetor': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.nominal_saham': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
        'matrix.jumlah_saham': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
    },
    created(){ 
        this.$nextTick(function() {
            this.getMatrix();
        });   
        this.debouncedSaveMatrix = _.debounce(this.saveMatrix, 2500)
    },
    methods: {
        async getMatrix() {
            let dataMatrix = await this.$matrix.getDetailMatrix(this.$route.params.id);

            this.matrix = dataMatrix.data;
            
            if(dataMatrix.data.vo_branch !== null){
                this.matrix.status_kantor = 'sewa'
            }
        },
        async saveMatrix() {
            this.matrix.jumlah_saham = this.jumlahCount;
            await this.$matrix.saveMatrix(this.matrix);
            this.loading = false;
            this.$store.commit("incorp/updateMatrix", false);
        },
    }
}
</script>

