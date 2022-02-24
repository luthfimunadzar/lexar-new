<template>
    <div>
        <!-- Hero Inner -->
        <div class="inner-corp d-flex align-items-center">
            <b-container>
                <b-row class="d-flex align-items-center">
                    <b-col md="6">
                        <h3 v-html="$t('incorpTitle')"></h3>
                        <h6>{{ $t('incorpSubTitle') }}</h6>
                        <nuxt-link :to="localePath('incorporation-start')" class="btn btn-secondary big mb-2">{{ $t('incorpButtonTitle') }}</nuxt-link>
                    </b-col>
                    <b-col md="6"> 
                        <vue-plyr>
                            <div data-plyr-provider="youtube" data-plyr-embed-id="w8lwh0Yo2jE"></div>
                        </vue-plyr>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Incorporation Steps -->
        <div class="easy-step white-panel">
            <b-container>
                <b-row>
                    <b-col md="8" offset-md="2" class="text-center">
                        <h4 class="sec-title text-center">Create a PT as EASY as 1, 2, 3</h4>
                        <span class="underline"></span>
                    </b-col> 
                </b-row>
                <b-row class="d-flex align-items-center">
                    <b-col md="4">
                        <div class="step-item">
                            <div class="wrap">
                                <img src="/lexar/isi-form.svg" alt="">
                            </div>
                            <h5>Fill the Form</h5>
                        </div>
                    </b-col>
                    <b-col md="4">
                        <div class="step-item">
                            <div class="wrap">
                                <img src="/lexar/atur-jadwal.svg" alt="">
                            </div>
                            <h5>Set The Schedule</h5>
                        </div>
                    </b-col>
                    <b-col md="4">
                        <div class="step-item">
                            <div class="wrap">
                                <img src="/lexar/pt-done.svg" alt="">
                            </div>
                            <h5>PT Done</h5>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>


        <!-- Comparison Section -->
        <div class="compare-corp gray-panel">
            <b-container>
                <b-row class="d-flex align-items-center">
                    <b-col md="12">
                        <div class="compare-item special mb-md-0 mb-5 mt-md-0 mt-4">
                            <h4 class="sec-title text-center mb-mb-0 mb-5">
                                <span class="text">
                                    {{ $t('compareTitle') }}
                                </span>
                                <span class="img-lexar">
                                    <img src="/lexar/logo-brown.png" alt="">
                                </span>
                            </h4>

                            <div class="row">
                                <div class="col-md-4 text-center">
                                    <img src="/lexar/search.png" alt="" class="icon-compare">
                                    <div class="compare-title-wrap">
                                        <h6 v-html="$t('compareItemFeature1')"></h6>
                                    </div>
                                    <p>{{ $t('compareItemDesc1') }}</p>
                                </div>
                                <div class="col-md-4 text-center">
                                    <img src="/lexar/earth-globe.png" alt="" class="icon-compare">
                                    <div class="compare-title-wrap">
                                        <h6 v-html="$t('compareItemFeature2')"></h6>
                                    </div>
                                    <p>{{ $t('compareItemDesc2') }}</p>
                                    <p></p>
                                </div>
                                <div class="col-md-4 text-center">
                                    <img src="/lexar/tag.png" alt="" class="icon-compare">
                                    <div class="compare-title-wrap">
                                        <h6 v-html="$t('compareItemFeature3')"></h6>
                                    </div>
                                    <p>{{ $t('compareItemDesc3') }}</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- What do you get Section -->
        <div class="wdyg-corp white-panel">
            <b-container>
                <b-row>
                    <b-col md="8" offset-md="2">
                        <h4 class="sec-title text-center mb-3" v-html="$t('wdygTitle')"></h4>
                        <p class="sec-subtitle text-center" v-html="$t('wdygSubTitle')"></p>
                    </b-col> 
                    <b-col md="4">
                        <div class="wdyg-item">
                            <img src="/lexar/checked.png" alt="">
                            <h5>{{ $t('wdygItem1') }}</h5>
                            <h6>{{ $t('wdygSubItem1') }}</h6>
                        </div>
                    </b-col>
                    <b-col md="4">
                        <div class="wdyg-item">
                            <img src="/lexar/checked.png" alt="">
                            <h5>{{ $t('wdygItem2') }}</h5>
                            <h6>{{ $t('wdygSubItem2') }}</h6>
                        </div>
                    </b-col>
                    <b-col md="4">
                        <div class="wdyg-item">
                            <img src="/lexar/checked.png" alt="">
                            <h5>{{ $t('wdygItem3') }}</h5>
                            <h6>{{ $t('wdygSubItem3') }}</h6>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Call to Action corp Section -->
        <div class="cta-corp gray-panel">
            <b-container>
                <div class="cta-wrap">
                    <b-row class="d-flex align-items-center">
                        <b-col md="8" offset-md="2">
                            <h4 class="sec-title mb-sm-3 mb-2" v-html="$t('ctaCorpTitle')"></h4>
                            <p class="sec-subtitle mb-sm-4 mb-3 d-none" v-html="$t('ctaCorpSubTitle')"></p>
                            <nuxt-link :to="localePath('incorporation-start')" class="btn btn-secondary big mb-3">{{ $t('incorpButtonTitle') }}</nuxt-link>
                            <div class="clearfix"></div>
                            <nuxt-link :to="localePath('contact')" class="contact-link">{{ $t('contactTitle') }}</nuxt-link>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";

export default {
    head () {
        return {
            title: 'Incorporation | LEXAR',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'Scale up your business by establishing a legally-compliant company in a short time. LEXAR is a pioneer in providing online legal services to help entrepreneurs complete legal documents to effectively achieve full compliance.' },
                { hid: 'og:title', name: 'og:title', content: 'Incorporation | LEXAR' },
                { hid: 'og:description', name: 'og:description', content: 'Scale up your business by establishing a legally-compliant company in a short time. LEXAR is a pioneer in providing online legal services to help entrepreneurs complete legal documents to effectively achieve full compliance.' },
            ]
        }
    },
}
</script>
