<template>
    <div>
        <div class="wrap-prematrix">
            <div class="prematrix" ref="prematrix">
                <h5 class="plain-title">Silahkan upload file dokumen yang dibutuhkan untuk mendaftarkan merek</h5>
                
                <b-form @submit="onSubmit" >
                    <b-card class="input-focus">
                        <div v-for="(data, index) in upload" :key="index">
                            <label class="mt-0" v-if="data === 'akta_pendirian'">Surat Akta Pendirian</label>
                            <label class="mt-0" v-else-if="data === 'npwp_perusahaan'">Surat NPWP Perusahaan</label>
                            <label class="mt-0" v-else-if="data === 'ktp'">Kartu Tanda Penduduk</label>
                            <label class="mt-0" v-else-if="data === 'npwp'">Nomor Pokok Wajib Pajak</label>
                            <label class="mt-0" v-else-if="data === 'kitas'">Kartu Izin Tinggal Terbatas</label>
                            <label class="mt-0" v-else-if="data === 'passport'">Passport</label>
                            <label class="mt-0" v-else-if="data === 'sk_pendirian'">Surat Keterangan dari Kementrian Hukum dan Ham</label>
                            <label class="mt-0" v-else-if="data === 'surat_kuasa'">Surat Kuasa</label>

                            <file-wrapper
                                v-model="file[index]"
                                :id="data"
                                class="mb-4 big"
                                :placeholder="'file ' + data"
                                v-validate="'required|size:2050'"
                                :name="data"
                            /> 
                            
                            <div v-if="trademark.file[data] != ''">
                                <span class="message-input"><i class="fa fa-check text-success"></i> File sudah terupload, lihat file <a :href="trademark.file[data]" target="_blank">disini</a></span>
                            </div>
                            
                            <span class="validator validator-upload text-danger">{{ errors ? errors.first(data) : '' }}</span>
                        </div>
                    </b-card>

                    <b-row>
                        <b-col md="6">
                            <button class="btn btn-secondary w-100 big rounded-shadow btn-upload" @click.prevent="onSubmit" type="submit" :disabled="loading == true || file.length === 0 || errors.items.length != 0">Upload Dokumen</button>
                        </b-col>
                        <b-col md="6">
                            <button class="btn btn-primary w-100 big rounded-shadow btn-upload" @click.prevent="onConfirm" type="submit" :disabled="!checkFile">Confirm Dokumen Sudah Benar</button>
                        </b-col>
                    </b-row>

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
    middleware: "auth",
    async asyncData({ app, route }){
        let tempDetailTrademark = await app.$trademark.getDetailTrademark(route.params.id);
        let tempUploadData = await app.$trademark.getUpload();
        let filteredUploadData = [];
        if(tempDetailTrademark.data.jenis_pemohon === "Individu"){
            filteredUploadData = tempUploadData.data.filter(e => e.type === "Individu").map(e => e.reqdoc)
        } else {
            filteredUploadData = tempUploadData.data.filter(e => e.type === "Badan").map(e => e.reqdoc)
        }

        return { 
            trademark: tempDetailTrademark.data, 
            upload: filteredUploadData,
        }
    },
    data() {
        return{
            file: [],
            loading: false,
            useProfile: false,
        }
    },
    watch: {
    },
    created(){
    },
    computed: {
        checkFile(){
            let x = 0;
            for(let i = 0; i < this.trademark.file; i++){
                if(this.trademark.file[i] === ''){
                    x++
                }
            }
            
            console.log(x)

            return (x === 0) ? true : false
        }
    },
    mounted() {
    },
    methods: {
        async onSubmit(){
            const validated = await this.$validator.validateAll();
            // console.log(this.upload.length)
            try{
                this.loading = true;
                var dataFile = new FormData();
                dataFile.append('id', this.$route.params.id);
                for(let i = 0; i < this.upload.length; i++){
                    if(this.file[i]){
                        dataFile.append(this.upload[i], this.file[i]);
                    }
                }

                let tempMatrix = await this.$trademark.uploadFile(dataFile);
                this.$toast.success("File anda telah terupload").goAway(3000);
                this.loading = false;
            } catch(error){
                this.loading = false;
                this.$toast.error(error).goAway(3000);
            }
        },
        async onConfirm(){
            try{
                this.loading = true;
                var dataConfirm = new FormData();
                dataConfirm.append('trademark_id', this.$route.params.id);
                await this.$trademark.confirmFile(dataConfirm);
                
                this.$refs['modal-pratinjau'].show()
                this.loading = false;
            } catch(error){
                this.loading = false;
                this.$toast.error(error).goAway(3000);
            }
        }
    },
}
</script>

