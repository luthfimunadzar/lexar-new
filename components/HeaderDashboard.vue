<template>
    <div>
        <b-navbar toggleable="md" type="light" class="dashboard">
            <b-navbar-brand :to="localePath('index')"><img src="/lexar/lexar-brand.png" alt=""></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="localePath('dashboard')">{{ $t('dashboard') }}</b-nav-item>
                    <b-nav-item :to="localePath('dashboard-transaction')">{{ $t('transaction') }}</b-nav-item>
                    <b-nav-item-dropdown right>
                        <template slot="button-content">{{ (this.$auth.loggedIn) ? this.$auth.user.data.nama : "" }} <img src="/lexar/angle-bottom.png" alt="" class="angle"></template>
                        <b-dropdown-item :to="localePath('dashboard-profile-edit')">{{ $t('editProfile') }}</b-dropdown-item>
                        <b-dropdown-item :to="localePath('dashboard-verify-account')">{{ $t('changePassword') }}</b-dropdown-item>
                        <b-dropdown-item @click.once="logout">Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item href="https://www.surveymonkey.com/r/Q3VCPMT" target="_blank" link-classes="btn btn-secondary btn-feedback">{{ $t('giveFeedback') }}</b-nav-item>
                    <!-- <b-nav-item-dropdown right>
                        <template slot="button-content"><img src="/lexar/notification.png" alt=""></template>
                        <b-dropdown-item to="#"><b>PT Mencari Cinta Sejati</b> Payment has been Completed</b-dropdown-item>
                        <b-dropdown-item to="#"><b>PT Mencari Cinta Sejati</b> is waiting for a Payment</b-dropdown-item>
                    </b-nav-item-dropdown> -->
                </b-navbar-nav>
            </b-collapse>

            <div class="switcher">
                <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
                <nuxt-link :to="switchLocalePath('id')">ID</nuxt-link>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    // middleware: 'auth',
    name: "header-dashboard",
    data(){
        return{
            
        }
    },
    methods: {    
        async logout() {
            await this.$auth.logout();
            this.$router.replace('/');
        }
    }
}
</script>


