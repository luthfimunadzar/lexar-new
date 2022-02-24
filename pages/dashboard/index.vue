<template>
    <div>
        <div class="dashboard-wrap">
            <b-container>
                <b-row>
                    <b-col>
                        <b-alert show variant="warning" class="alert-dashboard" v-if="!dataVerified.verified">{{ $t('alertEmail') }} <b-link class="d-none"><b>{{ $t('alertEmailLink') }}</b></b-link></b-alert>

                        <h3 class="dashboard-title float-left mt-2">{{ $t('dbTitle') }}</h3>
                        
                        <div class="clearfix"></div>
                        <h5 class="service-title float-left mt-3 mb-md-0">Jasa Pendaftaran Trademark</h5>
                        <b-link href="/trademark/start" class="btn btn-primary rounded-shadow btn-left-sm float-right mb-3">Daftarkan Trademark Baru</b-link>
                        <div class="clearfix"></div>
                        <div v-if="listTrademark.length">
                            <div class="project-item" v-for="list in listTrademark" :key="list.id">
                                <b-row>
                                    <b-col md="4">
                                        <label>Nama Merek</label>
                                        <div class="clearfix"></div>
                                        <h4>{{ list.nama_merek }}</h4>
                                    </b-col>
                                    <b-col md="4">
                                        <label>Status</label>
                                        <div class="clearfix"></div>
                                        <h4>{{ list.status_trademark.status }}</h4>
                                        <!-- <a href="javascript:void(0)" class="view-all" v-b-toggle="'step-' + list.id"></a> -->
                                    </b-col>
                                    <b-col md="4" class="text-center">
                                        <nuxt-link class="btn btn-secondary big mt-2" :to="localePath({ name: 'dashboard-trademark-id-informasi-merek', params: { id: list.id } })">Lanjutkan Pengisian Data</nuxt-link>
                                    </b-col>
                                </b-row>
                                <!-- <b-row>
                                    <b-col>
                                        <b-collapse :id="'step-' + list.id">
                                            <ul class="step mb-4 btop">
                                                <li><span class="dots">1</span> {{ $t('step1PT') }}</li>
                                                <li :class="[{'active': list.status_project === '1'}]"><span class="dots">2</span> {{ $t('step2PT') }}</li>
                                                <li :class="[{'active': list.status_project === '2'}]"><span class="dots">3</span> {{ $t('step3PT') }}</li>
                                                <li :class="[{'active': list.status_project === '3'}]"><span class="dots">4</span> {{ $t('step4PT') }}</li>
                                                <li :class="[{'active': list.status_project === '4'}]"><span class="dots">5</span> {{ $t('step5PT') }}</li>
                                                <li :class="[{'active': list.status_project === '5'}]"><span class="dots">6</span> {{ $t('step6PT') }}</li>
                                                <li :class="[{'active': list.status_project === '6'}]"><span class="dots">7</span> {{ $t('step7PT') }}</li>
                                                <li :class="[{'active': list.status_project === '7'}]"><span class="dots">8</span> {{ $t('step8PT') }}</li>
                                            </ul>
                                        </b-collapse>
                                    </b-col>
                                </b-row> -->
                            </div>
                        </div>
                        
                        <b-link href="/trademark/start" class="no-transaction" v-else>
                            <img src="/lexar/transaction.svg" alt="">
                            <h4>Maaf anda mendaftarkan Trademark</h4>
                            <h6>Daftarkan Trademark kamu sekarang!</h6>
                        </b-link>


                        <h5 class="service-title float-left mt-3 mb-md-0">Pembuatan PT</h5>
                        <b-link :to="localePath('incorporation-start')" class="btn btn-primary rounded-shadow btn-left-sm float-right mb-3">Buat Perusahaan Baru</b-link>
                        <div class="clearfix"></div>
                        <div v-if="listMatrix.length">
                            <div class="project-item" v-for="list in listMatrix" :key="list.id">
                                <b-row>
                                    <b-col md="4">
                                        <label>{{ $t('companyName') }}</label>
                                        <div class="clearfix"></div>
                                        <h4>{{ list.matrix.nama_perseroan }}</h4>
                                    </b-col>
                                    <b-col md="4">
                                        <label>Status</label>
                                        <div class="clearfix"></div>
                                        <h4 v-if="list.status_project === '1'">{{ $t('step2PT') }}</h4>
                                        <h4 v-if="list.status_project === '2'">{{ $t('step3PT') }}</h4>
                                        <h4 v-if="list.status_project === '3'">{{ $t('step4PT') }}</h4>
                                        <h4 v-if="list.status_project === '4'">{{ $t('step5PT') }}</h4>
                                        <h4 v-if="list.status_project === '5'">{{ $t('step6PT') }}</h4>
                                        <h4 v-if="list.status_project === '6'">{{ $t('step7PT') }}</h4>
                                        <h4 v-if="list.status_project === '7'">{{ $t('step8PT') }}</h4>
                                        <a href="javascript:void(0)" class="view-all" v-b-toggle="'step-' + list.id"></a>
                                    </b-col>
                                    <b-col md="4" class="text-center">
                                        <nuxt-link class="btn btn-secondary big mt-2" :to="localePath({ name: 'dashboard-incorporation-id-company-detail', params: { id: list.matrix.idmatrix } })">{{ $t('continueFill') }}</nuxt-link>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <b-collapse :id="'step-' + list.id">
                                            <ul class="step mb-4 btop">
                                                <li><span class="dots">1</span> {{ $t('step1PT') }}</li>
                                                <li :class="[{'active': list.status_project === '1'}]"><span class="dots">2</span> {{ $t('step2PT') }}</li>
                                                <li :class="[{'active': list.status_project === '2'}]"><span class="dots">3</span> {{ $t('step3PT') }}</li>
                                                <li :class="[{'active': list.status_project === '3'}]"><span class="dots">4</span> {{ $t('step4PT') }}</li>
                                                <li :class="[{'active': list.status_project === '4'}]"><span class="dots">5</span> {{ $t('step5PT') }}</li>
                                                <li :class="[{'active': list.status_project === '5'}]"><span class="dots">6</span> {{ $t('step6PT') }}</li>
                                                <li :class="[{'active': list.status_project === '6'}]"><span class="dots">7</span> {{ $t('step7PT') }}</li>
                                                <li :class="[{'active': list.status_project === '7'}]"><span class="dots">8</span> {{ $t('step8PT') }}</li>
                                            </ul>
                                        </b-collapse>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                        
                        <b-link :to="localePath('incorporation-start')" class="no-transaction" v-else>
                            <img src="/lexar/transaction.svg" alt="">
                            <h4 v-html="$t('noCompany')"></h4>
                            <h6>Buat Perusahaan kamu sekarang!</h6>
                        </b-link>

                        <b-modal id="modal-add" title="Pilihan Service Lexar" size="lg" centered content-class="model-add" hide-footer>
                            <div class="row">
                                <div class="col-md-6">
                                    <b-link :to="localePath('incorporation-start')" class="btn btn-primary"><img src="/lexar/corporation.png" alt=""> <h5>Incorporation</h5></b-link>
                                </div>
                                <div class="col-md-6">
                                    <b-link href="/trademark/start" class="btn btn-secondary"><img src="/lexar/trademark-blue.png" alt=""> <h5>Trademark</h5></b-link>
                                </div>
                            </div>
                        </b-modal>
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
        let tempMatrixIncorp = await app.$matrix.getList();
        let tempMatrixTrademark = await app.$trademark.getListTrademark();
        let verification = await app.$matrix.getVerification();

        return { listMatrix: tempMatrixIncorp.data,  dataVerified: verification.data, listTrademark: tempMatrixTrademark.data}
    },
    data(){
        return{
            listMatrix: [],
            listTrademark: [],
            dataVerified: null,
        }
    },
}
</script>
