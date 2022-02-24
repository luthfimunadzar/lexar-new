<template>
    <div>
        <div class="head-plain">
            <b-link v-if="openID" @click="openIndonesian" class="link-back"><img src="/lexar/back.png" alt=""></b-link>
            <b-link v-if="openSH" @click="openShareHolder" class="link-back"><img src="/lexar/back.png" alt=""></b-link>
            <b-link v-if="openAS" @click="openAssign" class="link-back"><img src="/lexar/back.png" alt=""></b-link>
            <nuxt-link to="#" v-if="openID" v-b-tooltip.hover :title="$t('needs2info')" class="link-info"><img src="/lexar/help.png" alt=""></nuxt-link>
            <nuxt-link to="#" v-if="openAS" v-b-tooltip.hover :title="$t('needs4info')" class="link-info"><img src="/lexar/help.png" alt=""></nuxt-link>
            
            <nuxt-link :to="localePath('incorp')" class="link-close"><img src="/lexar/close.png" alt=""></nuxt-link>
            <div class="switcher-plain">
                <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
                <nuxt-link :to="switchLocalePath('id')">ID</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "header-plain"
}
</script>