const model = $axios => ({
    register(params) {
      return $axios.$post('api/register/incorp', params);
    },
    savePrematrix(params) {
      return $axios.$post('api/prematrix', params);
    },
    pickCity(params) {
      return $axios.$get('api/virtual/office?city=' + params)
    },
    pickBranch(params) {
      return $axios.$get('api/virtual/office/branch?id=' + params)
    },
    pickPackage(params) {
      return $axios.$get('api/virtual/office/package?id=' + params)
    },
    getProgress(params) {
      return $axios.$get('api/progress/' + params)
    },
});

export default ({
$axios
}, inject) => {
  inject('incorp', model($axios));
};