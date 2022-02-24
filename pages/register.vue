<template>
  <div>
    <!-- <div class="login-wrap">
            <div class="login-form">    
                <h4>{{ $t('registerTitle') }}</h4>

                <b-alert show variant="danger" class="mb-4" v-if="anyError">{{ errorMessage }}</b-alert>

                <form>
                    <b-form-group
                        :label="$t('name')"
                        label-for="input-name"
                    >
                        <b-form-input
                        id="input-name"
                        v-model="form.name"
                        type="text"
                        name="name"
                        v-validate="'required'"
                        :class="{'is-invalid': errors.has('name')}"
                        :placeholder="$t('plName')"
                        ></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                    </b-form-group>

                    <b-form-group
                        :label="$t('emailAddress')"
                        label-for="input-email"
                    >
                        <b-form-input
                        id="input-email"
                        v-model="form.email"
                        type="email"
                        name="email"
                        v-validate="'required|email'"
                        :class="{'is-invalid': errors.has('email')}"
                        :placeholder="$t('plEmail')"
                        ></b-form-input>
                        <span class="validator pt-2 text-danger" v-if="emailAvailable.code === 400">{{ emailAvailable.message }}</span>
                        <span class="validator pt-2 text-info" v-if="emailAvailable.code === 200">{{ emailAvailable.message }}</span>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                    </b-form-group>

                    <b-form-group
                        :label="$t('password')"
                        label-for="input-password"
                    >
                        <b-form-input
                        id="input-password"
                        v-model="form.password"
                        type="password"
                        name="password"
                        v-validate="'required'"
                        :class="{'is-invalid': errors.has('password')}"
                        :placeholder="$t('plPassword')"
                        ref="password"
                        ></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('password') : '' }}</span>
                    </b-form-group>

                    <b-form-group
                        :label="$t('confirmPassword')"
                        label-for="input-c-password"
                    >
                        <b-form-input
                        id="input-c-password"
                        v-model="form.c_password"
                        type="password"
                        name="confirm password"
                        v-validate="'required|confirmed:password'"
                        :class="{'is-invalid': errors.has('confirm password')}"
                        :placeholder="$t('plConfirmPassword')"
                        data-vv-as="password"
                        ></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('confirm password') : '' }}</span>
                    </b-form-group>
                    
                    <b-button variant="primary" @click.prevent="onSubmit" type="submit" class="w-100" :disabled="logging">{{ $t('register') }}</b-button>
                    
                    <div class="clearfix mt-3 text-center" v-show="logging">
                        <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
                    </div>

                    <nuxt-link :to="localePath('login')" class="link-su">{{ $t('haveAccount') }}</nuxt-link>
                    <nuxt-link :to="localePath('forgot-password')" class="link-fp">{{ $t('forgotPassword') }}</nuxt-link>
                </form>
            </div>

        </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        c_password: "",
        via: "website",
      },
      tempEmail: "",
      anyError: false,
      logging: false,
      errorMessage: "",
      showAlert: false,
      status: {
        authenticated: false,
      },
      emailAvailable: {},
    };
  },
  head() {
    return {
      title: "Register | LEXAR",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: "Register Page" },
        { hid: "og:title", name: "og:title", content: "Register | LEXAR" },
        {
          hid: "og:description",
          name: "og:description",
          content: "Register Page",
        },
      ],
    };
  },
  watch: {
    "form.email": function (oldEmail, newEmail) {
      this.debouncedGetEmail();
    },
  },
  created() {
    // this.debouncedGetEmail = _.debounce(this.getEmail, 100)
  },
  methods: {
    async getEmail(params) {
      let tempEmail = await this.$matrix.checkEmail({
        email: this.form.email,
      });

      this.emailAvailable = tempEmail.meta;
    },
    async onSubmit(evt) {
      const validated = await this.$validator.validateAll();
      if (validated && this.emailAvailable.message === "Available") {
        try {
          this.logging = true;
          console.log(JSON.stringify(this.form));
          await this.$user.register(this.form);
          this.status.authenticated = true;
          await this.$auth.loginWith("password", {
            data: {
              username: this.form.email,
              password: this.form.password,
            },
          });
          // this.tempEmail = this.form.email

          // this.showAlert = true
          // this.form.name = ""
          // this.form.email = ""
          // this.form.password = ""
          // this.form.c_password = ""
          // this.$validator.reset()

          this.$router.replace("/dashboard");
        } catch (error) {
          console.log(error);
          this.logging = false;
          // this.anyError = true;
          this.$toast.error(error.response.data.message).goAway(3000);
        }
      }
    },
  },
};
</script>
