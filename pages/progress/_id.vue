<template>
    <div>
        <img src="/lexar/logo.png" alt="" class="logo d-block mx-auto">
        <h2 class="title-project">Pembuatan Legal PT {{ dataProgress.nama_perseroan }}</h2>

        <h5 class="title-section">Proses Dokumen</h5>
        <ul class="progress-list">
            <li :class="[{'active': dataProgress.project.status.idstatus === 1}]">
                <img src="/lexar/progress/wait-p.png" alt="">
                <h6>Tunggu Dokumen</h6>
            </li>
            <li :class="[{'active': dataProgress.project.status.idstatus === 2}]">
                <img src="/lexar/progress/complete-p.png" alt="">
                <h6>Dokumen Lengkap</h6>
            </li> 
            <li :class="[{'active': dataProgress.project.status.idstatus === 3}]">
                <img src="/lexar/progress/drafting-p.png" alt="">
                <h6>Drafting Akta</h6>
            </li> 
            <li :class="[{'active': dataProgress.project.status.idstatus === 4}]">
                <img src="/lexar/progress/review-p.png" alt="">
                <h6>Review & Approve</h6>
            </li> 
            <li :class="[{'active': dataProgress.project.status.idstatus === 5}]">
                <img src="/lexar/progress/signing-p.png" alt="">
                <h6>Signing</h6>
            </li> 
            <li :class="[{'active': dataProgress.project.status.idstatus === 6}]">
                <img src="/lexar/progress/notary-p.png" alt="">
                <h6>Notary Process</h6>
            </li> 
            <li :class="[{'active': dataProgress.project.status.idstatus === 7}]">
                <img src="/lexar/progress/done-p.png" alt="">
                <h6>Done</h6>
            </li> 
        </ul>
        
        <h5 class="title-section">Documents</h5>
        <b-row class="dokumen-list">
            <b-col cols="6" md="3" lg="2">
                <a href="#">
                    <span class="download">                    
                        <img src="/lexar/progress/download.png" alt="">
                    </span>
                    <div>
                        <img src="/lexar/progress/pdf-p.png" alt="" class="icon">
                        <h6>Draft Akta</h6>
                    </div>
                </a>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <a href="#">
                    <span class="download">                    
                        <img src="/lexar/progress/download.png" alt="">
                    </span>
                    <div>
                        <img src="/lexar/progress/pdf-p.png" alt="" class="icon">
                        <h6>Surat Kuasa</h6>
                    </div>
                </a>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <a href="#">
                    <span class="download">                    
                        <img src="/lexar/progress/download.png" alt="">
                    </span>
                    <div>
                        <img src="/lexar/progress/pdf-p.png" alt="" class="icon">
                        <h6>Surat Pernyataan Domisili</h6>
                    </div>
                </a>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <a href="#">
                    <span class="download">                    
                        <img src="/lexar/progress/download.png" alt="">
                    </span>
                    <div>
                        <img src="/lexar/progress/pdf-p.png" alt="" class="icon">
                        <h6>Surat Pernyataan Keabsahan</h6>
                    </div>
                </a>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <a href="#">
                    <span class="download">                    
                        <img src="/lexar/progress/download.png" alt="">
                    </span>
                    <div>
                        <img src="/lexar/progress/pdf-p.png" alt="" class="icon">
                        <h6>Surat Pernyataan Kegiatan Usaha</h6>
                    </div>
                </a>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <a href="#">
                    <span class="download">                    
                        <img src="/lexar/progress/download.png" alt="">
                    </span>
                    <div>
                        <img src="/lexar/progress/pdf-p.png" alt="" class="icon">
                        <h6>Surat Pernyataan Tidak Memiliki SIUP</h6>
                    </div>
                </a>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <a href="#">
                    <span class="download">                    
                        <img src="/lexar/progress/download.png" alt="">
                    </span>
                    <div>
                        <img src="/lexar/progress/pdf-p.png" alt="" class="icon">
                        <h6>Surat Pernyataan Tidak Memiliki TDP</h6>
                    </div>
                </a>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <a href="#">
                    <span class="download">                    
                        <img src="/lexar/progress/download.png" alt="">
                    </span>
                    <div>
                        <img src="/lexar/progress/pdf-p.png" alt="" class="icon">
                        <h6>Form SKDP</h6>
                    </div>
                </a>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <a href="#">
                    <span class="download">                    
                        <img src="/lexar/progress/download.png" alt="">
                    </span>
                    <div>
                        <img src="/lexar/progress/pdf-p.png" alt="" class="icon">
                        <h6>Permohonan OSS</h6>
                    </div>
                </a>
            </b-col>
            <b-col cols="6" md="3" lg="2">
                <a href="#">
                    <span class="download">                    
                        <img src="/lexar/progress/download.png" alt="">
                    </span>
                    <div>
                        <img src="/lexar/progress/pdf-p.png" alt="" class="icon">
                        <h6>Pernyataan KPP</h6>
                    </div>
                </a>
            </b-col>
        </b-row>
        
        <h5 class="title-section">Detail Matrix</h5>
        <div class="detail-matrix">
            <b-row>
                <b-col cols="6" lg="3">
                    <div class="detail-entry">
                        <label class="detail-label">Created At</label>
                        <label class="detail-content">{{ dataProgress.created_at | moment }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Updated At</label>
                        <label class="detail-content">{{ dataProgress.updated_at | moment }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Company Name</label>
                        <label class="detail-content">{{ dataProgress.nama_perseroan }} </label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Nomor SK</label>
                        <label class="detail-content">{{ dataProgress.no_sk }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Tanggal SK</label>
                        <label class="detail-content">{{ dataProgress.tanggal_sk | moment }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Nomor Akta</label>
                        <label class="detail-content">{{ dataProgress.no_akta }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Tanggal Akta</label>
                        <label class="detail-content">{{ dataProgress.tanggal_akta | moment }}</label>
                    </div>
                </b-col>
                <b-col cols="6" lg="3">
                    <div class="detail-entry">
                        <label class="detail-label">Tempat Tanda Tangan</label>
                        <label class="detail-content">{{ dataProgress.tempat_ttd }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Tanggal Tanda Tangan</label>
                        <label class="detail-content">{{ dataProgress.tanggal_ttd }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">NPWP Badan</label>
                        <label class="detail-content">{{ dataProgress.npwp_badan }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Phone Number</label>
                        <label class="detail-content">{{ dataProgress.no_telp }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Fax Number</label>
                        <label class="detail-content">{{ dataProgress.no_fax }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Address</label>
                        <label class="detail-content">{{ dataProgress.alamat }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Modal Dasar</label>
                        <label class="detail-content">{{ dataProgress.modal_dasar.toLocaleString('id') }}</label>
                    </div>
                </b-col>
                <b-col cols="6" lg="3">
                    <div class="detail-entry">
                        <label class="detail-label">Modal Disetor</label>
                        <label class="detail-content">{{ dataProgress.modal_disetor.toLocaleString('id') }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Nominal Saham</label>
                        <label class="detail-content">{{ dataProgress.nominal_saham.toLocaleString('id') }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Jumlah Saham</label>
                        <label class="detail-content">{{ dataProgress.jumlah_saham.toLocaleString('id') }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Visi Misi</label>
                        <label class="detail-content">{{ dataProgress.maksud_tujuan }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Email</label>
                        <label class="detail-content">{{ dataProgress.email }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Provinsi</label>
                        <label class="detail-content">{{ dataProvince.name }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Kota</label>
                        <label class="detail-content">{{ dataCity.name }}</label>
                    </div>
                </b-col>
                <b-col cols="6" lg="3">
                    <div class="detail-entry">
                        <label class="detail-label">Kecamatan</label>
                        <label class="detail-content">{{ dataDistrict.name }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Kelurahan</label>
                        <label class="detail-content">{{ dataVillage[0].name }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Gedung</label>
                        <label class="detail-content">{{ dataProgress.gedung }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Status Kantor</label>
                        <label class="detail-content">{{ dataProgress.status_kantor }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Status Kepemilikan</label>
                        <label class="detail-content">{{ dataProgress.status_kepemilikan }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Jumlah Karyawan</label>
                        <label class="detail-content">{{ dataProgress.jumlah_karyawan }}</label>
                    </div>
                </b-col>
            </b-row>
        </div>
        
        <h5 class="title-section">Detail Penanggung Jawab</h5>
        <div class="detail-matrix">
            <b-row>
                <b-col cols="6" lg="3">
                    <div class="detail-entry">
                        <label class="detail-label">Nama Lengkap</label>
                        <label class="detail-content">{{ dataProgress.project.client.nama }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Nomor Induk KTP</label>
                        <label class="detail-content">{{ dataProgress.project.client.nik }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">NPWP</label>
                        <label class="detail-content">{{ dataProgress.project.client.npwp }} </label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Tempat Lahir</label>
                        <label class="detail-content">{{ dataProgress.project.client.tempat_lahir }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Tempat Lahir</label>
                        <label class="detail-content">{{ dataProgress.project.client.tanggal_lahir }}</label>
                    </div>
                </b-col>
                <b-col cols="6" lg="3">
                    <div class="detail-entry">
                        <label class="detail-label">Agama</label>
                        <label class="detail-content">{{ dataProgress.project.client.agama }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Status Perkawinan</label>
                        <label class="detail-content">{{ dataProgress.project.client.status_perkawinan }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Pekerjaan</label>
                        <label class="detail-content">{{ dataProgress.project.client.pekerjaan }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Kewarganegaraan</label>
                        <label class="detail-content">{{ dataProgress.project.client.kewarganegaraan }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Alamat</label>
                        <label class="detail-content">{{ dataProgress.project.client.alamat }}</label>
                    </div>
                </b-col>
                <b-col cols="6" lg="3">
                    <div class="detail-entry">
                        <label class="detail-label">Kode Pos</label>
                        <label class="detail-content">{{ dataProgress.project.client.kodepos }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Provinsi</label>
                        <label class="detail-content">{{ dataProgress.project.client.province.name }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Kota</label>
                        <label class="detail-content">{{ dataProgress.project.client.city.name }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Kecamatan</label>
                        <label class="detail-content">{{ dataProgress.project.client.district.name }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Kelurahan</label>
                        <label class="detail-content">{{ dataProgress.project.client.village.name }}</label>
                    </div>
                </b-col>
                <b-col cols="6" lg="3">
                    <div class="detail-entry">
                        <label class="detail-label">Jenis Kelamin</label>
                        <label class="detail-content">{{ (dataProgress.project.client.jenis_kelamin === "L") ? "Laki Laki" : "Perempuan" }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Nomor Telepon</label>
                        <label class="detail-content">{{ dataProgress.project.client.no_telp }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Email</label>
                        <label class="detail-content">{{ dataProgress.project.client.email }}</label>
                    </div>
                    <div class="detail-entry">
                        <label class="detail-label">Nomor Passport</label>
                        <label class="detail-content">{{ dataProgress.project.client.no_passport }}</label>
                    </div>
                </b-col>
            </b-row>
        </div>

        <h5 class="title-section">Detail Pemegang Saham</h5>
        <div class="table-overflow">
            <b-table bordered :items="itemPemegangSaham" :fields="fieldsBadanPemegangSaham"></b-table>
        </div>

        <h5 class="title-section">Detail Pengurus</h5>
        <div class="table-overflow">
            <b-table bordered :items="itemPengurus" :fields="fieldsPengurus"></b-table>
        </div>

        <h5 class="title-section d-none">Detail Badan Pemegang Saham</h5>
        <div class="table-overflow d-none">
            <b-table bordered :items="itemBadanPemegangSaham" :fields="fieldsBadanPemegangSaham"></b-table>
        </div>

        <p class="footer">© 2019 LEXAR.</p>
    </div>
</template>

<style lang="scss">
    body{
        background-color: #fff;
    }

    .logo{
        width: 200px;
    }

    .title-project{
        color: #303030;
        text-align: center;
        margin: 20px 0 70px 0;
        @media screen and (max-width: 767.98px){
            margin: 10px 0 35px 0;
        }
    }

    .title-section{
        margin: 0 0 20px 0;
        @media screen and (max-width: 767.98px){
            margin: 0 0 10px 0;
        }
    }

    .progress-list{
        list-style: none;
        padding: 0;
        float: left;
        width: 100%;
        margin-bottom: 40px;
        @media screen and (max-width: 767.98px){
            margin-bottom: 20px;
        }
        li{
            position: relative;
            float: left;
            width: 14.2%;
            margin: 0;
            opacity: 0.5;
            padding: 50px 0 0 0;
            text-align: center;
            @media screen and (max-width: 767.98px){
                float: none;
                width: 100%;
                padding: 10px 0 10px 50px;
                text-align: left;
            }
            &:before{
                content: "";
                position: absolute;
                top: 10px;
                left: 0;
                right: 0;
                height: 3px;
                background-color: #303030;
                @media screen and (max-width: 767.98px){
                    top: 0;
                    left: 10px;
                    right: auto;
                    bottom: 0;
                    height: auto;
                    width: 3px;
                }
            }
            &:after{
                content: "";
                position: absolute;
                top: -3px;
                left: 50%;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 7px solid #FFF;
                background-color: #303030;
                transform: translateX(-50%);
                @media screen and (max-width: 767.98px){
                    top: 50%;
                    left: -4px;
                    transform: translateY(-50%);
                }
            }
            img{
                width: 80px;
                margin-bottom: 10px;
                @media screen and (max-width: 767.98px){
                    width: 60px;
                    display: inline-block;
                    margin: 0 10px 0 0;
                }
            }
            h6{
                margin: 0;
                @media screen and (max-width: 767.98px){
                    display: inline-block;
                }
            }
            &.active{
                opacity: 1;
                &:before{
                    opacity: 0.5;
                }
                &:after{
                    background-color: #BB815C;
                }
            }
        }
    }

    .dokumen-list{
        padding: 0;
        overflow: hidden;
        list-style: none;
        margin-bottom: 20px;
        @media screen and (max-width: 767.98px){
            margin-bottom: 10px;
        }
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 20px;
            height: 160px;
            border-radius: 5px;
            text-align: center;
            border: 1px solid rgba($color: #303030, $alpha: 0.2);
            &:before{
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                right: 50%;
                bottom: 50%;
                opacity: 0;
                border-radius: 5px;
                transition: all 0.3s ease;
                background-color: lighten(#BB815C, 5%);
            }
            .icon{
                width: 60px;
                margin-bottom: 15px;
            }
            h6{
                margin: 0;
                font-size: 15px;
                color: #303030;
            }
            .download{
                opacity: 0;
                position: absolute;
                top: 40%;
                left: 50%;
                background-color: #FFF;
                padding: 15px;
                border-radius: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.3s ease;
                img{
                    width: 30px;
                }
            }
            &:hover, &:focus{
                text-decoration: none;
                &:before{
                    opacity: 0.95;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
                h6{
                    color: #303030;
                }
                .download{
                    opacity: 1;
                    top: 50%;
                }
            }
        }
    }

    .detail-matrix{
        border: 1px solid rgba($color: #303030, $alpha: 0.2);
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 40px;
        @media screen and (max-width: 767.98px){
            margin-bottom: 20px;
        }
        .detail-entry{
            margin: 0 0 10px 0;
            .detail-label{
                font-size: 14px;
                margin: 0;
                display: block;
            }
            .detail-content{
                font-size: 14px;
                display: block;
                margin: 0;
                font-weight: 600;
            }
        }
    }

    .table-overflow{
        overflow-x: auto;
        margin-bottom: 40px;
        @media screen and (max-width: 767.98px){
            margin-bottom: 20px;
        }
        .table{
            margin: 0;
            thead{
                tr{
                    th{
                        background-color: #F9F9F9;
                        font-size: 14px;
                    }
                }
            }
            tbody{
                tr{
                    td{
                        font-size: 14px;
                    }
                }
            }
        }
    }

    .footer{
        margin: 15px 0;
        font-size: 14px;
        text-align: center;
        color: rgba($color: #303030, $alpha: 0.5)
    }
</style>

<script>
import moment from 'moment';
export default {
    layout: "progress",
    async asyncData({ app, route }){
        let tempProgress = await app.$incorp.getProgress(route.params.id);
        let tempProvince = await app.$profile.getCity(tempProgress.data.province_id);
        let tempCity = await app.$profile.getDisctrict(tempProgress.data.city_id);
        let tempDistrict = await app.$profile.getVillage(tempProgress.data.district_id);
        let tempVillage = tempDistrict.data.detail.filter(function(el){
            return el.id === Number(tempProgress.data.village_id);
        })

        return { 
            dataProgress: tempProgress.data, 
            dataProvince: tempProvince.data,
            dataCity: tempCity.data,
            dataDistrict: tempDistrict.data,
            dataVillage: tempVillage,
            itemPemegangSaham: tempProgress.data.saham,
            itemPengurus: tempProgress.data.pengurus,
        }
    },
    data(){
        return{
            dataProgress: "",
            dataProvince: "",
            dataCity: "",
            dataDistrict: "",
            dataVillage: "",
            itemPemegangSaham: "",
            itemPengurus: "",
            fieldsBadanPemegangSaham: {
                nama: {
                    label: 'Nama',
                    sortable: true
                },
                type_saham:{
                    label: 'Tipe Saham',
                    sortable: true
                },
                jumlah_saham:{
                    label: 'Jumlah Saham',
                    sortable: true
                },
            },
            fieldsPengurus: {
                nama:{
                    label: 'Nama',
                    sortable: true
                },
                jabatan:{
                    label: 'Jabatan',
                    sortable: true
                }
            },
            itemBadanPemegangSaham: [
                {
                    nama: 'Joy Journey', tipe_saham: 'Lembar', jumlah_saham: '200', nominal_saham: '200.000.000', persentasi: '80%'
                },
                {
                    nama: 'Edan Tourney', tipe_saham: 'Lembar', jumlah_saham: '50', nominal_saham: '50.000.000', persentasi: '20%'
                }
            ],
        }
    },
    methods: {
        moment: function () {
            return moment();
        }
    },
    filters: {
        moment: function (date) {
            return moment(date).format('DD MMM YYYY');
        }
    }
}
</script>

