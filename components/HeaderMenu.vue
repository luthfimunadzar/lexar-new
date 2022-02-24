<template>
  <div class="link">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3" style="padding-top: 2em !important;">
        <h5 class="my-0 mr-md-auto font-weight-normal"></h5>
        <nav class="my-2 my-md-0 mr-md-auto">
          <nuxt-link class="p-3 d-block" to="/">
            <img src="/lexar/logo.png" alt="" style="width: 200px;">
          </nuxt-link>
        </nav>
      </div>
  </div>
</template>

<style>
a {
  text-decoration: none !important;
}
</style>

<script>
export default {
  name: "header-menu"
}
</script>
