<template>
    <div>
        <div class="login-wrap">
            <div class="login-form">    
                <h4 class="mb-2">{{ $t('resetPasswordTitle') }}</h4>
                <h6>{{ $t('resetPasswordsubTitle') }}</h6>

                <form>
                    <b-form-group
                        label="Password"
                        label-for="password"
                    >
                        <b-form-input
                        id="password"
                        v-model="form.new_password"
                        type="password"
                        name="password"
                        ref="password"
                        v-validate="'required'"
                        :class="{'is-invalid': errors.has('password')}"
                        ></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('password') : '' }}</span>
                    </b-form-group>

                    <b-form-group
                        label="Confirm Password"
                        label-for="c_password"
                    >
                        <b-form-input
                        id="C_password"
                        v-model="form.repeat_password"
                        type="password"
                        name="confirm password"
                        v-validate="'required|confirmed:password'"
                        :class="{'is-invalid': errors.has('confirm password')}"
                        ></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('confirm password') : '' }}</span>
                    </b-form-group>
                    
                    <b-button variant="primary" @click.prevent="onSubmit" type="submit" class="w-100">{{ $t('resetPassword') }}</b-button>
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
                new_password: "",
                repeat_password: "",
            }
        }
    },
    head () {
        return {
            title: 'Reset your Password | LEXAR',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'Reset your Password Page' },
                { hid: 'og:title', name: 'og:title', content: 'Reset your Password | LEXAR' },
                { hid: 'og:description', name: 'og:description', content: 'Reset your Password Page' },
            ]
        }
    },
    methods: {
        async onSubmit(evt) {
            const validated = await this.$validator.validateAll();
            if(validated) {
                try {
                    await this.$user.setPassword(this.$route.query.token, this.form);
                    this.$toast.success("Your Password has been changed").goAway(2000);
                    
                    this.$router.push(this.localePath({ name: 'login' }));
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
