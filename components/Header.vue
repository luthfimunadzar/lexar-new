<template>
  <div>
    <b-navbar toggleable="md" type="light">
      <b-container class="position-relative">
        <b-navbar-brand :to="localePath('index')"
          ><img src="/lexar/lexar-brand.png" alt=""
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <li class="nav-item b-nav-dropdown dropdown megamenu d-none">
              <!-- <a aria-haspopup="true" aria-expanded="false" target="_self" href="javascript:void(0);" data-toggle="dropdown" class="nav-link dropdown-toggle" id="megamenu-toggle">{{ $t('tservice') }}</a> -->
              <!-- <b-link class="nav-link dropdown-toggle" href="/service">{{
                $t("tservice")
              }}</b-link>
              <b-link
                class="nav-link dropdown-toggle hidden"
                v-b-modal="'modal-mega-menu'"
                >{{ $t("tservice") }}</b-link
              > -->
              <div
                aria-labelledby="megamenu"
                class="dropdown-menu border-0 p-0 m-0"
              >
                <div class="container">
                  <div
                    class="row bg-white rounded-0 m-0 shadow-sm wrap-mega no-gutters"
                  >
                    <!-- <div class="col-lg-4">
                      <div class="wrap-cat online">
                        <div class="row">
                          <div class="col-lg-12">
                            <h6 class="font-weight-bold text-uppercase">
                              Online Services
                            </h6>
                            <ul class="list-unstyled">
                              <li class="nav-item">
                                <b-link
                                  :to="localePath('incorporation')"
                                  class="nav-link text-small pb-0"
                                  >{{ $t("onlineIncorp") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :to="localePath('trademark')"
                                  class="nav-link text-small pb-0"
                                  >{{ $t("onlineTrademark") }}</b-link
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    <!-- <div class="col-lg-12">
                      <div class="wrap-cat">
                        <div class="row">
                          <div class="col-lg-12">
                            <h6 class="font-weight-bold text-uppercase">
                              Legal Services
                            </h6>
                            <ul class="list-unstyled">
                              <li class="nav-item">
                                <b-link
                                  :href="
                                    localePath({
                                      name: 'service',
                                      query: { selected: 'incorporation' },
                                    })
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("serviceTitle1") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :href="
                                    localePath({
                                      name: 'service',
                                      query: { selected: 'license' },
                                    })
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("serviceTitle2") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :href="
                                    localePath({
                                      name: 'service',
                                      query: { selected: 'secretarial' },
                                    })
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("serviceTitle3") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :href="
                                    localePath({
                                      name: 'service',
                                      query: { selected: 'expatriate' },
                                    })
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("serviceTitle4") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :href="
                                    localePath({
                                      name: 'service',
                                      query: { selected: 'property' },
                                    })
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("serviceTitle5") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :href="
                                    localePath({
                                      name: 'service',
                                      query: { selected: 'notarial' },
                                    })
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("serviceTitle6") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :href="
                                    localePath({
                                      name: 'service',
                                      query: { selected: 'foreign' },
                                    })
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("serviceTitle7") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :href="
                                    localePath({
                                      name: 'service',
                                      query: { selected: 'sectoral' },
                                    })
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("serviceTitle8") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :href="
                                    localePath({
                                      name: 'service',
                                      query: { selected: 'dedicated' },
                                    })
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("serviceTitle9") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :href="
                                    localePath({
                                      name: 'service',
                                      query: { selected: 'fundraise' },
                                    })
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("fundSubTitle") }}</b-link
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    <!-- <div class="col-lg-4">
                      <div class="wrap-cat industry">
                        <div class="row">
                          <div class="col-lg-12">
                            <h6 class="font-weight-bold text-uppercase">
                              Package Industry
                            </h6>
                            <ul class="list-unstyled">
                              <li class="nav-item">
                                <b-link
                                  :to="
                                    localePath('solutions-creative-industries')
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("creativeIndustry") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  :to="
                                    localePath('solutions-food-and-beverages')
                                  "
                                  class="nav-link text-small pb-0"
                                  >{{ $t("fnb") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  href="#"
                                  class="nav-link text-small pb-0 disabled"
                                  >{{ $t("media") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  href="#"
                                  class="nav-link text-small pb-0 disabled"
                                  >{{ $t("advertising") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  href="#"
                                  class="nav-link text-small pb-0 disabled"
                                  >{{ $t("sass") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  href="#"
                                  class="nav-link text-small pb-0 disabled"
                                  >{{ $t("eventOrganizer") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  href="#"
                                  class="nav-link text-small pb-0 disabled"
                                  >{{ $t("hotel") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  href="#"
                                  class="nav-link text-small pb-0 disabled"
                                  >{{ $t("cosmetic") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  href="#"
                                  class="nav-link text-small pb-0 disabled"
                                  >{{ $t("largeTrade") }}</b-link
                                >
                              </li>
                              <li class="nav-item">
                                <b-link
                                  href="#"
                                  class="nav-link text-small pb-0 disabled"
                                  >{{ $t("retailTrade") }}</b-link
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </li>
            <!-- <b-nav-item :to="localePath('service')">{{ $t('tservice') }}</b-nav-item> -->
            <!-- <b-nav-item :to="localePath('about')">{{ $t('tabout') }}</b-nav-item> -->
            <b-nav-item to="/service">{{ $t("tservice") }} </b-nav-item>
            <b-nav-item-dropdown :text="$t('tcompany')" right>
              <b-dropdown-item :to="localePath('about')">{{
                $t("tabout")
              }}</b-dropdown-item>
              <!-- <b-dropdown-item
                href="https://article.lexar.id"
                target="_blank"
                >{{ $t("tarticle") }}</b-dropdown-item
              > -->
              <b-dropdown-item :to="localePath('careers')">{{
                $t("tcareers")
              }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- <b-nav-item to="/product">Product</b-nav-item> -->
            <b-nav-item-dropdown :text="$t('thelp')" right>
              <b-dropdown-item :to="localePath('faq')">FAQ</b-dropdown-item>
              <b-dropdown-item :to="localePath('contact')">{{
                $t("tcontact")
              }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- <b-nav-item v-if="$auth.loggedIn" :to="localePath('dashboard')" link-classes="btn btn-secondary" target="_self">Dashboard</b-nav-item>
                        <b-nav-item v-else :to="localePath('login')" link-classes="btn btn-secondary" target="_self">Log In</b-nav-item> -->
            <!-- <li class="nav-item">
                            <b-link v-if="$auth.loggedIn" :to="localePath('dashboard')" class="btn btn-secondary" target="_self">Dashboard</b-link>
                            <b-link v-else :to="localePath('login')" class="btn btn-secondary" target="_self">Log In</b-link>
                        </li> -->
          </b-navbar-nav>
        </b-collapse>

        <div class="switcher">
          <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
          <nuxt-link :to="switchLocalePath('id')">ID</nuxt-link>
        </div>
      </b-container>
    </b-navbar>

    <b-modal id="modal-mega-menu" hide-footer title="">
      <div class="mega-menu-mobile">
        <b-row>
          <div class="col-12">
            <h6 class="font-weight-bold text-uppercase">Online Services</h6>
            <ul class="list-unstyled">
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :to="localePath('incorporation')"
                  class="nav-link text-small pb-0"
                  >{{ $t("onlineIncorp") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :to="localePath('trademark')"
                  class="nav-link text-small pb-0"
                  >{{ $t("onlineTrademark") }}</b-link
                >
              </li>
            </ul>
          </div>
          <div class="col-12">
            <h6 class="font-weight-bold text-uppercase has-border">
              Legal Services
            </h6>
            <ul class="list-unstyled">
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :href="
                    localePath({
                      name: 'service',
                      query: { selected: 'incorporation' },
                    })
                  "
                  class="nav-link text-small pb-0"
                  >{{ $t("serviceTitle1") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :href="
                    localePath({
                      name: 'service',
                      query: { selected: 'license' },
                    })
                  "
                  class="nav-link text-small pb-0"
                  >{{ $t("serviceTitle2") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :href="
                    localePath({
                      name: 'service',
                      query: { selected: 'secretarial' },
                    })
                  "
                  class="nav-link text-small pb-0"
                  >{{ $t("serviceTitle3") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :href="
                    localePath({
                      name: 'service',
                      query: { selected: 'expatriate' },
                    })
                  "
                  class="nav-link text-small pb-0"
                  >{{ $t("serviceTitle4") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :href="
                    localePath({
                      name: 'service',
                      query: { selected: 'property' },
                    })
                  "
                  class="nav-link text-small pb-0"
                  >{{ $t("serviceTitle5") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :href="
                    localePath({
                      name: 'service',
                      query: { selected: 'notarial' },
                    })
                  "
                  class="nav-link text-small pb-0"
                  >{{ $t("serviceTitle6") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :href="
                    localePath({
                      name: 'service',
                      query: { selected: 'foreign' },
                    })
                  "
                  class="nav-link text-small pb-0"
                  >{{ $t("serviceTitle7") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :href="
                    localePath({
                      name: 'service',
                      query: { selected: 'sectoral' },
                    })
                  "
                  class="nav-link text-small pb-0"
                  >{{ $t("serviceTitle8") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :href="
                    localePath({
                      name: 'service',
                      query: { selected: 'dedicated' },
                    })
                  "
                  class="nav-link text-small pb-0"
                  >{{ $t("serviceTitle9") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :href="
                    localePath({
                      name: 'service',
                      query: { selected: 'fundraise' },
                    })
                  "
                  class="nav-link text-small pb-0"
                  >{{ $t("fundSubTitle") }}</b-link
                >
              </li>
            </ul>
          </div>
          <div class="col-12">
            <h6 class="font-weight-bold text-uppercase has-border">
              Package Industry
            </h6>
            <ul class="list-unstyled">
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :to="localePath('solutions-creative-industries')"
                  class="nav-link text-small pb-0"
                  >{{ $t("creativeIndustry") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  :to="localePath('solutions-food-and-beverages')"
                  class="nav-link text-small pb-0"
                  >{{ $t("fnb") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  href="#"
                  class="nav-link text-small pb-0 disabled"
                  >{{ $t("media") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  href="#"
                  class="nav-link text-small pb-0 disabled"
                  >{{ $t("advertising") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  href="#"
                  class="nav-link text-small pb-0 disabled"
                  >{{ $t("sass") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  href="#"
                  class="nav-link text-small pb-0 disabled"
                  >{{ $t("eventOrganizer") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  href="#"
                  class="nav-link text-small pb-0 disabled"
                  >{{ $t("hotel") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  href="#"
                  class="nav-link text-small pb-0 disabled"
                  >{{ $t("cosmetic") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  href="#"
                  class="nav-link text-small pb-0 disabled"
                  >{{ $t("largeTrade") }}</b-link
                >
              </li>
              <li class="nav-item">
                <b-link
                  @click="$bvModal.hide('modal-mega-menu')"
                  href="#"
                  class="nav-link text-small pb-0 disabled"
                  >{{ $t("retailTrade") }}</b-link
                >
              </li>
            </ul>
          </div>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "headers",
};
</script>
