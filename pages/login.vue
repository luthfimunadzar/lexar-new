<template>
    <div>
        <div class="login-wrap">
            <div class="login-form">    
                <h4>{{ $t('loginTitle') }}</h4>

                <b-alert show variant="danger" class="mb-4" v-if="anyError">{{ errorMessage }}</b-alert>

                <form>
                    <b-form-group
                        :label="$t('emailAddress')"
                        label-for="input-email"
                    >
                        <b-form-input
                        id="input-email"
                        v-model="form.username"
                        type="email"
                        name="email"
                        v-validate="'required|email'"
                        :class="{'is-invalid': errors.has('email')}"
                        :placeholder="$t('plEmail')"
                        ></b-form-input>
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
                        ></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('password') : '' }}</span>
                    </b-form-group>
                    
                    <b-button v-if="this.$route.query.incorp" variant="primary" type="submit" @click.prevent="incorpSubmit" class="w-100" :disabled="logging">{{ $t('logIn') }}</b-button>
                    <b-button v-else variant="primary" type="submit" @click.prevent="onSubmit" class="w-100" :disabled="logging">{{ $t('logIn') }}</b-button>

                    <div class="clearfix mt-3 text-center" v-show="logging">
                        <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
                    </div>

                    <nuxt-link :to="localePath('register')" class="link-su">{{ $t('needAccount') }}</nuxt-link>
                    <nuxt-link :to="localePath('forgot-password')" class="link-fp">{{ $t('forgotPassword') }}</nuxt-link>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            form:{
                username: "",
                password: "",
            },
            anyError: false,
            logging: false,
            errorMessage: "",
            status: {
                authenticated: false
            },  
        }
    },
    head () {
        return {
            title: 'Login | LEXAR',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'Login Page' },
                { hid: 'og:title', name: 'og:title', content: 'Login | LEXAR' },
                { hid: 'og:description', name: 'og:description', content: 'Login Page' },
            ]
        }
    },
    methods: {
        async onSubmit(evt) {
            const validated = await this.$validator.validateAll();
            if(validated) {
                try {
                    this.logging = true;
                    this.status.authenticated = true;
                    await this.$auth.loginWith('password', {
                        data: this.form
                    });
                    this.$router.replace('/dashboard');
                } catch (error) {
                    this.status.authenticated = false;
                    this.logging = false;
                    // this.anyError = true;
                    this.$toast.error(error.response.data.message).goAway(3000);
                }
            }
        },
        async incorpSubmit(evt) {
            const validated = await this.$validator.validateAll();
            if(validated) {
                try {
                    this.logging = true;
                    this.status.authenticated = true;
                    await this.$auth.loginWith('password', {
                        data: this.form
                    });
                    this.$router.replace('/incorporation/start');
                } catch (error) {
                    this.status.authenticated = false;
                    this.logging = false;
                    // this.anyError = true;
                    this.$toast.error(error.response.data.message).goAway(3000);
                }
            }
        },
    }
}
</script>
