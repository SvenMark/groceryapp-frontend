<template>
  <v-card>
    <v-card-title class="display-1 success--text pl-3">{{ shoppingList.name }}</v-card-title>
    <v-card-text>
      <ShoppingListDetail :limit="itemsOnPreview" :id="shoppingList.id"/>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="goToList">Go to list</v-btn>
      <ShoppingListConvertToTemplateDialog :id="shoppingList.id"/>
      <v-btn @click="destroy" color="error">Delete list</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import ShoppingListDetail from "./ShoppingListDetail";
  import ShoppingListConvertToTemplateDialog from "./ShoppingListConvertToTemplateDialog";

  export default {
    name: "ShoppingListCard",
    components: {ShoppingListConvertToTemplateDialog, ShoppingListDetail},
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
