<template>
  <div>
    <header-dashboard></header-dashboard>
    <nuxt/>
  </div>
</template>

<script>
import HeaderDashboard from '~/components/HeaderDashboard.vue'

export default {
  components: {
    HeaderDashboard
  }
}
</script>