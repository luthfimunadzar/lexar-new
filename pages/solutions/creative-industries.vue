<template>
  <div>
    <!-- <div class="hero-business d-flex align-items-center">
      <b-container>
        <b-row class="align-items-center">
          <b-col md="8">
            <h3>LEXAR for Creative Industries</h3>
            <h6>{{ $t("industriesSubtitle") }}</h6>
          </b-col>
          <b-col md="4">
            <img src="/lexar/creative.svg" alt="" class="character" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="business-desc">
      <b-container>
        <div class="row">
          <b-col lg="8" md="10" offset-lg="2" offset-md="1">
            <p v-html="$t('introCreative')"></p>
          </b-col>
        </div>
      </b-container>
    </div>

    <div class="business-services">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3 class="headline">
              Lexar Services for Creative Industry that is Just Starting
            </h3>
          </b-col>
          <b-col lg="3" md="6">
            <a href="#" @click="showPTunder" class="ser-item">
              <div class="wrap-flex">
                <h5>Complete Local PT Incorporation</h5>
                <h6>capital under IDR 1 billion</h6>
                <div class="price">
                  <span class="currency">IDR</span>
                  <span class="nominal">9</span>
                  <span class="zero">Million</span>
                </div>
              </div>
            </a>
          </b-col>
          <b-col lg="3" md="6">
            <a href="#" @click="showPTabove" class="ser-item">
              <div class="wrap-flex">
                <h5>Complete Local PT Incorporation</h5>
                <h6>capital above IDR 1 billion</h6>
                <div class="price">
                  <span class="currency">IDR</span>
                  <span class="nominal">10</span>
                  <span class="zero">Million</span>
                </div>
              </div>
            </a>
          </b-col>
          <b-col lg="3" md="6">
            <a href="#" @click="showTrademark" class="ser-item">
              <div class="wrap-flex">
                <h5>Trademark Registration</h5>
                <div class="price mt-2">
                  <span class="currency">IDR</span>
                  <span class="nominal">3.5</span>
                  <span class="zero">Million per class</span>
                </div>
              </div>
            </a>
          </b-col>
          <b-col lg="3" md="6">
            <a href="#" @click="showCopyright" class="ser-item">
              <div class="wrap-flex">
                <h5>Copyright Registration</h5>
                <div class="price">
                  <span class="currency">IDR</span>
                  <span class="nominal">2.5</span>
                  <span class="zero">Million</span>
                </div>
              </div>
            </a>
          </b-col>
          <b-col md="12" class="text-center">
            <b-link :to="localePath('service')" class="other-services"
              >Lexar Other Services</b-link
            >
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="business-services sec">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3 class="headline">
              Lexar Services for Creative Industry that is Growing
            </h3>
          </b-col>
          <b-col lg="3" md="6">
            <a href="#" @click="showDeed" class="ser-item">
              <div class="wrap-flex">
                <h5>{{ $t("deedChange") }}</h5>
                <h6>{{ $t("deedChangeDesc") }}</h6>
              </div>
            </a>
          </b-col>
          <b-col lg="3" md="6">
            <a href="#" @click="showDraft" class="ser-item">
              <div class="wrap-flex">
                <h5>{{ $t("draftReview") }}</h5>
                <h6>{{ $t("draftReviewDesc") }}</h6>
              </div>
            </a>
          </b-col>
          <b-col lg="3" md="6">
            <a href="#" @click="showFund" class="ser-item">
              <div class="wrap-flex">
                <h5>{{ $t("fundRaising") }}</h5>
                <h6>{{ $t("fundRaisingDesc") }}</h6>
              </div>
            </a>
          </b-col>
          <b-col lg="3" md="6">
            <a href="#" @click="showLegal" class="ser-item">
              <div class="wrap-flex">
                <h5>{{ $t("legalAdvisor") }}</h5>
                <h6>{{ $t("legalAdvisorDesc") }}</h6>
              </div>
            </a>
          </b-col>
          <b-col md="12" class="text-center">
            <b-link :to="localePath('service')" class="other-services"
              >Lexar Other Services</b-link
            >
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="business-testimoni">
      <b-container>
        <b-row>
          <b-col md="3">
            <h5 class="head-title">Our Customer</h5>
            <h6 class="head-subtitle">Stories</h6>
          </b-col>
          <b-col md="9">
            <no-ssr>
              <carousel
                :perPageCustom="[
                  [992, 3],
                  [768, 2],
                ]"
                :paginationEnabled="false"
                :navigationEnabled="true"
              >
                <slide>
                  <div class="wrap">
                    <h5>Alvin Tjhie</h5>
                    <h6>PT pasar permainan dunia</h6>
                    <p>
                      "Communication cepat, jelas dan selalu available, team
                      yang pengertian dan sangat efficient. Would recommend"
                    </p>
                  </div>
                </slide>
                <slide>
                  <div class="wrap">
                    <h5>Amrit Harjani</h5>
                    <h6>PT Marco Cahaya Sejati</h6>
                    <p>
                      "Lexar sangat helpful untuk needs membuat PT dan ijin-ijin
                      lainnya. Biarpun dengan kesibukan saya mereka tidak
                      mempermasalahkan untuk waktu dan bisa adjust ke needs
                      customer. Kurir mereka juga cepat untuk jemput bola pada
                      saat perlu tanda tangan dll. Over all good service. Will
                      recommend you guys to my friends, thanks"
                    </p>
                  </div>
                </slide>
                <slide>
                  <div class="wrap">
                    <h5>Jo Yan matheas</h5>
                    <h6>PT Auralis Biru Jingga Magenta</h6>
                    <p>
                      "Good job Lexar! Quite responsive to our questions and
                      needs, and was able to solve any issues that arise."
                    </p>
                  </div>
                </slide>
                <slide>
                  <div class="wrap">
                    <h5>Alvin Tjhie</h5>
                    <h6>PT pasar permainan dunia</h6>
                    <p>
                      "Communication cepat, jelas dan selalu available, team
                      yang pengertian dan sangat efficient. Would recommend"
                    </p>
                  </div>
                </slide>
                <slide>
                  <div class="wrap">
                    <h5>Amrit Harjani</h5>
                    <h6>PT Marco Cahaya Sejati</h6>
                    <p>
                      "Lexar sangat helpful untuk needs membuat PT dan ijin-ijin
                      lainnya. Biarpun dengan kesibukan saya mereka tidak
                      mempermasalahkan untuk waktu dan bisa adjust ke needs
                      customer. Kurir mereka juga cepat untuk jemput bola pada
                      saat perlu tanda tangan dll. Over all good service. Will
                      recommend you guys to my friends, thanks"
                    </p>
                  </div>
                </slide>
                <slide>
                  <div class="wrap">
                    <h5>Jo Yan matheas</h5>
                    <h6>PT Auralis Biru Jingga Magenta</h6>
                    <p>
                      "Good job Lexar! Quite responsive to our questions and
                      needs, and was able to solve any issues that arise."
                    </p>
                  </div>
                </slide>
              </carousel>
            </no-ssr>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="business-article">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3 class="headline">Related Article about Creative Industry</h3>
          </b-col>
          <b-col lg="4" md="6" v-for="post in dataPost" :key="post.id">
            <b-link :href="post.link" target="_blank" class="art-item">
              <div
                class="image"
                :style="{
                  'background-image':
                    'url(' + post.jetpack_featured_media_url + ')',
                }"
              ></div>
              <div class="text">
                <h5 class="judul" v-html="post.title.rendered"></h5>
                <div class="desc" v-html="post.excerpt.rendered"></div>
              </div>
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="business-cta">
      <b-container>
        <b-row class="align-items-center">
          <b-col md="6">
            <h5>Establish your Creative Industries with us!</h5>
            <b-link :to="localePath('contact')" class="btn btn-primary big">
              Contact Us
            </b-link>
          </b-col>
          <b-col md="6">
            <img src="/lexar/contact.svg" alt="" />
          </b-col>
        </b-row>
      </b-container>
    </div> -->

    <!-- Company Modal -->
    <!-- <b-modal ref="modal-starting" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
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
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
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
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                name="subject"
                v-model="form.subject"
                type="text"
                v-validate="'required'"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal> -->
  </div>
</template>

<script>
export default {
  // async asyncData({app}){
  //     const tempPost = await app.$publication.getWpPost(7);

  //     return{
  //         dataPost: tempPost,
  //     }
  // },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: null,
        message: "",
      },
      dataPost: null,
    };
  },
  methods: {
    showPTunder() {
      this.form.subject = this.$t("companyChoice1");
      this.$refs["modal-starting"].show();
    },
    showPTabove() {
      this.form.subject = this.$t("companyChoice2");
      this.$refs["modal-starting"].show();
    },
    showTrademark() {
      this.form.subject = this.$t("service5Item1");
      this.$refs["modal-starting"].show();
    },
    showCopyright() {
      this.form.subject = this.$t("service5Item2");
      this.$refs["modal-starting"].show();
    },
    showDeed() {
      this.form.subject = this.$t("deedChange");
      this.$refs["modal-starting"].show();
    },
    showDraft() {
      this.form.subject = this.$t("draftReview");
      this.$refs["modal-starting"].show();
    },
    showFund() {
      this.form.subject = this.$t("fundRaising");
      this.$refs["modal-starting"].show();
    },
    showLegal() {
      this.form.subject = this.$t("legalAdvisor");
      this.$refs["modal-starting"].show();
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
    },
  },
};
</script>
