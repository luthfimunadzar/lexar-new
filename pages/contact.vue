<template>
    <div>
        <!-- Hero Inner -->
        <div class="inner-hero" style="background-image: url('/lexar/bg-4.jpg');">
            <b-container>
                <b-row>
                    <b-col>
                        <h3>{{ $t('contactTitle') }}</h3>
                        <h5>{{ $t('contactSubTitle') }}</h5>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <!-- Contact Form -->
        <div class="contact white-panel">
            <b-container>
                <b-row>
                    <b-col md="8" offset-md="2">
                       <h4>{{ $t('contactForm') }}</h4>

                        <b-form>
                            <b-row>
                                <b-col md="6">
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
                                </b-col>
                                <b-col md="6">
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
                                </b-col>
                                <b-col md="12">
                                    <b-form-group id="input-group-3" :label="$t('subject')" label-for="input-3">
                                        <b-form-input
                                        id="input-3"
                                        v-model="form.subject"
                                        type="text"
                                        v-validate="'required'"
                                        name="subject"
                                        :placeholder="$t('plSubject')"
                                        ></b-form-input>
                                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('subject') : '' }}</span>
                                    </b-form-group>
                                </b-col>
                                <b-col md="12">
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
                                </b-col>
                                <b-col>  
                                    <b-alert variant="success" id="alertSuccess" class="d-none" show>Your message has been Submit. Please check your Email.</b-alert>                          
                                    <b-alert variant="danger" id="alertError" class="d-none" show>Theres something error, please try again</b-alert>        

                                    <b-button variant="primary" @click="onSubmit">{{ $t('submit') }}</b-button>
                                </b-col>
                            </b-row>
                        </b-form> 

                        
                        <h4 class="mt-5">{{ $t('mailingAddress') }}</h4>

                        <p>
                            <b>Domisili.id Building</b> <br/>
                            Jalan Wahid Hasyim No. 10D, Kel. Kebon Sirih, Kec. Menteng, Jakarta Pusat, 10340
                        </p>

                    </b-col>
                </b-row>
            </b-container>
 
            <GmapMap
            :center="{lat:-6.184111, lng:106.832624}"
            :zoom="16"
            map-type-id="terrain"
            style="width: 100%; height: 300px"
            >
                <GmapMarker  :position="{lat:-6.184047, lng:106.833394}"
            />
            </GmapMap>
        </div>
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
        subject: "",
        message: ""
      },
    };
  },
    head () {
        return {
            title: 'Contact | LEXAR',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'Ready to Work with us? We are here to help ease your work' },
                { hid: 'og:title', name: 'og:title', content: 'Contact | LEXAR' },
                { hid: 'og:description', name: 'og:description', content: 'Ready to Work with us? We are here to help ease your work' },
            ]
        }
    },
  methods: {
    async onSubmit() {
      const validated = await this.$validator.validateAll();
      console.log(validated);

      if (validated) {
        try {
        //   const contactRequest = await this.$contact.send(this.form);
          
          this.form.name = "";
          this.form.email = "";
          this.form.subject = "";
          this.form.message = "";

          this.$validator.reset()

          console.log('berhasil!');

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
