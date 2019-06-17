import Vue from 'vue';

export default function ({app, store, redirect, route}) {
  return app.$auth.onAuthStateChanged(function (user) {
    if (!user) {
      store.commit('user/removeUser');
      store.commit('user/removeToken');
      return !(route.name === 'login' || route.name === 'register')
        ? redirect('/login/')
        : ''
    }
    if (user) {
      store.dispatch('user/fetchUserClaims', user);
      return route.name === 'login' || route.name === 'register'
        ? redirect('/')
        : ''
    }
  })
}
