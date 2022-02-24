const model = $axios => ({
    getProvince() {
      return $axios.$get('api/area/province');
    },
    getCity(params) {
      return $axios.$get('api/area/province/' + params);
    },
    getDisctrict(params) {
      return $axios.$get('api/area/city/' + params);
    },
    getVillage(params) {
      return $axios.$get('api/area/district/' + params);
    },
    saveProfile(params) {
      if(params.foto_ktp) delete params.foto_ktp; 
      if(params.foto_kk) delete params.foto_kk; 
      if(params.foto_npwp) delete params.foto_npwp; 
      return $axios.$post('api/profile/save', params);
    },
  });
  
  export default ({
    $axios
  }, inject) => {
    inject('profile', model($axios));
  };
  