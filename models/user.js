const model = $axios => ({
  verifyAccount(params) {
    return $axios.$get('api/validate/' + params);
  },
  setPassword(params1, params2) {
    return $axios.$post('api/reset/' + params1, params2);
  },
  register(params) {
    return $axios.$post('api/register', params);
  },
  forgotPassword(params) {
    return $axios.$post('api/reset', params);
  }
});

export default ({
  $axios
}, inject) => {
  inject('user', model($axios));
};
