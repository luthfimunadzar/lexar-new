<template>
    <div>

        <!-- Hero Inner -->
        <div class="inner-hero" style="background-image: url('/lexar/bg-1.jpg')">
            <b-container>
                <b-row>
                    <b-col>
                        <h3>{{ $t('aboutTitle') }}</h3>
                        <h5>{{ $t('aboutSubTitle') }}</h5>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- History -->
        <div class="history white-panel">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <h4 class="sec-title mb-4" v-html="$t('historyTitle1')"></h4>
                    </b-col>
                </b-row>
                <b-row class="align-items-center">
                    <b-col md="6">
                        <p v-html="$t('historyText1')">
                        </p>
                        <p v-html="$t('historyText2')">
                        </p>
                    </b-col>
                    <b-col md="6">
                        <span class="image-holder" style="background-image: url('/lexar/photo-16.png')"></span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="4">
                        <span class="image-holder mini" style="background-image: url('/lexar/photo-7.jpg')"></span>
                    </b-col>
                    <b-col md="4">
                        <span class="image-holder mini" style="background-image: url('/lexar/photo-18.png')"></span>
                    </b-col>
                    <b-col md="4">
                        <span class="image-holder mini" style="background-image: url('/lexar/photo-19.png')"></span>
                    </b-col>
                </b-row>
                <b-row class="align-items-center">
                    <b-col md="6">
                        <span class="image-holder" style="background-image: url('/lexar/photo-14.png')"></span>
                    </b-col>
                    <b-col md="6">
                        <p v-html="$t('historyText3')">
                        </p>
                    </b-col>
                </b-row>
                <b-row class="align-items-center">
                    <b-col md="6">
                        <p v-html="$t('historyText4')">
                        </p>
                        <p v-html="$t('historyText5')">
                        </p>
                        <p v-html="$t('historyText6')">
                        </p>
                    </b-col>
                    <b-col md="6">
                        <span class="image-holder" style="background-image: url('/lexar/photo-20.jpg')"></span>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div class="history gray-panel">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <h4 class="sec-title mb-4 mt-5" v-html="$t('attentionTitle')"></h4>
                        <p v-html="$t('attentionText')">
                        </p>
                    </b-col>
                    <b-col md="4">
                        <span class="image-holder mini" style="background-image: url('/lexar/photo-5.jpg')"></span>
                    </b-col>
                    <b-col md="4">
                        <span class="image-holder mini" style="background-image: url('/lexar/photo-2.jpg')"></span>
                    </b-col>
                    <b-col md="4">
                        <span class="image-holder mini" style="background-image: url('/lexar/photo-12.jpg')"></span>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        
        <div class="history white-panel">
            <b-container>
                <b-row>
                    <b-col cols="12">
                        <h4 class="sec-title mb-4 mt-5" v-html="$t('peopleTitle')"></h4>
                    </b-col>
                </b-row>
                <b-row class="align-items-center">
                    <b-col md="6">
                        <p v-html="$t('peopleText1')">
                        </p>
                        <p v-html="$t('peopleSubText1')">
                        </p>
                    </b-col>
                    <b-col md="6">
                        <span class="image-holder" style="background-image: url('/lexar/photo-6.jpg')"></span>
                    </b-col>
                    <b-col md="6">
                        <span class="image-holder" style="background-image: url('/lexar/photo-15.jpeg')"></span>
                    </b-col>
                    <b-col md="6">
                        <p v-html="$t('peopleText2')">
                        </p>
                        <p v-html="$t('peopleSubText2')">
                        </p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="12">
                        <b v-html="$t('peopleText3')"></b>
                        <p v-html="$t('peopleSubText3')">
                        </p>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/ivan.JPG')"></span>
                        <h5 class="name">Ivan Lalamentik</h5>
                        <h6 class="job">Co Founder</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/aldi.JPG')"></span>
                        <h5 class="name">Aldi Ulaan</h5>
                        <h6 class="job">Venture Builder</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/erik.JPG')"></span>
                        <h5 class="name">Erik Andrianto</h5>
                        <h6 class="job">Legal Operations Government</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/navitsa.JPG')"></span>
                        <h5 class="name">Nevitsa Khairunnisa</h5>
                        <h6 class="job">Legal Operation Manager</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/izza.JPG')"></span>
                        <h5 class="name">Izza Derizqy Reza</h5>
                        <h6 class="job">Legal Business Manager </h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/krishna.JPG')"></span>
                        <h5 class="name">Khrisna Dadali</h5>
                        <h6 class="job">Legal Associate</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/britania.JPG')"></span>
                        <h5 class="name">Britania H. Putri</h5>
                        <h6 class="job">Legal Associate</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/tasya.JPG')"></span>
                        <h5 class="name">Tasha</h5>
                        <h6 class="job">Finance</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/edoy.JPG')"></span>
                        <h5 class="name">Edoy</h5>
                        <h6 class="job">Super Boy</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/galih.JPG')"></span>
                        <h5 class="name">Galih Pratama</h5>
                        <h6 class="job">Chief Technology Officer</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/luthfi.JPG')"></span>
                        <h5 class="name">Luthfi Munadzar</h5>
                        <h6 class="job">Front End Developer</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/sheila.jpeg')"></span>
                        <h5 class="name">Sheila A Hana</h5>
                        <h6 class="job">Back End Developer</h6>
                    </b-col>
                    
                    <b-col md="3">
                        <span class="image-holder people" style="background-image: url('/lexar/team/enya.JPG')"></span>
                        <h5 class="name">Ennya Thresia Putri</h5>
                        <h6 class="job">General Affair Associate</h6>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Event About -->
        <div class="event-about gray-panel">
            <b-container>
                <b-row>
                    <b-col md="12">
                        <h4 class="sec-title mb-2" v-html="$t('contTitle')"></h4>
                        <p class="sec-subtitle" v-html="$t('contSubTitle')"></p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <carousel :perPage="3" :paginationEnabled="false" :navigationEnabled="true" :autoplay="true" :loop="true" :autoplayTimeout="3000">
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-23.JPG')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-24.JPG')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-25.JPG')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-26.JPG')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-1.jpg')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-3.jpg')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-4.jpg')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-7.jpg')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-8.jpg')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-9.jpg')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-13.jpg')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-18.png')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-16.png')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-21.jpg')"></span>
                            </slide>
                            <slide>
                                <span class="event-image" style="background-image: url('/lexar/photo-22.png')"></span>
                            </slide>
                        </carousel>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        
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
export default {
    data() {
        return {

        }
    },
    head () {
        return {
            title: 'About | LEXAR',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'Our team is the driving force behind the service excellence.' },
                { hid: 'og:title', name: 'og:title', content: 'About | LEXAR' },
                { hid: 'og:description', name: 'og:description', content: 'Our team is the driving force behind the service excellence.' },
            ]
        }
    },
}
</script>
