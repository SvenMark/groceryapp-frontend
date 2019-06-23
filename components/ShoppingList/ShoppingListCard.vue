<template>
  <v-card>
    <v-card-title class="display-1 success--text pl-3">{{ shoppingList.name }}</v-card-title>
    <v-card-text>
      <ShoppingListDetail :limit="itemsOnPreview" :id="shoppingList.id"/>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="goToList">Go to list</v-btn>
      <v-btn @click="makeTemplate" color="info">Template</v-btn>
      <v-btn @click="destroy" color="error">Delete List</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import ShoppingListDetail from "./ShoppingListDetail";

  export default {
    name: "ShoppingListCard",
    components: {ShoppingListDetail},
    props: {
      shoppingList: {
        required: true,
      }
    },
    data() {
      return {
        itemsOnPreview: 5,
      }
    },
    methods: {
      goToList() {
        const self = this;
        self.$router.push(`/shoppinglists/${self.shoppingList.id}`)
      },
      makeTemplate() {
        // @todo popup for the name of the template to make
        // self.$repos.shoppingLists.toTemplate(self.shoppingList.id);
        console.log('making template')
      },
      destroy() {
        const self = this;
        self.$repos.shoppingLists.destroy(self.shoppingList.id);
        self.$emit('destroy', self.shoppingList.id);
      }
    }
  }
</script>

<style scoped>

</style>
