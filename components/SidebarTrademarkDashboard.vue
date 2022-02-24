<template>
    <div>
        <aside class="sidebar">
            <ul>
                <li>
                    <nuxt-link :to="localePath({ name: 'dashboard-trademark-id-informasi-merek', params: { id: $route.params.id } })">
                        <span class="steps">1</span>
                        <span class="text">Informasi Merek</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="localePath({ name: 'dashboard-trademark-id-pemohon-merek', params: { id: $route.params.id } })">
                        <span class="steps">2</span>
                        <span class="text">Pemohon Merek</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="localePath({ name: 'dashboard-trademark-id-pratinjau', params: { id: $route.params.id } })">
                        <span class="steps">3</span>
                        <span class="text">Pratinjau</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="localePath({ name: 'dashboard-trademark-id-upload', params: { id: $route.params.id } })" v-if="status_tm === 'REVIEW_APPROVE' || status_tm === 'DOCS_REVIEW'">
                        <span class="steps">4</span>
                        <span class="text">Upload</span>
                    </nuxt-link>
                </li>
            </ul>
        </aside>

    </div>
</template>

<script>
export default {
    name: "sidebar-trademark-dashboard",
    data(){
        return{
            trademark: {},
        }
    },
    computed: {
        status_tm(){
            return this.$store.state.trademark.status
        }
    },
}
</script>

<style lang="scss" scoped>
    .loading {
        opacity: 0.3;
    }
</style>