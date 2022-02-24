<template>
    <div>
        <b-row>
            <b-col md="10" offset-md="1">
                <div class="loader-wrap" v-if="loading">
                    <span>{{ $t('updating') }}</span>
                    <b-spinner small  type="grow" label="Spinning"></b-spinner>
                </div>
                <div class="loader-wrap" v-else>
                    <span class="d-none d-lg-inline-block">{{ $t('changeSaved') }}</span>
                    <span class="d-inline-block d-lg-none">{{ $t('changeSavedMini') }}</span>
                </div>
                <h3 class="dashboard-title">{{ $t('previewDeed') }}</h3>

                <div class="preview-akta">
                    <p class="text-center text-bold">
                        AKTA PENDIRIAN PERSEROAN TERBATAS
                    </p>
                    <p class="text-center text-bold">
                        {{ dataMatrix.nama_perseroan }}
                    </p>
                    <p>
                        -Pada hari ini, [Tanggal]
                    </p>
                    <p>
                        .
                    </p>
                    <p>
                        -Pukul [Waktu]
                    </p>
                    <p>
                        .
                    </p>
                    <p class="text-justify">
                        -Berhadapan dengan saya, <b>[Nama Notaris]</b> Notaris	
                        di Kabupaten Karawang, dengan dihadiri oleh saksi-saksi	
                        yang Saya, Notaris, kenal dan akan disebut pada bagian	
                        akhir Akta ini :   
                    </p>
                    <p class="text-justify">
                        yang Saya, Notaris, kenal dan akan disebut pada bagian akhir Akta ini :
                    </p>
                    <ol v-if="manager">
                        <li>
                            {{ manager.nama }}, {{ manager.tempat_lahir }}, {{ manager.tanggal_lahir }}
                            {{ manager.pekerjaan }}, {{ manager.alamat }}, {{ managerVillage }}, {{ managerDisctrict }}, {{ managerCity }}, {{ managerProvince }},
                            <span v-if="this.manager.kewarganegaraan === 'WNI'">pemegang KTP dengan nomor identitas {{ manager.nik }}</span>
                            <span v-if="this.manager.kewarganegaraan === 'WNA'">pemegang Passport dengan nomor identitas {{ manager.no_passport }}</span>
                        </li>
                    </ol>
                    <p class="text-justify">
                        -Untuk sementara para penghadap berada di Kabupaten Karawang;
                    </p>
                    <p class="text-justify">
                        -Penghadap dikenal oleh Saya, Notaris;
                    </p>
                    <p class="text-justify">
                        -Penghadap dalam kedudukannya sebagaimana tersebut	
                        dengan ini menerangkan, bahwa dengan tidak mengurangi	
                        izin dari pihak yang berwenang, antara para pihak yang	
                        diwakilinya tersebut telah sepakat dan setuju untuk	
                        bersama-sama mendirikan suatu perseroan terbatas dengan	
                        anggaran dasar sebagaimana yang termuat dalam Akta	
                        Pendirian ini (untuk selanjutnya cukup disingkat dengan	
                        <b>“Anggaran Dasar”</b>) sebagai berikut : 
                    </p>
                    
                    <p class="text-center text-bold">
                        NAMA DAN TEMPAT KEDUDUKAN
                    </p>
                    <p class="text-center text-bold">
                        PASAL 1
                    </p>
                    <ol class="low-padding">
                        <li>
                            <p>Perseroan Terbatas ini bernama :</p>
                            <p class="text-center text-bold">“{{ dataMatrix.nama_perseroan }}”</p>
                            <p class="text-justify">
                                (selanjutnya cukup disingkat dengan <b>“Perseroan”</b>), berkedudukan di  <b>Kota Administrasi {{ (dataMatrix.status_kantor === "Virtual Office") ? dataVO : companyCity }}</b>.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Perseroan dapat membuka kantor cabang atau kantor	
                                perwakilan, baik di dalam maupun diluar wilayah	
                                Republik Indonesia sebagaimana ditetapkan oleh	
                                Direksi, dengan persetujuan dari Dewan Komisaris	
                                Perseroan.                     
                            </p>
                        </li>
                    </ol>
                    <p class="text-center text-bold">
                        JANGKA WAKTU BERDIRINYA PERSEROAN
                    </p>
                    <p class="text-center text-bold">
                        PASAL 2
                    </p>

                    <p class="text-justify">
                        -Perseroan didirikan untuk jangka waktu yang tidak	
                        terbatas.            
                    </p>
                    
                    <p class="text-center text-bold">
                        MAKSUD DAN TUJUAN SERTA KEGIATAN USAHA 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 3
                    </p>
                    <ol class="low-padding">
                        <li>
                            <p class="mt-4 mb-2">Maksud dan Tujuan Perseroan ialah :</p>
                            <p v-for="kbli in kbliName" :key="kbli" class="mb-2">- {{ kbli }}</p>
                        </li>
                        <li>
                            <p class="text-justify mt-4 mb-2">
                                Untuk mencapai maksud dan tujuan tersebut, Perseroan	
                                dapat melaksanakan kegiatan-kegiatan usaha sebagai	
                                berikut :                
                            </p>
                            <p v-for="kbli in kbliCode" :key="kbli" class="mb-2">- {{ kbli }}</p>
                        </li>
                    </ol>
                    <p class="text-center text-bold">
                        M O D A L 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 4
                    </p>
                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Modal Dasar Perseroan berjumlah <b>{{ "Rp. " + dataMatrix.modal_dasar.toLocaleString('id') }}, <no-ssr><span v-if="dataMatrix.modal_dasar != 0">{{ dataMatrix.modal_dasar | terbilang }}</span></no-ssr></b> terbagi atas <b>{{ "Rp. " + dataMatrix.jumlah_saham.toLocaleString('id') }}, <no-ssr><span v-if="dataMatrix.jumlah_saham != 0">{{ dataMatrix.jumlah_saham | terbilang }}</span></no-ssr></b> saham, masing-masing saham bernilai nominal	
                                sebesar <b>{{ "Rp. " + dataMatrix.nominal_saham.toLocaleString('id') }}, <no-ssr><span v-if="dataMatrix.nominal_saham != 0">{{ dataMatrix.nominal_saham | terbilang }}</span></no-ssr></b>.                    
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Dari modal dasar tersebut telah ditempatkan dan	
                                disetor seluruhnya sebesar <b>{{ percentage }} %</b>
                                atau sejumlah <b> {{ jumlahSaham }} </b> saham dengan nilai nominal seluruhnya sebesar <b>( {{ "Rp. " + nominal.toLocaleString('id') }}, <no-ssr><span v-if="nominal != 0">{{ nominal | terbilang }}</span></no-ssr> )</b> oleh Para Pendiri yang telah mengambil bagian saham dengan cara, rincian serta	nilai nominal saham yang akan disebutkan pada akhir	Akta ini.                                        
                            </p>
                        </li>
                    </ol>
                    <p class="text-center text-bold">
                        S A H A M 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 5
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Semua saham yang dikeluarkan oleh Perseroan adalah	
                                saham atas nama dan dikeluarkan atas nama para	
                                pemegang saham sebagaimana dicantumkan dalam Daftar	
                                Pemegang Saham Perseroan.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Yang boleh memiliki dan mempergunakan hak atas	
                                saham adalah Warga Negara Indonesia dan/atau badan	
                                hukum Indonesia. 
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Bukti pemilikan saham dapat berupa surat saham.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Dalam hal Perseroan tidak menerbitkan surat saham,	
                                pemilikan saham dapat dibuktikan dengan surat	
                                keterangan atau catatan yang dikeluarkan oleh 	
                                Perseroan.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika dikeluarkan surat saham, maka untuk setiap	
                                surat saham diberi sehelai surat saham.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Surat kolektif saham dapat dikeluarkan sebagai	
                                bukti pemilikan 2 (dua) atau lebih saham yang	
                                dimiliki oleh seorang pemegang saham.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Pada surat saham harus dicantumkan sekurangnya :
                            </p>
                            <ul class="lower-alpha mt-10">
                                <li><p>nama dan alamat pemegang saham;</p></li>
                                <li><p>nomor surat saham;</p></li>
                                <li><p>nilai nominal saham;</p></li>
                                <li><p class="mb-0">tanggal pengeluaran surat saham;</p></li>
                            </ul>
                        </li>
                        <li>
                            <p class="text-justify">
                                Pada surat kolektif saham sekurangnya harus	
                                dicantumkan :                     
                            </p>
                            <ul class="lower-alpha mt-10">
                                <li><p>nama dan alamat pemegang saham;</p></li>
                                <li><p>nomor surat kolektif saham;</p></li>
                                <li><p>nomor surat saham dan jumlah saham;</p></li>
                                <li><p>nilai nominal saham;</p></li>
                                <li><p class="mb-0">tanggal pengeluaran surat kolektif saham;</p></li>
                            </ul>
                        </li>
                        <li>
                            <p class="text-justify">
                                Surat saham dan surat kolektif saham harus	
                                ditandatangani oleh Direktur Utama.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        PENGGANTI SURAT SAHAM 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 6
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Jika surat saham rusak atau tidak dapat dipakai,	
                                atas permintaan mereka yang berkepentingan, Direksi	
                                mengeluarkan surat saham pengganti, setelah surat	
                                saham yang rusak atau tidak dapat dipakai tersebut	
                                diserahkan kembali kepada Direksi.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Surat saham sebagaimana dimaksud pada ayat 1	
                                harus dimusnahkan dan dibuat berita acara oleh	
                                Direksi untuk dilaporkan dalam Rapat Umum Pemegang	
                                Saham berikutnya.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika surat saham hilang, atas permintaan mereka	
                                yang berkepentingan, Direksi mengeluarkan surat	
                                saham pengganti setelah menurut pendapat Direksi	
                                kehilangan tersebut cukup dibuktikan dan dengan	
                                jaminan yang dipandang perlu oleh Direksi untuk	
                                tiap peristiwa yang khusus. 
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Setelah surat saham pengganti dikeluarkan, surat	
                                saham yang dinyatakan hilang tersebut, tidak	
                                berlaku lagi terhadap Perseroan.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Semua biaya yang berhubungan dengan pengeluaran	
                                surat saham pengganti, ditanggung oleh pemegang	
                                saham yang berkepentingan.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Ketentuan sebagaimana dimaksud pada ayat 1, ayat	
                                2, ayat 3, ayat 4 dan ayat 5 mutatis-mutandis	
                                berlaku bagi pengeluaran surat kolektif saham	
                                pengganti.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        PEMINDAHAN HAK ATAS SAHAM 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 7
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Pemindahan hak atas saham, harus berdasarkan akta	
                                pemindahan hak yang ditandatangani oleh yang	
                                memindahkan dan yang menerima pemindahan atau	
                                kuasanya yang sah.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify mb-10">
                                Persetujuan terlebih dahulu Rapat Umum Pemegang	
                                Saham diperlukan untuk setiap penjualan atau	
                                pemindahan hak atas saham-saham, gadai atau	
                                pengagunan dengan cara lain atas saham-saham	
                                Perseroan, kecuali pemindahan hak atau pengagunan	
                                atas saham-saham kepada pemegang saham lainnya atau	
                                dalam hal pemindahan hak atas saham yang disebabkan	
                                oleh peralihan hak karena hukum sesuai dengan	
                                ketentuan Undang-undang tentang Perseroan Terbatas	
                                dan ketentuan hukum lain yang berlaku.
                            </p>
                            <p class="text-justify">
                                -Pemegang saham yang hendak memindahkan hak atas	
                                saham, harus menawarkan terlebih dahulu kepada	
                                pemegang saham lain dengan menyebutkan harga serta	
                                persyaratan penjualan dan memberitahukan kepada	
                                Direksi secara tertulis tentang penawaran tersebut.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Pemindahan hak atas saham harus mendapat	
                                persetujuan dari instansi yang berwenang, jika	
                                peraturan perundang-undangan mensyaratkan hal	
                                tersebut.                    
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Mulai hari panggilan Rapat Umum Pemegang Saham	
                                sampai dengan hari dilaksanakan Rapat Umum Pemegang	
                                Saham, pemindahan hak atas saham tidak	
                                diperkenankan.        
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Apabila karena warisan, perkawinan atau sebab lain	
                                saham tidak lagi menjadi milik Warga Negara	
                                Indonesia atau badan hukum Indonesia, maka dalam	
                                jangka waktu <b>1 (satu)</b> tahun orang atau Badan Hukum	
                                tersebut wajib memindahkan hak atas sahamnya kepada	
                                Warga Negara Indonesia atau Badan Hukum Indonesia,-	
                                sesuai ketentuan Anggaran Dasar.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        RAPAT UMUM PEMEGANG SAHAM
                    </p>
                    <p class="text-center text-bold">
                        PASAL 8
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Rapat Umum Pemegang Saham, yang selanjutnya disebut	RUPS adalah :
                            </p>
                            <ul class="lower-alpha mt-10">
                                <li>
                                    <p class="text-justify">RUPS tahunan;</p>
                                </li>
                                <li>
                                    <p class="text-justify mb-0">
                                        RUPS lainnya, yang dalam Anggaran Dasar ini	
                                        disebut juga RUPS luar biasa.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p class="text-justify">
                                Istilah RUPS dalam Anggaran Dasar ini berarti	
                                keduanya, yaitu : RUPS tahunan dan RUPS luar biasa	
                                kecuali dengan tegas ditentukan lain.
                            </p>
                        </li>
                        <li>
                            <p>
                                Dalam RUPS tahunan :
                            </p>
                            <ul class="lower-alpha mt-10">
                                <li>
                                    <p class="text-justify">Direksi menyampaikan :</p>
                                    <p class="text-height mt-5">
                                        -- laporan tahunan yang telah ditelaah oleh	Dewan Komisaris untuk mendapat persetujuan RUPS;
                                            
                                    </p>
                                    <p class="text-height mt-5">
                                        -- laporan keuangan untuk mendapat pengesahan rapat;
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        Ditetapkan penggunaan laba, jika Perseroan	
                                        mempunyai saldo laba yang positif.                            
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        Diputuskan mata acara RUPS lainnya yang telah	
                                        diajukan sebagaimana mestinya dengan	
                                        memperhatikan ketentuan Anggaran Dasar.                                                       
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p class="text-justify">
                                Persetujuan laporan tahunan dan pengesahan laporan	
                                keuangan oleh RUPS tahunan berarti memberikan	
                                pelunasan dan pembebasan tanggung jawab sepenuhnya	
                                kepada anggota Direksi dan Dewan Komisaris atas	
                                pengurusan dan pengawasan yang telah dijalankan	
                                selama tahun buku yang lalu, sejauh tindakan	
                                tersebut tercermin dalam Laporan Tahunan dan	
                                Laporan Keuangan.                                   
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                RUPS luar biasa dapat diselenggarakan sewaktu-waktu	
                                berdasarkan kebutuhan untuk membicarakan dan	
                                memutuskan mata acara rapat kecuali mata acara	
                                rapat yang dimaksud pada ayat 3 huruf a dan huruf	
                                b, dengan memperhatikan peraturan perundang-	
                                undangan serta Anggaran Dasar.                                
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        TEMPAT, PEMANGGILAN DAN PIMPINAN RUPS 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 9
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                RUPS diadakan di tempat kedudukan Perseroan atau di	
                                tempat Perseroan melakukan kegiatan usahanya yang	
                                utama.                    
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                RUPS diselenggarakan dengan melakukan pemanggilan	
                                terlebih dahulu kepada para pemegang saham dengan	
                                surat tercatat dan/atau dengan iklan dalam surat	
                                kabar.              
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Pemanggilan dilakukan paling lambat <b>14 (empatbelas)</b>	
                                hari sebelum tanggal RUPS diadakan dengan tidak	
                                memperhitungkan tanggal pemanggilan dan tanggal	
                                RUPS diadakan.             
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                RUPS dipimpin oleh Direktur Utama.                   
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika Direktur Utama tidak ada atau berhalangan	
                                karena sebab apapun yang tidak perlu dibuktikan	
                                kepada pihak ketiga, RUPS dipimpin oleh salah	
                                seorang Direksi yang ditunjuk oleh Direktur Utama.     
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika semua Direktur tidak hadir atau berhalangan	
                                karena sebab apapun yang tidak perlu dibuktikan	
                                kepada pihak ketiga RUPS dipimpin oleh salah	
                                seorang anggota Dewan Komisaris.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika semua anggota Dewan Komisaris tidak hadir atau	
                                berhalangan karena sebab apapun yang tidak perlu	
                                dibuktikan kepada pihak ketiga, RUPS dipimpin oleh	
                                seorang yang dipilih oleh dan diantara mereka yang	
                                hadir dalam rapat. 
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        KUORUM, HAK SUARA, DAN KEPUTUSAN RUPS 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 10
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                RUPS dapat dilangsungkan jika dalam Rapat Umum	
                                Pemegang Saham paling sedikit 2/3 (dua per tiga)	
                                bagian dari jumlah seluruh saham dengan hak suara	
                                hadir atau diwakili.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Pemungutan suara mengenai diri orang dilakukan	
                                dengan surat tertutup yang tidak ditandatangani dan	
                                mengenai hal lain secara lisan, kecuali apabila	
                                ketua RUPS menentukan lain tanpa ada keberatan dari	
                                pemegang saham yang hadir dalam RUPS.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Suara blanko atau suara yang tidak sah dianggap	
                                tidak ada dan tidak dihitung dalam menentukan	
                                jumlah	 suara yang dikeluarkan dalam RUPS.                    
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                RUPS dapat mengambil keputusan berdasarkan	
                                musyawarah untuk mufakat atau berdasarkan suara	
                                setuju dari jumlah suara yang dikeluarkan dalam	
                                RUPS sebagaimana ditentukan dalam Undang-Undang.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        D I R E K S I 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 11
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Perseroan diurus dan dipimpin oleh Direksi yang	
                                terdiri dari seorang anggota Direksi atau lebih.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika diangkat lebih dari seorang Direktur, maka	
                                seorang diantaranya dapat diangkat sebagai Direktur	
                                Utama.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Anggota Direksi diangkat oleh Rapat Umum Pemegang	
                                Saham, untuk jangka waktu <b>5 (lima) tahun</b> dengan	
                                tidak mengurangi hak Rapat Umum Pemegang Saham untuk	
                                memberhentikannya sewaktu-waktu.                  
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika oleh suatu sebab apapun jabatan seorang atau	
                                lebih atau semua anggota Direksi lowong, maka dalam	
                                jangka waktu <b>30 (tigapuluh) hari</b> sejak terjadi	
                                lowongan harus diselenggarakan Rapat Umum Pemegang-	
                                Saham, untuk mengisi lowongan itu dengan	
                                memperhatikan ketentuan peraturan perundang	
                                undangan dan Anggaran Dasar.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika oleh suatu sebab apapun semua jabatan anggota	
                                Direksi lowong, untuk sementara Perseroan diurus	
                                oleh anggota Dewan Komisaris yang ditunjuk oleh	
                                rapat Dewan Komisaris.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Anggota Direksi berhak mengundurkan diri dari	
                                jabatannya dengan memberitahukan secara tertulis	
                                kepada Perseroan paling kurang <b>30 (tigapuluh) hari</b>	
                                sebelum tanggal pengunduran dirinya
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jabatan anggota Direksi berakhir, jika :
                            </p>
                            <ul class="lower-alpha mt-10">
                                <li>
                                    <p class="text-justify">mengundurkan diri sesuai ketentuan ayat 6;</p>
                                </li>
                                <li>
                                    <p class="text-justify">tidak lagi memenuhi persyaratan peraturan perundang-undangan;</p>
                                </li>
                                <li>
                                    <p class="text-justify">meninggal dunia;</p>
                                </li>
                                <li>
                                    <p class="text-justify">diberhentikan berdasarkan keputusan Rapat Umum Pemegang Saham.</p>
                                </li>
                            </ul>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        TUGAS DAN WEWENANG DIREKSI 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 12
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Direksi berhak mewakili Perseroan di dalam dan	
                                di luar Pengadilan tentang segala hal dan dalam	
                                segala kejadian, mengikat Perseroan dengan pihak	
                                lain dan pihak lain dengan Perseroan, serta	
                                menjalankan segala tindakan, baik yang mengenai	
                                kepengurusan maupun kepemilikan, akan tetapi dengan	
                                pembatasan bahwa untuk :
                            </p>
                            <ul class="lower-alpha mt-10">
                                <li>
                                    <p class="text-justify">
                                        meminjam atau meminjamkan uang atas nama	
                                        Perseroan (tidak termasuk mengambil uang	
                                        Perseroan di Bank);
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        mendirikan suatu usaha atau turut serta pada	
                                        perusahaan lain baik di dalam maupun di luar	
                                        negeri;
                                    </p>
                                </li>
                            </ul>
                            <p class="text-justify">
                                - harus dengan persetujuan tertulis dari Dewan	
                                Komisaris Perseroan.  
                            </p>
                        </li>
                        <li>
                            <ul class="lower-alpha">
                                <li>
                                    <p class="text-justify">
                                        Direktur Utama berhak dan berwenang bertindak	
                                        untuk dan atas nama Direksi serta mewakili	
                                        Perseroan.
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        Dalam hal Direktur Utama tidak hadir atau	
                                        berhalangan karena sebab apapun juga, yang tidak	
                                        perlu dibuktikan kepada pihak ketiga, maka salah	
                                        seorang anggota Direksi lainnya yang ditunjuk	
                                        oleh Direktur Utama berhak dan berwenang	
                                        bertindak untuk dan atas nama Direksi serta	
                                        mewakili Perseroan.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p class="text-justify">
                                Dalam hal hanya diangkat seorang anggota Direksi,	
                                maka segala tugas dan wewenang yang diberikan	
                                kepada Direktur Utama dalam Anggaran Dasar ini	
                                berlaku pula baginya.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        RAPAT DIREKSI 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 13
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Penyelenggaraan Rapat Direksi dapat dilakukan dan	
                                setiap waktu apabila dipandang perlu :
                            </p>
                            <ul class="lower-alpha mt-10">
                                <li>
                                    <p class="text-justify">
                                        oleh seorang atau lebih anggota Direksi;
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        atas permintaan tertulis dari seorang atau lebih	
                                        anggota Dewan Komisaris; atau
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        atas permintaan tertulis dari <b>1 (satu)</b> orang	
                                        atau lebih pemegang saham yang bersama-sama	
                                        mewakili <b>1/10 (satu per sepuluh)</b> atau lebih dari	
                                        jumlah seluruh saham dengan hak suara.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p class="text-justify">
                                Panggilan Rapat Direksi dilakukan oleh anggota	
                                Direksi yang berhak bertindak untuk dan atas nama	
                                Direksi menurut ketentuan Pasal 12 Anggaran Dasar	
                                ini.                    
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Panggilan Rapat Direksi disampaikan dengan surat	
                                tercatat atau dengan surat yang disampaikan	
                                langsung kepada setiap anggota Direksi dengan	
                                mendapat tanda terima paling lambat <b>3 (tiga)</b> hari	
                                sebelum rapat diadakan, dengan tidak	
                                memperhitungkan tanggal panggilan dan tanggal	
                                rapat.               
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Panggilan rapat itu harus mencantumkan acara,	
                                tanggal, waktu dan tempat rapat.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Rapat Direksi diadakan ditempat kedudukan Perseroan	
                                atau tempat kegiatan usaha Perseroan. Apabila semua	
                                anggota Direksi hadir atau diwakili, panggilan	
                                terlebih dahulu tersebut tidak disyaratkan dan	
                                Rapat Direksi dapat diadakan dimanapun juga dan	
                                berhak mengambil keputusan yang sah dan mengikat.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Rapat Direksi dipimpin oleh Direktur Utama dalam	
                                hal Direktur Utama tidak dapat hadir atau	
                                berhalangan yang tidak perlu dibuktikan kepada	
                                pihak ketiga, Rapat Direksi dipimpin oleh seorang	
                                anggota Direksi yang dipilih oleh dan dari antara	
                                anggota Direksi yang hadir.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Seorang anggota Direksi dapat diwakili dalam Rapat	
                                Direksi hanya oleh anggota Direksi lainnya	
                                berdasarkan surat kuasa.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Rapat Direksi adalah sah dan berhak mengambil	
                                keputusan yang mengikat apabila lebih dari <b>1/2	
                                (satu per dua)</b> dari jumlah anggota Direksi hadir	
                                atau diwakili dalam rapat.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Keputusan Rapat Direksi harus diambil berdasarkan	
                                musyawarah untuk mufakat.
                            </p>
                            <p class="text-justify mt-10">
                                -Apabila tidak tercapai maka keputusan diambil	
                                dengan pemungutan suara berdasarkan suara setuju	
                                paling sedikit lebih dari 1/2 (satu per dua) dari	
                                jumlah suara yang dikeluarkan dalam rapat.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Apabila suara yang setuju dan yang tidak setuju	
                                berimbang, maka ketua rapat yang akan menentukan.
                            </p>
                        </li>
                        <li>
                            <ul class="lower-alpha">
                                <li>
                                    <p class="text-justify">
                                        Setiap anggota Direksi yang hadir berhak	
                                        mengeluarkan <b>1 (satu)</b> suara dan tambahan <b>1	
                                        (satu)</b> suara untuk setiap anggota Direksi	
                                        lain yang diwakilinya.
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        Pemungutan suara mengenai diri orang dilakukan	
                                        dengan surat suara tertutup tanpa tanda tangan	
                                        sedangkan pemungutan suara mengenai hal-hal lain	
                                        dilakukan secara lisan kecuali ketua rapat	
                                        menentukan lain tanpa ada keberatan dari yang	
                                        hadir.
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        Suara blanko dan suara yang tidak sah dianggap	
                                        tidak dikeluarkan secara sah dan dianggap tidak	
                                        ada serta tidak dihitung dalam menentukan jumlah	
                                        suara yang dikeluarkan.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p class="text-justify">
                                Direksi dapat juga mengambil keputusan yang sah	
                                tanpa mengadakan Rapat Direksi, dengan ketentuan	
                                semua anggota Direksi telah diberitahu secara	
                                tertulis dan semua anggota Direksi memberikan	
                                persetujuan mengenai usul yang diajukan secara	
                                tertulis dengan menandatangani persetujuan	
                                tersebut.
                            </p>
                            <p class="text-justify mt-10">
                                -Keputusan yang diambil dengan cara demikian	
                                mempunyai kekuatan yang sama dengan keputusan yang	
                                diambil dengan sah dalam Rapat Direksi.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        DEWAN KOMISARIS 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 14
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Dewan Komisaris terdiri dari seorang atau lebih	
                                anggota Dewan Komisaris, apabila diangkat lebih	
                                dari seorang anggota Dewan Komisaris, maka seorang	
                                diantaranya dapat diangkat sebagai Komisaris	
                                Utama.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Yang boleh diangkat sebagai anggota Dewan Komisaris	
                                hanya Warga Negara Indonesia yang memenuhi	
                                persyaratan yang ditentukan peraturan perundang-	
                                undangan yang berlaku.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Anggota Dewan Komisaris diangkat oleh Rapat Umum	
                                Pemegang Saham untuk jangka waktu <b>5 (lima) tahun</b>	
                                dengan tidak mengurangi hak Rapat Umum Pemegang	
                                Saham untuk memberhentikan sewaktu-waktu.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika oleh suatu sebab jabatan anggota Dewan	
                                Komisaris lowong, maka dalam jangka waktu <b>30	
                                (tigapuluh)</b> hari setelah terjadinya lowongan,	
                                harus diselenggarakan Rapat Umum Pemegang Saham	
                                untuk mengisi lowongan itu dengan memperhatikan	
                                ketentuan ayat 2 pasal ini.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Seorang anggota Dewan Komisaris berhak mengundurkan	
                                diri dari jabatannya dengan memberitahukan secara	
                                tertulis mengenai maksud tersebut kepada Perseroan	
                                sekurangnya <b>30 (tigapuluh)</b> hari sebelum tanggal	
                                pengunduran dirinya.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jabatan anggota Dewan Komisaris berakhir apabila :
                            </p>
                            <ul class="lower-alpha mt-10">
                                <li>
                                    <p class="text-justify">
                                        kehilangan Kewarganegaraan Indonesia;
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        mengundurkan diri sesuai dengan ketentuan ayat 5;
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        tidak lagi memenuhi persyaratan perundang-	
                                        undangan yang berlaku;
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        meninggal dunia;
                                    </p>
                                </li>
                                <li>
                                    <p class="text-justify">
                                        diberhentikan berdasarkan keputusan Rapat Umum	
                                        Pemegang Saham.
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        TUGAS DAN WEWENANG DEWAN KOMISARIS 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 15
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Dewan Komisaris setiap waktu dalam jam kerja kantor	
                                Perseroan berhak memasuki bangunan dan halaman atau	
                                tempat lain yang dipergunakan atau yang dikuasai 	
                                oleh Perseroan dan berhak memeriksa semua pembukuan,	
                                surat dan alat bukti lainnya, memeriksa dan 	
                                mencocokkan keadaan uang kas dan lain-lain serta	
                                berhak untuk mengetahui segala tindakan yang telah	
                                dijalankan oleh Direksi. 
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Direksi dan setiap anggota Direksi wajib untuk	
                                memberikan penjelasan tentang segala hal yang	
                                ditanyakan oleh Dewan Komisaris.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Apabila seluruh anggota Direksi diberhentikan	
                                sementara dan Perseroan tidak mempunyai seorangpun	
                                anggota Direksi maka untuk sementara Dewan	
                                Komisaris diwajibkan untuk mengurus Perseroan.                  
                            </p>
                            <p class="text-justify mt-10">
                                -Dalam hal demikian Dewan Komisaris berhak untuk	
                                memberikan kekuasaan sementara kepada seorang atau	
                                lebih diantara anggota Dewan Komisaris atas	
                                tanggungan Dewan Komisaris.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Dalam hal hanya ada seorang anggota Dewan	
                                Komisaris, segala tugas dan wewenang yang diberikan	
                                kepada Komisaris Utama atau anggota Dewan Komisaris	
                                dalam Anggaran Dasar ini berlaku pula baginya.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        TUGAS DAN WEWENANG DEWAN KOMISARIS 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 16
                    </p>
                    <p class="text-justify">
                        -Ketentuan-ketentuan sebagaimana dimaksud dalam Pasal	
                        13 Anggaran Dasar ini secara mutatis mutandis berlaku	
                        juga bagi Rapat Dewan Komisaris.
                    </p>
                    
                    <p class="text-center text-bold">
                        RENCANA KERJA, TAHUN BUKU DAN LAPORAN TAHUNAN 
                    </p>
                    <p class="text-center text-bold">
                        PASAL 17
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Direksi menyampaikan rencana kerja yang memuat juga	
                                anggaran tahunan Perseroan kepada Dewan Komisaris	
                                untuk mendapat persetujuan, sebelum tahun buku	
                                dimulai.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Rencana kerja sebagaimana dimaksud pada ayat 1	
                                harus disampaikan paling lambat <b>14 (empatbelas)</b>	
                                hari sebelum dimulainya tahun buku yang akan	
                                datang.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Tahun buku Perseroan berjalan dari tanggal <b>01 (satu)	
                                Januari</b> sampai dengan tanggal <b>(tigapuluh satu)	
                                Desember</b>. Pada akhir bulan Desember tiap tahun,	
                                buku Perseroan ditutup. Untuk pertama kalinya, buku	
                                Perseroan akan dimulai sejak dari tanggal	
                                penandatanganan Akta ini dan ditutup pada tanggal	
                                <b>31-12-2019</b> (tigapuluh satu Desember duaribu	
                                sembilanbelas).        
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Direksi menyusun laporan tahunan dan menyediakannya	
                                di kantor Perseroan untuk dapat diperiksa oleh para	
                                pemegang saham terhitung sejak tanggal panggilan	
                                RUPS tahunan.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        PENGGUNAAN LABA DAN PEMBAGIAN DIVIDEN  
                    </p>
                    <p class="text-center text-bold">
                        PASAL 18
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Laba bersih Perseroan dalam suatu tahun buku	
                                seperti tercantum dalam neraca dan perhitungan laba	
                                rugi yang telah disahkan oleh RUPS tahunan dan	
                                merupakan saldo laba yang positif, dibagi menurut	
                                cara penggunaannya yang ditentukan oleh RUPS	
                                tersebut.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika perhitungan laba rugi pada suatu tahun buku	
                                menunjukkan kerugian yang tidak dapat ditutup	
                                dengan dana cadangan, maka kerugian itu akan tetap	
                                dicatat dan dimasukkan dalam perhitungan laba rugi	
                                dan dalam tahun buku selanjutnya Perseroan dianggap	
                                tidak mendapat laba selama kerugian yang tercatat	
                                dan dimasukkan dalam perhitungan laba rugi itu	
                                belum sama sekali tertutup.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        PENGGUNAAN CADANGAN  
                    </p>
                    <p class="text-center text-bold">
                        PASAL 19
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Penyisihan laba bersih untuk cadangan dilakukan	
                                sampai mencapai <b>20% (duapuluh perseratus)</b> dari	
                                jumlah modal ditempatkan dan disetor hanya boleh	
                                dipergunakan untuk menutup kerugian yang tidak	
                                dipenuhi oleh cadangan lain.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Jika jumlah cadangan telah melebihi jumlah <b>20%	
                                (duapuluh perseratus)</b>, RUPS dapat memutuskan agar	
                                jumlah kelebihannya digunakan bagi keperluan	
                                Perseroan.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Cadangan sebagaimana dimaksud pada ayat 1 yang	
                                belum dipergunakan untuk menutup kerugian dan	
                                kelebihan cadangan sebagaimana dimaksud pada ayat	
                                2 yang penggunaannya belum ditentukan oleh RUPS	
                                harus dikelola oleh Direksi dengan cara yang tepat	
                                menurut pertimbangan Direksi, setelah memperoleh	
                                persetujuan Dewan Komisaris dan memperhatikan	
                                peraturan perundang-undangan agar memperoleh laba.
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-center text-bold">
                        KETENTUAN PENUTUP   
                    </p>
                    <p class="text-center text-bold">
                        PASAL 20
                    </p>

                    <p class="text-justify">
                        -Segala sesuatu yang tidak atau belum cukup diatur	
                        dalam Anggaran Dasar ini, akan diputus dalam Rapat Umum	
                        Pemegang Saham (RUPS) Perseroan.
                    </p>
                    <p class="text-justify">
                        -Akhirnya, penghadap bertindak dalam kedudukannya	
                        sebagaimana tersebut di atas menerangkan bahwa : 
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                Untuk pertama kalinya telah diambil bagian dan	
                                disetor penuh kepada Perseroan sejumlah <b>{{ dataMatrix.jumlah_saham }} saham</b> atau seluruhnya dengan nilai	
                                nominal sebesar <b>Rp. {{ dataMatrix.nominal_saham.toLocaleString('id') }}</b> oleh para pendiri :
                            </p>
                            <ul class="lower-alpha mt-10" v-if="shareholders">
                                <li v-for="shareholder in shareholders" :key="shareholder.idmps">
                                    Perseroan terbatas {{ shareholder.nama }}
                                    tersebut sebanyak {{ shareholder.jumlah_saham }}
                                    saham dengan nilai nominal seluruhnya sebesar Rp. {{ shareholder.nominal_saham.toLocaleString('id') }}
                                </li>
                            </ul>
                            <p class="text-justify">
                                -Sehingga seluruhnya berjumlah	
                                {{ jumlahSaham }} saham dengan	
                                nilai nominal seluruhnya	
                                sebesar <b>....................... {{ "Rp. " + nominal.toLocaleString('id') }}</b> <no-ssr><span v-if="nominal != 0">{{ nominal | terbilang }}</span></no-ssr>;
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Menyimpang dari ketentuan dalam Pasal 11 dan Pasal	
                                14 Anggaran Dasar ini mengenai tata cara	
                                pengangkatan anggota Direksi dan Dewan Komisaris,-	
                                telah diangkat sebagai : <br/>           
                                <b>-DIREKSI</b><br/>
                                <template v-if="direkturs">
                                    <span v-for="direktur in direkturs" :key="direktur.idmp"><b>-Direktur : Tuan {{ direktur.nama }} </b> tersebut;<br/></span>
                                </template>

                                <b>-DEWAN KOMISARIS</b><br/>
                                <template v-if="komisarises">
                                    <span v-for="komisaris in komisarises" :key="komisaris.idmp"><b>-Komisaris : Tuan {{ komisaris.nama }} </b> tersebut;<br/></span>
                                </template>
                            </p>
                            <p class="text-justify mt-10">
                                -Pengangkatan anggota Direksi dan Dewan Komisaris	
                                mana yang dengan ini telah diterima oleh masing-	
                                masing yang bersangkutan oleh penghadap dalam	
                                kedudukannya sebagaimana tersebut.
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                Direksi baik bersama-sama maupun sendiri-sendiri 	
                                dengan hak untuk memindahkan kekuasaan ini kepada	
                                orang lain dikuasakan untuk memohon pengesahan atas	
                                Anggaran Dasar ini dari instansi yang berwenang dan	
                                untuk membuat perubahan dan/atau tambahan dalam	
                                bentuk yang bagaimanapun juga yang diperlukan untuk	
                                memperoleh pengesahan tersebut dan untuk mengajukan	
                                dan menandatangani semua permohonan dan dokumen	
                                lainnya, untuk memilih tempat kedudukan dan untuk	
                                melaksanakan tindakan lain yang mungkin diperlukan.
                            </p>
                        </li>
                    </ol>

                    <p class="text-justify">
                        -Akhirnya penghadap dalam Akta ini menyatakan dengan	
                        ini menjamin akan kebenaran identitas penghadap dan	
                        para pihak yang diwakilinya tersebut sesuai dengan	
                        tanda pengenal yang disampaikan kepada saya, Notaris	
                        dan bertanggung jawab sepenuhnya atas hal tersebut dan	
                        selanjutnya penghadap juga menyatakan telah mengerti	
                        dan memahami isi Akta ini sehingga sehubungan dengan	
                        hal tersebut maka penghadap dengan ini menyatakan	
                        bertanggung jawab sepenuhnya atas hal tersebut serta	
                        membebaskan Notaris atas setiap tuntutan hukum dari	
                        penghadap dan/atau para pihak yang diwakilinya tersebut	
                        serta pihak ketiga dari segala dan setiap akibat	
                        yang timbul dari pembuatan dan pelaksanaan Akta ini;
                    </p>
                    
                    <p class="text-center text-bold">
                        DEMIKIANLAH AKTA INI   
                    </p>
                    
                    <p class="text-justify">
                        -Dibuat sebagai minuta dan dilangsungkan di Karawang	
                        pada hari dan tanggal sebagaimana tersebut dalam kepala	
                        Akta ini, dengan dihadiri oleh :
                    </p>

                    <ol class="low-padding">
                        <li>
                            <p class="text-justify">
                                <b>Nona APRILIANA DWI LESTARI</b>, lahir di Bogor, pada	
                                tanggal 06-04-1999 (enam April seribu sembilanratus	
                                sembilanpuluh sembilan), Warga Negara Indonesia,	
                                Karyawan Notaris, bertempat tinggal di Provinsi	
                                Jawa Barat, Dusun Sukatani, Rukun Tetangga	
                                010, Rukun Warga 004, Kelurahan Pinayungan,	
                                Kecamatan Teluk Jambe Timur, Kabupaten Karawang,	
                                pemegang Kartu Tanda Penduduk dengan Nomor Induk	
                                Kependudukan : 3201054604990003;
                            </p>
                        </li>
                        <li>
                            <p class="text-justify">
                                <b>Nyonya SUHARTANTI</b>, lahir di Ngawi, pada tanggal	
                                24-02-1979 (duapuluh empat Februari seribu sembilan	
                                ratus tujuhpuluh sembilan), Warga Negara Indonesia,	
                                Karyawan Notaris, bertempat tinggal di Daerah	
                                Khusus Ibukota Jakarta, Jalan Tebet Timur Raya	
                                Nomor 20 D, Rukun Tetangga 008, Rukun Warga 010,	
                                Kelurahan Tebet Timur, Kecamatan Tebet, Kota	
                                Administrasi Jakarta Selatan, pemegang Kartu Tanda	
                                Penduduk dengan Nomor Induk Kependudukan :	
                                3674046402790003;
                            </p>
                            <p class="text-justify mt-10">
                                -untuk sementara berada di Karawang;
                            </p>
                        </li>
                    </ol>
                    
                    <p class="text-justify">
                        -Keduanya sebagai saksi-saksi;
                    </p>
                    <p class="text-justify">
                        -Segera setelah Saya, Notaris membacakan Akta ini	
                        kepada penghadap dan saksi-saksi, maka Akta ini	
                        ditandatangani oleh penghadap, saksi-saksi dan	
                        Saya, Notaris serta dibubuhkan cap jempol kanan oleh	
                        penghadap pada lembar tersendiri yang aslinya	
                        dilekatkan pada minuta Akta ini.
                    </p>
                    <p class="text-justify">
                        -Dilangsungkan dengan
                    </p>
                </div>

                
                <div class="text-center">
                    <button class="btn btn-primary big btn-half d-none">Share Draft Akta</button>
                    <b-link v-if="dataPayment.valid_signing === 'true'" :to="localePath({ name: 'dashboard-incorporation-id-schedulling', params: { id: $route.params.id } })" class="btn btn-secondary big rounded-shadow btn-half float-none" :disabled="loading">{{ $t('continue') }}</b-link>
                    <button v-else class="btn btn-secondary big rounded-shadow btn-half float-none" v-b-modal.modal-must-pay>{{ $t('continue') }}</button>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    layout: "dashboard-with-sidebar",
    middleware: 'auth',
    loading: false,
    async asyncData({ app, route, store }) {
        let tempManagerSign = {};
        let tempManagerDetail = {};
        let tempDirektur = {};
        let tempKomisaris = {};
        let reformattedArray = {};
        let emptyManagementState = {
            idmp: 0,
            idmps: 0,
            matrix_idmatrix: 0,
            village_id: 1,
            district_id: 1,
            city_id: 1,
            province_id: 1,
            nominal_saham: 0,
            foto_ktp: null,
            foto_kk: null,
            foto_npwp: null,
            default_stat: 'yes',
            jabatan: '[Jabatan]',
            nik: '[NIK]',
            npwp: '[NPWP]',
            nama: '[Nama]',
            tempat_lahir: '[Tempat Lahir]',
            tanggal_lahir: '[Tanggal Lahir]',
            golongan_darah: '[Golongan Darah]',
            agama: '[Agama]',
            status_perkawinan: '[Status Perkawinan]',
            pekerjaan: '[Pekerjaan]',
            kewarganegaraan: '[Kewarganegaraan]',
            alamat: '[Alamat]',
            kodepos: '[Kode Pos]',
            jenis_kelamin: '[Jenis Kelamin]',
            no_telp: '[Nomor Telepon]',
            email: '[Email]',
            no_passport: '[Nomor Passport]',
            created_at: '2019-09-11 08:44:01',
            updated_at: '2019-09-11 08:44:01',
            deleted_at: null
        };

        let temp = await app.$matrix.getDetailMatrix(route.params.id);
        let tempCompanyCity = await app.$profile.getDisctrict(temp.data.city_id);
        let tempManager = await app.$matrix.getManagement(route.params.id);

        if(tempManager.meta.code == 200) {
            tempManagerSign = tempManager.data.filter(c => c.default_stat.indexOf("yes") > -1);
            
            // Handle if there is not default assignee for signing, use first user instead
            if(tempManagerSign.length > 0) {
                tempManagerDetail = await app.$matrix.getManagementDetail(tempManagerSign[0].idmp);
            }
            else {
                tempManagerDetail = await app.$matrix.getManagementDetail(tempManager.data[0].idmp);
            }
            tempDirektur = tempManager.data.filter(c => c.jabatan === "Direktur");
            tempKomisaris = tempManager.data.filter(c => c.jabatan === "Komisaris");
        }

        else {
            tempManagerSign = emptyManagementState;
            tempManagerDetail = emptyManagementState;
            tempDirektur = [ emptyManagementState ];
            tempKomisaris = [ emptyManagementState ];
        }

        // capital structure
        if(temp.data.modal_dasar == null){
            temp.data.modal_dasar = 0;
        }
        if(temp.data.jumlah_saham == null){
            temp.data.jumlah_saham = 0;
        }
        if(temp.data.nominal_saham == null){
            temp.data.nominal_saham = 0;
        }

        // Shareholder
        const share = await app.$matrix.getShareholder(route.params.id);
        
        if(share.meta.code == 200) {
            reformattedArray = share.data.map(obj =>{ 
                obj["nominal_saham"] = (obj.jumlah_saham * temp.data.nominal_saham);
                return obj;
            });
        }
        else {
            reformattedArray = [ emptyManagementState ]
        }

        // nominal
        if(store.state.incorp.dataNominalOrang == null){
            store.state.incorp.dataNominalOrang = 0;
        }

        // kbli
        var tempKbliName = [];
        var tempKbliCode = [];
        if(temp.data.kbli != null){
            for (var i = 0; i < temp.data.kbli.length; i++) {
                let tempKbli = await app.$matrix.getKbliDetail(temp.data.kbli[i]);
                tempKbliName[i] = tempKbli.data.title;
                tempKbliCode[i] = tempKbli.data.code;
            }
        }
    
        // VO 
        var getVO = {};
        if(temp.data.status_kantor === "Virtual Office"){
            let tempVO = await app.$matrix.getDetailVO(temp.data.vo_id);
            let tempCompanyCity = await app.$profile.getDisctrict(tempVO.data.city_id);
            getVO = tempCompanyCity.data.name;
        } else {
            getVO = null;
        }

        return{
            dataMatrix: temp.data, 
            manager: tempManagerDetail.data,
            nominal: store.state.incorp.dataNominalOrang,
            shareholders: reformattedArray,
            companyCity: tempCompanyCity.data.name,
            direkturs: tempDirektur,
            komisarises: tempKomisaris,
            kbliName: tempKbliName,
            kbliCode: tempKbliCode,
            dataVO: getVO,
        };
    },
  data() {
    return {
        loading: false,
        dataMatrix: {},
        kbliName: [],   
        kbliCode: [],
        manager: {},
        companyCity: "",
        managerProvince: "",
        managerCity: "",
        managerDisctrict: "",
        managerVillage: "",
        percentage: "",
        nominal: "",
        jumlahSaham: "",
        shareholders: [],
        direkturs: [],
        komisarises: [],
        dataPayment: {},
        dataVO: {},
    };
  },
  created(){
    this.$nextTick(function() {
        this.loading = true;
        this.getData()
        this.checkPayment();
        
        this.percentage = this.$store.state.incorp.dataPercentageOrang + this.$store.state.incorp.dataPercentageBadan;
        this.jumlahSaham = this.$store.state.incorp.dataJumlahSahamOrang + this.$store.state.incorp.dataJumlahSahamBadan;

        this.loading = false;
    });   
  },
  methods: {
    async getData(){
        // location of the signer
        let tempManagerProvince = this.$profile.getCity(this.manager.province_id ? this.manager.province_id : 1);
        let tempManagerCity = this.$profile.getDisctrict(this.manager.city_id ? this.manager.city_id : 1);
        let tempManagerDisctrict = this.$profile.getVillage(this.manager.district_id ? this.manager.district_id : 1);
        const requestLocation = await Promise.all([tempManagerProvince, tempManagerCity, tempManagerDisctrict])

        let tempVillage = requestLocation[2].data.detail;
        const tempManagerVillage = _.filter(tempVillage,(result)=>{ if(result.id==this.manager.village_id){ return result } });

        this.managerProvince = requestLocation[0].data.name;
        this.managerCity = requestLocation[1].data.name;
        this.managerDisctrict = requestLocation[2].data.name;
        this.managerVillage = tempManagerVillage[0].name;
        
        this.loading = false;
    },
    async checkPayment(){
        const tempPayment = await this.$matrix.getPaymentValid(this.$route.params.id);
        this.dataPayment= tempPayment.data;
    }
  },
};
</script>