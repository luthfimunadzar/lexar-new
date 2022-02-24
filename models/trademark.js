const model = $axios => ({
    register(params) {
      return $axios.$post('api/register/incorp', params);
    },
    savePrematrixTrademark(params) {
      return $axios.$post('api/trademark/save', params);
    },
    getListTrademark() {
      return $axios.$get('api/trademark');
    },
    getDetailTrademark(params) {
      return $axios.$get('api/trademark/detail/' + params);
    },
    saveMatrix(params) {
      return $axios.$post('api/trademark/save', params);
    },
    sendEticket(params) {
      return $axios.$post('api/trademark/eticket/save', params)
    },
    deleteEticket(params) {
      return $axios.$get('api/trademark/eticket/delete/' +  params)
    },
    getKelas() {
      return $axios.$get('api/master/trademark/class');
    },
    getFilteredKelas(params) {
      return $axios.$get('api/master/trademark/class?query=' + params);
    },
    getSubKelas() {
      return $axios.$get('api/master/trademark/class/data');
    },
    getDetailKelas(params) {
      return $axios.$get('api/trademark/getclass/' + params);
    },
    getSubKelasByKelas(params) {
      return $axios.$get('api/master/trademark/class/data?class=' + params);
    },
    deleteClass(params) {
      return $axios.$post('api/trademark/class/delete',  params)
    },
    deleteSubClass(params) {
      return $axios.$post('api/trademark/subclass/delete',  params)
    },
    uploadFile(params) {
      return $axios.$post('api/trademark/upload', params);
    },
    confirmFile(params) {
      return $axios.$post('api/trademark/confirm', params);
    },
    filterSubClassbyClass(params){
      return $axios.$get('api/master/trademark/class/data?class=' + params)
    },
    filterSubClassTable(params1, params2){
      return $axios.$get('api/master/trademark/class/data?class=' + params1 + '&page=' + params2)
    },
    saveSubClass(params){
      return $axios.$post('api/trademark/class/save', params);
    },
    submitMatrix(params){
      return $axios.$post('api/trademark/submit', params);
    },
    checkoutMatrix(params){
      return $axios.$post('api/trademark/checkout', params);
    },
    getUpload() {
      return $axios.$get('api/master/trademark/reqdoc');
    },
    getBilling(params) {
      return $axios.$get('api/trademark/billing/' + params);
    },
});

export default ({
$axios
}, inject) => {
    inject('trademark', model($axios));
};