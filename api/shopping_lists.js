export default $axios => resource => ({
  all() {
    return $axios.$get(`${resource}/shoppinglists/`)
  },
  show(id) {
    return $axios.$get(`${resource}/shoppinglists/${id}`)
  },
  add(shoppingList) {
    return $axios.$post(`${resource}/shoppinglists/`, shoppingList)
  },
  destroy(id) {
    return $axios.$delete(`${resource}/shoppinglists/${id}`)
  },
  items(id) {
    return $axios.$get(`${resource}/shoppinglists/${id}/shoppingitems/`)
  },
  itemsAdd(id, item) {
    return $axios.$post(`${resource}/shoppinglists/${id}/shoppingitems/`, item)
  },
  itemsEdit(id, item) {
    return $axios.$put(`${resource}/shoppinglists/${id}/shoppingitems/${item.id}/`, item)
  },
  itemsDestroy(id, item) {
    return $axios.$delete(`${resource}/shoppinglists/${id}/shoppingitems/${item.id}/`)
  }

});
