<template>
    <div>
        <div class="dashboard-wrap">
            <b-container>
                <b-row>
                    <b-col>
                        <h3 class="dashboard-title">Invoice</h3>
                        <b-card class="invoice">
                            <b-row>
                                <b-col md="6">
                                    <img src="/lexar/logo-brown.png" alt="" class="logo-invoice">
                                    <h6>Invoice #1235</h6>
                                    <h6>Invoice date 02/02/2019</h6>
                                    <h6>PT Cinta Sejati</h6>
                                </b-col>
                                <b-col md="6" class="text-md-right">
                                    <h6>PT Karya Lexar Progressif</h6>
                                    <h6>hello@lexar.id‎</h6>
                                    <h6>+62 858-9282-4010</h6>
                                    <h6>Menara Mandiri II, Lt. 12</h6>
                                    <h6>Jl. Jend. Sudirman, No. 54-55,</h6>
                                    <h6>Senayan, Kebayoran Baru,Jakarta Selatan, Indonesia 12190</h6>
                                </b-col>
                                <b-col md="12">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Item Name</th>
                                                <th>Deskripsi</th>
                                                <th>Harga</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Pembuatan PT Cinta Sejati</td>
                                                <td>Pembuatan PT Cinta Sejati Domisili Jakarta</td>
                                                <td>Rp. 10.000.000</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="font-weight-bold">
                                                    Total
                                                </td>
                                                <td class="font-weight-bold">
                                                    Rp. 10.000.000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    
                                    <button class="btn btn-secondary big btn-half">Share Invoice</button>
                                    <nuxt-link class="btn btn-primary big btn-half" :to="localePath('more-information')">{{ $t('continue') }} to payment</nuxt-link>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    layout: "dashboard",
}
</script>
