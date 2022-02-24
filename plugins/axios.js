export default function ({
  app,
  $axios,
  redirect
}) {

  $axios.onRequest(config => {
    // Set Accept and Content-Type headers to application/json in every request
    config.headers.common['Accept'] = 'application/json';
    config.headers.common['Content-Type'] = 'application/json';
  });

  $axios.onResponse(config => {
    if (config.status == 401 || config.data.meta.code == 401) { // Unauthorized
      app.$auth.logout()
    }
  });

  $axios.onError(err => {

  });

  $axios.onRequestError(err => {

  });

  $axios.onResponseError(err => {

  });
}
