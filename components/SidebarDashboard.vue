<template>
  <div>
    <aside class="sidebar" :class="{ loading: updating }">
      <ul>
        <li class="d-none">
          <nuxt-link
            :to="
              localePath({
                name: 'dashboard-incorporation-id-getting-started',
                params: { id: $route.params.id },
              })
            "
            :class="[{ 'is-invalid': updating }]"
          >
            <span class="steps">0</span>
            <span class="text">{{ $t("guideLine") }}</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="
              localePath({
                name: 'dashboard-incorporation-id-company-detail',
                params: { id: $route.params.id },
              })
            "
            :class="[{ 'is-invalid': updating }]"
          >
            <span class="steps">1</span>
            <span class="text">{{ $t("companyDetail") }}</span>
          </nuxt-link>
        </li>
        <!-- <li>
                    <nuxt-link :to="localePath({ name: 'dashboard-incorporation-id-pt-domicile', params: { id: $route.params.id } })" :class="[{'is-invalid': updating}]">
                        <span class="steps">2</span>
                        <span class="text">{{ $t('domicilePT') }}</span>
                    </nuxt-link>
                </li> -->
        <li>
          <nuxt-link
            :to="
              localePath({
                name: 'dashboard-incorporation-id-business-fields',
                params: { id: $route.params.id },
              })
            "
            :class="[{ 'is-invalid': updating }]"
          >
            <span class="steps">2</span>
            <span class="text">{{ $t("businessField") }}</span>
          </nuxt-link>
        </li>
        <!-- <li>
                    <nuxt-link :to="localePath({ name: 'dashboard-incorporation-id-capital-structure', params: { id: $route.params.id } })" :class="[{'is-invalid': updating}]">
                        <span class="steps">4</span>
                        <span class="text">{{ $t('capitalStructure') }}</span>
                    </nuxt-link>
                </li> -->
        <li>
          <nuxt-link
            :to="
              localePath({
                name: 'dashboard-incorporation-id-shareholders',
                params: { id: $route.params.id },
              })
            "
            :class="[{ 'is-invalid': updating }]"
          >
            <span class="steps">3</span>
            <span class="text">{{ $t("shareholderTitle") }}</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="
              localePath({
                name: 'dashboard-incorporation-id-preview-deed',
                params: { id: $route.params.id },
              })
            "
            :class="[{ 'is-invalid': updating }]"
          >
            <span class="steps">4</span>
            <span class="text">{{ $t("previewDeed") }}</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            v-if="dataPayment.valid_signing === 'true'"
            :to="
              localePath({
                name: 'dashboard-incorporation-id-schedulling',
                params: { id: $route.params.id },
              })
            "
            :class="[{ 'is-invalid': updating }]"
          >
            <span class="steps">5</span>
            <span class="text">{{ $t("schedulling") }}</span>
          </nuxt-link>
          <b-link
            v-else
            href="#"
            v-b-modal.modal-must-pay
            :class="[{ 'is-invalid': updating }]"
          >
            <span class="steps">5</span>
            <span class="text">{{ $t("schedulling") }}</span>
          </b-link>
        </li>
      </ul>
    </aside>

    <b-modal
      id="modal-must-pay"
      ref="modal-confirm"
      class="text-center"
      title=""
      hide-footer
    >
      <p class="text-center mb-4">
        <img
          src="/lexar/confirm1.svg"
          alt=""
          class="w-50"
          v-if="dataPayment.message === 'DOCUMENT_NOT_READY'"
        />
        <img
          src="/lexar/confirm2.svg"
          alt=""
          class="w-50"
          v-if="dataPayment.message === 'PAYMENT_REQUIRED'"
        />
        <img
          src="/lexar/confirm3.svg"
          alt=""
          class="w-50"
          v-if="dataPayment.message === 'UNAUTHORIZED_DOCUMENT'"
        />
        <img
          src="/lexar/confirm4.svg"
          alt=""
          class="w-50"
          v-if="dataPayment.message === 'INVALID_DATA'"
        />
      </p>

      <h3 class="text-center">{{ $t("sorry") }}</h3>

      <!-- Document Not Ready -->
      <p
        class="my-4 text-center"
        v-if="dataPayment.message === 'DOCUMENT_NOT_READY'"
      >
        {{ $t("notReady") }}
      </p>
      <p
        class="text-center"
        v-if="dataPayment.message === 'DOCUMENT_NOT_READY'"
      >
        <button @click="checkAgain()" class="btn btn-secondary">
          {{ $t("checkAgain") }}
        </button>
      </p>

      <!-- Payment Required -->
      <p
        class="my-4 text-center"
        v-if="dataPayment.message === 'PAYMENT_REQUIRED'"
      >
        {{ $t("paymentRequired") }}
      </p>
      <p class="text-center" v-if="dataPayment.message === 'PAYMENT_REQUIRED'">
        <b-link
          :to="
            localePath({
              name: 'dashboard-incorporation-id-payment',
              params: { id: $route.params.id },
            })
          "
          class="btn btn-secondary"
          >{{ $t("payNow") }}</b-link
        >

        <!-- Invalid Data -->
      </p>

      <p class="my-4 text-center" v-if="dataPayment.message === 'INVALID_DATA'">
        {{ $t("invalidData") }}
      </p>
      <p class="text-center" v-if="dataPayment.message === 'INVALID_DATA'">
        <button @click="checkAgain()" class="btn btn-secondary">
          {{ $t("checkAgain") }}
        </button>
      </p>

      <!-- Unauthorized Document -->
      <p
        class="my-4 text-center"
        v-if="dataPayment.message === 'UNAUTHORIZED_DOCUMENT'"
      >
        {{ $t("unauthDocument") }}
      </p>
      <p
        class="text-center"
        v-if="dataPayment.message === 'UNAUTHORIZED_DOCUMENT'"
      >
        <b-link
          :to="localePath({ name: 'dashboard' })"
          class="btn btn-secondary"
          >{{ $t("backDashboard") }}</b-link
        >
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "sidebar-dashboard",
  data() {
    return {
      dataPayment: {},
    };
  },
  mounted() {
    this.checkPayment();
  },
  computed: {
    updating() {
      return this.$store.state.incorp.updating;
    },
  },
  methods: {
    async checkPayment() {
      const tempPayment = await this.$matrix.getPaymentValid(
        $nuxt.$route.params.id
      );
      this.dataPayment = tempPayment.data;
    },
    checkAgain() {
      this.$refs["modal-confirm"].hide();
      this.$router.push(
        this.localePath({
          name: "dashboard-incorporation-id-company-detail",
          params: { id: this.$route.params.id },
        })
      );
    },
  },
};
</script>

//
<style lang="scss" scoped>
//     .loading {
//         opacity: 0.3;
//     }
//
</style>
