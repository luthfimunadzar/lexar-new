import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
  // This is the default
  inject: false,
  // Important to name this something other than 'fields'
  fieldsBagName: 'veeFields',
  // This is not required but avoids possible naming conflicts
  errorBagName: 'veeErrors'
})