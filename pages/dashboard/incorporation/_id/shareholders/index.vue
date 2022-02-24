<template>
    <div>
        <b-row>
            <b-col md="10" offset-md="1">
                <div class="loader-wrap" v-if="loading">
                    <span>{{ $t('updating') }}</span>
                    <b-spinner small  type="grow" label="Spinning"></b-spinner>
                </div>
                <div class="loader-wrap" v-else>
                    <span>{{ $t('changeSaved') }}</span>
                </div>

                <h3 class="dashboard-title">{{ $t('shareholderTitle') }}</h3>

                <b-card class="input-focus visible">
                    <label class="float-left mt-1">{{ $t('shareholderTitle') }}</label>
                    <b-link :to="localePath({ name: 'dashboard-incorporation-id-shareholders-add-shareholder-idsh', params: { id: $route.params.id } })" class="btn btn-sm btn-primary rounded float-right mb-3">{{ $t('shareholderTitleAdd') }}</b-link>
                    <div class="clearfix"></div>
                    <b-table striped hover :fields="fieldShareholder" :items="itemShareholder">
                        <template slot="nominal_saham" slot-scope="scope">
                            {{ "Rp " + scope.value.toLocaleString('id') }}
                        </template>
                        <template slot="percentage" slot-scope="scope">
                            {{ scope.value + " %" }}
                        </template>
                        <template slot="action" slot-scope="scope">
                            <b-link :to="localePath({ name: 'dashboard-incorporation-id-shareholders-add-shareholder-idsh', params: { id: $route.params.id, idsh: scope.item.idmps  }})" class="btn btn-primary btn-inside-table">{{ $t('edit') }}</b-link>
                            <b-dropdown variant="secondary" :text="$t('assign')">
                                <b-dropdown-item @click="cloneShareholder('KOMISARIS UTAMA', scope.item.idmps)">Sebagai Komisaris Utama</b-dropdown-item>
                                <b-dropdown-item @click="cloneShareholder('KOMISARIS', scope.item.idmps)">Sebagai Komisaris</b-dropdown-item>
                                <b-dropdown-item @click="cloneShareholder('DIREKTUR UTAMA', scope.item.idmps)">Sebagai Direktur Utama</b-dropdown-item>
                                <b-dropdown-item @click="cloneShareholder('DIREKTUR', scope.item.idmps)">Sebagai Direktur</b-dropdown-item>
                            </b-dropdown>
                            <button @click="delShareholder(scope.item.idmps)" class="btn btn-sm btn-danger">{{ $t('delete') }}</button>
                        </template>
                    </b-table>
                    <hr class="my-5"/>
                    <label class="float-left mt-1">{{ $t('coManagement') }}</label>
                    <b-link :to="localePath({ name: 'dashboard-incorporation-id-shareholders-add-management-idsh', params: { id: $route.params.id } })" class="btn btn-sm btn-primary rounded float-right mb-3">{{ $t('coManagementAdd') }}</b-link>
                    <div class="clearfix"></div>
                    <b-alert show variant="warning" v-html="$t('coManagementMessage')"></b-alert>
                    <b-table striped hover :fields="fieldManegement" :items="itemManagement">
                        <template slot="action" slot-scope="scope">
                            <b-link :to="localePath({ name: 'dashboard-incorporation-id-shareholders-add-management-idsh', params: { id: $route.params.id, idsh: scope.item.idmp  }})" class="btn btn-sm btn-primary btn-inside-table">{{ $t('edit') }}</b-link>
                            <b-link @click="assignSigning(scope.item.idmp)" class="btn btn-sm btn-dark">{{ $t('assignSigning') }}</b-link>
                            <button @click="delManagement(scope.item.idmp)" class="btn btn-sm btn-danger">{{ $t('delete') }}</button>
                        </template>
                    </b-table>
                </b-card>

                <b-card class="input-focus visible d-none">
                    <label class="float-left mt-1">Shareholder Board</label>
                    <b-link :to="localePath({ name: 'dashboard-incorporation-id-shareholders-add-shareholder-board-idsh', params: { id: $route.params.id } })" class="btn btn-sm btn-primary rounded float-right mb-3">Add Shareholder Board</b-link>
                    <div class="clearfix"></div>
                    <b-table striped hover :fields="fieldShareholderBadan" :items="itemShareholderBadan">
                        <template slot="nominal_saham" slot-scope="scope">
                            {{ "Rp " + scope.value.toLocaleString('id') }}
                        </template>
                        <template slot="percentage" slot-scope="scope">
                            {{ scope.value + " %" }}
                        </template>
                        <template slot="action" slot-scope="scope">
                            <b-link :to="localePath({ name: 'dashboard-incorporation-id-shareholders-add-shareholder-board-idsh', params: { id: $route.params.id, idsh: scope.item.idmsb  }})" class="btn btn-sm btn-dark">Edit</b-link>
                            <button @click="delShareholderBadan(scope.item.idmsb)" class="btn btn-sm btn-danger">Delete</button>
                        </template>
                    </b-table>
                </b-card>

                <div class="text-center">
                    <b-link :to="localePath({ name: 'dashboard-incorporation-id-preview-deed', params: { id: $route.params.id } })" class="btn btn-secondary w-50 big rounded-shadow" :disabled="loading">{{ $t('continue') }}</b-link>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    layout: 'dashboard-with-sidebar',
    middleware: 'auth',
    data(){
        return {
            loading: false,
            fieldShareholder: [
                {
                    key: 'nama',
                    label: this.$t('name'),
                    sortable: true
                },
                {
                    key: 'jumlah_saham',
                    label: this.$t('totalShare'),
                    sortable: true
                },
                {
                    key: 'nominal_saham',
                    label: this.$t('nominalShare'),
                    sortable: false
                },
                {
                    key: 'percentage',
                    label: this.$t('percentage'),
                    sortable: false
                },
                {
                    key: 'action',
                    label: this.$t('action'),
                    sortable: false
                },
            ],
            fieldShareholderBadan: [
                {
                    key: 'nama',
                    label: 'Board Name',
                    sortable: true
                },
                {
                    key: 'jumlah_saham',
                    label: 'Jumlah Saham',
                    sortable: true
                },
                {
                    key: 'nominal_saham',
                    label: 'Nominal Saham',
                    sortable: false
                },
                {
                    key: 'percentage',
                    label: 'Persentase',
                    sortable: false
                },
                {
                    key: 'action',
                    label: 'Action',
                    sortable: false
                }
            ],
            fieldManegement: [
                {
                    key: 'nama',
                    label: this.$t('name'),
                    sortable: true
                },
                {
                    key: 'nik',
                    label: this.$t('ktpMain'),
                    sortable: false
                },
                {
                    key: 'jabatan',
                    label: this.$t('position'),
                    sortable: true
                },
                {
                    key: 'default_stat',
                    label: this.$t('signing'),
                    sortable: false
                },
                {
                    key: 'action',
                    label: this.$t('action'),
                    sortable: false
                }
            ],
            itemShareholder: [],
            itemShareholderBadan: [],
            itemManagement: [],
        }
    },
    mounted(){
        this.$nextTick(function() {
            this.loading = true;
            this.getShareholder();
            this.getShareholderBadan();
            this.getManagement();
        });
    },
    methods: {
        async getShareholder(){
            const share = await this.$matrix.getShareholder(this.$route.params.id);
            if(share.data){
                let dataMatrix = await this.$matrix.getDetailMatrix(this.$route.params.id);
                var reformattedArray = share.data.map(obj =>{ 
                    // var rObj = {};
                    obj["nominal_saham"] = (obj.jumlah_saham * dataMatrix.data.nominal_saham);
                    obj["percentage"] = parseFloat((obj.jumlah_saham / dataMatrix.data.jumlah_saham) * 100).toFixed(2);
                    return obj;
                });

                var sumNominal = reformattedArray.reduce((acc, item) => acc + parseFloat(item.nominal_saham), 0);
                var sumPercentage = reformattedArray.reduce((acc, item) => acc + parseFloat(item.percentage), 0);
                var sumJumlahSaham = reformattedArray.reduce((acc, item) => acc + parseFloat(item.jumlah_saham), 0);
                
                this.$store.commit("incorp/saveNominalOrang", sumNominal);
                this.$store.commit("incorp/savePercentageOrang", sumPercentage);
                this.$store.commit("incorp/saveJumlahSahamOrang", sumJumlahSaham);

                this.itemShareholder = reformattedArray;
            } else {
                this.itemShareholder = share.data;
            }
            this.loading = false;
        },
        async getShareholderBadan(){
            const share = await this.$matrix.getShareholderBadan(this.$route.params.id);
            if(share.data){
                let dataMatrix = await this.$matrix.getDetailMatrix(this.$route.params.id);
                var reformattedArray = share.data.map(obj =>{ 
                    // var rObj = {};
                    obj["nominal_saham"] = (obj.jumlah_saham * dataMatrix.data.nominal_saham);
                    obj["percentage"] = parseFloat((obj.jumlah_saham / dataMatrix.data.jumlah_saham) * 100).toFixed(2);
                    return obj;
                });

                var sumNominal = reformattedArray.reduce((acc, item) => acc + parseFloat(item.nominal_saham), 0);
                var sumPercentage = reformattedArray.reduce((acc, item) => acc + parseFloat(item.percentage), 0);
                var sumJumlahSaham = reformattedArray.reduce((acc, item) => acc + parseFloat(item.jumlah_saham), 0);

                this.$store.commit("incorp/saveNominalBadan", sumNominal);
                this.$store.commit("incorp/savePercentageBadan", sumPercentage);
                this.$store.commit("incorp/saveJumlahSahamBadan", sumJumlahSaham);

                this.itemShareholderBadan = reformattedArray;
            } else {
                this.itemShareholderBadan = share.data;
            }
            this.loading = false;
        },
        async getManagement(){
            const share = await this.$matrix.getManagement(this.$route.params.id);
            this.itemManagement = share.data;
            this.loading = false;
        },
        async delShareholder(params){
            var result = confirm("Are you sure you want to delete this shareholder?");
            if (result) {
                await this.$matrix.delShareholder(params);
                this.getShareholder();
            }
        },
        async delShareholderBadan(params){
            var result = confirm("Are you sure you want to delete this shareholder board?");
            if (result) {
                await this.$matrix.delShareholderBadan(params);
                location.reload();
            }
        },
        async delManagement(params){
            var result = confirm("Are you sure you want to delete this manager?");
            if (result) {
                await this.$matrix.delManagement(params);
                this.getManagement();
            }
        },
        async cloneShareholder(params1, params2){
            try{
                await this.$matrix.cloneShareholder(params1, params2);
                this.$toast.success("Assign Shareholder Berhasil!").goAway(2000);
                this.getManagement();
            } catch(error){
                this.$toast.error(error.response.data.message).goAway(2000);
            }
        },
        async assignSigning(params){
            var result = confirm("Are you sure you want to assign this manager for signing?");
            if (result) {
                await this.$matrix.assignSigning(params);
                this.$toast.success("Assign Manager Berhasil!").goAway(2000);
                this.getManagement();
            }
        },
    }   
}
</script>

