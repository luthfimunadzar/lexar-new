<template>
  <div>
    <!-- Hero Inner -->
    <div class="inner-hero" style="background-image: url('/lexar/bg-2.jpg')">
      <b-container>
        <b-row>
          <b-col>
            <h3>{{ $t("serviceTitle") }}</h3>
            <h5>{{ $t("serviceSubTitle") }}</h5>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- Service Package -->
    <div :class="['service', 'white-panel']" v-if="!showOther">
      <b-container>
        <b-row
          :class="[
            { 'justify-content-center': hideLeftColumn },
            { 'justify-content-center': hideRightColumn },
          ]"
        >
          <b-col lg="6" v-if="!hideLeftColumn">
            <div class="service-package" id="pendirianPT" v-if="showIncorp">
              <h3 class="text-uppercase">{{ $t("serviceTitle1") }}</h3>
              <p>
                {{ $t("serviceSubTitle1") }}
              </p>

              <h4
                :class="[{ hide: !moreService }, 'start']"
                v-html="$t('startPriceService1')"
                v-if="!openColIncorp"
              ></h4>
              <b-collapse id="collapse-service1" v-model="openColIncorp">
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service1Item1") }}</h5>
                      <h6>{{ $t("service1SubItem1") }}</h6>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>9.5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price no-border">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service1Item2") }}</h5>
                      <h6>{{ $t("service1SubItem2") }}</h6>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>10.5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
              </b-collapse>
              <button
                class="btn btn-outline-primary float-left collapsed toggle-collapse"
                @click="toggleMore"
                v-if="!openColIncorp"
                v-b-toggle.collapse-service1
              >
                <span v-if="moreService">{{ $t("seeMore") }}</span>
                <span v-else>{{ $t("seeLess") }}</span>
                <i class="fa fa-angle-up"></i>
              </button>

              <nuxt-link class="btn btn-secondary float-right" to="/contact">{{
                $t("inquire")
              }}</nuxt-link>
              <div class="clearfix"></div>
            </div>

            <div class="service-package" v-if="showLicense">
              <h3 class="text-uppercase">{{ $t("serviceTitle2") }}</h3>
              <p>
                {{ $t("serviceSubTitle2") }}
              </p>

              <h4
                :class="[{ hide: !moreService2 }, 'start']"
                v-html="$t('startPriceService2')"
                v-if="!openColLicense"
              ></h4>
              <b-collapse id="collapse-service2" v-model="openColLicense">
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service2Item1") }}</h5>
                      <h6>{{ $t("service2SubItem1") }}</h6>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>3<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service2Item2") }}</h5>
                      <h6>{{ $t("service2SubItem2") }}</h6>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>1<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service2Item3") }}</h5>
                      <h6>{{ $t("service2SubItem3") }}</h6>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>2<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service2Item4") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>1.5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price no-border">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service2Item5") }}</h5>
                      <h6>{{ $t("service2SubItem5") }}</h6>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>10<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
              </b-collapse>
              <button
                class="btn btn-outline-primary float-left collapsed toggle-collapse"
                @click="toggleMore2"
                v-if="!openColLicense"
                v-b-toggle.collapse-service2
              >
                <span v-if="moreService2">{{ $t("seeMore") }}</span
                ><span v-else>{{ $t("seeLess") }}</span>
                <i class="fa fa-angle-up"></i>
              </button>

              <nuxt-link class="btn btn-secondary float-right" to="/contact">{{
                $t("inquire")
              }}</nuxt-link>
              <div class="clearfix"></div>
            </div>

            <div class="service-package" v-if="showSecretarial">
              <h3 class="text-uppercase">{{ $t("serviceTitle3") }}</h3>
              <p>
                {{ $t("serviceSubTitle3") }}
              </p>

              <h4
                :class="[{ hide: !moreService3 }, 'start']"
                v-html="$t('startPriceService3')"
                v-if="!openColSecretarial"
              ></h4>
              <b-collapse id="collapse-service3" v-model="openColSecretarial">
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service3Item1") }}</h5>
                      <h6>{{ $t("service3SubItem1") }}</h6>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>3<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service3Item2") }}</h5>
                      <h6>{{ $t("service3SubItem2") }}</h6>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>3.5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service3Item3") }}</h5>
                      <h6>{{ $t("service3SubItem3") }}</h6>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>4.5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service3Item4") }}</h5>
                      <h6>{{ $t("service3SubItem4") }}</h6>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5 class="mt-3">{{ $t("service3Item5") }}</h5>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>1<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5 class="mt-3">{{ $t("service3Item6") }}</h5>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span
                        ><span class="top">IDR</span>8<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price no-border">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5 class="mt-3">{{ $t("service3Item7") }}</h5>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span
                        ><span class="top">IDR</span>6<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
              </b-collapse>
              <button
                class="btn btn-outline-primary float-left collapsed toggle-collapse"
                @click="toggleMore3"
                v-if="!openColSecretarial"
                v-b-toggle.collapse-service3
              >
                <span v-if="moreService3">{{ $t("seeMore") }}</span
                ><span v-else>{{ $t("seeLess") }}</span>
                <i class="fa fa-angle-up"></i>
              </button>

              <nuxt-link class="btn btn-secondary float-right" to="/contact">{{
                $t("inquire")
              }}</nuxt-link>
              <div class="clearfix"></div>
            </div>

            <div class="service-package" v-if="showExpatriate">
              <h3 class="text-uppercase">{{ $t("serviceTitle4") }}</h3>
              <p>
                {{ $t("serviceSubTitle4") }}
              </p>

              <h4
                :class="[{ hide: !moreService4 }, 'start']"
                v-html="$t('startPriceService4')"
                v-if="!openColExpatriate"
              ></h4>
              <b-collapse id="collapse-service4" v-model="openColExpatriate">
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5 class="mt-3">{{ $t("service4Item1") }}</h5>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>11<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5 class="mt-3">{{ $t("service4Item2") }}</h5>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>3<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price no-border">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service4Item3") }}</h5>
                      <h6>{{ $t("service4SubItem3") }}</h6>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>13<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
              </b-collapse>
              <!-- <button
                class="btn btn-outline-primary float-left collapsed toggle-collapse"
                @click="toggleMore4"
                v-if="!openColExpatriate"
                v-b-toggle.collapse-service4
              >
                <span v-if="moreService4">{{ $t("seeMore") }}</span
                ><span v-else>{{ $t("seeLess") }}</span>
                <i class="fa fa-angle-up"></i>
              </button> -->

              <nuxt-link class="btn btn-secondary float-right" to="/contact">{{
                $t("inquire")
              }}</nuxt-link>
              <div class="clearfix"></div>
            </div>

            <div class="service-package" v-if="showProperty">
              <h3 class="text-uppercase">{{ $t("serviceTitle5") }}</h3>
              <p>
                {{ $t("serviceSubTitle5") }}
              </p>

              <h4
                :class="[{ hide: !moreService5 }, 'start']"
                v-html="$t('startPriceService5')"
                v-if="!openColProperty"
              ></h4>
              <b-collapse id="collapse-service5" v-model="openColProperty">
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5 class="mt-3">{{ $t("service5Item1") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>3.9<span
                          >{{ $t("million") }} {{ $t("perClass") }}</span
                        >
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="5">
                      <h5 class="mt-3">{{ $t("service5Item2") }}</h5>
                    </b-col>
                    <b-col cols="6" md="7">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5 class="mt-3">{{ $t("service5Item3") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span
                        ><span class="top">IDR</span>5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price no-border">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5 class="mt-3">{{ $t("service5Item4") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span
                        ><span class="top">IDR</span>5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
              </b-collapse>
              <!-- <div class="price">
                                <b-row>
                                    <b-col cols="6" md="6">
                                        <h5 class="mt-3">BPJS Worker</h5>
                                    </b-col>
                                    <b-col cols="6" md="6">
                                        <h4><span class="top">IDR</span>1.5<span>Million</span></h4>
                                    </b-col>
                                </b-row>
                            </div>
                            <div class="price no-border">
                                <b-row>
                                    <b-col cols="6" md="6">
                                        <h5 class="mt-3">BPJS Health</h5>
                                    </b-col>
                                    <b-col cols="6" md="6">
                                        <h4><span class="top">IDR</span>1<span>Million</span></h4>
                                    </b-col>
                                </b-row>
                            </div> -->
              <button
                class="btn btn-outline-primary float-left collapsed toggle-collapse"
                @click="toggleMore5"
                v-if="!openColProperty"
                v-b-toggle.collapse-service5
              >
                <span v-if="moreService5">{{ $t("seeMore") }}</span
                ><span v-else>{{ $t("seeLess") }}</span>
                <i class="fa fa-angle-up"></i>
              </button>

              <nuxt-link class="btn btn-secondary float-right" to="/contact">{{
                $t("inquire")
              }}</nuxt-link>
              <div class="clearfix"></div>
            </div>
          </b-col>
          <b-col lg="6" v-if="!hideRightColumn">
            <div class="service-package" v-if="showNotarial">
              <h3 class="text-uppercase">{{ $t("serviceTitle6") }}</h3>
              <p>
                {{ $t("serviceSubTitle6") }}
              </p>

              <h4
                :class="[{ hide: !moreService6 }, 'start']"
                v-html="$t('startPriceService6')"
                v-if="!openColNotarial"
              ></h4>
              <b-collapse id="collapse-service6" v-model="openColNotarial">
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service6Item1") }}</h5>
                      <h6>{{ $t("service6SubItem1") }}</h6>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>6<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service6Item2") }}</h5>
                      <h6>{{ $t("service6SubItem2") }}</h6>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>7<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service6Item3") }}</h5>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>9<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5 class="mt-3">{{ $t("service6Item5") }}</h5>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5 class="mt-3">{{ $t("service6Item6") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>2<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5 class="mt-3">{{ $t("service6Item7") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>1<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5 class="mt-3">{{ $t("service6Item8") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price no-border">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5 class="mt-3">{{ $t("service6Item9") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>8<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
              </b-collapse>
              <button
                class="btn btn-outline-primary float-left collapsed toggle-collapse"
                @click="toggleMore6"
                v-if="!openColNotarial"
                v-b-toggle.collapse-service6
              >
                <span v-if="moreService6">{{ $t("seeMore") }}</span
                ><span v-else>{{ $t("seeLess") }}</span>
                <i class="fa fa-angle-up"></i>
              </button>

              <nuxt-link class="btn btn-secondary float-right" to="/contact">{{
                $t("inquire")
              }}</nuxt-link>
              <div class="clearfix"></div>
            </div>

            <div class="service-package" v-if="showForeign">
              <h3 class="text-uppercase">{{ $t("serviceTitle7") }}</h3>
              <p>
                {{ $t("serviceSubTitle7") }}
              </p>

              <h4
                :class="[{ hide: !moreService7 }, 'start']"
                v-html="$t('startPriceService7')"
                v-if="!openColForeign"
              ></h4>
              <b-collapse id="collapse-service7" v-model="openColForeign">
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service7Item1") }}</h5>
                      <h6>{{ $t("service7SubItem1") }}</h6>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>12<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service7Item2") }}</h5>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>8<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service7Item4") }}</h5>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>8<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5 class="mt-3">{{ $t("service7Item5") }}</h5>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>8<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price no-border">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5 class="mt-3">{{ $t("service7Item6") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>8<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
              </b-collapse>
              <button
                class="btn btn-outline-primary float-left collapsed toggle-collapse"
                @click="toggleMore7"
                v-if="!openColForeign"
                v-b-toggle.collapse-service7
              >
                <span v-if="moreService7">{{ $t("seeMore") }}</span
                ><span v-else>{{ $t("seeLess") }}</span>
                <i class="fa fa-angle-up"></i>
              </button>

              <nuxt-link class="btn btn-secondary float-right" to="/contact">{{
                $t("inquire")
              }}</nuxt-link>
              <div class="clearfix"></div>
            </div>

            <div class="service-package" v-if="showSectoral">
              <h3 class="text-uppercase">{{ $t("serviceTitle8") }}</h3>
              <p>
                {{ $t("serviceSubTitle8") }}
              </p>

              <h4
                :class="[{ hide: !moreService8 }, 'start']"
                v-html="$t('startPriceService8')"
                v-if="!openColSectoral"
              ></h4>
              <b-collapse id="collapse-service8" v-model="openColSectoral">
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service8Item1") }}</h5>
                      <h6>{{ $t("service8SubItem1") }}</h6>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span
                        ><span class="top">IDR</span>18<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="5" md="6">
                      <h5>{{ $t("service8Item2") }}</h5>
                      <h6>{{ $t("service8SubItem2") }}</h6>
                    </b-col>
                    <b-col cols="7" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span
                        ><span class="top">IDR</span>3.5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="5" md="6">
                      <h5>{{ $t("service8Item3") }}</h5>
                      <h6>{{ $t("service8SubItem3") }}</h6>
                    </b-col>
                    <b-col cols="7" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span
                        ><span class="top">IDR</span>5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="5" md="6">
                      <h5>{{ $t("service8Item4") }}</h5>
                      <h6>{{ $t("service8SubItem4") }}</h6>
                    </b-col>
                    <b-col cols="7" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span
                        ><span class="top">IDR</span>4<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="7">
                      <h5>{{ $t("service8Item5") }}</h5>
                      <h6>{{ $t("service8SubItem5") }}</h6>
                    </b-col>
                    <b-col cols="6" md="5">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>7.5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service8Item6") }}</h5>
                      <h6>{{ $t("service8SubItem6") }}</h6>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">USD</span>1800<span>{{
                          $t("equivalent")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5 class="mt-3">{{ $t("service8Item7") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">USD</span>1200<span>{{
                          $t("equivalent")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
                <div class="price no-border">
                  <b-row>
                    <b-col cols="6" md="6">
                      <h5>{{ $t("service8Item8") }}</h5>
                    </b-col>
                    <b-col cols="6" md="6">
                      <h4>
                        <span>{{ $t("startFrom") }}</span>
                        <span class="top">IDR</span>5<span>{{
                          $t("million")
                        }}</span>
                      </h4>
                    </b-col>
                  </b-row>
                </div>
              </b-collapse>
              <button
                class="btn btn-outline-primary float-left collapsed toggle-collapse"
                @click="toggleMore8"
                v-if="!openColSectoral"
                v-b-toggle.collapse-service8
              >
                <span v-if="moreService8">{{ $t("seeMore") }}</span
                ><span v-else>{{ $t("seeLess") }}</span>
                <i class="fa fa-angle-up"></i>
              </button>

              <nuxt-link class="btn btn-secondary float-right" to="/contact">{{
                $t("inquire")
              }}</nuxt-link>
              <div class="clearfix"></div>
            </div>

            <div class="service-package" v-if="showDedicated">
              <h3 class="text-uppercase">{{ $t("serviceTitle9") }}</h3>
              <p>
                {{ $t("serviceSubTitle9") }}
              </p>

              <nuxt-link class="btn btn-secondary float-right" to="/contact">{{
                $t("inquire")
              }}</nuxt-link>
              <div class="clearfix"></div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- Fundraising -->
    <div class="fundraise" v-if="showFundraise">
      <b-container>
        <b-row class="align-items-center">
          <b-col md="6">
            <h5>{{ $t("fundSubTitle") }}</h5>
            <h6>{{ $t("fundTitle") }}</h6>
            <span class="line d-none"></span>
            <p>{{ $t("fundText") }}</p>
            <div class="clearfix"></div>

            <nuxt-link class="btn btn-secondary" to="/contact">{{
              $t("inquire")
            }}</nuxt-link>
            <a
              href="http://www.makeslaw.com/aksara"
              target="_blank"
              class="btn btn-primary"
              >{{ $t("lmore") }}</a
            >
            <span class="note"
              >{{ $t("fundNote") }} <img src="/lexar/mp.png" alt=""
            /></span>
          </b-col>
          <b-col md="6">
            <span
              class="image-fund"
              style="background-image: url('/lexar/fundraising.png')"
            ></span>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- FAQ Link -->
    <div class="faq-link" style="background-image: url('/lexar/faq.jpg')">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center faq-text">
            <h3>{{ $t("faqLinkTitle") }}</h3>
            <p>{{ $t("faqLinkSubtitle") }}</p>
            <b-link :to="localePath('faq')" class="btn btn-primary"
              >Frequently Asked Questions</b-link
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Company Modal -->
    <b-modal id="modal-company-service" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
          <b-form>
            <b-form-group
              id="input-group-1"
              :label="$t('fullName')"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                v-validate="'required'"
                :placeholder="$t('plName')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
                id="input-2"
                name="email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                :placeholder="$t('plEmail')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.subject"
                :options="company"
                class="form-control"
                v-validate="'required'"
                name="subject"
              >
                <template slot="first">
                  <option :value="null" disabled>
                    {{ $t("subjectChoice") }}
                  </option>
                </template>
              </b-form-select>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>

    <!-- License Modal -->
    <b-modal id="modal-license" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
          <b-form>
            <b-form-group
              id="input-group-1"
              :label="$t('fullName')"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                v-validate="'required'"
                :placeholder="$t('plName')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
                id="input-2"
                name="email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                :placeholder="$t('plEmail')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.subject"
                :options="license"
                class="form-control"
                v-validate="'required'"
                name="subject"
              >
                <template slot="first">
                  <option :value="null" disabled>
                    {{ $t("subjectChoice") }}
                  </option>
                </template>
              </b-form-select>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>

    <!-- Notarial Modal -->
    <b-modal id="modal-notarial" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
          <b-form>
            <b-form-group
              id="input-group-1"
              :label="$t('fullName')"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                v-validate="'required'"
                :placeholder="$t('plName')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
                id="input-2"
                name="email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                :placeholder="$t('plEmail')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.subject"
                :options="notarial"
                class="form-control"
                v-validate="'required'"
                name="subject"
              >
                <template slot="first">
                  <option :value="null" disabled>
                    {{ $t("subjectChoice") }}
                  </option>
                </template>
              </b-form-select>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>

    <!-- Notarial Foreign Modal -->
    <b-modal id="modal-notarial-foreign" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
          <b-form>
            <b-form-group
              id="input-group-1"
              :label="$t('fullName')"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                v-validate="'required'"
                :placeholder="$t('plName')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
                id="input-2"
                name="email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                :placeholder="$t('plEmail')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.subject"
                :options="notarialForeign"
                class="form-control"
                v-validate="'required'"
                name="subject"
              >
                <template slot="first">
                  <option :value="null" disabled>
                    {{ $t("subjectChoice") }}
                  </option>
                </template>
              </b-form-select>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>

    <!-- Trademark Modal -->
    <b-modal id="modal-trademark" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
          <b-form>
            <b-form-group
              id="input-group-1"
              :label="$t('fullName')"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                v-validate="'required'"
                :placeholder="$t('plName')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
                id="input-2"
                name="email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                :placeholder="$t('plEmail')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.subject"
                :options="trademark"
                class="form-control"
                v-validate="'required'"
                name="subject"
              >
                <template slot="first">
                  <option :value="null" disabled>
                    {{ $t("subjectChoice") }}
                  </option>
                </template>
              </b-form-select>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>

    <!-- Corporate Modal -->
    <b-modal id="modal-corporate" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
          <b-form>
            <b-form-group
              id="input-group-1"
              :label="$t('fullName')"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                v-validate="'required'"
                :placeholder="$t('plName')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
                id="input-2"
                name="email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                :placeholder="$t('plEmail')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.subject"
                :options="corporate"
                class="form-control"
                v-validate="'required'"
                name="subject"
              >
                <template slot="first">
                  <option :value="null" disabled>
                    {{ $t("subjectChoice") }}
                  </option>
                </template>
              </b-form-select>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>

    <!-- Business Modal -->
    <b-modal id="modal-business" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
          <b-form>
            <b-form-group
              id="input-group-1"
              :label="$t('fullName')"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                v-validate="'required'"
                :placeholder="$t('plName')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
                id="input-2"
                name="email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                :placeholder="$t('plEmail')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.subject"
                :options="business"
                class="form-control"
                v-validate="'required'"
                name="subject"
              >
                <template slot="first">
                  <option :value="null" disabled>
                    {{ $t("subjectChoice") }}
                  </option>
                </template>
              </b-form-select>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>

    <!-- Expatriate Modal -->
    <b-modal id="modal-expatriate" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
          <b-form>
            <b-form-group
              id="input-group-1"
              :label="$t('fullName')"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                v-validate="'required'"
                :placeholder="$t('plName')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
                id="input-2"
                name="email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                :placeholder="$t('plEmail')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.subject"
                :options="expatriate"
                class="form-control"
                v-validate="'required'"
                name="subject"
              >
                <template slot="first">
                  <option :value="null" disabled>
                    {{ $t("subjectChoice") }}
                  </option>
                </template>
              </b-form-select>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>

    <!-- Fundraise Modal -->
    <b-modal id="modal-fundraise" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
          <b-form>
            <b-form-group
              id="input-group-1"
              :label="$t('fullName')"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                v-validate="'required'"
                :placeholder="$t('plName')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
                id="input-2"
                name="email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                :placeholder="$t('plEmail')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.subject"
                :options="fundraise"
                class="form-control"
                v-validate="'required'"
                name="subject"
              >
                <template slot="first">
                  <option :value="null" disabled>
                    {{ $t("subjectChoice") }}
                  </option>
                </template>
              </b-form-select>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>

    <!-- Dedicated Modal -->
    <b-modal id="modal-dedicated" hide-footer title="">
      <b-row>
        <b-col>
          <h3>{{ $t("contactForm") }}</h3>
          <b-form>
            <b-form-group
              id="input-group-1"
              :label="$t('fullName')"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                v-validate="'required'"
                :placeholder="$t('plName')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("name") : ""
              }}</span>
            </b-form-group>

            <b-form-group id="input-group-2" label="Email" label-for="input-2">
              <b-form-input
                id="input-2"
                name="email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                :placeholder="$t('plEmail')"
              ></b-form-input>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("email") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('subject')"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.subject"
                :options="dedicated"
                class="form-control"
                v-validate="'required'"
                name="subject"
              >
                <template slot="first">
                  <option :value="null" disabled>
                    {{ $t("subjectChoice") }}
                  </option>
                </template>
              </b-form-select>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("subject") : ""
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              :label="$t('message')"
              label-for="input-4"
            >
              <b-form-textarea
                id="textarea"
                name="message"
                v-model="form.message"
                :placeholder="$t('plMessage')"
                rows="6"
                v-validate="'required'"
              ></b-form-textarea>
              <span class="validator pt-2 text-danger">{{
                errors ? errors.first("message") : ""
              }}</span>
            </b-form-group>
            <b-alert variant="success" id="alertSuccess" class="d-none" show
              >Your message has been Submit. Please check your Email.</b-alert
            >
            <b-alert variant="danger" id="alertError" class="d-none" show
              >Theres something error, please try again</b-alert
            >

            <b-button variant="primary" @click="onSubmit">{{
              $t("submit")
            }}</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>

    <!-- Filter Duotone -->
    <svg xmlns="http://www.w3.org/2000/svg" class="svg-filters d-none">
      <filter id="duotone_lexar">
        <feColorMatrix
          type="matrix"
          result="grayscale"
          values="1 0 0 0 0
                        1 0 0 0 0
                        1 0 0 0 0
                        0 0 0 1 0"
        />

        <feComponentTransfer
          color-interpolation-filters="sRGB"
          result="duotone_lexar"
        >
          <feFuncR
            type="table"
            tableValues="0.0431372549 0.6627450980"
          ></feFuncR>
          <feFuncG
            type="table"
            tableValues="0.0941176470 0.5294117647"
          ></feFuncG>
          <feFuncB
            type="table"
            tableValues="0.1764705882 0.4470588235"
          ></feFuncB>
          <feFuncA type="table" tableValues="0 1"></feFuncA>
        </feComponentTransfer>
      </filter>
    </svg>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: null,
        message: "",
      },
      moreService: true,
      moreService2: true,
      moreService3: true,
      moreService4: true,
      moreService5: true,
      moreService6: true,
      moreService7: true,
      moreService8: true,
      company: [
        this.$t("companyChoice1"),
        this.$t("companyChoice2"),
        this.$t("otherInquiry"),
      ],
      license: [
        this.$t("service2Item1"),
        this.$t("service2Item2"),
        this.$t("service2Item3"),
        this.$t("service2Item4"),
        this.$t("licenseChoice5"),
        this.$t("otherInquiry"),
      ],
      corporate: [
        this.$t("service3Item1"),
        this.$t("corporateChoice2"),
        this.$t("service3Item3"),
        this.$t("corporateChoice4"),
        this.$t("service3Item5"),
        this.$t("service3Item6"),
        this.$t("service3Item7"),
        this.$t("otherInquiry"),
      ],
      expatriate: [
        this.$t("service4Item1"),
        this.$t("service4Item2"),
        this.$t("service4Item3"),
        this.$t("otherInquiry"),
      ],
      trademark: [
        this.$t("service5Item1"),
        this.$t("service5Item2"),
        this.$t("service5Item3"),
        this.$t("service5Item4"),
        this.$t("otherInquiry"),
      ],
      notarial: [
        this.$t("notarialChoice1"),
        this.$t("notarialChoice2"),
        this.$t("notarialChoice3"),
        this.$t("notarialChoice4"),
        this.$t("service6Item5"),
        this.$t("service6Item6"),
        this.$t("service6Item7"),
        this.$t("service6Item8"),
        this.$t("service6Item9"),
        this.$t("otherInquiry"),
      ],
      notarialForeign: [
        this.$t("service7Item1"),
        this.$t("foreignChoice2"),
        this.$t("foreignChoice3"),
        this.$t("service7Item4"),
        this.$t("service7Item5"),
        this.$t("service7Item6"),
        this.$t("otherInquiry"),
      ],
      business: [
        this.$t("service8Item1"),
        this.$t("businessChoice2"),
        this.$t("businessChoice3"),
        this.$t("businessChoice4"),
        this.$t("service8Item5"),
        this.$t("service8Item6"),
        this.$t("service8Item7"),
        this.$t("service8Item8"),
        this.$t("otherInquiry"),
      ],
      fundraise: [this.$t("fundSubTitle"), this.$t("otherInquiry")],
      dedicated: [this.$t("serviceTitle9"), this.$t("otherInquiry")],
      showIncorp: true,
      openColIncorp: false,
      showLicense: true,
      openColLicense: false,
      showSecretarial: true,
      openColSecretarial: false,
      showExpatriate: true,
      openColExpatriate: false,
      showProperty: true,
      openColProperty: false,
      showNotarial: true,
      openColNotarial: false,
      showForeign: true,
      openColForeign: false,
      showSectoral: true,
      openColSectoral: false,
      showDedicated: true,
      openColDedicated: false,
      showFundraise: true,
      showOther: false,
      hideLeftColumn: false,
      hideRightColumn: false,
    };
  },
  head() {
    return {
      title: "Service | LEXAR",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Affordable, simple, and straightforward legal administration services",
        },
        { hid: "og:title", name: "og:title", content: "Service | LEXAR" },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Affordable, simple, and straightforward legal administration services",
        },
      ],
    };
  },
  created() {
    if (this.$route.query.selected === "incorporation") {
      this.openColIncorp = true;
      this.showLicense = false;
      this.showSecretarial = false;
      this.showExpatriate = false;
      this.showProperty = false;
      this.showNotarial = false;
      this.showForeign = false;
      this.showSectoral = false;
      this.showDedicated = false;
      this.showFundraise = false;
      this.hideRightColumn = true;
    }

    if (this.$route.query.selected === "license") {
      this.openColLicense = true;
      this.showIncorp = false;
      this.showSecretarial = false;
      this.showExpatriate = false;
      this.showProperty = false;
      this.showNotarial = false;
      this.showForeign = false;
      this.showSectoral = false;
      this.showDedicated = false;
      this.showFundraise = false;
      this.hideRightColumn = true;
    }

    if (this.$route.query.selected === "secretarial") {
      this.openColSecretarial = true;
      this.showIncorp = false;
      this.showLicense = false;
      this.showExpatriate = false;
      this.showProperty = false;
      this.showNotarial = false;
      this.showForeign = false;
      this.showSectoral = false;
      this.showDedicated = false;
      this.showFundraise = false;
      this.hideRightColumn = true;
    }

    if (this.$route.query.selected === "expatriate") {
      this.openColExpatriate = true;
      this.showIncorp = false;
      this.showLicense = false;
      this.showSecretarial = false;
      this.showProperty = false;
      this.showNotarial = false;
      this.showForeign = false;
      this.showSectoral = false;
      this.showDedicated = false;
      this.showFundraise = false;
      this.hideRightColumn = true;
    }

    if (this.$route.query.selected === "property") {
      this.openColProperty = true;
      this.showIncorp = false;
      this.showLicense = false;
      this.showSecretarial = false;
      this.showExpatriate = false;
      this.showNotarial = false;
      this.showForeign = false;
      this.showSectoral = false;
      this.showDedicated = false;
      this.showFundraise = false;
      this.hideRightColumn = true;
    }

    if (this.$route.query.selected === "notarial") {
      this.openColNotarial = true;
      this.showIncorp = false;
      this.showLicense = false;
      this.showSecretarial = false;
      this.showExpatriate = false;
      this.showProperty = false;
      this.showForeign = false;
      this.showSectoral = false;
      this.showDedicated = false;
      this.showFundraise = false;
      this.hideLeftColumn = true;
    }

    if (this.$route.query.selected === "foreign") {
      this.openColForeign = true;
      this.showIncorp = false;
      this.showLicense = false;
      this.showSecretarial = false;
      this.showExpatriate = false;
      this.showProperty = false;
      this.showNotarial = false;
      this.showSectoral = false;
      this.showDedicated = false;
      this.showFundraise = false;
      this.hideLeftColumn = true;
    }

    if (this.$route.query.selected === "sectoral") {
      this.openColSectoral = true;
      this.showIncorp = false;
      this.showLicense = false;
      this.showSecretarial = false;
      this.showExpatriate = false;
      this.showProperty = false;
      this.showNotarial = false;
      this.showForeign = false;
      this.showDedicated = false;
      this.showFundraise = false;
      this.hideLeftColumn = true;
    }

    if (this.$route.query.selected === "dedicated") {
      this.openColDedicated = true;
      this.showIncorp = false;
      this.showLicense = false;
      this.showSecretarial = false;
      this.showExpatriate = false;
      this.showProperty = false;
      this.showNotarial = false;
      this.showForeign = false;
      this.showSectoral = false;
      this.showFundraise = false;
      this.hideLeftColumn = true;
    }

    if (this.$route.query.selected === "fundraise") {
      this.showOther = true;
    }
  },
  methods: {
    toggleMore() {
      console.log("hehe");
      this.moreService = !this.moreService;
    },
    toggleMore2() {
      this.moreService2 = !this.moreService2;
    },
    toggleMore3() {
      this.moreService3 = !this.moreService3;
    },
    toggleMore4() {
      this.moreService4 = !this.moreService4;
    },
    toggleMore5() {
      this.moreService5 = !this.moreService5;
    },
    toggleMore6() {
      this.moreService6 = !this.moreService6;
    },
    toggleMore7() {
      this.moreService7 = !this.moreService7;
    },
    toggleMore8() {
      this.moreService8 = !this.moreService8;
    },
    async onSubmit() {
      const validated = await this.$validator.validateAll();
      console.log(validated);

      if (validated) {
        try {
          const contactRequest = await this.$contact.send(this.form);

          this.form.name = "";
          this.form.email = "";
          this.form.subject = null;
          this.form.message = "";

          this.$validator.reset();

          console.log("berhasil!");

          document.getElementById("alertSuccess").classList.remove("d-none");
        } catch (error) {
          console.log(error);

          document.getElementById("alertError").classList.remove("d-none");
        }
      }
    },
  },
};
</script>
