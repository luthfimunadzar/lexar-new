<template>
    <div>
        <div class="dashboard-wrap">
            <b-container>
                <b-row>
                    <b-col>
                        <!-- <b-alert show variant="warning" class="alert-dashboard">Your email have not been verified, please check your email. <b-link><b>Resend Email Verification</b></b-link></b-alert> -->
                        <h3 class="dashboard-title float-left mt-2">{{ $t('transactionTitle') }}</h3>
                        
                        <div class="clearfix"></div>
                        <div v-if="listTransaction">
                            <div class="project-item" v-for="list in listTransaction" :key="list.id">
                                <b-row>
                                    <b-col md="9">
                                        <b-row>
                                            <b-col md="3">
                                                <label>{{ $t('invoiceNumber') }}</label>
                                                <div class="clearfix"></div>
                                                <h4>{{ list.invoice_number }}</h4>
                                            </b-col>
                                            <b-col md="3">
                                                <label>{{ $t('transactionTotal') }}</label>
                                                <div class="clearfix"></div>
                                                <h4>Rp. {{ list.total_price.toLocaleString('id') }}</h4>
                                            </b-col>
                                            <b-col md="3">
                                                <label>{{ $t('date') }}</label>
                                                <div class="clearfix"></div>
                                                <h4>{{ list.date }}</h4>
                                            </b-col>
                                            <b-col md="3">
                                                <label>Status</label>
                                                <div class="clearfix"></div>
                                                <h4>{{ list.payment_status }}</h4>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                    <b-col md="3" class="text-right">
                                        <nuxt-link class="btn btn-secondary big mt-2 w-100" :to="localePath({ name: 'dashboard-transaction-id', params: { id: list.id } })">{{ $t('transactionDetail') }}</nuxt-link>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                        <div class="no-transaction" v-else>
                            <img src="/lexar/transaction.svg" alt="">
                            <h4 v-html="$t('noTransaction')"></h4>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    layout: "dashboard",
    middleware: 'auth',
    async asyncData({ app }){
        const list = await app.$matrix.getListTransaction();
        return { listTransaction: list.data }
    },
    data(){
        return{
            listTransaction: null,
        }
    },
}
</script>
