<template>
    <div>
        <b-row>
            <b-col md="8" lg="6" offset-md="2" offset-lg="3">
                <div class="loader-wrap" v-if="loading">
                    <span>{{ $t('updating') }}</span>
                    <b-spinner small  type="grow" label="Spinning"></b-spinner>
                </div>
                <div class="loader-wrap" v-else>
                    <span class="d-none d-lg-inline-block">{{ $t('changeSaved') }}</span>
                    <span class="d-inline-block d-lg-none">{{ $t('changeSavedMini') }}</span>
                </div>

                <div class="video-wrap">
                    <b-button :class="!showVideo ? 'collapsed' : null" :aria-expanded="showVideo ? 'true' : 'false'" @click="toggleVideo()">Video Tutorial Pembuatan Merek</b-button>
                    <b-collapse id="collapse-video" class="video-contain" v-model="showVideo">
                        <div class="contain">
                            <vue-plyr ref="plyr">
                                <div data-plyr-provider="youtube" data-plyr-embed-id="Cq5f5BDJ6II"></div>
                            </vue-plyr>
                        </div>
                    </b-collapse>
                </div>

                <h3 class="dashboard-title">Informasi Merek</h3>

                <b-card class="input-focus mb-0">
                    <template>
                        <label class="mt-0">Nama Merek</label>

                        <div class="help-text">
                            <p class="mb-0">
                                Pastikan nama merek yang anda daftarkan belum terdaftar pada website DGIP.
                            </p>
                        </div>

                        <b-form-input
                        v-model="trademark.nama_merek"
                        type="text"
                        name="Nama Merek"
                        v-validate="'required'"
                        :class="[{'is-invalid': errors.has('Nama Merek')}, 'big']"
                        placeholder="Nama Merk Anda"></b-form-input>
                        <span class="validator pt-2 text-danger">{{ errors ? errors.first('Nama Merek') : '' }}</span>
                    </template>

                    <!-- <template>
                        <label>Jenis Merek</label>

                        <div class="wrap-radio">
                            <b-form-radio
                            id="checkbox-barang"
                            v-model="trademark.jenis_merk"
                            value="Barang"
                            class="ml-1"
                            >
                                Barang
                            </b-form-radio>
                            <b-form-radio
                            id="checkbox-jasa"
                            v-model="trademark.jenis_merk"
                            value="Jasa"
                            >
                                Jasa
                            </b-form-radio>
                            <span class="validator pt-2 text-danger">{{ errors ? errors.first('name') : '' }}</span>
                        </div>
                    </template> -->

                    <template>
                        <label class="mt-md-5">Merek yang akan didaftarkan</label>

                        <div class="help-text">
                            <p>
                                Anda dapat mendaftarkan Merek Kata, Merek Logo, dan/atau Merek Kata & Logo
                            </p>
                        </div>

                        <template v-if="trademark.detail.length">
                            <div class="logo-wrap" v-for="eticket in trademark.detail" :key="eticket.id">
                                <h6 class="tipe" v-if="eticket.type_merek === 'type'">Merek Kata</h6>
                                <h6 class="tipe" v-else-if="eticket.type_merek === 'logo'">{{ eticket.nama_merek }} - Merek Logo</h6>
                                <h6 class="tipe" v-else-if="eticket.type_merek === 'logotype'">{{ eticket.nama_merek }} - Merek Kata & Logo </h6>
                                <img :src="eticket.image_link" alt="" v-if="eticket.type_merek != 'type'">
                                <h3 v-else>{{ eticket.value }}</h3>
                                <div class="opt">
                                    <b-link href="#" @click.prevent="deleteEticket(eticket.id)" class="text-danger"><i class="fa fa-trash"></i></b-link>
                                </div>
                            </div>
                        </template>

                        <b-button class="add-merek w-100" @click="openModalAddMerek()">
                            <i class="fa fa-plus"></i> Tambah Merek
                        </b-button>
                    </template>

                    <template>
                        <label class="mt-md-5">Kelas Merek</label>

                        <div class="help-text">
                            <p>
                                Untuk mendaftarkan merek, anda harus memilih satu kelas merek yang sesuai dengan jenis barang atau jasa anda
                            </p>
                        </div>

                        <div class="kelas-wrap" v-for="(kelas, index) in itemsDetailKelas" :key="index">
                            <div class="kelas-head">
                                <!-- <span class="number">{{ index + 1 }}</span> -->
                                <h5>Kelas {{ kelas.class }}</h5>
                                <div class="opt">
                                    <b-link href="#" @click.prevent="deleteClass(kelas.class)" class="text-danger"><i class="fa fa-trash"></i></b-link>
                                </div>
                            </div>

                            <p class="kelas-desc">{{ kelas.description }}</p>

                            <h6 class="kelas-subtitle">Sub Kelas</h6>

                            <table class="table table-striped">
                                <tbody>
                                    <tr v-for="subclass in kelas.subclass" :key="subclass.id">
                                        <td>
                                            {{ subclass.uraian }}
                                        </td>
                                        <td>
                                            <b-link href="#" @click.prevent="deleteSubClass(subclass.id)" class="text-danger"><i class="fa fa-trash"></i></b-link>
                                        </td>
                                    </tr>
                                </tbody>
                                <template slot="action" slot-scope="scope">
                                    <b-link :href="scope.id" class="text-danger delete-sub-kelas"><i class="fa fa-trash"></i></b-link>
                                </template>
                            </table>

                            <button class="btn btn-outline-primary w-100 mb-md-4" @click="openModalAddSubClass(kelas.class)">
                                <i class="fa fa-plus mr-1"></i> Tambah Sub Kelas yg Relevan dengan usaha anda
                            </button>
                            
                        </div>

                        <div class="kelas-wrap" v-for="(kelas, index) in listKelas" :key="index">
                            <div class="kelas-head">
                                <!-- <span class="number">{{ index + 1 }}</span> -->
                                <h5>Kelas {{ kelas.class }}</h5>
                            </div>

                            <p class="kelas-desc">{{ kelas.description }}</p>

                            <button class="btn btn-outline-primary w-100 mb-md-4" @click="openModalAddSubClass(kelas.class)">
                                <i class="fa fa-plus mr-1"></i> Tambah Sub Kelas yg Relevan dengan usaha anda
                            </button>
                        </div>

                        <b-button class="w-100 mb-md-4" @click="openModalAddKelas()">
                            <i class="fa fa-plus mr-1"></i> Tambah Kelas Merek
                        </b-button>
                    </template>
                </b-card>

                <b-link :to="localePath({ name: 'dashboard-trademark-id-pemohon-merek', params: { id: $route.params.id } })" class="btn btn-secondary w-100 big rounded-shadow mt-5" :disabled="loading">{{ $t('continue') }}</b-link>
            </b-col>
        </b-row>

        <b-modal ref="modal-add-merek" content-class="modal-merek" hide-footer>
            <template v-slot:modal-title>
                <span class="intro">Tambah Merek yang akan didaftarkan</span>
                <span class="introsub">Hanya daftarkan merek yang sesuai dengan nama merek yang sudah ditentukan sebelumnya</span>
            </template>
            <div data-vv-scope="addMerek">
                <h5 class="label-modal">Pilih Tipe Merk</h5>
                <div class="wrap-radio tambah-merek">
                    <b-form-radio
                    id="checkbox-merek-kata"
                    v-model="tambah.type_merek"
                    value="type"
                    validate="'required'"
                    name="jenis merek"
                    >
                        Merek Kata
                    </b-form-radio>
                    <span class="label-tipe">Pilih merek kata jika anda ingin mendaftarkan nama dari merek anda saja</span>
                    <h5 class="text-cth">Contoh</h5>

                    <b-form-radio
                    id="checkbox-merek-logo"
                    v-model="tambah.type_merek"
                    value="logo"
                    validate="'required'"
                    name="jenis merek"
                    >
                        Merek Logo
                    </b-form-radio>
                    <span class="label-tipe">Pilih merek logo jika anda ingin mendaftarkan logo dari merek anda saja</span>
                    <img src="/lexar/merek-logo.jpg" alt="" class="img-cth">

                    <b-form-radio
                    id="checkbox-merek-kata-logo"
                    v-model="tambah.type_merek"
                    value="logotype"
                    validate="'required'"
                    name="jenis merek"
                    >
                        Merek Kata dan Logo
                    </b-form-radio>
                    <span class="label-tipe">Pilih merek kata dan logo jika anda ingin mendaftarkan font nama dan logo anda (Jika anda belum mendaftarkan merek kata, lebih baik daftarkan merek kata terlebih dahulu)</span>
                    <img src="/lexar/logo-kata.jpg" alt="" class="img-cth">



                    <span class="validator pt-2 text-danger">{{ errors ? errors.first('jenis merek') : '' }}</span>
                </div>
            
                <template v-if="tambah.type_merek != 'type'">
                    <h5 class="label-modal">Masukan Nama Merek</h5>
                    <b-form-input
                    v-model="tambah.nama_merek"
                    type="text"
                    name="Merek"
                    v-validate="'required'"
                    :class="[{'is-invalid': errors.has('Merek')}, 'big', 'mb-3']"
                    placeholder=""></b-form-input>

                    <h5 class="label-modal">Upload File Merek</h5>
                    <b-form-file
                        v-model="tambah.value"
                        name="Merek"
                        class="upload-file-merek mb-3"
                        placeholder="Pilih File klik disini"
                        drop-placeholder="Lepas File disini"
                    ></b-form-file>
                </template>
                <template v-else>
                    <h5 class="label-modal">Masukan Nama Merek</h5>
                    <b-form-input
                    v-model="tambah.value"
                    type="text"
                    name="Merek"
                    v-validate="'required'"
                    :class="[{'is-invalid': errors.has('Merek')}, 'big']"
                    placeholder=""></b-form-input>
                </template>
                <span class="validator pt-2 text-danger">{{ errors ? errors.first('Merek') : '' }}</span>
            </div>

            <b-button class="w-100" @click.prevent="submitEticket()">
                <i class="fa fa-plus mr-1"></i> Tambah Merek
            </b-button>
        </b-modal>

        <b-modal ref="modal-add-kelas" size="xl" content-class="modal-merek" hide-footer>
            <template v-slot:modal-title>
                <span class="intro">Pilih Kelas Merek</span>
                <span class="introsub">Silahkan pilih satu kelas merek untuk merek yang anda daftarkan</span>
            </template>

            <div class="loading-modal" v-if="loading">
                <b>Data Loading</b> 
                <b-spinner type="grow" label="Spinning"></b-spinner>
            </div>

            <b-row>
                <b-col md="10">
                    <b-form-input
                    v-model="searchKelas"
                    type="text"
                    :class="['big', 'mb-4']"
                    placeholder="Search Kelas"></b-form-input>
                </b-col>
                <b-col md="2">
                    <button class="btn btn-primary mt-0 w-100" @click.prevent="filterKelas()">Search</button>
                </b-col>
            </b-row>

            <b-table 
                :items="itemsKelas" 
                :fields="fieldsKelas" 
                striped 
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection">
                <template slot="pilih" slot-scope="scope">
                    <button class="btn btn-secondary btn-small" @click.prevent="findKelas(scope.item.class)">
                        <i class="fa fa-plus mr-1"></i> Pilih
                    </button>
                </template>
            </b-table>

        </b-modal>

        <b-modal ref="modal-add-sub-kelas" size="xl" content-class="modal-merek" hide-footer>
            <template v-slot:modal-title>
                <span class="intro">Pilih Sub Kelas Merek</span>
                <span class="introsub">Silahkan pilih minimal satu sub kelas merek untuk merek yang anda daftarkan</span>
            </template>

            <div class="loading-modal" v-if="loading">
                <b>Data Loading</b> 
                <b-spinner type="grow" label="Spinning"></b-spinner>
            </div>

            <app-datatable 
                :items="itemsSubKelasModal" 
                :fields="fieldsSubKelasModal" 
                :meta="meta" 
                @per_page="handlePerPage" 
                @pagination="handlePagination" 
                @search="handleSearch" 
                @sort="handleSort"
                @checked="handleCheck"
            />

            <b-button class="w-100" @click.prevent="saveSubKelas()">
                <i class="fa fa-plus mr-1"></i> Tambah Kelas Merek
            </b-button>
        </b-modal>
    </div>
</template>

<script>
import _ from "lodash";
import Datatable from '../../../../components/Datatable.vue'

export default {
    layout: 'dashboard-with-sidebar-trademark',
    middleware: 'auth',
    loading: false,
    components: {
        'app-datatable': Datatable
    },
    async asyncData({ app, route, store }){
        let tempDetailTrademark = await app.$trademark.getDetailTrademark(route.params.id);
        store.commit("trademark/sendStatus", tempDetailTrademark.data.status_trademark.status);
        let tempDetailKelas = await app.$trademark.getDetailKelas(route.params.id);
        let tempKelasMerek = await app.$trademark.getKelas();
        let tempSubKelasMerek = await app.$trademark.getSubKelas();

        return { 
            trademark: tempDetailTrademark.data, 
            itemsKelas: tempKelasMerek.data, 
            itemsSubKelas: tempSubKelasMerek.data, 
            itemsDetailKelas: tempDetailKelas.data 
        }
    },
    data(){
        return {
            trademark:{
                nama_merek: "",
            },
            tambah: {
                trademark_id: "",
                type_merek: "",
                value: "",
                nama_merek: "",
            },
            check: [],
            baseURL: "",
            searchKelas: "",
            listKelas: "",
            loading: false,
            dataSubClass: [],
            subclass: {
                trademark_id: "",
                subclass: [],
            },
            optSubKelas: [
                { label: "produk kimia untuk digunakan dalam industri wewangian", id: 1},
                { label: "produk kimia yang digunakan dalam industri minyak dan gas", id: 2},
                { label: "reaktan kimia untuk pengujian identitas genetik", id: 3},
                { label: "reaktan kimia untuk pengujian hubungan kekeluargaan", id: 4},
                { label: "reaktan kimia untuk tujuan ilmiah", id: 5},
            ],
            sortDesc: false,
            sortDirection: 'asc',
            sortBy: '',
            fieldsSubKelas: [
                'check',
                { key: 'subkelas', sortable: true, label:'Nama Sub Kelas'},
                'action'
            ],
            itemsSubKelas: [
                { id: 1, subkelas: 'produk kimia untuk digunakan dalam industri wewangian' },
                { id: 2, subkelas: 'produk kimia yang digunakan dalam industri minyak dan gas' },
                { id: 3, subkelas: 'reaktan kimia untuk pengujian identitas genetik' },
            ],
            fieldsKelas: [
                { key: 'class', sortable: true, label:'Kelas'},
                { key: 'description', sortable: true, label:'Deskripsi'},
                'pilih',
            ],
            fieldsSubKelasModal: [
                'pilih',
                { key: 'uraian', sortable: true, label:'Uraian' },
            ],
            subclassCheck: [],
            subClassDone: [],
            classOpen: 0,
            itemsSubKelasModal: [],
            meta: [],
            current_page: 1,
            per_page: 30, 
            search: '',
            sortBy: 'id',
            sortByDesc: false,
            showVideo: true,
        }
    },
    computed: {
    },
    mounted() {
    },
    watch: {
        'trademark.nama_merek': function(oldMatrixID, newMatrixID){
            this.loading = true;
            this.$store.commit("incorp/updateMatrix", true);
            this.debouncedSaveMatrix();
        },
    },
    created(){ 
		this.baseURL = process.env.API_URL;
        this.debouncedSaveMatrix = _.debounce(this.saveMatrix, 2500);
        this.showVideo = this.$store.state.incorp.showVideo;
    },
    methods: {
        async saveMatrix(){
            try{
                this.loading = true;
                let tempMatrix = await this.$trademark.saveMatrix(this.trademark);
                this.loading = false;
            } catch(error){
                this.loading = false;
                this.$toast.error(error).goAway(3000);
            }
        },
        async getTrademark(){
            let tempDetailTrademark = await this.$trademark.getDetailTrademark($nuxt.$route.params.id);
            this.$store.commit("trademark/sendStatus", tempDetailTrademark.data.status_trademark.status);

            this.trademark = tempDetailTrademark.data
        },
        openModalAddMerek(){
            this.tambah.trademark_id = "";
            this.tambah.type_merek = "type";
            this.tambah.value = "";
            this.tambah.nama_merek = "";
            this.$refs['modal-add-merek'].show();
        },
        async submitEticket(){
            let validated = await this.$validator.validateAll('addMerek');

            if(validated){
                try{
                    this.tambah.trademark_id = $nuxt.$route.params.id;
                    
                    var dataMerek = new FormData();
                    dataMerek.append('trademark_id', this.tambah.trademark_id);
                    dataMerek.append('type_merek', this.tambah.type_merek);
                    dataMerek.append('value', this.tambah.value);
                    if(this.tambah.type_merek != 'type'){ 
                        dataMerek.append('nama_merek', this.tambah.nama_merek)
                    } else {
                        dataMerek.append('nama_merek', this.tambah.value)
                    }

                    await this.$trademark.sendEticket(dataMerek);
                    this.$toast.success('Data anda telah tersubmit!').goAway(3000);
                    this.$refs['modal-add-merek'].hide();
                    this.getTrademark();
                } catch(error) {
                    this.$toast.error(error).goAway(3000);
                }
            }
        },
        async deleteEticket(params){
            if(confirm("Anda yakin ingin menghapus Eticket ini?")){
                try{
                    await this.$trademark.deleteEticket(params);
                    this.getTrademark();
                    this.$toast.success('Eticket telah terhapus!').goAway(3000);
                } catch(error){
                    this.$toast.error(error).goAway(3000);
                }
            }
        },
        openModalAddKelas(){
            this.$refs['modal-add-kelas'].show()
        },
        async getKelas(){        
            let tempDetailKelas= await this.$trademark.getDetailKelas($nuxt.$route.params.id);

            this.itemsDetailKelas= tempDetailKelas.data 
        },
        async filterKelas(){
            let tempKelas = await this.$trademark.getFilteredKelas(this.searchKelas);

            this.itemsKelas = tempKelas.data
        },
        async findKelas(params){
            let tempKelas = _(this.itemsKelas).keyBy('class').at(params).value();

            this.listKelas = tempKelas;

            this.$refs['modal-add-kelas'].hide();
        },
        async deleteClass(params){
            if(confirm("Anda yakin ingin menghapus Class ini?")){
                try{
                    await this.$trademark.deleteClass({
                        trademark_id: $nuxt.$route.params.id,
                        class: params
                    });
                    this.getKelas();
                    this.$toast.success('Class telah terhapus!').goAway(3000);
                } catch(error){
                    this.$toast.error(error).goAway(3000);
                }
            }
        },
        async deleteSubClass(params){
            if(confirm("Anda yakin ingin menghapus Sub Class ini?")){
                try{
                    await this.$trademark.deleteSubClass({
                        trademark_id: $nuxt.$route.params.id,
                        subclass: params
                    });
                    this.getKelas();
                    this.$toast.success('Class telah terhapus!').goAway(3000);
                } catch(error){
                    this.$toast.error(error).goAway(3000);
                }
            }
        },
        async openModalAddSubClass(params){
            let tempSubClassModal = await this.$trademark.filterSubClassbyClass(params);

            this.classOpen = params;
            this.loadPostsData();

            this.$refs['modal-add-sub-kelas'].show()
        },
        async loadPostsData() {
            let current_page = this.search == '' ? this.current_page:1
            this.loading = true
            await this.$axios.$get(`/api/master/trademark/class/data`, {
                params: {
                    except: this.subClassDone,
                    class: this.classOpen,
                    page: current_page,
                    query: (this.search == '') ? null : this.search,
                    sortby: this.sortBy,
                    sortbydesc: this.sortByDesc ? 'DESC':'ASC'
                }
            })
            .then((response) => {
                let getData = response.data
                this.itemsSubKelasModal = getData.data

                this.meta = {
                    total: getData.total,
                    current_page: getData.current_page,
                    per_page: getData.per_page,
                    from: getData.from,
                    to: getData.to
                }
            })
            this.loading = false
        },
        handlePerPage(val) {
            this.per_page = val 
            this.loadPostsData()
        },
        handlePagination(val) {
            this.current_page = val
            this.loadPostsData()
        },
        handleSearch(val) {
            this.search = val
            this.loadPostsData() 
        },
        handleSort(val) {
            this.sortBy = val.sortBy
            this.sortByDesc = val.sortDesc

            this.loadPostsData() 
        },
        handleCheck(val) {
            this.subclassCheck = val
        },
        async saveSubKelas(){
            try{
                await this.$trademark.saveSubClass({
                    trademark_id: $nuxt.$route.params.id,
                    subclass: this.subclassCheck
                });

                this.getKelas();
                this.listKelas = {};
                this.$toast.success('Subclass telah tersimpan').goAway(3000);
                this.$refs['modal-add-sub-kelas'].hide()
            } catch(error){
                this.$toast.error(error).goAway(3000);
            }
        },
        toggleVideo(){            
            this.showVideo = !this.showVideo;
            if(this.showVideo === false){
                this.$refs.plyr.player.stop();
            }
            this.$store.commit("incorp/updateShowVideo", this.showVideo);
        }
    }
}
</script>

