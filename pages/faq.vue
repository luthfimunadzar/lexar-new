<template>
    <div>
        <!-- Hero Inner -->
        <div class="inner-hero" style="background-image: url('/lexar/faq.jpg');">
            <b-container>
                <b-row>
                    <b-col>
                        <h3>FAQ</h3>
                        <h5>Frequently Asked Questions About LEXAR</h5>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- FAQ -->
        <div role="tablist" class="faq white-panel">
            <b-container>
                <b-row>
                    <b-col md="12">
                        <h5 class="faq-title">{{ $t('faqTitle1') }}</h5>
                    </b-col>
                    <b-col md="12" class="card-list">
                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-1>
                                    {{ $t('faq1Question1') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-1" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer1')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-2>
                                    {{ $t('faq1Question2') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer2')">
                                 </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-3>
                                    {{ $t('faq1Question3') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer3')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-4>
                                    {{ $t('faq1Question4') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer4')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-5>
                                    {{ $t('faq1Question5') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-5" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer5')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-6>
                                    {{ $t('faq1Question6') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-6" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer6')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-7>
                                    {{ $t('faq1Question7') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-7" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer7')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-8>
                                    {{ $t('faq1Question8') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-8" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer8')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-9>
                                    {{ $t('faq1Question9') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-9" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer9')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-10>
                                    {{ $t('faq1Question10') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-10" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer10')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        
                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-11>
                                    {{ $t('faq1Question11') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-11" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer11')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                        
                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.incorp-12>
                                    {{ $t('faq1Question12') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="incorp-12" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq1Answer12')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12">
                        <h5 class="faq-title">{{ $t('faqTitle2') }}</h5>
                    </b-col>
                    <b-col md="12" class="card-list">
                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.notas-1>
                                    {{ $t('faq2Question1') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="notas-1" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq2Answer1')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.notas-2>
                                    {{ $t('faq2Question2') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="notas-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq2Answer2')">
                                 </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.notas-3>
                                    {{ $t('faq2Question3') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="notas-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq2Answer3')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.notas-4>
                                    {{ $t('faq2Question4') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="notas-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq2Answer4')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.notas-5>
                                    {{ $t('faq2Question5') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="notas-5" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq2Answer5')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12">
                        <h5 class="faq-title">{{ $t('faqTitle3') }}</h5>
                    </b-col>
                    <b-col md="12" class="card-list">
                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.license-1>
                                    {{ $t('faq3Question1') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="license-1" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq3Answer1')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.license-2>
                                    {{ $t('faq3Question2') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="license-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq3Answer2')">
                                 </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.license-3>
                                    {{ $t('faq3Question3') }}
                                   <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="license-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq3Answer3')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12">
                        <h5 class="faq-title">{{ $t('faqTitle4') }}</h5>
                    </b-col>
                    <b-col md="12" class="card-list">
                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.property-1>
                                    {{ $t('faq4Question1') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="property-1" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq4Answer1')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.property-2>
                                    {{ $t('faq4Question2') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="property-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq4Answer2')">
                                 </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.property-3>
                                    {{ $t('faq4Question3') }}
                                   <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="property-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq4Answer3')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.property-4>
                                    {{ $t('faq4Question4') }}
                                   <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="property-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq4Answer4')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.property-5>
                                    {{ $t('faq4Question5') }}
                                   <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="property-5" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq4Answer5')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12">
                        <h5 class="faq-title">{{ $t('faqTitle5') }}</h5>
                    </b-col>
                    <b-col md="12" class="card-list">
                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.finance-1>
                                    {{ $t('faq5Question1') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="finance-1" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq5Answer1')">
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body>
                            <b-card-header header-tag="header" role="tab">
                                <b-link v-b-toggle.finance-2>
                                    {{ $t('faq5Question2') }}
                                    <img src="/lexar/angle-bottom.png" alt="">
                                </b-link>
                            </b-card-header>
                            <b-collapse id="finance-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body v-html="$t('faq5Answer2')">
                                 </b-card-body>
                            </b-collapse>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";

export default {
  data() {
    return {
    };
  },
    head () {
        return {
            title: 'FAQ | LEXAR',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'Frequently Asked Questions about LEXAR' },
                { hid: 'og:title', name: 'og:title', content: 'FAQ | LEXAR' },
                { hid: 'og:description', name: 'og:description', content: 'Frequently Asked Questions about LEXAR' },
            ]
        }
    },
  methods: {
  }
};
</script>
