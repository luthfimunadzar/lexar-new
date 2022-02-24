<template>
    <div>
        <div class="head-plain d-none">
            <nuxt-link :to="localePath('request-order')" class="link-back"><img src="/lexar/back.png" alt=""></nuxt-link>
            
            <nuxt-link :to="localePath('incorp')" class="link-close"><img src="/lexar/close.png" alt=""></nuxt-link>
            <div class="switcher-plain">
                <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
                <nuxt-link :to="switchLocalePath('id')">ID</nuxt-link>
            </div>
            
            <b-progress :value="nilai" :max="max" show-progress animated class="progress-global"></b-progress>
        </div>

        <div class="set-password">
            <img src="/lexar/lexar-brand.png" alt="" class="plain-logo">
            <div v-if="!isVerified">
                <h5 class="plain-title">Your Email is Verifying...</h5>
                <div class="clearfix mt-3 text-center">
                    <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
                </div>
            </div>
            <div v-else>
                <h5 class="plain-title" v-if="changePassword">{{ $t('passwordChangeTitle') }}</h5>
                <h5 class="plain-title" v-else>{{ $t('passwordTitle') }}</h5>
                <form>
                    <input type="password" 
                        name="password" 
                        id="password" 
                        ref="password"
                        placeholder="Password" 
                        v-model="user.new_password"
                        v-validate="'required'"
                        :class="{'is-invalid': errors.has('password')}" 
                        class="form-control big mb-4">
                    <span class="validator pt-2 text-danger">{{ errors ? errors.first('password') : '' }}</span>

                    <input type="password" 
                        name="confirm password" 
                        id="" 
                        placeholder="Confirm Password" 
                        v-model="user.repeat_password"
                        v-validate="'required|confirmed:password'"
                        :class="{'is-invalid': errors.has('confirm password')}" 
                        class="form-control big mb-4">                
                    <span class="validator pt-2 text-danger">{{ errors ? errors.first('confirm password') : '' }}</span>
                    <button @click.prevent="setPassword" class="btn btn-secondary w-100 big" type="submit" :disabled="loading">{{ $t('continue') }}</button>
                    <div class="clearfix mt-3 text-center" v-show="loading">
                        <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'plain',
    middleware: 'auth',
    data(){
        return{
            isVerified: false,
            nilai: 30,
            max: 100,
            loading: false,
            changePassword: false,
            user: {
                new_password: "",
                repeat_password: "",
            }
        }
    },
    mounted() {
        if(this.$route.query.incorporation){
            this.verifyAccount();
        } else if(this.$route.query.token) {
            this.verifyRelocated();
        } else {
            this.isVerified = true;
            this.changePassword = true;
        }
    },
    methods: {
        async verifyAccount(){
            try{
                await this.$user.verifyAccount(this.$route.query.token);
                this.$toast.success("Your Email have been verified!").goAway(2000);
                this.isVerified = true;
            } catch(error) {
                this.$toast.error(error.response.data.message).goAway(2000);
            }  
        },
        async verifyRelocated(){
            try{
                await this.$user.verifyAccount(this.$route.query.token);
                this.$toast.success("Your Email have been verified!").goAway(2000);
                
                setTimeout(this.$router.replace('/dashboard'), 3000)
            } catch(error) {
                this.$toast.error(error.response.data.message).goAway(2000);
            }  
        },
        async setPassword(){
            const validated = await this.$validator.validateAll();
            if(validated) {
                try {
                    this.loading = true;
                    console.log(JSON.stringify(this.user));
                    await this.$user.setPassword(this.$route.query.token, this.user);
                    this.$toast.success("Your Password has been changed").goAway(2000);
                    
                    this.$router.replace('/dashboard');
                } catch(error) {
                    this.loading = false;
                    this.$toast.error(error.response.data.message).goAway(2000);
                }
            }
        }
    }
}
</script>
