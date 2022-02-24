<template>
    <div id="container">

        <!-- Hero -->
        <b-carousel
        :interval="4000"
        controls
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        >
            <b-carousel-slide style="background-image: url('/lexar/hero.jpg')">
                <h2><span v-html="$t('hero-tagline')"></span></h2>
                <b-button variant="secondary" v-scroll-to="'#scrollDown'">{{ $t('lmore') }}</b-button>
            </b-carousel-slide>
            <b-carousel-slide style="background-image: url('/lexar/voffice.jpg')">
                <h2 class="lowsize"><span v-html="$t('hero-voffice')"></span></h2>
                <a class="btn btn-secondary mt-3 d-inline-block" href="https://domisili.lexar.id/">{{ $t('lmore') }}</a>
            </b-carousel-slide>
            <b-carousel-slide style="background-image: url('/lexar/bandung.jpg')">
                <h2 class="lowsize"><span v-html="$t('hero-bandung')"></span></h2>
            </b-carousel-slide>
            <b-carousel-slide style="background-color: #2D384A;">
                <h2 class="mb-3"><span v-html="$t('hero-incorp-title')"></span></h2>
                <h2 class="lowsize"><span class="f-desc" v-html="$t('hero-incorp-subtitle')"></span></h2>
                <b-link :to="localePath('incorporation')" class="btn btn-primary">{{ $t('lmore') }}</b-link>
                <img src="/lexar/incorp.svg" alt="" class="carousel-image">
            </b-carousel-slide>
        </b-carousel>

        <!-- Incorp Home -->
        <div class="incorp-home white-panel d-none">
            <b-container>
                <div class="incorp-wrap">
                    <b-row class="d-flex align-items-center">
                        <b-col md="6" class="text-center">
                            <img src="/lexar/website.svg" alt="" class="illu">
                        </b-col>
                        <b-col md="6">
                            <h2>Have Company<br/>Within 14 Days</h2>
                            <p>Check out our Incorporation Online Services, create your company as simple as open your laptop within 14 Days. Check out our Incorporation Online Services, create your company as simple as open your laptop within 14 Days.</p>
                            <b-button variant="secondary" v-scroll-to="'#scrollDown'">Try Online Incorporation Now</b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>

        <!-- Feature -->
        <div class="feature gray-panel" id="scrollDown">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <h4 class="sec-title"><span v-html="$t('featureTitle')"></span></h4>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6" lg="3">
                        <div class="feature-item">
                            <img src="/lexar/time-management.png" alt="">
                            <h5>{{ $t('featureItem1') }}</h5>
                            <p>{{ $t('featureSubItem1') }}</p>
                        </div>
                    </b-col>
                    <b-col cols="6" lg="3">
                        <div class="feature-item">
                            <img src="/lexar/time.png" alt="">
                            <h5>{{ $t('featureItem2') }}</h5>
                            <p>{{ $t('featureSubItem2') }}</p>
                        </div>
                    </b-col>
                    <b-col cols="6" lg="3">
                        <div class="feature-item">
                            <img src="/lexar/lamp.png" alt="">
                            <h5>{{ $t('featureItem3') }}</h5>
                            <p>{{ $t('featureSubItem3') }}</p>
                        </div>
                    </b-col>
                    <b-col cols="6" lg="3">
                        <div class="feature-item">
                            <img src="/lexar/speed.png" alt="">
                            <h5>{{ $t('featureItem4') }}</h5>
                            <p>{{ $t('featureSubItem4') }}</p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Service -->
        <div class="service white-panel">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <h4 class="sec-title"><span v-html="$t('homeServiceTitle')"></span></h4>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="6" md="6" lg="4">
                        <div class="service-item">
                            <img src="/lexar/skyline.png" alt="" class="s-icon">
                            <hr />
                            <h5>{{ $t('homeServiceItem1') }}</h5>
                            <p>{{ $t('homeServiceSubItem1') }}</p>
                            <b-link v-b-modal='"modal-company"'>{{ $t('inquire') }} <img src="/lexar/arrow.png" alt=""></b-link>
                        </div>
                    </b-col>
                    <b-col cols="6" md="6" lg="4">
                        <div class="service-item">
                            <img src="/lexar/agreement.png" alt="" class="s-icon">
                            <hr />
                            <h5>{{ $t('homeServiceItem2') }}</h5>
                            <p>{{ $t('homeServiceSubItem2') }}</p>
                            <b-link v-b-modal.modal-license>{{ $t('inquire') }} <img src="/lexar/arrow.png" alt=""></b-link>
                        </div>
                    </b-col>
                    <b-col cols="6" md="6" lg="4">
                        <div class="service-item">
                            <img src="/lexar/legal.png" alt="" class="s-icon">
                            <hr />
                            <h5>{{ $t('homeServiceItem3') }}</h5>
                            <p>{{ $t('homeServiceSubItem3') }}</p>
                            <b-link v-b-modal.modal-notarial>{{ $t('inquire') }} <img src="/lexar/arrow.png" alt=""></b-link>
                        </div>
                    </b-col>
                    <b-col cols="6" md="6" lg="4">
                        <div class="service-item">
                            <img src="/lexar/trademark.png" alt="" class="s-icon">
                            <hr />
                            <h5>{{ $t('homeServiceItem4') }}</h5>
                            <p><span v-html="$t('homeServiceSubItem4')"></span></p>
                            <b-link v-b-modal.modal-trademark>{{ $t('inquire') }} <img src="/lexar/arrow.png" alt=""></b-link>
                        </div>
                    </b-col>
                    <b-col cols="6" md="6" lg="4">
                        <div class="service-item">
                            <img src="/lexar/education.png" alt="" class="s-icon">
                            <hr />
                            <h5>{{ $t('homeServiceItem5') }}</h5>
                            <p>{{ $t('homeServiceSubItem5') }}</p>
                            <b-link v-b-modal.modal-corporate>{{ $t('inquire') }} <img src="/lexar/arrow.png" alt=""></b-link>
                        </div>
                    </b-col>
                    <b-col cols="6" md="6" lg="4">
                        <div class="service-item">
                            <img src="/lexar/briefcase.png" alt="" class="s-icon">
                            <hr />
                            <h5>{{ $t('homeServiceItem6') }}</h5>
                            <p><span v-html="$t('homeServiceSubItem6')"></span></p>
                            <b-link v-b-modal.modal-business>{{ $t('inquire') }} <img src="/lexar/arrow.png" alt=""></b-link>
                        </div>
                    </b-col>
                    <b-col cols="6" md="6" lg="4">
                        <div class="service-item">
                            <img src="/lexar/around.png" alt="" class="s-icon">
                            <hr />
                            <h5>{{ $t('homeServiceItem7') }}</h5>
                            <p>{{ $t('homeServiceSubItem7') }}</p>
                            <b-link v-b-modal.modal-expatriate>{{ $t('inquire') }} <img src="/lexar/arrow.png" alt=""></b-link>
                        </div>
                    </b-col>
                    <b-col cols="6" md="6" lg="4">
                        <div class="service-item">
                            <img src="/lexar/employee.png" alt="" class="s-icon">
                            <hr />
                            <h5>{{ $t('homeServiceItem8') }}</h5>
                            <p><span v-html="$t('homeServiceSubItem8')"></span></p>
                            <b-link v-b-modal.modal-dedicated>{{ $t('inquire') }} <img src="/lexar/arrow.png" alt=""></b-link>
                        </div>
                    </b-col>
                    <b-col cols="6" md="6" lg="4">
                        <div class="service-item">
                            <img src="/lexar/money.png" alt="" class="s-icon">
                            <hr />
                            <h5>{{ $t('homeServiceItem9') }}</h5>
                            <p>{{ $t('homeServiceSubItem9') }}</p>
                            <b-link v-b-modal.modal-fundraise>{{ $t('inquire') }} <img src="/lexar/arrow.png" alt=""></b-link>
                        </div>
                    </b-col>
                    <b-col cols="6" md="6" lg="4">
                        <div class="service-item">
                            <img src="/lexar/information.png" alt="" class="s-icon">
                            <hr />
                            <h5>{{ $t('homeServiceItem10') }}</h5>
                            <p>{{ $t('homeServiceSubItem10') }}</p>
                            <b-link :to="localePath('contact')">{{ $t('inquire') }} <img src="/lexar/arrow.png" alt=""></b-link>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Assist -->
        <div class="assist gray-panel">
            <b-container>
                <b-row>
                    <b-col lg="6">
                        <h4 class="sec-title assist-title"><span v-html="$t('assistTitle')"></span></h4>
                    </b-col>
                    <b-col lg="6">
                        <b-row>
                            <b-col cols="6" md="4">
                                <div class="assist-item">
                                    <h2>125</h2>
                                    <span>++</span>
                                    <h6>{{ $t('assistItem1') }}</h6>
                                </div>
                            </b-col>
                            <b-col cols="6" md="4">
                                <div class="assist-item">
                                    <h2>146</h2>
                                    <span>++</span>
                                    <h6>{{ $t('assistItem2') }}</h6>
                                </div>
                            </b-col>
                            <b-col cols="6" md="4">
                                <div class="assist-item">
                                    <h2>12</h2>
                                    <span>++</span>
                                    <h6>{{ $t('assistItem3') }}</h6>
                                </div>
                            </b-col>
                            <b-col cols="6" md="4">
                                <div class="assist-item mb-md-0">
                                    <h2>200</h2>
                                    <span>++</span>
                                    <h6>{{ $t('assistItem4') }}</h6>
                                </div>
                            </b-col>
                            <b-col cols="8" md="8" offset="2" offset-md="0">
                                <div class="assist-item mb-md-0">
                                    <span class="top">IDR</span>
                                    <h2>20</h2>
                                    <span>{{ $t('billion') }} ++</span>
                                    <h6>{{ $t('assistItem5') }}</h6>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Story -->
        <div class="story gray-panel d-none">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <h4 class="sec-title">Client Success Story</h4>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <carousel :perPage="1" :paginationEnabled="false" :navigationEnabled="true">
                            <slide>
                                <b-link to="#">
                                    <b-row class="align-items-center">
                                        <b-col md="6">
                                            <img src="/lexar/story.png" alt="" class="img-fluid">
                                        </b-col>
                                        <b-col md="6">
                                            <h5>Black Sheep Coffee Company Incorporation</h5>
                                            <h6>Culinary Industry, Company Incorporation Service</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. </p>
                                        </b-col>
                                    </b-row>
                                </b-link>
                            </slide>
                            <slide>
                                <b-link to="#">
                                    <b-row class="align-items-center">
                                        <b-col md="6">
                                            <img src="/lexar/story.png" alt="" class="img-fluid">
                                        </b-col>
                                        <b-col md="6">
                                            <h5>Black Sheep Coffee Company Incorporation</h5>
                                            <h6>Culinary Industry, Company Incorporation Service</h6>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ut aliquam purus sit. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. </p>
                                        </b-col>
                                    </b-row>
                                </b-link>
                            </slide>
                        </carousel>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Partner & Clients -->
        <no-ssr>
            <div class="pc-wrap white-panel">
                <b-container>
                    <b-row>
                        <b-col md="12">
                            <div class="pc-item testimonial">
                                <h5 class="text-center mt-5">{{ $t('testimoniTitle') }}</h5>
                                <b-row>
                                    <b-col>
                                        <carousel :perPageCustom="[[320, 1], [768, 1], [991, 1]]" :paginationEnabled="false" :navigationEnabled="true" :autoplay="true" :loop="true" :autoplayTimeout="15000" easing="linear">
                                            <slide>
                                                <div class="wrap">
                                                    <h4>"Communication cepat, jelas dan selalu available, team yang pengertian dan sangat efficient. Would recommend"</h4> 
                                                    <h6>Alvin Tjhie - PT pasar permainan dunia</h6>
                                                </div>
                                            </slide>
                                            <slide>
                                                <div class="wrap">
                                                    <h4>"Lexar sangat helpful untuk needs membuat PT dan ijin-ijin lainnya. Biarpun dengan kesibukan saya mereka tidak mempermasalahkan  untuk waktu dan bisa adjust ke needs customer. Kurir mereka juga cepat untuk jemput bola pada saat perlu tanda tangan dll. Over all good service. Will recommend you guys to my friends, thanks"</h4>
                                                    <h6>Amrit Harjani - PT Marco Cahaya Sejati</h6>
                                                </div>
                                            </slide>
                                            <slide>
                                                <div class="wrap">
                                                    <h4>"Good job Lexar! Quite responsive to our questions and needs, and was able to solve any issues that arise."</h4>
                                                    <h6>Jo Yan matheas - PT Auralis Biru Jingga Magenta</h6>
                                                </div>
                                            </slide>
                                        </carousel>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                        <b-col md="12">
                            <div class="pc-item">
                                <h5>{{ $t('clientTitle') }}</h5>
                                <hr />
                                <b-row>
                                    <b-col>
                                        <carousel :perPageCustom="[[320, 3], [768, 4], [991, 6]]" :paginationEnabled="false" :navigationEnabled="true" :autoplay="true" :loop="true" :autoplayTimeout="15000" easing="linear">
                                            <slide>
                                                <img src="/lexar/client/client-1.jpg" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-2.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-4.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-5.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-54.jpg" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-42.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-25.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-24.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-13.jpg" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-10.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-11.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-12.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-14.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-15.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-16.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-17.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-18.jpg" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-19.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-20.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-50.jpg" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-53.jpg" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-23.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-9.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-8.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-26.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-27.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-28.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-29.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-30.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-31.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-32.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-33.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-34.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-35.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-36.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-37.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-38.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-39.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-40.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-41.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-7.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-43.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-44.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-45.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-51.jpg" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-47.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-48.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-49.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-21.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-46.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-52.jpg" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-22.png" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-6.jpg" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-55.jpg" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-56.jpg" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-57.jpg" alt="" class="img-fluid">
                                                <img src="/lexar/client/client-58.jpg" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/client/client-59.jpg" alt="" class="img-fluid">
                                            </slide>
                                        </carousel>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                        <b-col md="12">
                            <div class="pc-item">
                                <h5 class="text-right mt-5">{{ $t('partnerTitle') }}</h5>
                                <hr />
                                <b-row>
                                    <b-col>
                                        <carousel :perPageCustom="[[320, 3], [768, 4], [991, 6]]" :paginationEnabled="false" :navigationEnabled="true" :autoplay="true" :loop="true" :autoplayTimeout="10000" easing="linear">
                                            <slide>
                                                <img src="/lexar/partner/partner-1.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/partner/partner-2.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/partner/partner-3.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/partner/partner-4.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/partner/partner-5.png" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/partner/partner-6.jpg" alt="" class="img-fluid">
                                            </slide>
                                            <slide>
                                                <img src="/lexar/partner/partner-7.jpg" alt="" class="img-fluid">
                                            </slide>
                                        </carousel>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                        <b-col md="12">
                            <div class="pc-item">
                                <h5 class="text-left mt-5">{{ $t('mediaTitle') }}</h5>
                                <hr />
                                <b-row>
                                    <b-col>
                                        <carousel :perPageCustom="[[320, 3], [768, 4], [991, 6]]" :paginationEnabled="false" :navigationEnabled="true" :autoplay="true" :loop="true" :autoplayTimeout="12000" easing="linear">
                                            <slide>
                                                <b-link href="https://dailysocial.id/post/asosiasi-startup-regtech-dan-legaltech" target="_blank">
                                                    <img src="/lexar/media/media-6.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://beritabaik.id/read?editorialSlug=gaya-hidup&slug=1571209933514-4-hal-yang-harus-kamu-tahu-sebelum-mendirikan-usaha" target="_blank">
                                                    <img src="/lexar/media/media-13.jpg" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide> 
                                                <b-link href="https://asialawportal.com/2018/12/30/30-people-to-watch-in-the-business-of-law-in-asia-in-2019/" target="_blank">
                                                    <img src="/lexar/media/media-1.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://katadata.co.id/berita/2018/11/03/lexarid-tawarkan-solusi-legal-bagi-startup-dan-umkm" target="_blank">
                                                    <img src="/lexar/media/media-2.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="http://www.bekraf.go.id/berita/page/10/bekraf-latih-pemenang-roadshow-gostartupindonesia" target="_blank">
                                                    <img src="/lexar/media/media-3.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://www.youtube.com/watch?v=BZct6XSFJCM&feature=youtu.be" target="_blank">
                                                    <img src="/lexar/media/media-4.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://ekonomi.kompas.com/read/2017/09/18/180117926/asosiasi-perusahaan-jasa-teknologi-regulasi-dan-hukum-dorong-masyarakat" target="_blank">
                                                    <img src="/lexar/media/media-5.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://dailysocial.id/post/template-aksara-nusantara" target="_blank">
                                                    <img src="/lexar/media/media-6.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://theworldnews.net/id-news/aksara-nusantara-diluncurkan-untuk-dokumen-legal-pendanaan-startup" target="_blank">
                                                    <img src="/lexar/media/media-7.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://republika.co.id/berita/ekonomi/fintech/ptrl20284/pelaku-emstartupem-dinilai-harus-tajam-lihat-peluang" target="_blank">
                                                    <img src="/lexar/media/media-8.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://www.antaranews.com/berita/931238/aksara-nusantara-diluncurkan-untuk-dokumen-legal-pendanaan-startup" target="_blank">
                                                    <img src="/lexar/media/media-9.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://swa.co.id/swa/trends/panduan-dokumen-legal-bagi-pendiri-startup-dan-investor" target="_blank">
                                                    <img src="/lexar/media/media-10.png" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://kumparan.com/@kumparanbisnis/aplikasi-penyedia-dokumen-legal-untuk-perlindungan-startup-diluncurkan-1rMLEztXlnR" target="_blank">
                                                    <img src="/lexar/media/media-11.jpg" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                            <slide>
                                                <b-link href="https://e27.co/todays-top-tech-news-july-3-softbanks-chairman-to-meet-president-jokowi-of-indonesia-20190703/" target="_blank">
                                                    <img src="/lexar/media/media-12.jpg" alt="" class="img-fluid">
                                                </b-link>
                                            </slide>
                                        </carousel>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </no-ssr>

        <!-- Event -->
        <div class="event gray-panel">
            <b-container>
                <b-row>
                    <b-col md="6">
                        <h4 class="sec-title mb-2">{{ $t('eventTitle') }}</h4>
                        <p class="sec-subtitle"><span v-html="$t('eventSubTitle')"></span> <b-link href="/about">{{ $t('lmore') }}</b-link></p>
                    </b-col>
                </b-row>
                <b-row class="no-gutters">
                    <b-col cols="6" md="2">
                        <span class="event-item" style="background-image: url('/lexar/photo-1.jpg')"></span>
                    </b-col>
                    <b-col cols="6" md="3">
                        <span class="event-item half" style="background-image: url('/lexar/photo-3.jpg')"></span>
                        <span class="event-item half" style="background-image: url('/lexar/photo-13.jpg')"></span>
                    </b-col>
                    <b-col cols="6" md="4">
                        <span class="event-item" style="background-image: url('/lexar/photo-16.jpeg')"></span>
                    </b-col>
                    <b-col cols="6" md="3">
                        <span class="event-item half" style="background-image: url('/lexar/photo-4.jpg')"></span>
                        <b-row class="no-gutters">
                            <b-col cols="6" md="6">
                                <span class="event-item half" style="background-image: url('/lexar/photo-7.jpg')"></span>
                            </b-col>
                            <b-col cols="6" md="6">
                                <span class="event-item half" style="background-image: url('/lexar/photo-9.jpg')"></span>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Event -->
        <div class="cta" style="background-image: url('/lexar/bg-contact.jpg')">
            <b-container>
                <b-row>
                    <b-col>
                        <h3>{{ $t('ctaTitle') }}</h3>
                        <h4>{{ $t('ctaSubTitle') }}</h4>
                        <b-button variant="primary" :to="localePath('contact')" class="text-uppercase">{{ $t('inquire') }}</b-button>
                        <b-button variant="secondary" class="ml-3 text-uppercase" :to="localePath('contact')">{{ $t('colaborate') }}</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Company Modal -->
        <b-modal id="modal-company" size="lg" hide-footer title="">
            <b-row>
                <b-col lg="6" order-lg="2">
                    <h3 class="text-capitalize">{{ $t('serviceTitle1') }}</h3>
                    <p class="detail-service">{{ $t('serviceSubTitle1') }}</p>
                    <div class="price-service">
                        <h5>{{ $t('service1Item1') }}</h5>
                        <h6>{{ $t('service1SubItem1') }}</h6>
                        <h4><span class="top">IDR</span> 9 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service1Item2') }}</h5>
                        <h6>{{ $t('service1SubItem2') }}</h6>
                        <h4><span class="top">IDR</span> 10 <span>{{ $t('million') }}</span></h4>
                    </div>
                </b-col>
                <b-col class="w-border" lg="6" order-lg="1">
                    <h3>{{ $t('contactForm') }}</h3>
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            :label="$t('fullName')"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            name="name"
                            v-model="form.name"
                            type="text"
                            v-validate="'required'"
                            :placeholder="$t('plName')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                            <!-- <span v-show="isError('name')" class="validator pt-2 text-danger">{{ isError('name') }}</span> -->
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            name="email"
                            v-model="form.email"
                            type="email"
                            v-validate="'required|email'"
                            :placeholder="$t('plEmail')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-3" :label="$t('subject')" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.subject"
                            :options="company"
                            class="form-control"
                            v-validate="'required'"
                            name="subject"
                            >
                                <template slot="first">
                                    <option :value="null" disabled>{{ $t('subjectChoice') }}</option>
                                </template>
                            </b-form-select>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('subject') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-4" :label="$t('message')" label-for="input-4">
                            <b-form-textarea
                            id="textarea"
                            name="message"
                            v-model="form.message"
                            :placeholder="$t('plMessage')"
                            rows="6"
                            v-validate="'required'"
                            ></b-form-textarea>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('message') : '' }}</span>
                        </b-form-group>
                        <b-alert variant="success" id="alertSuccess" class="d-none" show>Your message has been Submit. Please check your Email.</b-alert>                          
                        <b-alert variant="danger" id="alertError" class="d-none" show>Theres something error, please try again</b-alert>        

                        <b-button variant="primary" @click="onSubmit">{{ $t('submit') }}</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-modal>

        <!-- License Modal -->
        <b-modal id="modal-license" size="lg" hide-footer title="">
            <b-row>
                <b-col lg="6" order-lg="2">
                    <h3>{{ $t('serviceTitle2') }}</h3>
                    <p class="detail-service">{{ $t('serviceSubTitle2') }}</p>
                    <div class="price-service">
                        <h5>{{ $t('service2Item1') }}</h5>
                        <h6>{{ $t('service2SubItem1') }}</h6>
                        <h4><span class="top">IDR</span> 3 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service2Item2') }}</h5>
                        <h6>{{ $t('service2SubItem2') }}</h6>
                        <h4><span class="top">IDR</span> 1 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service2Item3') }}</h5>
                        <h6>{{ $t('service2SubItem3') }}</h6>
                        <h4><span class="top">IDR</span> 2 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service2Item4') }}</h5>
                        <h4><span class="top">IDR</span> 1.5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service2Item5') }}</h5>
                        <h6>{{ $t('service2SubItem5') }}</h6>
                        <h4><span class="top">IDR</span> 10 <span>{{ $t('million') }}</span></h4>
                    </div>
                </b-col>
                <b-col class="w-border" lg="6" order-lg="1">
                    <h3>{{ $t('contactForm') }}</h3>
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            :label="$t('fullName')"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            name="name"
                            v-model="form.name"
                            type="text"
                            v-validate="'required'"
                            :placeholder="$t('plName')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            name="email"
                            v-model="form.email"
                            type="email"
                            v-validate="'required|email'"
                            :placeholder="$t('plEmail')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-3" :label="$t('subject')" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.subject"
                            :options="license"
                            class="form-control"
                            v-validate="'required'"
                            name="subject"
                            >
                                <template slot="first">
                                    <option :value="null" disabled>{{ $t('subjectChoice') }}</option>
                                </template>
                            </b-form-select>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('subject') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-4" :label="$t('message')" label-for="input-4">
                            <b-form-textarea
                            id="textarea"
                            name="message"
                            v-model="form.message"
                            :placeholder="$t('plMessage')"
                            rows="6"
                            v-validate="'required'"
                            ></b-form-textarea>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('message') : '' }}</span>
                        </b-form-group>
                        <b-alert variant="success" id="alertSuccess" class="d-none" show>Your message has been Submit. Please check your Email.</b-alert>                          
                        <b-alert variant="danger" id="alertError" class="d-none" show>Theres something error, please try again</b-alert>        

                        <b-button variant="primary" @click="onSubmit">{{ $t('submit') }}</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-modal>

        <!-- Notarial Modal -->
        <b-modal id="modal-notarial" size="lg" hide-footer title="">
            <b-row>
                <b-col lg="6" order-lg="2">
                    <h3>{{ $t('serviceTitle6') }}</h3>
                    <p class="detail-service">{{ $t('serviceSubTitle6') }}</p>
                    <div class="price-service">
                        <h5>{{ $t('service6Item1') }}</h5>
                        <h6>{{ $t('service6SubItem1') }}</h6>
                        <h4><span class="top">IDR</span> 6 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service6Item2') }}</h5>
                        <h6>{{ $t('service6SubItem2') }}</h6>
                        <h4><span class="top">IDR</span> 7 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service6Item3') }}</h5>
                        <h6>{{ $t('service6SubItem3') }}</h6>
                        <h4><span class="top">IDR</span > 5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service6Item4') }}</h5>
                        <h6>{{ $t('service6SubItem4') }}</h6>
                        <h4><span class="top">IDR</span> 6.6 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5 class="mt-3">{{ $t('service6Item5') }}</h5>
                        <h4><span class="top">IDR</span> 5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5 class="mt-3">{{ $t('service6Item6') }}</h5>
                        <h4><span class="top">IDR</span> 1 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5 class="mt-3">{{ $t('service6Item7') }}</h5>
                        <h4><span class="top">IDR</span> 300 <span>{{ $t('thousand') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5 class="mt-3">{{ $t('service6Item8') }}</h5>
                        <h4><span class="top">IDR</span> 5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5 class="mt-3">{{ $t('service6Item9') }}</h5>
                        <h4><span class="top">IDR</span> 8 <span>{{ $t('million') }}</span></h4>
                    </div>
                </b-col>
                <b-col class="w-border" lg="6" order-lg="1">
                    <h3>{{ $t('contactForm') }}</h3>
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            :label="$t('fullName')"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            name="name"
                            v-model="form.name"
                            type="text"
                            v-validate="'required'"
                            :placeholder="$t('plName')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            name="email"
                            v-model="form.email"
                            type="email"
                            v-validate="'required|email'"
                            :placeholder="$t('plEmail')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-3" :label="$t('subject')" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.subject"
                            :options="notarial"
                            class="form-control"
                            v-validate="'required'"
                            name="subject"
                            >
                                <template slot="first">
                                    <option :value="null" disabled>{{ $t('subjectChoice') }}</option>
                                </template>
                            </b-form-select>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('subject') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-4" :label="$t('message')" label-for="input-4">
                            <b-form-textarea
                            id="textarea"
                            name="message"
                            v-model="form.message"
                            :placeholder="$t('plMessage')"
                            rows="6"
                            v-validate="'required'"
                            ></b-form-textarea>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('message') : '' }}</span>
                        </b-form-group>
                        <b-alert variant="success" id="alertSuccess" class="d-none" show>Your message has been Submit. Please check your Email.</b-alert>                          
                        <b-alert variant="danger" id="alertError" class="d-none" show>Theres something error, please try again</b-alert>        

                        <b-button variant="primary" @click="onSubmit">{{ $t('submit') }}</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-modal>

        <!-- Trademark Modal -->
        <b-modal id="modal-trademark" size="lg" hide-footer title="">
            <b-row>
                <b-col lg="6" order-lg="2">
                    <h3>{{ $t('serviceTitle5') }}</h3>
                    <p class="detail-service">{{ $t('serviceSubTitle5') }}</p>
                    <div class="price-service">
                        <h5>{{ $t('service5Item1') }}</h5>
                        <h4><span class="top">IDR</span> 3.5 <span>{{ $t('million') }} {{ $t('perClass') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service5Item2') }}</h5>
                        <h4><span class="top">IDR</span> 2.5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service5Item3') }}</h5>
                        <h4><span class="ml-0">{{ $t('startFrom') }}</span><span class="top">IDR</span> 5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service5Item4') }}</h5>
                        <h4><span class="ml-0">{{ $t('startFrom') }}</span><span class="top">IDR</span> 5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <!-- <div class="price-service">
                        <h5>BPJS Worker</h5>
                        <h4><span class="top">IDR</span> 1.5 <span>Million</span></h4>
                    </div>
                    <div class="price-service">
                        <h5 class="mt-3">BPJS Health</h5>
                        <h4><span class="top">IDR</span> 1 <span>Million</span></h4>
                    </div> -->
                </b-col>
                <b-col class="w-border" lg="6" order-lg="1">
                    <h3>{{ $t('contactForm') }}</h3>
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            :label="$t('fullName')"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            name="name"
                            v-model="form.name"
                            type="text"
                            v-validate="'required'"
                            :placeholder="$t('plName')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            name="email"
                            v-model="form.email"
                            type="email"
                            v-validate="'required|email'"
                            :placeholder="$t('plEmail')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-3" :label="$t('subject')" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.subject"
                            :options="trademark"
                            class="form-control"
                            v-validate="'required'"
                            name="subject"
                            >
                                <template slot="first">
                                    <option :value="null" disabled>{{ $t('subjectChoice') }}</option>
                                </template>
                            </b-form-select>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('subject') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-4" :label="$t('message')" label-for="input-4">
                            <b-form-textarea
                            id="textarea"
                            name="message"
                            v-model="form.message"
                            :placeholder="$t('plMessage')"
                            rows="6"
                            v-validate="'required'"
                            ></b-form-textarea>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('message') : '' }}</span>
                        </b-form-group>
                        <b-alert variant="success" id="alertSuccess" class="d-none" show>Your message has been Submit. Please check your Email.</b-alert>                          
                        <b-alert variant="danger" id="alertError" class="d-none" show>Theres something error, please try again</b-alert>        

                        <b-button variant="primary" @click="onSubmit">{{ $t('submit') }}</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-modal>

        <!-- Corporate Modal -->
        <b-modal id="modal-corporate" size="lg" hide-footer title="">
            <b-row>
                <b-col lg="6" order-lg="2">
                    <h3>{{ $t('serviceTitle3') }}</h3>
                    <p class="detail-service">{{ $t('serviceSubTitle3') }}</p>
                    <div class="price-service">
                        <h5>{{ $t('service3Item1') }}</h5>
                        <h6>{{ $t('service3SubItem1') }}</h6>
                        <h4><span class="top">IDR</span> 2 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service3Item2') }}</h5>
                        <h6>{{ $t('service3SubItem2') }}</h6>
                        <h4><span class="top">IDR</span> 2.5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service3Item3') }}</h5>
                        <h6>{{ $t('service3SubItem3') }}</h6>
                        <h4><span class="top">IDR</span> 3.5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service3Item4') }}</h5>
                        <h6>{{ $t('service3SubItem4') }}</h6>
                        <h4><span class="top">IDR</span> 4 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service3Item5') }}</h5>
                        <h4><span class="top">IDR</span> 1 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service3Item6') }}</h5>
                        <h4><span class="ml-0">{{ $t('startFrom') }}</span><span class="top">IDR</span> 8 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service3Item7') }}</h5>
                        <h4><span class="ml-0">{{ $t('startFrom') }}</span><span class="top">IDR</span> 6 <span>{{ $t('million') }}</span></h4>
                    </div>
                </b-col>
                <b-col class="w-border" lg="6" order-lg="1">
                    <h3>{{ $t('contactForm') }}</h3>
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            :label="$t('fullName')"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            name="name"
                            v-model="form.name"
                            type="text"
                            v-validate="'required'"
                            :placeholder="$t('plName')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            name="email"
                            v-model="form.email"
                            type="email"
                            v-validate="'required|email'"
                            :placeholder="$t('plEmail')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-3" :label="$t('subject')" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.subject"
                            :options="corporate"
                            class="form-control"
                            v-validate="'required'"
                            name="subject"
                            >
                                <template slot="first">
                                    <option :value="null" disabled>{{ $t('subjectChoice') }}</option>
                                </template>
                            </b-form-select>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('subject') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-4" :label="$t('message')" label-for="input-4">
                            <b-form-textarea
                            id="textarea"
                            name="message"
                            v-model="form.message"
                            :placeholder="$t('plMessage')"
                            rows="6"
                            v-validate="'required'"
                            ></b-form-textarea>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('message') : '' }}</span>
                        </b-form-group>
                        <b-alert variant="success" id="alertSuccess" class="d-none" show>Your message has been Submit. Please check your Email.</b-alert>                          
                        <b-alert variant="danger" id="alertError" class="d-none" show>Theres something error, please try again</b-alert>        

                        <b-button variant="primary" @click="onSubmit">{{ $t('submit') }}</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-modal>

        <!-- Business Modal -->
        <b-modal id="modal-business" size="lg" hide-footer title="">
            <b-row>
                <b-col lg="6" order-lg="2">
                    <h3>{{ $t('serviceTitle8') }}</h3>
                    <p class="detail-service">{{ $t('serviceSubTitle8') }}</p>
                    <div class="price-service">
                        <h5>{{ $t('service8Item1') }}</h5>
                        <h6>{{ $t('service8SubItem1') }}</h6>
                        <h4><span class="ml-0">{{ $t('startFrom') }}</span><span class="top">IDR</span> 18 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service8Item2') }}</h5>
                        <h6>{{ $t('service8SubItem2') }}</h6>
                        <h4><span class="ml-0">{{ $t('startFrom') }}</span><span class="top">IDR</span> 3.5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service8Item3') }}</h5>
                        <h6>{{ $t('service8SubItem3') }}</h6>
                        <h4><span class="ml-0">{{ $t('startFrom') }}</span><span class="top">IDR</span> 5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service8Item4') }}</h5>
                        <h6>{{ $t('service8SubItem4') }}</h6>
                        <h4><span class="ml-0">{{ $t('startFrom') }}</span><span class="top">IDR</span> 4 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service8Item5') }}</h5>
                        <h6>{{ $t('service8SubItem5') }}</h6>
                        <h4><span class="top">IDR</span> 5 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service8Item6') }}</h5>
                        <h6>{{ $t('service8SubItem6') }}</h6>
                        <h4><span class="top">USD</span> 1500 <span>{{ $t('equivalent') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service8Item7') }}</h5>
                        <h4><span class="top">USD</span> 1000 <span>{{ $t('equivalent') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service8Item8') }}</h5>
                        <h4><span class="top">IDR</span> 5 <span>{{ $t('million') }}</span></h4>
                    </div>
                </b-col>
                <b-col class="w-border" lg="6" order-lg="1">
                    <h3>{{ $t('contactForm') }}</h3>
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            :label="$t('fullName')"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            name="name"
                            v-model="form.name"
                            type="text"
                            v-validate="'required'"
                            :placeholder="$t('plName')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            name="email"
                            v-model="form.email"
                            type="email"
                            v-validate="'required|email'"
                            :placeholder="$t('plEmail')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-3" :label="$t('subject')" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.subject"
                            :options="business"
                            class="form-control"
                            v-validate="'required'"
                            name="subject"
                            >
                                <template slot="first">
                                    <option :value="null" disabled>{{ $t('subjectChoice') }}</option>
                                </template>
                            </b-form-select>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('subject') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-4" :label="$t('message')" label-for="input-4">
                            <b-form-textarea
                            id="textarea"
                            name="message"
                            v-model="form.message"
                            :placeholder="$t('plMessage')"
                            rows="6"
                            v-validate="'required'"
                            ></b-form-textarea>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('message') : '' }}</span>
                        </b-form-group>
                        <b-alert variant="success" id="alertSuccess" class="d-none" show>Your message has been Submit. Please check your Email.</b-alert>                          
                        <b-alert variant="danger" id="alertError" class="d-none" show>Theres something error, please try again</b-alert>        

                        <b-button variant="primary" @click="onSubmit">{{ $t('submit') }}</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-modal>

        <!-- Expatriate Modal -->
        <b-modal id="modal-expatriate" size="lg" hide-footer title="">
            <b-row>
                <b-col lg="6" order-lg="2">
                    <h3>{{ $t('serviceTitle4') }}</h3>
                    <p class="detail-service">{{ $t('serviceSubTitle4') }}</p>
                    <div class="price-service">
                        <h5>{{ $t('service4Item1') }}</h5>
                        <h4><span class="top">IDR</span> 11 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service4Item2') }}</h5>
                        <h4><span class="top">IDR</span> 3 <span>{{ $t('million') }}</span></h4>
                    </div>
                    <div class="price-service">
                        <h5>{{ $t('service4Item3') }}</h5>
                        <h6>{{ $t('service4SubItem3') }}</h6>
                        <h4><span class="top">IDR</span> 13 <span>{{ $t('million') }}</span></h4>
                    </div>
                </b-col>
                <b-col class="w-border" lg="6" order-lg="1">
                    <h3>{{ $t('contactForm') }}</h3>
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            :label="$t('fullName')"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            name="name"
                            v-model="form.name"
                            type="text"
                            v-validate="'required'"
                            :placeholder="$t('plName')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            name="email"
                            v-model="form.email"
                            type="email"
                            v-validate="'required|email'"
                            :placeholder="$t('plEmail')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-3" :label="$t('subject')" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.subject"
                            :options="expatriate"
                            class="form-control"
                            v-validate="'required'"
                            name="subject"
                            >
                                <template slot="first">
                                    <option :value="null" disabled>{{ $t('subjectChoice') }}</option>
                                </template>
                            </b-form-select>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('subject') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-4" :label="$t('message')" label-for="input-4">
                            <b-form-textarea
                            id="textarea"
                            name="message"
                            v-model="form.message"
                            :placeholder="$t('plMessage')"
                            rows="6"
                            v-validate="'required'"
                            ></b-form-textarea>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('message') : '' }}</span>
                        </b-form-group>
                        <b-alert variant="success" id="alertSuccess" class="d-none" show>Your message has been Submit. Please check your Email.</b-alert>                          
                        <b-alert variant="danger" id="alertError" class="d-none" show>Theres something error, please try again</b-alert>        

                        <b-button variant="primary" @click="onSubmit">{{ $t('submit') }}</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-modal>

        <!-- Fundraise Modal -->
        <b-modal id="modal-fundraise" hide-footer title="">
            <b-row>
                <b-col lg="12">
                    <h3>{{ $t('contactForm') }}</h3>
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            :label="$t('fullName')"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            name="name"
                            v-model="form.name"
                            type="text"
                            v-validate="'required'"
                            :placeholder="$t('plName')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            name="email"
                            v-model="form.email"
                            type="email"
                            v-validate="'required|email'"
                            :placeholder="$t('plEmail')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-3" :label="$t('subject')" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.subject"
                            :options="fundraise"
                            class="form-control"
                            v-validate="'required'"
                            name="subject"
                            >
                                <template slot="first">
                                    <option :value="null" disabled>{{ $t('subjectChoice') }}</option>
                                </template>
                            </b-form-select>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('subject') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-4" :label="$t('message')" label-for="input-4">
                            <b-form-textarea
                            id="textarea"
                            name="message"
                            v-model="form.message"
                            :placeholder="$t('plMessage')"
                            rows="6"
                            v-validate="'required'"
                            ></b-form-textarea>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('message') : '' }}</span>
                        </b-form-group>
                        <b-alert variant="success" id="alertSuccess" class="d-none" show>Your message has been Submit. Please check your Email.</b-alert>                          
                        <b-alert variant="danger" id="alertError" class="d-none" show>Theres something error, please try again</b-alert>        

                        <b-button variant="primary" @click="onSubmit">{{ $t('submit') }}</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-modal>

        <!-- Fundraise Modal -->
        <b-modal id="modal-dedicated" hide-footer title="">
            <b-row>
                <b-col lg="12">
                    <h3>{{ $t('contactForm') }}</h3>
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            :label="$t('fullName')"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            name="name"
                            v-model="form.name"
                            type="text"
                            v-validate="'required'"
                            :placeholder="$t('plName')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            name="email"
                            v-model="form.email"
                            type="email"
                            v-validate="'required|email'"
                            :placeholder="$t('plEmail')"
                            ></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-3" :label="$t('subject')" label-for="input-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.subject"
                            :options="dedicated"
                            class="form-control"
                            v-validate="'required'"
                            name="subject"
                            >
                                <template slot="first">
                                    <option :value="null" disabled>{{ $t('subjectChoice') }}</option>
                                </template>
                            </b-form-select>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('subject') : '' }}</span>
                        </b-form-group>

                        <b-form-group id="input-group-4" :label="$t('message')" label-for="input-4">
                            <b-form-textarea
                            id="textarea"
                            name="message"
                            v-model="form.message"
                            :placeholder="$t('plMessage')"
                            rows="6"
                            v-validate="'required'"
                            ></b-form-textarea>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('message') : '' }}</span>
                        </b-form-group>
                        <b-alert variant="success" id="alertSuccess" class="d-none" show>Your message has been Submit. Please check your Email.</b-alert>                          
                        <b-alert variant="danger" id="alertError" class="d-none" show>Theres something error, please try again</b-alert>        

                        <b-button variant="primary" @click="onSubmit">{{ $t('submit') }}</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-modal>

        <!-- Incorp Modal -->
        <b-modal ref="modal-popup" content-class="modal-popup-wrap" size="lg" centered hide-footer title="">
            <div class="modal-popup">
                <div class="incorp-ad">  
                    <div class="row d-flex align-items-center">   
                        <div class="col-lg-6">
                            <img src="/lexar/website.svg" alt="" class="illu img-fluid">
                        </div>    
                        <div class="col-lg-6">
                            <h3 v-html="$t('popIncorpTitle')"></h3>
                            <p>{{ $t('popIncorpParagraph') }}</p>
                            <b-link :to="localePath('incorporation')" class="btn btn-primary">{{ $t('popTrynow') }}</b-link>
                        </div> 
                    </div>                  
                </div>
            </div>
        </b-modal>
        
        <!-- Filter Duotone -->
        <svg
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        id="svg15"
        version="1.1"
        class="svg-filters d-none">
            <metadata
                id="metadata21">
                <rdf:RDF>
                <cc:Work
                    rdf:about="">
                    <dc:format>image/svg+xml</dc:format>
                    <dc:type
                    rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                </cc:Work>
                </rdf:RDF>
            </metadata>
            <defs
                id="defs19" />
            <filter
                id="duotone_lexar">
                <feColorMatrix
                id="feColorMatrix2"
                values="1 0 0 0 0                         1 0 0 0 0                         1 0 0 0 0                         0 0 0 1 0"
                result="grayscale"
                type="matrix" />
                <feComponentTransfer
                id="feComponentTransfer12"
                result="duotone_lexar"
                color-interpolation-filters="sRGB">
                <feFuncR
                    id="feFuncR4"
                    tableValues="0.0431372549 0.6627450980"
                    type="table" />
                <feFuncG
                    id="feFuncG6"
                    tableValues="0.0941176470 0.5294117647"
                    type="table" />
                <feFuncB
                    id="feFuncB8"
                    tableValues="0.1764705882 0.4470588235"
                    type="table" />
                <feFuncA
                    id="feFuncA10"
                    tableValues="0 1"
                    type="table" />
                </feComponentTransfer>
            </filter>
        </svg>

    </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: null,
        message: ""
      },
      modalPopup: false,
      slide: "",
      company: [
        this.$t("companyChoice1"),
        this.$t("companyChoice2"),
        this.$t("otherInquiry")
      ],
      license: [
        this.$t("service2Item1"),
        this.$t("service2Item2"),
        this.$t("service2Item3"),
        this.$t("service2Item4"),
        this.$t("licenseChoice5"),
        this.$t("otherInquiry")
      ],
      corporate: [
        this.$t("service3Item1"),
        this.$t("corporateChoice2"),
        this.$t("service3Item3"),
        this.$t("corporateChoice4"),
        this.$t("service3Item5"),
        this.$t("service3Item6"),
        this.$t("service3Item7"),
        this.$t("otherInquiry")
      ],
      expatriate: [
        this.$t("service4Item1"),
        this.$t("service4Item2"),
        this.$t("service4Item3"),
        this.$t("otherInquiry")
      ],
      trademark: [
        this.$t("service5Item1"),
        this.$t("service5Item2"),
        this.$t("service5Item3"),
        this.$t("service5Item4"),
        this.$t("otherInquiry")
      ],
      notarial: [
        this.$t("notarialChoice1"),
        this.$t("notarialChoice2"),
        this.$t("notarialChoice3"),
        this.$t("notarialChoice4"),
        this.$t("service6Item5"),
        this.$t("service6Item6"),
        this.$t("service6Item7"),
        this.$t("service6Item8"),
        this.$t("service6Item9"),
        this.$t("otherInquiry")
      ],
      business: [
        this.$t("service8Item1"),
        this.$t("businessChoice2"),
        this.$t("businessChoice3"),
        this.$t("businessChoice4"),
        this.$t("service8Item5"),
        this.$t("service8Item6"),
        this.$t("service8Item7"),
        this.$t("service8Item8"),
        this.$t("otherInquiry")
      ],
      fundraise: [this.$t("fundSubTitle"), this.$t("otherInquiry")],
      dedicated: [this.$t("serviceTitle9"), this.$t("otherInquiry")]
    };
  },
  mounted() {
    localStorage.modalPopup
      ? this.$refs["modal-popup"].hide()
      : this.showModal();
  },
  watch: {
    modalPopup(newVisit) {
      localStorage.modalPopup = newVisit;
    }
  },
  methods: {
    showModal() {
      this.$refs["modal-popup"].show();
      this.modalPopup = true;
    },
    async onSubmit() {
      const validated = await this.$validator.validateAll();
      console.log(validated);

      if (validated) {
        try {
          const contactRequest = await this.$contact.send(this.form);

          this.form.name = "";
          this.form.email = "";
          this.form.subject = null;
          this.form.message = "";

          this.$validator.reset();

          document.getElementById("alertSuccess").classList.remove("d-none");
        } catch (error) {
          console.log(error);

          document.getElementById("alertError").classList.remove("d-none");
        }
      }
    }
  }
};
</script>