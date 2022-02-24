<template>
  <div>
    <div class="wrap-prematrix">
      <!-- <div class="head-plain">
                <nuxt-link :to="localePath('incorporation-start')" class="link-back"><img src="/lexar/back.png" alt=""></nuxt-link>
                
                <div class="switcher-plain mr-0">
                    <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
                    <nuxt-link :to="switchLocalePath('id')">ID</nuxt-link>
                </div>
                <button v-if="$auth.loggedIn" class="btn btn-secondary mr-3 float-right" @click.once="logout">Logout</button>
                <nuxt-link v-else class="btn btn-secondary mr-3 float-right" :to="localePath('login') + '?incorp=true'">Login</nuxt-link>
            </div> -->

      <div class="request-order d-flex justify-content-center">
        <div>
          <h5 class="plain-title big mb-2" v-html="$t('orderTitle')"></h5>
          <h6 class="plain-subtitle mb-4 text-center">
            {{ $t("orderSubtitle") }}
          </h6>

          <b-card>
            <div class="section">
              <h5 class="section-pt" v-if="dataPrematrix">
                <b>{{ dataPrematrix.nama_perseroan }}</b>
              </h5>
              <p class="alamat-pt" v-if="dataPrematrix">
                {{ dataPrematrix.alamat }}
              </p>
            </div>

            <div class="section">
              <h5 class="section-pt">
                <b>{{ $t("ordersectionPT1") }}</b>
              </h5>
              <ul class="get-item">
                <li>
                  <img src="/lexar/checked.png" alt="" />
                  <p v-html="$t('getItem1PT')"></p>
                </li>
                <li>
                  <img src="/lexar/checked.png" alt="" />
                  <p v-html="$t('getItem2PT')"></p>
                </li>
                <li>
                  <img src="/lexar/checked.png" alt="" />
                  <p v-if="this.$i18n.locale === 'en'">
                    Single Business Number (<span
                      class="info no-icon"
                      v-b-tooltip.hover
                      :title="$t('niboss')"
                      >NIB OSS</span
                    >)*;
                  </p>
                  <p v-else>
                    Nomor Induk Berusaha (<span
                      class="info no-icon"
                      v-b-tooltip.hover
                      :title="$t('niboss')"
                      >NIB OSS</span
                    >)*;
                  </p>
                </li>
                <li>
                  <img src="/lexar/checked.png" alt="" />
                  <p v-html="$t('getItem4PT')"></p>
                </li>
                <li>
                  <img src="/lexar/checked.png" alt="" />
                  <p v-html="$t('getItem5PT')"></p>
                </li>
              </ul>

              <span class="notes" v-if="this.$i18n.locale === 'en'"
                >* Not including
                <span
                  class="info no-icon"
                  v-b-tooltip.hover
                  :title="$t('commit')"
                  >commitment</span
                >
                fulfillment</span
              >
              <span class="notes" v-else
                >* Tidak termasuk
                <span
                  class="info no-icon"
                  v-b-tooltip.hover
                  :title="$t('commit')"
                  >Komitmen</span
                >
                Pemenuhan</span
              >
            </div>

            <div class="section">
              <h5 class="section-pt">
                <b>{{ $t("ordersectionPT2") }}</b>
              </h5>
              <h4 class="highlight mb-5">
                {{ $t("timelinePT") }}
              </h4>

              <h5 class="section-pt">
                <b>{{ $t("ordersectionPT3") }}</b>
              </h5>
              <ul class="step mb-5">
                <li class="active">
                  <span class="dots">1</span> {{ $t("step1PT") }}
                </li>
                <li><span class="dots">2</span> {{ $t("step2PT") }}</li>
                <li><span class="dots">3</span> {{ $t("step3PT") }}</li>
                <li><span class="dots">4</span> {{ $t("step4PT") }}</li>
                <li><span class="dots">5</span> {{ $t("step5PT") }}</li>
                <li><span class="dots">6</span> {{ $t("step6PT") }}</li>
                <li><span class="dots">7</span> {{ $t("step7PT") }}</li>
                <li><span class="dots">8</span> {{ $t("step8PT") }}</li>
              </ul>

              <h5 class="section-pt">
                <b>{{ $t("ordersectionPT4") }}</b>
              </h5>
              <h4 class="highlight">
                <!-- {{ $t('feePT') }} -->
                Rp. 7.650.000 <span class="line">Rp. 9.000.000</span>
              </h4>

              <span class="notes" v-html="$t('feeNotePT')"></span>

              <div class="clearfix"></div>
              <button class="btn btn-outline-primary btn-sm mt-3 d-none">
                {{ $t("shareOrder") }}
              </button>
            </div>

            <div class="section no-border">
              <button
                class="btn btn-secondary big mb-3 float-right w-25"
                v-b-modal.modal-email
                :disabled="!tncAgreed"
              >
                {{ $t("proceed") }}
              </button>
              <button
                class="btn btn-outline-primary mb-3 float-right mr-4 mt-1"
                @click="showTawk"
              >
                {{ $t("haveQuestion") }}
              </button>

              <div class="clearfix"></div>
              <span class="notes" v-if="this.$i18n.locale === 'en'">
                <b-form-checkbox
                  id="checkbox-tnc"
                  v-model="tncAgreed"
                  name="checkbox-tnc"
                >
                  by checking, I agree to the
                  <b-link v-b-modal.modal-tnc>terms and conditions</b-link>
                </b-form-checkbox>
              </span>
              <span class="notes" v-else>
                <b-form-checkbox
                  id="checkbox-tnc"
                  v-model="tncAgreed"
                  name="checkbox-tnc"
                >
                  Dengan mengecek, saya menyetujui
                  <b-link v-b-modal.modal-tnc>syarat dan ketentuan</b-link>
                </b-form-checkbox>
              </span>
            </div>
          </b-card>
          <h6 class="note-saved mt-4 text-center">
            {{ $t("changes") }}
          </h6>
        </div>
      </div>
    </div>

    <!-- <b-modal id="modal-tnc" hide-footer size="lg">
            <div class="tnc-wrap">
                <div class="tnc-overflow">
                    <p style="text-align: justify;">
                    <strong><em><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;">PT LEXAR KARYA PROGRESIF<br /></span></em></strong><strong><em><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;">Terms and Conditions</span></em></strong></p>
                    <p style="text-align: justify;"><em><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">By using PT LEXAR KARYA PROGRESIF (&ldquo;<strong>LEXAR</strong>&rdquo;) services through website, Client agree that Client have read, understood and accepted and agreed to these Terms and Condition.</span></span></em></p>
                    <p style="text-align: justify;"><em><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">These Terms of Conditions constitute an agreement between Client and LEXAR and apply to Client visit to and use of our services on the website at www.Lexar.id (<strong>"Website"</strong>), </span></span></em></p>
                    <p style="text-align: justify;"><em><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">Please cancel Client account and service order if Client do not agree or wish to enter into this Terms and Conditions. </span></span></em></p>
                    <p style="text-align: justify;"><em><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><strong>PLEASE REVIEW OUR TERMS OF USE AND PRIVACY POLICY CAREFULLY BEFORE USING OUR SERVICE.</strong> </span></span></em></p>
                    <ol>
                    <li style="text-align: justify;"><em><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><strong>GENERAL MATTERS</strong> </span></span></em>
                    <ol>
                    <li style="text-align: justify;"><em><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">The Website is an electronic media platform that serves as a means to promote, educate, and inform all of our future and current Clients regarding Lexar activity as a Corporate Secretarial Services Company.</span></span></span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">The types of services that may be requested via Website are: </span></span></span></em>
                    <ol style="list-style-type: lower-alpha;">
                    <li style="text-align: justify;"><em><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Company Incorporation;</span></span></span></em></li>
                    <li style="text-align: justify;"><em style="color: #626262;"><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Notarial Assistance;</span></span></span></em></li>
                    <li style="text-align: justify;"><em style="color: #626262;"><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><em>Intellectual Property Assistance;</em> </span></span></span></em></li>
                    <li style="text-align: justify;"><em style="color: #626262;"><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><em>License Handling Service;</em> </span></span></span></em></li>
                    <li style="text-align: justify;"><em style="color: #626262;"><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><em>Expatriate Assistance; and</em> </span></span></span></em></li>
                    <li style="text-align: justify;"><em style="color: #626262;"><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">other services that we may add from time to time. (&ldquo;<strong>Services</strong>&rdquo;)</span></span></span></em></li>
                    </ol>
                    </li>
                    <li style="text-align: justify;"><em style="color: #626262;"><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><em>Prior of using our services, Client represent and warrant that Client are an individual legally entitled to enter into a binding agreement under the laws of the Republic of Indonesia. Client further represent and warrant that Client have the right, authority and capacity to use the Service and to abide by the Terms and Conditions. If Client are registering on behalf of a legal entity, Client also represent and warrant that Client are authorized to enter into, and bind the entity to, these Terms of Use and register for Services on the Website. Otherwise, we will be entitled by law to cancel any agreement entered into with Client.</em> </span></span></span></em></li>
                    <li style="text-align: justify;"><em style="color: #626262;"><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><em>Client must keep Client account password and any identification we provide Client secure and confidential.</em> </span></span></span></em></li>
                    <li style="text-align: justify;"><em style="color: #626262;"><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><em>Client understand and agree that Client use of the </em>Website<em> will also be subject to our Privacy Policy as may be amended from time to time. By using the </em>Website<em>, Client also give Client consent as required under our Privacy Policy.</em> </span></span></span></em></li>
                    </ol>
                    </li>
                    <li style="text-align: justify;"><em style="color: #626262;"><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><em><strong>GENERAL SERVICES</strong></em></span></span></span></em>
                    <ol>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">Lexar will only conduct the Services based on Client&rsquo;s choice.</span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">Upon completing Services, Lexar will not conduct any corrective actions regarding any of Client commercial decision;</span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">If there is any formal and/or informal fee from the Government regarding completion of the Services, the fees shall be borne by the Client unless has been clearly stated include in Our Services. </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">There will be no legal opinion required from Lexar with respect to the Services ordered by Client if it is not agreed before by both parties; </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">During and/or upon completion of Services, Lexar will not conduct any legal due diligence on Client and/or its affiliate and counterparts; </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">Our Service related to notarial services will use our Notary partner that has working area not located in DKI Jakarta Province, except required specifically by Client with an extra fee; </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">Lexar will not be providing advice on any investigative or financial matter in relation to the Layanan; </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">Lexar will not conduct court searches on material litigation proceedings on Client and/or its affiliate and counterparts; and </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;">Any information added on this Website regarding the Services may change without prior notice </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Service with the power of attorney requires the Client to check carefully the documents needed, because if there is an error and has been processed, the change will be subject to additional fees according to the Service.</span> </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Clients are prohibited to communicate directly with our Partners.</span> </span></em></li>
                    </ol>
                    </li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><strong><span style="font-size: 12.0pt; font-family: Montserrat;">Company Incorporation Services;</span></strong> </span></em>
                    <ol>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">This service helps clients to establish companies both local and or foreign direct investment</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">The deliverables of this service are:</span> </span></em>
                    <ul>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Deed of Incorporation;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Ratification from Ministry of Law and Human Rights;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Tax Identifier Number;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Tax Register Letter; </span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Business Main Number;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Business License/Commercial License; dan</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Commitment List that needs to be completed (if applicable).</span> </span></em></li>
                    </ul>
                    </li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">This service does not include fulfilling the commitments requested by Government through OSS system.</span> </span></em></li>
                    </ol>
                    </li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><strong><span style="font-size: 12.0pt; font-family: Montserrat;">Notarial Assistance;</span></strong> </span></em>
                    <ol>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">This service helps clients in making Amendment Deeds, both Local Company and Foreign Direct Investment Company;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Activity that can be conducted in the Services are all processes related to Notarial Assistance, for example</span><span style="font-size: 11.0pt; font-family: Montserrat;">:</span> </span></em>
                    <ul>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Change of Name and Domicile;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Change in Purpose and Objectives;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Changes in Capital;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Changes in the composition of the Director and Board of Commissioners;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Changes in Shareholders;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Share purchase Dees/Agreement;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Mergers and Acquisitions; and</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Other related services that we can add at any time.</span> </span></em></li>
                    </ul>
                    </li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">This service also includes registering the changes to the Ministry of Law and Human Rights.</span> </span></em></li>
                    </ol>
                    </li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><strong><span style="font-size: 12.0pt; font-family: Montserrat;">License Handling Service;</span></strong> </span></em>
                    <ol>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Activity that can be conducted in the Services are all processes related to License Handling Services, for example:</span> </span></em>
                    <ul>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">registration of license;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">assistance of license requirements;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">request of information regarding license; and</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">other activity related to fulfill Our obligations.</span> </span></em></li>
                    </ul>
                    </li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">All formal and non-formal fees from the government are borne by the Client, unless clearly stated included in the Services fees.</span> </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">The processing period depends on the requirements owned by the client.</span> </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">The entire process will be carried out in a manner regulated by the government.</span> </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Terms &amp; Duration The processing time varies according to the type of permit and/or business location.</span> </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">If there is a survey / site visit in the permit, the Lexar team will only accompany the process, and Lexar will not conduct any activity except that.</span> </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">The processing period will be hampered if there is an uncontrollable event (for example: a government system error) and whether the client is cooperative or not.</span> </span></em></li>
                    </ol>
                    </li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><strong><span style="font-size: 12.0pt; font-family: Montserrat;">Intellectual Property Assistance;</span></strong> </span></em>
                    <ol>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">This Service helps Clients in managing related to Intellectual Property Rights.</span> </span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Activity that can be conducted in the Services are all processes related to Intellectual Property Rights, for example:</span> </span></em>
                    <ul>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Brand Registration;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Revocation of Brands;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Brand Extension;</span> </span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Transfer of rights / Change of name / Change of address; </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Disclaimer; </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Objection; </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">etc </span></span></em></li>
                    </ul>
                    </li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">All the Processes of Intellectual Property Rights that we carry out are carried out by our partners who are indeed Registered IPR Consultants </span></span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Registered does not mean that the trademark has been approved from government </span></span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Trademark registration process will takes at least 2 years. </span></span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">If there is a rebuttal in the registration service, the refutation service is subject to an additional charge, as well as an appeal service. </span></span></em></li>
                    </ol>
                    </li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><strong><span style="font-size: 12.0pt; font-family: Montserrat;">Expatriate Assistance</span></strong> </span></span></em>
                    <ol>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">What is meant by foreign service is a permit handling that is intended for foreigners to work in Indonesia for example the Plan for the Use of Foreign Workers (RPTA), Permits to Employ Foreign Workers (IMTA) &amp; Information on Limited Stay Permits (KITAS). </span></span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">The duration of the foreign service permit process depends on all requirements with a maximum of 30 working days </span></span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">All formal and non-formal costs from the government are borne by the Client </span></span></em></li>
                    <li style="text-align: justify;"><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Availability of interview time by Clients affects the processing time. </span></span></em></li>
                    </ol>
                    </li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><strong><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;">PAYMENT</span></strong> </span></span></em>
                    <ol>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Client confirm that Client are able and will pay for the Services provided to Client by Lexar in full and in time; </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">There is a tax fee that will be charged directly to the Client due to use of consulting services; </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Payment can be done in Bank Transfer and can be done by transferring the amount print out on the invoice to Our bank account; within 7 days from the day of invoice sent. </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Payments that are not paid beyond the period of 3 days from the issuance of the invoice, the order is deemed canceled. </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">If the Client does not respond to the contacting team (eg, is asked to send the documents needed to be processed) within a period of more than 90 days, the undone and on going Services will be forfeited and cannot be returned and the process will be terminated, </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">Any cancellation of our Services may be charged with an administration fee as stipulated on the article 9 of this Terms and Conditions. </span></span></em></li>
                    </ol>
                    </li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><strong><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;">CANCELLATION</span> AND REFUND</strong> <br />Lexar reserve the rights to determine the cancellation and refund events of the Services, and it will be strictly bound to the following policies below: </span></span></em>
                    <ol>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">If the cancellation occurs caused by an <strong>unexpected matters from Client Side</strong> (ex. services turned out to be unnecessary for the Client), Client may request for full refund if the request is notified at the maximum of 2 working days from the payment, and it will be processed in maximum of 30 days after <strong>the request is granted by Lexar</strong>; </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">If the Cancellation occurs caused by an <strong>unexpected matters from third party side</strong> (ex. Changes in Government Regulations, cancel from our Partner), the transferred Client Payment will be fully returned and will be processed within a maximum of 30 days after notification to the Client; </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">If a cancellation occurs due to the Client's inability to fulfill the requirements and / or comply with the proposed solution, the amount that has been paid is non-refundable; </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">If any Cancellation occurs without any kind of explanation from Client: </span></span></em>
                    <ol style="list-style-type: lower-alpha;">
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">If requested no less than 3 working days after payment, therefore the refundable amount is 70%; </span></span></em></li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;">If requested more than 3 working days after payment, amount that has been paid is non-refundable. </span></span></em></li>
                    </ol>
                    </li>
                    </ol>
                    </li>
                    <li><em><span style="font-size: 11.0pt; font-family: Montserrat; color: #222222;"><span style="font-size: 11.0pt; font-family: Montserrat;"><strong><span style="font-size: 12.0pt; font-family: Montserrat; color: #222222;">INDEMNIFICATION</span></strong> <br />By using the Website, Client agree that Client will defend, and indemnify us, our licensors, affiliates, and each of our officers, directors, commissioners, employees, attorneys and agents harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys' fees and costs) arising out of or in connection with: (a) Client use of the Services, third party providers, partners, advertisers and/or sponsors, or (b) Client violation or breach of any of the Terms and Conditions or any applicable law or regulation, whether or not referenced herein or (c) Client violation of any rights of any third party, including third party Service Providers arranged via Website, or (d) Client use or misuse of the Website. This defense and indemnification obligation will survive these Terms and Conditions and Client use of the Website. <br /></span></span></em></li>
                    </ol>

                    <p class="text-center">
                        <button class="btn btn-primary mt-4" @click="agreeTnc">{{ $t('agreeContinue') }}</button>
                    </p>        
                </div>
            </div>
        </b-modal> -->

    <!-- <b-modal id="modal-email" hide-footer class="text-center">
            <div class="text-center">
                <h2 class="font-weight-bold mb-4">{{ $t('popThanks') }}</h2>
                <p class="email-text" v-if="!this.$route.query.login">{{ $t('popParagraph1') }} <br/> <b>{{ this.$auth.user.data.email }}</b></p>
                <p class="email-text" v-if="userIncorp">{{ $t('popParagraphPop') }} <br/> <b>{{ userIncorp.password }}</b></p>
                <p class="email-text" v-if="!this.$route.query.login">{{ $t('popParagraph2') }}</p>
                <p class="email-text" v-if="this.$route.query.login">{{ $t('popParagraph3') }}</p>

                <nuxt-link :to="localePath('dashboard')" class="btn btn-secondary float-right w-100 rounded">{{ $t('proceed') }}</nuxt-link>
            </div>
        </b-modal> -->
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      nilai: 20,
      max: 100,
      userIncorp: null,
      dataPrematrix: {},
      verifyEmail: "",
      tncAgreed: false,
      user: {
        name: "user name",
        email: "user email",
      },
    };
  },
  head() {
    return {
      title: "Request Order | LEXAR",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Request Order Page",
        },
        { hid: "og:title", name: "og:title", content: "Request Order | LEXAR" },
        {
          hid: "og:description",
          name: "og:description",
          content: "Request Order Page",
        },
      ],
    };
  },
  created() {
    // this.userIncorp = this.$store.state.incorp.userIncorp;
    // this.dataPrematrix = this.$store.state.incorp.dataPrematrix;
    // console.log(this.$route.query.login);
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.replace("/");
    },
    agreeTnc() {
      this.tncAgreed = true;
      this.$bvModal.hide("modal-tnc");
    },
    showTawk() {
      if (process.client) {
        Tawk_API.maximize();
      }
    },
  },
};
</script>
