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

                <h3 class="dashboard-title">{{ $t('capitalStructure') }}</h3>

                <b-card class="input-focus visible">
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
                </b-card>

                <b-card class="input-focus visible">
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
                </b-card>

                <b-card class="input-focus visible">
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
                </b-card>

                <b-card class="input-focus visible">
                    <label>{{ $t('shareIssued') }}</label>

                    <b-form-input :value="jumlahCountShow" type="text" class="big" disabled></b-form-input>
                </b-card>
                
                <b-link :to="localePath({ name: 'dashboard-incorporation-id-shareholders', params: { id: $route.params.id } })" class="btn btn-secondary w-100 big rounded-shadow" :disabled="loading">{{ $t('continue') }}</b-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import _ from "lodash";
// import AwesomeMask from 'awesome-mask';

export default {
    layout: 'dashboard-with-sidebar',
    middleware: 'auth',
    loading: false,
    directives: {
        // 'mask': AwesomeMask
    },
    data(){
        return {
            matrix:{
                idmatrix: null,
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
    watch: {
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
    mounted(){
        this.matrix.idmatrix = this.$route.params.id;
    },
    created(){ 
        this.$nextTick(function() {
            this.getMatrix();
            // this.$refs.inputFirst.focus();
        });   
        this.debouncedSaveMatrix = _.debounce(this.saveMatrix, 2500)
    },
    methods: {
        async getMatrix() {
            let dataMatrix = await this.$matrix.getDetailMatrix(this.$route.params.id);
            return this.matrix = dataMatrix.data;
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

