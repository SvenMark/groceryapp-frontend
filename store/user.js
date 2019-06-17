import axios from '@nuxtjs/axios';

const initialUserState = {
    first_name: 'John',
    last_name: 'Doe',
    avatar_image_url: 'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
};

export const state = () => ({
  token: null,
  user: initialUserState,
});

export const mutations = {
  setUser(state, user) {
    if (!user.first_name)
      user.first_name = initialUserState.first_name;
    if (!user.last_name)
      user.last_name = initialUserState.last_name;
    if (!user.avatar_image_url)
      user.avatar_image_url = initialUserState.avatar_image_url;
    state.user = user
  },
  removeUser(state) {
    const self = this;
    state.user = initialUserState;
  },
  setToken(state, token) {
    const self = this;
    console.log('setting token');
    self.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    state.token = token;
  },
  removeToken(state) {
    const self = this;
    state.token = null;
    self.$axios.defaults.headers.common['Authorization'] = null;
  }
};

export const actions = {
    fetchUserClaims({commit}, user) {
      user.getIdTokenResult()
        .then((idTokenResult) => {
            commit('setUser', idTokenResult.claims);
            commit('setToken', idTokenResult.token);
          }
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }
;

export const getters = {
  user(state) {
    return state.user
  },
  isAuthenticated(state) {
    return state.token !== null;
  }
};
