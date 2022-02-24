<template>
    <div>
        <!-- Hero Inner -->
        <div class="inner-hero" style="background-image: url('/lexar/career-bg3.jpg'); background-position: center center;">
            <b-container>
                <b-row>
                    <b-col>
                        <h3>Careers</h3>
                        <h5>Move and Thinking Forward</h5>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div class="career-wrap white-panel">
            <b-container>
                <b-row>
                    <b-col md="12" class="text-center">
                        <h2>Work at Lexar</h2>
                        <img src="/lexar/career.svg" alt="" class="img-career mb-5">
                        <p class="intro">
                            <b>"We value you more than your job title"</b> <br/>
                            – Knowing who you are and how you want to be in this world, this is what makes work fun.
                        </p>

                        <p class="intro">
                            We hire exceptional people and help them develop both personally and professionally. We help our team members to grow in their current roles and dream about what's next. We promise to help them complete the circle that maximize their potential and connect them with their next possibilities.
                        </p>

                        <p class="intro mb-5">
                            Are you the one we've been looking for? Send your CV and portfolio to hello@lexar.id and be part of us!
                        </p>
                    </b-col>
                    <b-col md="12">
                        <div class="accordion" role="tablist">
                            <b-card no-body v-for="career in dataCareer" :key="career.id">
                                <b-card-header header-tag="header" role="tab">
                                    <button v-b-toggle="'collapse-' + career.id">
                                        <h6>{{ career.job }}</h6> 
                                        <span>{{ career.location + " - " + career.type }}</span>
                                        <i class="fa fa-angle-down"></i>
                                    </button>
                                </b-card-header>
                                <b-collapse :id="'collapse-' + career.id" accordion="accordionCareers" role="tabpanel">
                                    <b-card-body>
                                        <div v-html="career.description"></div>
                                        <b-link v-if="career.url" :href="career.url" target="_blank" class="btn btn-sm btn-secondary" >Apply Now</b-link>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({app}){
        const tempCareer = await app.$career.getCareer();

        return{
            dataCareer: tempCareer.data,
        }
    },
    data() {
        return {
            dataCareer: {}
        }
    },
    head () {
        return {
            title: 'Career | LEXAR',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'We value you more than your job title' },
                { hid: 'og:title', name: 'og:title', content: 'Career | LEXAR' },
                { hid: 'og:description', name: 'og:description', content: 'We value you more than your job title' },
            ]
        }
    },
}
</script>