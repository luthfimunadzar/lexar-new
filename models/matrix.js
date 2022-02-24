const model = $axios => ({
    getVerification() {
      return $axios.$get('api/verification');
    },
    getList() {
      return $axios.$get('api/matrix');
    },
    getDetailMatrix(params){
      return $axios.$get('api/matrix/' + params)
    },
    getDetailVO(params){
      return $axios.$get('api/virtual/office/branch?id=' + params)
    },
    getKbli(){
      return $axios.$get('api/master/kbli')
    },
    getKbliDetail(params){
      return $axios.$get('api/master/kbli/' + params)
    },
    searchKbli(params){
      return $axios.$get('api/master/kbli?query=' + params)
    },
    searchKbliByCode(params){
      return $axios.$get('api/master/kbli?code=' + params)
    },
    getShareholder(params){
      return $axios.$get('api/matrix/saham/' + params)
    },
    getShareholderBadan(params){
      return $axios.$get('api/matrix/badan/' + params)
    },
    getManagement(params){
      return $axios.$get('api/matrix/pengurus/' + params)
    },
    getShareholderDetail(params){
      return $axios.$get('api/matrix/saham/detail/' + params)
    },
    getShareholderBadanDetail(params){
      return $axios.$get('api/matrix/badan/detail/' + params)
    },
    getManagementDetail(params){
      return $axios.$get('api/matrix/pengurus/detail/' + params)
    },
    delShareholder(params){
      return $axios.$delete('api/matrix/saham/delete/' + params)
    },
    delShareholderBadan(params){
      return $axios.$delete('api/matrix/badan/delete/' + params)
    },
    delManagement(params){
      return $axios.$delete('api/matrix/pengurus/delete/' + params)
    },
    saveMatrix(params){
      return $axios.$post('api/matrix/save', params)
    },
    saveShareholder(params){
      if(params.foto_ktp) delete params.foto_ktp; 
      if(params.foto_kk) delete params.foto_kk; 
      if(params.foto_npwp) delete params.foto_npwp; 
      return $axios.$post('api/matrix/saham/save', params)
    },
    saveShareholderBadan(params){
      return $axios.$post('api/matrix/badan/save', params)
    },
    saveManagement(params){
      if(params.foto_ktp) delete params.foto_ktp; 
      if(params.foto_kk) delete params.foto_kk; 
      if(params.foto_npwp) delete params.foto_npwp; 
      return $axios.$post('api/matrix/pengurus/save', params)
    },
    getPaymentMethod() {
      return $axios.$get('api/paymentmethod');
    },
    getPaymentMethodDetail(params) {
      return $axios.$get('api/paymentmethod/' + params);
    },
    getPaymentTarget() {
      return $axios.$get('api/paymenttarget');
    },
    getPaymentTargetDetail(params) {
      return $axios.$get('api/paymenttarget/' + params);
    },
    getKbliDetail(params) {
      return $axios.$get('api/master/kbli?id=' + params);
    },
    checkVoucher(params) {
      return $axios.$post('api/voucher/check', params);
    },
    checkout(params) {
      return $axios.$post('api/transaction/checkout', params);
    },
    getListTransaction() {
      return $axios.$get('api/transaction');
    },
    getInvoice(params) {
      return $axios.$get('api/transaction/detail/' + params);
    },
    getProduct(params) {
      return $axios.$get('api/proposal/' + params);
    },
    getPaymentValid(params) {
      return $axios.$get('api/transaction/check/matrix?id=' + params);
    },
    getCalendar() {
      return $axios.$get('api/calendar');
    },
    setSign(params) {
      return $axios.$post('api/matrix/setsign', params);
    },
    uploadGambar(params) {
      return $axios.$post('api/matrix/upload', params);
    },
    cloneShareholder(params1, params2) {
      return $axios.$get('api/matrix/clone/saham?jabatan=' + params1 + '&users_id=' + params2);
    },
    checkEmail(params) {
      return $axios.$post('api/check/account', params);
    },
    assignSigning(params) {
      return $axios.$get('api/matrix/pengurus/default/' + params);
    },
});

export default ({
$axios
}, inject) => {
  inject('matrix', model($axios));
};