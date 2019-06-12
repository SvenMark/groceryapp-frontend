export default $axios => resource => ({
  login(body) {
    return $axios.$post(`${resource}/login/`, body)
  },
  register(body) {
    return $axios.$post(`${resource}/register/`, body)
  }
});
