<template>
  <div>
    <headers/>
    <nuxt/>
    <footers/>
  </div>
</template>

<script>
import Footers from '~/components/Footer.vue'
import Headers from '~/components/Header.vue'

export default {
  components: {
    Footers,
    Headers
  }
}
</script>

