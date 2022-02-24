const model = $axios => ({
    getCareer() {
      return $axios.$get('api/career');
    },
  });
  
  
  export default ({
    $axios
  }, inject) => {
    inject('career', model($axios));
  };
  