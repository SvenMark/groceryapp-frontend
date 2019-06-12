import createAuthenticationRepository from '../api/authentication'

export default (ctx, inject) => {
  const authenticationRepository = createAuthenticationRepository(ctx.$axios);

  const repositories = {
    authentication: authenticationRepository('http://127.0.0.1:8000/auth')
  };

  inject('repos', repositories);
}
