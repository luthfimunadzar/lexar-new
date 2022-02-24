<template>
    <div>
        <div class="login-wrap">
            <div class="login-form">    
                <h4 class="mb-2">{{ $t('forgotPasswordTitle') }}</h4>
                <h6>{{ $t('forgotPasswordsubTitle') }}</h6>

                <form>
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
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                    </b-form-group>
                    
                    <b-button variant="primary" @click.prevent="onSubmit" type="submit" class="w-100">{{ $t('resetPassword') }}</b-button>

                    <nuxt-link :to="localePath('login')" class="link-su">{{ $t('haveAccount') }}</nuxt-link>
                    <nuxt-link :to="localePath('register')" class="link-su float-right">{{ $t('needAccount') }}</nuxt-link>
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
                email: "",
            }
        }
    },
    head () {
        return {
            title: 'Forgot your Password | LEXAR',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'Forgot your Password Page' },
                { hid: 'og:title', name: 'og:title', content: 'Forgot your Password | LEXAR' },
                { hid: 'og:description', name: 'og:description', content: 'Forgot your Password Page' },
            ]
        }
    },
    methods: {
        async onSubmit(evt) {
            const validated = await this.$validator.validateAll();
            if(validated) {
                try {
                    await this.$user.forgotPassword(this.form);

                    this.$toast.success('Please check your Email for link Change Password').goAway(3000);
                } catch(error) {
                    console.log(error)
                    this.logging = false;
                    this.$toast.error(error.response.data.message).goAway(3000);
                }
            }
        },
    }
}
</script>
