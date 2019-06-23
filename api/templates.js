export default $axios => resource => ({
  all() {
    return $axios.$get(`${resource}/templates/`)
  },
  show(id) {
    return $axios.$get(`${resource}/templates/${id}`)
  },
  add(shoppingList) {
    return $axios.$post(`${resource}/templates/`, shoppingList)
  },
  destroy(id) {
    return $axios.$delete(`${resource}/templates/${id}`)
  },
  items(id) {
    return $axios.$get(`${resource}/templates/${id}/templateitems/`)
  },
  itemsAdd(id, item) {
    return $axios.$post(`${resource}/templates/${id}/templateitems/`, item)
  },
  itemsEdit(id, item) {
    return $axios.$put(`${resource}/templates/${id}/templateitems/${item.id}/`, item)
  },
  itemsDestroy(id, item) {
    return $axios.$delete(`${resource}/templates/${id}/templateitems/${item.id}/`)
  }

});
