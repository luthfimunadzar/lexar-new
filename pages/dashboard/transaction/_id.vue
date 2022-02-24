<template>
    <div>
        <div class="dashboard-wrap">
            <b-container>
                <b-row>
                    <b-col>
                        <!-- <b-alert show variant="warning" class="alert-dashboard">Your email have not been verified, please check your email. <b-link><b>Resend Email Verification</b></b-link></b-alert> -->
                        <h3 class="dashboard-title float-left">{{ $t('invoiceDetail') }} {{ dataInvoice.invoice_number }}</h3>
                        <b-link :to="localePath({ name: 'dashboard-transaction' })" class="btn btn-secondary btn-sm rounded-shadow float-left float-md-right mb-3 mb-md-0">{{ $t('back') }}</b-link>
                        
                        <div class="clearfix"></div>
                        <b-card class="mb-5 transaction-detail">
                            <b-row>
                                <b-col md="3">
                                    <label>{{ $t('invoiceNumber') }}</label>
                                    <div class="clearfix"></div>
                                    <h4>{{ dataInvoice.invoice_number }}</h4>
                                </b-col>
                                <b-col md="3">
                                    <label>{{ $t('transactionTotal') }}</label>
                                    <div class="clearfix"></div>
                                    <h4>Rp. {{ dataInvoice.total_price.toLocaleString('id') }}</h4>
                                </b-col>
                                <b-col md="3">
                                    <label>{{ $t('date') }}</label>
                                    <div class="clearfix"></div>
                                    <h4>{{ dataInvoice.date }}</h4>
                                </b-col>
                                <b-col md="3">
                                    <label>Status</label>
                                    <div class="clearfix"></div>
                                    <h4>{{ dataInvoice.payment_status }}</h4>
                                </b-col>
                            </b-row>
                            <hr class="hr-space" v-if="dataInvoice.payment_status === 'PENDING'"/>
                            <b-row v-if="dataInvoice.payment_status === 'PENDING'">
                                <b-col md="12">
                                    <h4 class="font-weight-bold mb-4">
                                        {{ $t('instructionPayment') }}
                                    </h4>
                                    <h6>{{ methodDetail[0].description }} {{ $t('payVia') }}</h6>
                                    <h2 class="font-weight-bold mb-4">Rp. {{ dataInvoice.total_price.toLocaleString('id') }}</h2>
                                    <h6 class="mb-2" v-if="this.$i18n.locale === 'en'">To <b>BANK {{ targetDetail[0].bank_name }}</b> on behalf of the <b>{{ targetDetail[0].name }}</b> with account number :</h6>
                                    <h6 class="mb-2" v-else>Ke <b>BANK {{ targetDetail[0].bank_name }}</b> atas nama <b>{{ targetDetail[0].name }}</b> dengan nomor rekening :</h6>
                                    <h1 class="font-weight-bold mb-4 code">
                                        <span ref="numberRekening">{{ targetDetail[0].number }}</span> 
                                        <button 
                                            v-clipboard:copy="targetDetail[0].number"
                                            v-clipboard:success="onCopy"
                                            v-clipboard:error="onError"
                                            class="btn btn-sm btn-secondary ml-5">
                                            
                                            <i class="fa fa-copy mr-2"></i> {{ $t('copy') }}
                                        </button> 
                                    </h1>
                                    <h6 class="mb-2" v-if="this.$i18n.locale === 'en'">Please make payment before <b>{{ dataInvoice.due_date }}</b> or your transaction will be automatically canceled by the system.</h6>
                                    <h6 class="mb-2" v-else>Silahkan lakukan pembayaran sebelum <b>{{ dataInvoice.due_date }}</b> atau transaksi kamu akan di batalkan otomatis oleh sistem.</h6>
                                    <p class="size-10 mb-2"><em>{{ $t('infoTransfer') }}</em></p>
                                </b-col>
                            </b-row>
                            <hr class="hr-space"/>
                            <div class="invoice no-shadow mb-0">
                                <b-row>
                                    <b-col md="6">
                                        <img src="/lexar/logo-brown.png" alt="" class="small-logo">
                                        <h6>{{ $t('invoice') }} {{ dataInvoice.invoice_number }}</h6>
                                        <h6>{{ $t('invoiceDate') }} {{ dataInvoice.date }}</h6>
                                        <h6>{{ dataMatrix.nama_perseroan }}</h6>
                                    </b-col>
                                    <b-col md="6" class="text-md-right">
                                        <h6>PT Karya Lexar Progressif</h6>
                                        <h6>hello@lexar.id‎</h6>
                                        <h6>+62 858-9282-4010</h6>
                                        <h6>Menara Mandiri II, Lt. 12</h6>
                                        <h6>Jl. Jend. Sudirman, No. 54-55,</h6>
                                        <h6>Senayan, Kebayoran Baru, Jakarta Selatan, Indonesia 12190</h6>
                                    </b-col>
                                    <b-col md="12">
                                        <div class="table-overflow">
                                            <table class="table table-bordered mt-4">
                                                <thead>
                                                    <tr>
                                                        <th>{{ $t('itemName') }}</th>
                                                        <th>{{ $t('desc') }}</th>
                                                        <th>{{ $t('price') }}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{{ $t('establish') }} {{ dataMatrix.nama_perseroan }}</td>
                                                        <td>{{ $t('establish') }} {{ dataMatrix.nama_perseroan }} Local Full</td>
                                                        <td>Rp. {{ dataInvoice.total_price.toLocaleString('id') }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2" class="font-weight-bold">
                                                            Total
                                                        </td>
                                                        <td class="font-weight-bold">
                                                            Rp. {{ dataInvoice.total_price.toLocaleString('id') }}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p class="text-center mt-5 mb-0">
                                            <button class="btn btn-secondary big d-none" @click.prevent="payProject">Share Invoice</button>
                                            <button @click="printPage" class="btn btn-primary mr-3">Print</button>
                                            <button v-b-modal.modal-confirm class="btn btn-secondary" v-if="dataInvoice.payment_status != 'SUCCESS'">{{ $t('done') }}</button>
                                            <b-link :to="localePath({ name: 'dashboard' })"  class="btn btn-secondary" v-else>{{ $t('signingSet') }}</b-link>
                                        </p>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-card>

                    </b-col>
                </b-row>
            </b-container>
        </div>

        <b-modal id="modal-confirm" class="text-center" title="" hide-footer>
            <h3 class="text-center">{{ $t('popThanks') }}</h3>
            <p class="my-4 text-center">{{ $t('invoiceDone') }}<br/> <b class="big">hello@lexar.id</b></p>
            <p class="text-center">
                <b-link :to="localePath({ name: 'dashboard-transaction' })" class="btn btn-secondary">{{ $t('okay') }}</b-link>
            </p>
        </b-modal>
    </div>
</template>

<script>
export default {
    layout: "dashboard",
    middleware: 'auth',
    async asyncData({ app, route }){
        const temp = await app.$matrix.getInvoice(route.params.id);
        const tempTargetDetail = await app.$matrix.getPaymentTargetDetail(temp.data.payment_target);
        const tempMethodDetail = await app.$matrix.getPaymentMethodDetail(temp.data.payment_method);
        const tempMatrix = await app.$matrix.getDetailMatrix(temp.data.detail[0].detail_id);

        return { 
            dataMatrix: tempMatrix.data,
            dataInvoice: temp.data,
            methodDetail: tempMethodDetail.data,
            targetDetail: tempTargetDetail.data,
        }
    },
    data(){
        return{
            dataMatrix: {},
            dataInvoice: {},
            targetDetail: {},
            methodDetail: {},
        }
    },
    methods: {
        printPage(){
            window.print();
        },
        onCopy: function (e) {
            this.$toast.success("You just copied : " + e.text).goAway(2000);
        },
        onError: function (e) {
            this.$toast.error("Failed to copy texts").goAway(2000);
        },
    }
}
</script>
