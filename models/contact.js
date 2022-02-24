const model = $axios => ({

  // Manggil: this.$contact.send
  // send({
  //   name,
  //   email,
  //   subject,
  //   message
  // }) {
  //   return $axios.$post('api/contact_us', {
  //     name,
  //     email,
  //     subject,
  //     message
  //   });
  // },

  send(params) {
    return $axios.$post('api/contact_us', params);
  }
});



export default ({
  $axios
}, inject) => {
  inject('contact', model($axios));
};
