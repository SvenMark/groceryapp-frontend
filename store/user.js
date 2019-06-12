const initialUserState = {
    first_name: 'John',
    last_name: 'Doe',
    avatar_image_url: 'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
};

export const state = () => ({
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
    state.user = initialUserState
  }
};

export const actions = {
    async fetchUserClaims({commit}, user) {
      user.getIdTokenResult()
        .then((idTokenResult) => {
            // Confirm the user is an Admin.
            commit('setUser', idTokenResult.claims);
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
  }
};
