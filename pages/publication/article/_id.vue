<template>
    <div>
        <div class="article-detail-wrap">
            <b-container>
                <b-row>
                    <b-col md="12">
                        <span class="image" :style="{ backgroundImage: 'url(' + dataArticle.image_link + ')' }"></span>
                    </b-col>
                    <b-col md="8" offset-md="2">
                        <h6 class="text-cat">
                            <span v-for="cat in dataArticle.category" :key="cat.id">{{ cat.category }}</span>
                        </h6>
                        <span class="text-date">{{ dataArticle.author }} - {{ dataArticle.created_at | formatDate }}</span>
                        
                        <div class="clearfix"></div>
                        <h4 class="text-title">{{ dataArticle.title }}</h4>
                        <div class="text-content" v-html="dataArticle.content">
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ app, route}){
        const tempArticle = await app.$publication.getArticleDetail(route.params.id);

        return{
            dataArticle: tempArticle.data,
        }
    },
    data(){
        return{
            dataArticle: {},
        }
    },
    head () {
        return {
            title: this.dataArticle.title + " - LEXAR",
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: this.dataArticle.summary },
                { hid: 'og:title', name: 'og:title', content: this.dataArticle.title + " - LEXAR" },
                { hid: 'og:description', name: 'og:description', content: this.dataArticle.summary },
            ]
        }
    }
}
</script>