import createAuthenticationRepository from '../api/authentication'
import createShoppingListsRepository from '../api/shopping_lists'

export default (ctx, inject) => {
  const authenticationRepository = createAuthenticationRepository(ctx.$axios);
  const shoppingListsRepository = createShoppingListsRepository(ctx.$axios);

  ctx.$axios.defaults.baseURL = 'http://localhost:8000';

  if (process.env.NODE_ENV === 'production') {
    ctx.$axios.defaults.baseURL = 'https://api.testenv.nl';
  }

  const repositories = {
    authentication: authenticationRepository('auth'),
    shoppingLists: shoppingListsRepository('')
  };

  inject('repos', repositories);
}
