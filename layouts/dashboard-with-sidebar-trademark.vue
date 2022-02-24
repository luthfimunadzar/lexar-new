<template>
  <div>
    <header-dashboard></header-dashboard>
    <div class="content-with-sidebar">
        <sidebar-trademark-dashboard /> 
        <nuxt/>
    </div>
  </div>
</template>

<script>
import HeaderDashboard from '~/components/HeaderDashboard.vue'
import SidebarTrademarkDashboard from '~/components/SidebarTrademarkDashboard.vue'

export default {
  components: {
    HeaderDashboard,
    SidebarTrademarkDashboard
  }
}
</script>