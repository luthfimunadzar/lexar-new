<template>
    <div>
        <!-- Hero Inner -->
        <div class="inner-hero" style="background-image: url('/lexar/blog-bg.jpg'); background-position: center center;">
            <b-container>
                <b-row>
                    <b-col>
                        <h3>Article</h3>
                        <h5>Guide in the Ocean of Knowledge</h5>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div class="article-wrap white-panel">
            <b-container>
                <b-row>
                    <b-col md="8">
                        <b-link 
                        :to="localePath({ name: 'publication-article-id', params: { id: article.id } })" 
                        class="article-item"
                        v-for="article in dataArticle"
                        :key="article.id">
                            <span class="image" :style="{ backgroundImage: 'url(' + article.image_link + ')' }"></span>
                            <h6 class="text-cat">
                                <span v-for="cat in article.category" :key="cat.id">{{ cat.category }}</span>
                            </h6>
                            <h4 class="text-title">{{ article.title }}</h4>
                            <p>
                                {{ article.summary }}
                            </p>
                            <span class="text-date">{{ article.author }}  - {{ article.created_at | formatDate }}</span>
                        </b-link>
       
                        <b-pagination
                            class="d-none"
                            v-model="currentPage"
                            :per-page="perPage"
                        ></b-pagination>    
                    </b-col>
                    <b-col md="3">
                        <h6 class="side-title">Categories</h6>
                        <ul class="side-link">
                            <li>
                                <b-link :to="localePath({ name: 'publication-article' })">
                                    All
                                </b-link>
                            </li>
                            <li v-for="cat in dataCat" :key="cat.id">
                                <b-link :to="localePath({ name: 'publication-article-cat-id', params: { id: cat.slug } })">
                                    {{ cat.category }}
                                </b-link>
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </b-container>
        </div>

    </div>
</template>

<script>
export default {
    async asyncData({app}){
        const tempArticle = await app.$publication.getArticle();
        const tempCategory = await app.$publication.getCat();

        return{
            dataArticle: tempArticle.data,
            dataCat: tempCategory.data,
        }
    },
    data() {
        return {
            dataArticle: {},
            dataCat: {},
            nameCat: [],
            perPage: 3,
            currentPage: 1,
        }
    },
    created() {
        
    }
}
</script>