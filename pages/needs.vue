<template>
    <div>
        <div class="head-plain">
            <b-link v-if="switchIndonesian" @click="openIndonesian" class="link-back"><img src="/lexar/back.png" alt=""> {{ $t('back') }}</b-link>
            <b-link v-if="switchShareholder" @click="openShareHolder" class="link-back"><img src="/lexar/back.png" alt=""> {{ $t('back') }}</b-link>
            <b-link v-if="switchTwo" @click="openTwo" class="link-back"><img src="/lexar/back.png" alt=""> {{ $t('back') }}</b-link>
            <b-link v-if="switchAssign" @click="openAssign" class="link-back"><img src="/lexar/back.png" alt=""> {{ $t('back') }}</b-link>
            <b-link v-if="switchCapital" @click="openCapital" class="link-back"><img src="/lexar/back.png" alt=""> {{ $t('back') }}</b-link>

            <!-- PMA -->
            <b-link v-if="switchShareholderPMA" @click="openShareHolderPMA" class="link-back"><img src="/lexar/back.png" alt=""> {{ $t('back') }}</b-link>
            <b-link v-if="switchTwoPMA" @click="openTwoPMA" class="link-back"><img src="/lexar/back.png" alt=""> {{ $t('back') }}</b-link>
            <b-link v-if="switchAssignPMA" @click="openAssignPMA" class="link-back"><img src="/lexar/back.png" alt=""> {{ $t('back') }}</b-link>
            <b-link v-if="switchCapitalPMA" @click="openCapitalPMA" class="link-back"><img src="/lexar/back.png" alt=""> {{ $t('back') }}</b-link>
            <b-link v-if="switchSectorPMA" @click="openSectorPMA" class="link-back"><img src="/lexar/back.png" alt=""> {{ $t('back') }}</b-link>

            <nuxt-link :to="localePath('incorporation')" class="link-close"><img src="/lexar/close.png" alt=""></nuxt-link>
            <div class="switcher-plain">
                <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
                <nuxt-link :to="switchLocalePath('id')">ID</nuxt-link>
            </div>
        </div>
    
        <div class="needs">
            <div class="needs-title">
                <img src="/lexar/lexar-brand.png" alt="">
                <h4>Discover My Needs</h4>
            </div>
            <div v-if="switchNew">
                <p>{{ $t('needs1') }} </p>
                <button @click="openIndonesian" class="btn btn-secondary">{{ $t('needs1button1') }}</button>
                <div class="clearfix"></div>
                <nuxt-link :to="localePath('service')" class="btn btn-outline-primary">{{ $t('needs1button2') }}</nuxt-link>
            </div>
            <div v-if="switchIndonesian">
                <p v-if="this.$i18n.locale === 'en'">
                    Company in Indonesia can be owned by foreign or Indonesian entities. Are the proposed company's <span class="info" v-b-tooltip.hover :title="$t('shareholder')">shareholders</span> entirely Indonesian?
                </p>
                <p v-else>
                    Perusahaan di Indonesia dapat dimiliki oleh entitas asing atau Indonesia. Apakah seluruh <span class="info" v-b-tooltip.hover :title="$t('shareholder')">pemegang saham</span> perusahaan yang anda akan dirikan berkebangsaan Indonesia?
                </p>
                <button @click="openShareHolder" class="btn btn-secondary">{{ $t('needs2button1') }}</button>
                <div class="clearfix"></div>
                <button @click="openShareHolderPMA" class="btn btn-outline-primary">{{ $t('needs2button2') }}</button>
            </div>
            <div v-if="switchShareholder">
                <p v-if="this.$i18n.locale === 'en'">
                    Will there be 2 or more <span class="info" v-b-tooltip.hover :title="$t('shareholder')">shareholders</span> in your company?
                </p>
                <p v-else>
                    Apakah ada atau akan ada lebih dari 2 <span class="info" v-b-tooltip.hover :title="$t('shareholder')">pemilik saham</span> di perusahaan kamu?
                </p>
                <button @click="openAssign" class="btn btn-secondary">{{ $t('needs3button1') }}</button>
                <div class="clearfix"></div>
                <button @click="openTwo" class="btn btn-outline-primary">{{ $t('needs3button2') }}</button>
            </div>
            <div v-if="switchTwo">
                <p v-if="this.$i18n.locale === 'en'">
                    Companies in Indonesia must be established by at least two <span class="info" v-b-tooltip.hover :title="$t('shareholder')">shareholders</span>. 
                </p>
                <p v-else>
                    Perusahaan di Indonesia harus didirikan paling sedikit oleh dua <span class="info" v-b-tooltip.hover :title="$t('shareholder')">pemilik saham</span>.
                </p>
                <nuxt-link :to="localePath('contact')" class="btn btn-secondary">{{ $t('needs3button3') }}</nuxt-link>
            </div>
            <div v-if="switchAssign">
                <p v-if="this.$i18n.locale === 'en'">
                    Will there be <span class="info" v-b-tooltip.hover :title="$t('shareholder')">shareholders</span> <span class="info" v-b-tooltip.hover :title="$t('assigned')">appointed</span>
                     as a <span class="info" v-b-tooltip.hover :title="$t('director')">Director</span> or <span class="info" v-b-tooltip.hover :title="$t('commissioner')">Commissioner</span>?
                </p>
                <p v-else>
                    Apakah ada <span class="info" v-b-tooltip.hover :title="$t('shareholder')">pemegang saham</span> yang akan <span class="info" v-b-tooltip.hover :title="$t('assigned')">ditunjuk</span> 
                    sebagai <span class="info" v-b-tooltip.hover :title="$t('director')">Direktur</span> atau <span class="info" v-b-tooltip.hover :title="$t('commissioner')">Komisaris</span>?
                </p>
                <button @click="openCapital" class="btn btn-secondary">{{ $t('needs4button1') }}</button>
                <div class="clearfix"></div>
                <button @click="openCapital" class="btn btn-outline-primary">{{ $t('needs4button2') }}</button>
            </div>
            <div v-if="switchCapital">
                <p v-if="this.$i18n.locale === 'en'">How much capital do you intend to invest in your company?</p>
                <p v-else>Seberapa besar modal yang akan disertakan dalam perusahaan anda?</p>
                <nuxt-link :to="localePath('incorporation-start')" class="btn btn-secondary">{{ $t('needs5button1') }}</nuxt-link>
                <div class="clearfix"></div>
                <nuxt-link :to="localePath('incorporation-start')" class="btn btn-outline-primary">{{ $t('needs5button2') }}</nuxt-link>
            </div>

            <!-- PMA -->
            <div v-if="switchShareholderPMA">
                <p v-if="this.$i18n.locale === 'en'">
                    Will there be 2 or more <span class="info" v-b-tooltip.hover :title="$t('shareholder')">shareholders</span> in your company?
                </p>
                <p v-else>
                    Apakah ada atau akan ada lebih dari 2 <span class="info" v-b-tooltip.hover :title="$t('shareholder')">pemilik saham</span> di perusahaan kamu?
                </p>
                <button @click="openAssignPMA" class="btn btn-secondary">{{ $t('needs3button1') }}</button>
                <div class="clearfix"></div>
                <button @click="openTwoPMA" class="btn btn-outline-primary">{{ $t('needs3button2') }}</button>
            </div>
            <div v-if="switchTwoPMA">
                <p v-if="this.$i18n.locale === 'en'">
                    Companies in Indonesia must be established by at least two <span class="info" v-b-tooltip.hover :title="$t('shareholder')">shareholders</span>. 
                </p>
                <p v-else>
                    Perusahaan di Indonesia harus didirikan paling sedikit oleh dua <span class="info" v-b-tooltip.hover :title="$t('shareholder')">pemilik saham</span>.
                </p>
                <nuxt-link :to="localePath('contact')" class="btn btn-secondary">Let us Help.</nuxt-link>
            </div>
            <div v-if="switchAssignPMA">
                <p v-if="this.$i18n.locale === 'en'">
                    Will there be <span class="info" v-b-tooltip.hover :title="$t('shareholder')">shareholders</span> <span class="info" v-b-tooltip.hover :title="$t('assigned')">appointed</span>
                     as a <span class="info" v-b-tooltip.hover :title="$t('director')">Director</span> or <span class="info" v-b-tooltip.hover :title="$t('commissioner')">Commissioner</span>?
                </p>
                <p v-else>
                    Apakah ada <span class="info" v-b-tooltip.hover :title="$t('shareholder')">pemegang saham</span> yang akan <span class="info" v-b-tooltip.hover :title="$t('assigned')">ditunjuk</span> 
                    sebagai <span class="info" v-b-tooltip.hover :title="$t('director')">Direktur</span> atau <span class="info" v-b-tooltip.hover :title="$t('commissioner')">Komisaris</span>?
                </p>
                <button @click="openCapitalPMA" class="btn btn-secondary">{{ $t('needs4button1') }}</button>
                <div class="clearfix"></div>
                <button @click="openCapitalPMA" class="btn btn-outline-primary">{{ $t('needs4button2') }}</button>
            </div>
            <div v-if="switchCapitalPMA">
                <p v-if="this.$i18n.locale === 'en'">How much capital do you intend to invest in your company?</p>
                <p v-else>Seberapa besar modal yang akan disertakan dalam perusahaan anda?</p>
                <button @click="openSectorPMA" class="btn btn-secondary">{{ $t('needs5button1') }}</button>
                <div class="clearfix"></div>
                <button @click="openSectorPMA" class="btn btn-outline-primary">{{ $t('needs5button2') }}</button>
            </div>
            <div v-if="switchSectorPMA">
                <p v-if="this.$i18n.locale === 'en'">Restrictions on several business sectors apply for foreign-owned companies.</p>
                <p v-else>Beberapa bidang usaha tertutup untuk perusahaan yang dimiliki oleh pihak asing.</p>
                <nuxt-link :to="localePath('contact')" class="btn btn-secondary">{{ $t('needs5button3') }}</nuxt-link>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    layout: "plain",
    data(){
        return {
            switchNew: true,
            switchIndonesian: false,
            switchShareholder: false,
            switchAssign: false,
            switchTwo: false,
            switchCapital: false,

            // PMA
            switchShareholderPMA: false,
            switchAssignPMA: false,
            switchTwoPMA: false,
            switchCapitalPMA: false,
            switchSectorPMA: false,
        }
    },
    head () {
        return {
            title: 'Needs | LEXAR',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'Discover My Needs Page' },
                { hid: 'og:title', name: 'og:title', content: 'Needs | LEXAR' },
                { hid: 'og:description', name: 'og:description', content: 'Discover My Needs Page' },
            ]
        }
    },
    created(){
    },
    methods: {
        openIndonesian(){
            this.switchNew = !this.switchNew;
            this.switchIndonesian = !this.switchIndonesian;
        },
        openShareHolder(){
            this.switchIndonesian = !this.switchIndonesian;
            this.switchShareholder = !this.switchShareholder;
        },
        openTwo(){
            this.switchShareholder = !this.switchShareholder;
            this.switchTwo = !this.switchTwo;
        },
        openAssign(){
            this.switchShareholder = !this.switchShareholder;
            this.switchAssign = !this.switchAssign;
        },
        openCapital(){
            this.switchAssign = !this.switchAssign;
            this.switchCapital = !this.switchCapital;
        },

        // PMA
        openShareHolderPMA(){
            this.switchIndonesian = !this.switchIndonesian;
            this.switchShareholderPMA = !this.switchShareholderPMA;
        },
        openTwoPMA(){
            this.switchShareholderPMA = !this.switchShareholderPMA;
            this.switchTwoPMA = !this.switchTwoPMA;
        },
        openAssignPMA(){
            this.switchShareholderPMA = !this.switchShareholderPMA;
            this.switchAssignPMA = !this.switchAssignPMA;
        },
        openCapitalPMA(){
            this.switchAssignPMA = !this.switchAssignPMA;
            this.switchCapitalPMA = !this.switchCapitalPMA;
        },
        openSectorPMA(){
            this.switchCapitalPMA = !this.switchCapitalPMA;
            this.switchSectorPMA = !this.switchSectorPMA;
        },
    }
}
</script>
