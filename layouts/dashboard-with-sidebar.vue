<template>
  <div>
    <header-dashboard></header-dashboard>
    <div class="content-with-sidebar">
        <sidebar-dashboard /> 
        <nuxt/>
    </div>
  </div>
</template>

<script>
import HeaderDashboard from '~/components/HeaderDashboard.vue'
import SidebarDashboard from '~/components/SidebarDashboard.vue'

export default {
  components: {
    HeaderDashboard,
    SidebarDashboard
  }
}
</script>