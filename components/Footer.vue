<template>
  <footer class="footer">
    <a href="https://api.whatsapp.com/send?phone=6285892824010" class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a>
    <b-container>
        <b-row>
            <b-col cols="12" md="6" lg="4">
              <b-row>
                <b-col md="4" class="pr-md-0">
                  <label class="footer-title">{{ $t('footerItem1') }}</label>
                </b-col>
                <b-col md="8">
                  <ul class="footer-list">
                    <li>‎hello@lexar.id</li>
                    <li>‎+62 858-9282-4010</li>
                    <li>Domisili.id Building</li>
                    <li>Jalan Wahid Hasyim No. 10D,</li> 
                    <li>Kel. Kebon Sirih, Kec. Menteng, </li>
                    <li>Jakarta Pusat, 10340</li>
                  </ul>
                  <ul class="socmed">
                    <li><b-link href="https://www.linkedin.com/company/14388719" target="_blank"><img src="/lexar/li.png" alt=""></b-link></li>
                    <li><b-link href="https://www.facebook.com/lexar.id" target="_blank"><img src="/lexar/fb.png" alt=""></b-link></li>
                    <li><b-link href="https://www.instagram.com/lexar.id" target="_blank"><img src="/lexar/ig.png" alt=""></b-link></li>
                  </ul>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" md="6" lg="4">
              <b-row>
                <b-col md="4" class="pr-md-0">
                  <label class="footer-title">{{ $t('footerItem2') }}</label>
                </b-col>
                <b-col md="8">
                  <ul class="footer-list">
                    <li><b-link :to="localePath('service')">{{ $t('footerLink1') }}</b-link></li>
                    <li><b-link :to="localePath('service')">{{ $t('footerLink2') }}</b-link></li>
                    <li><b-link :to="localePath('service')">{{ $t('footerLink3') }}</b-link></li>
                    <li><b-link :to="localePath('service')">{{ $t('footerLink4') }}</b-link></li>
                    <li><b-link :to="localePath('service')">{{ $t('footerLink5') }}</b-link></li>
                    <li><b-link :to="localePath('service')">{{ $t('footerLink6') }}</b-link></li>
                    <li><b-link :to="localePath('service')">{{ $t('footerLink7') }}</b-link></li>
                    <li><b-link :to="localePath('service')">{{ $t('footerLink8') }}</b-link></li>
                  </ul>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" md="6" lg="4">
              <b-row>
                <b-col md="4" class="pr-md-0">
                  <label class="footer-title">{{ $t('footerItem3') }}</label>
                </b-col>
                <b-col md="8">
                  <ul class="footer-list">
                    <li><b-link href="/lexar/LEXAR-WebsiteTnC.pdf" target="_blank">{{ $t('footerLink9') }}</b-link></li>
                    <li><b-link href="/lexar/LEXAR-KebijakanPrivacy.pdf" target="_blank">{{ $t('footerLink10') }}</b-link></li>
                    <li><b-link :to="localePath('kbli')" target="_blank">KBLI</b-link></li>
                  </ul>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12">
              <p class="copyright">© 2019 PT Lexar Karya Progresif</p>
            </b-col>
        </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "footers"
}
</script>


<style lang="css">
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  z-index:100;
  transition: all 0.3s ease;
}
.float:hover {
  color:#fff;
  background-color:#3eea7e;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
}

.my-float{
	margin-top:14px;
}
</style>