const model = $axios => ({
    getArticle() {
      return $axios.$get('api/article');
    },
    getArticleDetail(params) {
      return $axios.$get('/api/article?id=' + params);
    },
    getArticleFiltered(params) {
      return $axios.$get('/api/article?category=' + params);
    },
    getCat() {
      return $axios.$get('api/article/category');
    },
    getCatDetail(params) {
      return $axios.$get('api/article/category?id=' + params);
    },
    getWpPost(params) {
      return $axios.$get('https://article.lexar.id/wp-json/wp/v2/posts?categories=' + params + '&per_page=3');
    },
  });
  
  
  export default ({
    $axios
  }, inject) => {
    inject('publication', model($axios));
  };
  