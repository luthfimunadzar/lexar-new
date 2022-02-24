<template>
    <div>
        <div class="dashboard-wrap">
            <b-container>
                <form action="">
                    <b-row>
                        <b-col md="12">
                            <h3 class="dashboard-title text-center mb-3 font-weight-bold">{{ $t('payment') }} {{ dataMatrix.nama_perseroan }}</h3>
                            <h5 class="text-center mb-3" v-if="chosenFirst">Please choose your payment methods: </h5>
                        </b-col>
                        <b-col md="6" offset-md="3" v-if="chosenFirst">
                            <b-row>
                                <b-col md="6">
                                    <b-link @click="triggerMethod(target.id)" :class="[{'chosen': payment_method === methods[0].id}, 'payment-card']">
                                        <div>
                                            <b>{{ methods[0].payment_method }}</b>
                                        </div>
                                    </b-link>
                                </b-col>
                                <b-col md="6">
                                    <b-link class="payment-card">
                                        <div>
                                            <b>{{ methods[1].payment_method }}</b>
                                            <span>is unavailable</span>
                                        </div>
                                    </b-link>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col md="12" v-if="chosenMethod">
                            <h5 class="text-center mb-4">{{ $t('paymentText') }}</h5>
                        </b-col>
                        <b-col md="6" offset-md="3" v-if="chosenMethod">
                            <b-row class="justify-content-center">
                                <b-col md="6" v-for="target in targets" :key="target.id">
                                    <b-link @click="triggerTarget(target.id)" :class="[{'chosen': payment_target === target.id}, 'payment-card']">
                                        <div>
                                            <b>{{ target.bank_name }}</b>
                                            <span>{{ target.name }}</span>
                                        </div>
                                    </b-link>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col md="12" v-if="chosenTarget">
                            <h5 class="text-center mb-4">{{ $t('hereInvoice') }}</h5>
                            <b-card class="invoice">
                                <b-row>
                                    <b-col md="6">
                                        <img src="/lexar/logo-brown.png" alt="" class="logo-invoice">
                                        <h6>{{ $t('invoice') }} #1235</h6>
                                        <h6>{{ $t('invoiceDate') }} 02/02/2019</h6>
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
                                        <b-alert show variant="info" class="mb-0 mt-3">
                                            <p class="mb-1">{{ $t('paymentMethod') }} : <b>{{ methodDetail[0].description }}</b></p>
                                            <p class="mb-1">{{ $t('bankName') }} : <b>{{ targetDetail[0].bank_name }}</b></p>
                                            <p class="mb-0">{{ $t('name') }} : <b>{{ targetDetail[0].name }}</b></p>
                                            <!-- <p class="mb-0">Account Number : <b>{{ targetDetail[0].number }}</b></p> -->
                                        </b-alert>
                                    </b-col>
                                    <b-col md="12">
                                        <table class="table mt-3 table-bordered">
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
                                                    <td>{{ total_price.mini_description }}</td>
                                                    <td>Rp. {{ total_price.price.toLocaleString('id') }}</td>
                                                </tr>
                                                <template v-if="dataVO">
                                                    <tr>
                                                        <td>{{ dataVO.name }}</td>
                                                        <td>{{ dataVO.mini_description }}</td>
                                                        <td>Rp. {{ dataVO.price.toLocaleString('id') }}</td>
                                                    </tr>
                                                </template>
                                                <template v-if="dataVoucher">
                                                    <tr v-if="dataVoucher.meta.code === 200">
                                                        <td>Discount Voucher</td>
                                                        <td>Potongan Discount Voucher</td>
                                                        <td>Rp. {{ dataVoucher.data.discount.toLocaleString('id') }}</td>
                                                    </tr>
                                                </template>
                                                <tr>
                                                    <td colspan="2" class="font-weight-bold">
                                                        Total
                                                    </td>
                                                    <template v-if="dataVoucher">
                                                        <td class="font-weight-bold" v-if="dataVoucher.meta.code === 200">
                                                            Rp. {{ (sum_price - dataVoucher.data.discount).toLocaleString('id') }}
                                                        </td>
                                                    </template>
                                                    <td class="font-weight-bold">
                                                        Rp. {{ sum_price.toLocaleString('id') }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <b-row>
                                            <b-col md="6" class="voucher">
                                                <h6 class="title-voucher">
                                                    Kode Voucher
                                                </h6>
                                                <b-row class="no-gutters">
                                                    <b-col md="8">                                        
                                                        <input type="text" v-model="kodeVoucher" class="form-control">                                      
                                                    </b-col>
                                                    <b-col md="4">                                        
                                                        <button class="btn btn-primary" @click.prevent="checkVoucher(kodeVoucher)">Check Voucher</button>
                                                    </b-col>
                                                </b-row>
                                                <template v-if="dataVoucher">
                                                    <h6 :class="[dataVoucher.meta.code === 410 ? 'd-show' : 'd-none', 'text-danger', 'mt-2', 'result']">
                                                        Maaf kode voucher sudah expired
                                                    </h6>
                                                    <h6 :class="[dataVoucher.meta.code === 200 ? 'd-show' : 'd-none', 'text-success', 'mt-2', 'result']">
                                                        Anda mendapatkan potongan sebesar Rp. {{ dataVoucher.data.discount.toLocaleString('id') }}
                                                    </h6>
                                                </template>
                                            </b-col>
                                        </b-row>

                                        <p class="text-center mt-5 mb-0">
                                            <button class="btn btn-secondary big rounded w-50" @click.prevent="payProject">{{ $t('checkoutNow') }}</button>
                                        </p>
                                    </b-col>
                                </b-row>
                            </b-card>
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
  async asyncData({ app, route }) {
    const tempMethod = await app.$matrix.getPaymentMethod();
    const tempTarget = await app.$matrix.getPaymentTarget();
    const tempMatrix = await app.$matrix.getDetailMatrix(route.params.id);
    const tempMethodDetail = await app.$matrix.getPaymentMethodDetail(1);

    let productId = 0;
    if (tempMatrix.data.modal_dasar > 1000000000) {
      productId = 2;
    } else {
      productId = 1;
    }

    const tempProduct = await app.$matrix.getProduct(productId);

    let voId = 0;
    let tempVO = {};
    if(tempMatrix.data.status_kantor==="Virtual Office"){
        voId = 3;
        tempVO = await app.$matrix.getProduct(voId);
    }


    return {
      methods: tempMethod.data,
      targets: tempTarget.data,
      dataMatrix: tempMatrix.data,
      methodDetail: tempMethodDetail.data,
      total_price: tempProduct.data[0],
      dataVO: tempVO.data[0],
      sum_price: tempProduct.data[0].price + tempVO.data[0].price,
      product_id: (voId === 0) ? [productId] : [productId, voId]
    };
  },
  data() {
    return {
      chosenMethod: true,
      chosenTarget: false,
      chosenFirst: false,
      loading: false,
      ready: false,
      payment_method: 1,
      payment_target: "",
      methods: {},
      targets: {},
      dataMatrix: {},
      methodDetail: {},
      targetDetail: {},
      product_id: [],
      dataVoucher: false,
      kodeVoucher: "",
      total_price: null,
      sum_price: null,
      dataVO: {},
    };
  },
  methods: {
    async triggerMethod(params) {
      this.payment_method = params;
      const tempMethodDetail = await this.$matrix.getPaymentMethodDetail(
        this.payment_method
      );
      this.methodDetail = tempMethodDetail.data;
      this.chosenFirst = false;
      this.chosenMethod = true;
    },
    async triggerTarget(params) {
      this.payment_target = params;
      const tempTargetDetail = await this.$matrix.getPaymentTargetDetail(
        this.payment_target
      );
      this.targetDetail = tempTargetDetail.data;
      this.chosenMethod = false;
      this.chosenTarget = true;
    },
    async payProject() {
      try {
        this.loading = true;

        const checkout = await this.$matrix.checkout({
          idmatrix: this.dataMatrix.idmatrix,
          total_price: (this.dataVoucher) ? this.sum_price - this.dataVoucher.data.discount : this.sum_price,
          memo: "Incorp Online Via Website",
          terms: "standar",
          voucher_code: (this.kodeVoucher) ? this.kodeVoucher : "",
          discount_amount: (this.dataVoucher) ? this.dataVoucher.data.discount : 0,
          payment_method: this.payment_method,
          payment_target: this.payment_target,
          product_id: this.product_id,
          vo_branch: this.dataMatrix.vo_branch
        });
        this.$router.push(
          this.localePath({
            name: "dashboard-transaction-id",
            params: { id: checkout.data.id }
          })
        );
      } catch (error) {
        console.log(error);
        this.loading = false;
        // this.$toast.error(error.response.data.message).goAway(2000);
      }
    },
    async checkVoucher(params){
        try{
            let tempVoucher = await this.$matrix.checkVoucher({
                code: params,
                service_id: [1],
                listing_id: [this.product_id],
                price: this.total_price[0].price,
            })
            this.dataVoucher = tempVoucher;
        } catch(error) {
            this.$toast.error(error.response.data.message).goAway(2000);
        }
    }

  }
};
</script>