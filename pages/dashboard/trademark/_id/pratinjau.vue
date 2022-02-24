<template>
    <div>
        <b-row>
            <b-col md="8" lg="8" offset-md="2" offset-lg="2">
                <div class="loader-wrap" v-if="loading">
                    <span>{{ $t('updating') }}</span>
                    <b-spinner small  type="grow" label="Spinning"></b-spinner>
                </div>
                <div class="loader-wrap" v-else>
                    <span class="d-none d-lg-inline-block">{{ $t('changeSaved') }}</span>
                    <span class="d-inline-block d-lg-none">{{ $t('changeSavedMini') }}</span>
                </div>

                <h3 class="dashboard-title">Pratinjau Merek</h3>

                <b-card class="input-focus">
                    <b-row>
                        <b-col md="6">
                            <template>
                                <label class="mt-0">Tipe Pemohon</label>
                                <label class="label-value-merek">{{ (pemohon.jenis_pemohon) ? pemohon.jenis_pemohon : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6" v-if="pemohon.jenis_pemohon === 'Badan'">
                            <template >
                                <label class="mt-0">Nama Direktur Utama</label>
                                <label class="label-value-merek">{{ (pemohon.nama_pemohon) ? pemohon.nama_pemohon : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6" v-if="pemohon.jenis_pemohon === 'Individu'">
                            <template>
                                <label class="mt-0">Nama Lengkap</label>
                                <label class="label-value-merek">{{ (pemohon.nama_pemohon) ? pemohon.nama_pemohon : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6">
                            <template>
                                <label class="mt-0">Warga Negara</label>
                                <label class="label-value-merek" v-if="pemohon.kewarganegaraan === 'wni'">Warga Negara Indonesia</label>
                                <label class="label-value-merek" v-else-if="pemohon.kewarganegaraan === 'wna'">Warga Negara Asing</label>
                                <label class="label-value-merek" v-else>Tidak ada data</label>
                            </template>
                        </b-col>
                        <b-col md="6">
                            <template>
                                <label class="mt-0">Nomor Handphone</label>
                                <label class="label-value-merek">{{ (pemohon.phone) ? pemohon.phone : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6">
                            <template>
                                <label class="mt-0">Email</label>
                                <label class="label-value-merek">{{ (pemohon.email) ? pemohon.email : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6">
                            <template>
                                <label class="mt-0">Alamat</label>
                                <label class="label-value-merek">{{ (pemohon.alamat) ? pemohon.alamat : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6">
                            <template>
                                <label class="mt-0">Provinsi</label>
                                <label class="label-value-merek">{{ (provinsi) ? provinsi : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6">
                            <template>
                                <label class="mt-0">Kota</label>
                                <label class="label-value-merek">{{ (kota) ? kota : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6">
                            <template>
                                <label class="mt-0">Nomor Induk KTP</label>
                                <label class="label-value-merek">{{ (pemohon.no_ktp) ? pemohon.no_ktp : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6" v-if="pemohon.jenis_pemohon === 'Individu'">
                            <template>
                                <label class="mt-0">KTP</label>
                                <b-link :href="pemohon.file.ktp" v-if="pemohon.file.ktp" target="_blank" class="see-file">Klik untuk lihat file</b-link>
                                <label class="label-value-merek" v-else>Tidak ada file</label>
                            </template>
                        </b-col>
                        <b-col md="6" v-if="pemohon.jenis_pemohon === 'Badan'">
                            <template>
                                <label class="mt-0">KTP Direktur</label>
                                <b-link :href="pemohon.file.ktp" v-if="pemohon.file.ktp" target="_blank" class="see-file">Klik untuk lihat file</b-link>
                                <label class="label-value-merek" v-else>Tidak ada file</label>
                            </template>
                        </b-col>
                        <b-col md="6">
                            <template>
                                <label class="mt-0">Nomor Induk NPWP</label>
                                <label class="label-value-merek">{{ (pemohon.no_npwp) ? pemohon.no_npwp : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6" v-if="pemohon.jenis_pemohon === 'Individu'">
                            <template>
                                <label class="mt-0">NPWP</label>
                                <b-link :href="pemohon.file.npwp" v-if="pemohon.file.npwp" target="_blank" class="see-file">Klik untuk lihat file</b-link>
                                <label class="label-value-merek" v-else>Tidak ada file</label>
                            </template>
                        </b-col>
                        <b-col md="6" v-if="pemohon.jenis_pemohon === 'Badan'">
                            <template>
                                <label class="mt-0">NPWP direktur</label>
                                <b-link :href="pemohon.file.npwp" v-if="pemohon.file.npwp" target="_blank" class="see-file">Klik untuk lihat file</b-link>
                                <label class="label-value-merek" v-else>Tidak ada file</label>
                            </template>
                        </b-col>
                        <b-col md="6" v-if="pemohon.jenis_pemohon === 'Badan'">
                            <template>
                                <label class="mt-0">Nama Badan Hukum (perusahaan)</label>
                                <label class="label-value-merek">{{ (pemohon.nama_perusahaan) ? pemohon.nama_perusahaan : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6">
                            <template>
                                <label class="mt-0">Nomor Induk NPWP Badan</label>
                                <label class="label-value-merek">{{ (pemohon.no_npwp_badan) ? pemohon.no_npwp_badan : "Tidak ada data" }}</label>
                            </template>
                        </b-col>
                        <b-col md="6" v-if="pemohon.jenis_pemohon === 'Badan'">
                            <template>
                                <label class="mt-0">NPWP Badan / Perusahaan</label>
                                <b-link :href="pemohon.file.npwp_perusahaan" v-if="pemohon.file.npwp_perusahaan" target="_blank" class="see-file">Klik untuk lihat file</b-link>
                                <label class="label-value-merek" v-else>Tidak ada file</label>
                            </template>
                        </b-col>
                        <b-col md="6" v-if="pemohon.jenis_pemohon === 'Badan'">
                            <template>
                                <label class="mt-0">Akta Pendirian / Akta Perubahan</label>
                                <b-link :href="pemohon.file.akta_pendirian" v-if="pemohon.file.akta_pendirian" target="_blank" class="see-file">Klik untuk lihat file</b-link>
                                <label class="label-value-merek" v-else>Tidak ada file</label>
                            </template>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="12">
                            <hr class="divider-trademark"/>
                            <label class="mt-0">Detail Eticket Merek</label>
                            <p class="perintah" v-if="pemohon.status_trademark.status === 'EDITING'">Pilih Sub Kelas Merek yang ingin anda daftarkan</p>
                            <div class="table-overflow">
                                <table class="table table-striped table-pratinjau">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Eticket</th>
                                            <th v-for="(kelas, index) in itemsDetailKelas" :key="index">
                                                Kelas {{ kelas.class }} <br/>
                                                <span class="small">{{ kelas.description.substring(0, 35) }}...</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(eticket, index) in pemohon.detail" :key="eticket.id">
                                            <td>
                                                {{ index + 1}}
                                            </td>
                                            <td>
                                                <span v-if="eticket.type_merek != 'type'" class="d-block mb-1">{{ eticket.nama_merek }} - Merek {{ eticket.type_merek }} </span>
                                                <span class="d-block mb-1" v-else>Merek {{ eticket.type_merek }}</span>
                                                <img :src="eticket.image_link" alt="" v-if="eticket.type_merek != 'type'">
                                                <h3 class="nama-merek" v-else>{{ eticket.value }}</h3>
                                            </td>
                                            <td v-for="(kelas, x) in itemsDetailKelas" :key="x">
                                                <b-form-checkbox
                                                    :id="index+'-'+x"
                                                    v-model="detail[index].class"
                                                    :value="kelas.class"
                                                    class="check-in-table mb-0"
                                                > </b-form-checkbox>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </b-col>
                        <b-col md="12">
                            <label class="mt-0">Simulasi Harga</label>
                            <div class="simulasi-wrap">
                                <b-row>
                                    <b-col md="6">
                                        <h5> Rp. {{ Number(billing.billing.price_per_eticket).toLocaleString('id') }} <span class="line-through">Rp. 4.000.000</span> </h5>
                                        <h6>Jasa Pembuatan Merek</h6>
                                    </b-col>
                                    <b-col md="6">
                                        <span class="kali">X</span>
                                        <h5> {{ totalClass }} </h5>
                                        <h6>Banyaknya Kelas merek yang dipilih</h6>
                                    </b-col>
                                    <b-col md="12">
                                        <h6 class="mb-1">Total yang harus Dibayar</h6>
                                        <h3 v-if="pemohon.status_trademark.status === 'EDITING'"> Rp. {{ totalHarga.toLocaleString('id') }} </h3>
                                        <h3 v-else> Rp. {{ billing.billing.total_price.toLocaleString('id') }} </h3>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>
                    </b-row>

                    <!-- <b-table 
                        :items="itemsKelas" 
                        :fields="fieldsKelas" 
                        class="table-etiket"
                        striped >
                        <template slot="no" slot-scope="scope">
                            {{ scope.index + 1 }}
                        </template>
                        <template slot="detail" slot-scope="scope">
                            <img :src="scope.item.detail" alt="" class="img-merek">
                        </template>
                        <template slot="action" slot-scope="scope">
                            <b-link :href="scope.id" class="text-danger delete-sub-kelas"><i class="fa fa-trash"></i></b-link>
                        </template>
                    </b-table> -->
                </b-card>

                <b-link @click="submit()" class="btn btn-secondary w-100 big rounded-shadow" :disabled="loading || totalHarga === 0" v-if="pemohon.status_trademark.status === 'EDITING'">Kirim Data ke Lexar</b-link>
            </b-col>
        </b-row>

        <b-modal ref="modal-pratinjau" content-class="modal-merek" hide-header hide-footer>
            <div class="pratinjau text-center">
                <img src="/lexar/laugh.png" alt="">
                <h3>Terimakasih telah menggunakan LEXAR!</h3>
                <h6>Harap tunggu 1x24 jam ya, kami akan mengirimkan email ke email kamu tentang progress pembuatan Trademark.</h6>
                <b-link class="btn btn-secondary" :to="localePath('dashboard')">Kembali ke Dashboard</b-link>
            </div>
        </b-modal>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    layout: 'dashboard-with-sidebar-trademark',
    middleware: 'auth',
    loading: false,
    async asyncData({ app, route, store }){
        let tempDetailTrademark = await app.$trademark.getDetailTrademark(route.params.id);
        store.commit("trademark/sendStatus", tempDetailTrademark.data.status_trademark.status);
        let tempProvince = await app.$profile.getCity(tempDetailTrademark.data.province_id);
        let tempCity = await app.$profile.getDisctrict(tempDetailTrademark.data.city_id);
        let tempDetailKelas = await app.$trademark.getDetailKelas(route.params.id);
        let tempBilling = await app.$trademark.getBilling(route.params.id);
        let tempClass = (tempDetailKelas.meta.code === 200) ? tempDetailKelas.data.map(e => e.class) : [] ;

        return { 
            pemohon: tempDetailTrademark.data,
            provinsi: tempProvince.data.name, 
            kota: tempCity.data.name,
            itemsDetailKelas: (tempDetailKelas.meta.code === 200) ? tempDetailKelas.data : [],
            billing: tempBilling,
            class: tempClass,
        }
    },
    data(){
        return {
            pemohon:{
            },
            loading: false,
            provinsi: "",
            kota: "",
            billing: {},
            fieldsKelas: [
                'no',
                { key: 'type', sortable: true, label:'Tipe Merek'},
                { key: 'detail', sortable: true, label:'Detail'},
                'action'
            ],
            itemsKelas: [
                { id: 1, type: 'Logo', detail: '/lexar/lexar-brand.png'},
                { id: 2, type: 'Logo & Kata', detail: '/lexar/logo.png'},
            ],
            detail: [],
            class: [],
        }
    },
    computed: {
        totalClass(){
            let tempClass = 0
            for(let i = 0; i < this.pemohon.detail.length; i++){
                let x = this.detail[i].class.length;
                tempClass += x
            }

            return tempClass
        },
        totalHarga(){
            let tempTotal = this.billing.billing.price_per_eticket * this.totalClass;

            return tempTotal
        }
    },
    mounted() {
    },
    watch: {
    },
    created(){ 
        if(this.pemohon.detail.length > 0){
            for(let i = 0; i < this.pemohon.detail.length; i++){
                this.detail.push({ 
                    eticket_id: this.pemohon.detail[i].id, 
                    class: this.class
                })
            }
        }
    },
    methods: {
        async submit(){
            try{
                this.loading = true;

                await this.$trademark.submitMatrix({
                    trademark_id: $nuxt.$route.params.id,
                    detail: this.detail
                });

                var dataCheckout = new FormData();
                dataCheckout.append('trademark_id', $nuxt.$route.params.id);
                dataCheckout.append('total_price', JSON.stringify(this.totalHarga));
                dataCheckout.append('additional', (this.pemohon.jenis_pemohon === "badan") ? 1 : 0);
                
                await this.$trademark.checkoutMatrix(dataCheckout);

                this.$refs['modal-pratinjau'].show()
                this.loading = false;
            } catch(error){
                this.loading = false;
                this.$toast.error(error).goAway(3000);
            }
        }
    }
}
</script>

