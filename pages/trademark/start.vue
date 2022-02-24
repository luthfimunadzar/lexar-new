<template>
    <div>
        <div class="wrap-prematrix">
            <div class="prematrix" ref="prematrix">
                <h5 class="plain-title">Silahkan isi detail pendaftaran merek anda</h5>
                
                <b-form @submit="onSubmit" >
                    <b-card class="input-focus">
                        <template>
                            <label class="mt-0">Nama Merek</label>

                            <div class="help-text">
                                <p>
                                    Pastikan nama merek yang anda daftarkan belum terdaftar pada website DGIP. Anda bisa memasukkan merek lainnya di langkah selanjutnya.
                                </p>
                            </div>

                            <b-form-input
                            v-model="form.nama_merek"
                            type="text"
                            name="Nama Merek"
                            v-validate="'required'"
                            :class="[{'is-invalid': errors.has('Nama Merek')}, 'big']"
                            placeholder="Jaguar Sports"
                            ref="inputNama"></b-form-input>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nama Merek') : '' }}</span>
                        </template>

                        <template v-if="!$auth.loggedIn">
                            <template>
                                <template>
                                    <label>Nama Pemohon</label>

                                    <div class="help-text">
                                        <p>
                                            Isi nama perwakilan yang mendaftarkan merek ini
                                        </p>
                                    </div>

                                    <b-form-input
                                    v-model="form.nama_pemohon"
                                    type="text"
                                    name="Nama Pemohon"
                                    v-validate="'required'"
                                    :class="[{'is-invalid': errors.has('Nama Pemohon')}, 'big']"
                                    placeholder="John Doe"
                                    ref="inputNama"></b-form-input>
                                    <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nama Pemohon') : '' }}</span>
                                </template>

                                <template>
                                    <label>Email</label>

                                    <div class="help-text">
                                        <p>
                                            Isi email perwakilan yang mendaftarkan merek ini dan untuk menjadi username untuk login
                                        </p>
                                    </div>

                                    <b-form-input
                                    v-model="form.email"
                                    type="email"
                                    name="Email"
                                    v-validate="'required|email'"
                                    :class="[{'is-invalid': errors.has('Email')}, 'big']"
                                    placeholder="johndoe@gmail.com"
                                    ></b-form-input>
                                    <span class="validator pt-2 text-danger" v-if="emailAvailable.code === 400">{{ emailAvailable.message }}</span>
                                    <span class="validator pt-2 text-info" v-if="emailAvailable.code === 200">{{ emailAvailable.message }}</span>
                                    <span class="validator pt-2 text-danger">{{ errors ? errors.first('email') : '' }}</span>
                                </template>
                            </template>
                        </template>
                    </b-card>

                    <button class="btn btn-secondary w-100 big rounded-shadow" @click.prevent="onSubmit" type="submit" :disabled="loading == true">{{ $t('proceed') }}</button>

                    <div class="clearfix mt-3 text-center" v-show="loading">
                        <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    layout: "default",
    data() {
        return{
            form:{
                nama_merek: "",
                nama_pemohon: "",
                email: "",
            },
            loading: false,
            adaKtp: "",
            adaNpwp: "",
            useProfile: false,
            emailAvailable: {}
        }
    },
    watch: {
        'form.email': function(oldEmail, newEmail){
            this.debouncedGetEmail();
        },
    },
    created(){
        this.debouncedGetEmail = _.debounce(this.getEmail, 100)
    },
    mounted() {
    },
    methods: {
        async getEmail(params){
            let tempEmail = await this.$matrix.checkEmail({
                email : this.form.email
            });

            this.emailAvailable = tempEmail.meta;
        },
        async onSubmit(){
            const validated = await this.$validator.validateAll();

            if(this.$auth.loggedIn){
                if(validated) {
                    try {   
                        // show loading
                        this.loading = true; 
                        
                        // save prematrix trademark
                        const dataPrematrixTrademark = await this.$trademark.savePrematrixTrademark({
                            nama_merek: this.form.nama_merek,
                            nama_pemohon: this.$auth.user.data.nama,
                            email: this.$auth.user.data.email,
                            jenis_pemohon: "Individu",
                        });

                        this.$router.replace('/dashboard');
                    } catch (error) {
                        console.log(error)

                        this.loading = false;
                        this.$toast.error(error).goAway(3000);
                    }
                }
            } else {
                if(validated) {
                    try {   
                        // show loading
                        this.loading = true; 

                        // register incorp
                        const userTrademark = await this.$incorp.register({
                            name: this.form.nama_pemohon,
                            email: this.form.email
                        });
                        this.$store.commit("trademark/saveUserTrademark", userTrademark.data);

                        // login
                        await this.$auth.loginWith('password', {
                            data: {
                                username: userTrademark.data.email,
                                password: userTrademark.data.password
                            }
                        });
                        
                        // save prematrix trademark
                        const dataPrematrixTrademark = await this.$trademark.savePrematrixTrademark({
                            nama_merek: this.form.nama_merek,
                            nama_pemohon: this.form.nama_pemohon,
                            email: this.form.email,
                            jenis_pemohon: "Individu",
                        });

                        this.$router.replace('/dashboard');
                    } catch (error) {
                        console.log(error)

                        this.loading = false;
                        this.$toast.error(error).goAway(3000);
                    }
                }
            }
        }
    },
}
</script>

