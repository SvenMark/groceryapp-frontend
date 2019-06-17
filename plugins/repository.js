import createAuthenticationRepository from '../api/authentication'
import createShoppingListsRepository from '../api/shopping_lists'

export default (ctx, inject) => {
  const authenticationRepository = createAuthenticationRepository(ctx.$axios);
  const shoppingListsRepository = createShoppingListsRepository(ctx.$axios);

  const repositories = {
    authentication: authenticationRepository('http://127.0.0.1:8000/auth'),
    shoppingLists: shoppingListsRepository('http://127.0.0.1:8000')
  };

  inject('repos', repositories);
}
