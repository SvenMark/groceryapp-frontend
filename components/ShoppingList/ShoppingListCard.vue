<template>
  <v-card height="100%">
    <v-card-title primary-title class="display-1 pl-3">{{ shoppingList.name }}</v-card-title>
    <v-card-text>
      <ShoppingListDetail :limit="itemsOnPreview" :id="shoppingList.id"/>
    </v-card-text>
    <v-card-actions>
      <v-btn icon @click="goToList"><v-icon large>view_list</v-icon></v-btn>
      <ShoppingListConvertToTemplateDialog :id="shoppingList.id"/>
      <v-btn icon @click="destroy" color="error"><v-icon large>remove</v-icon></v-btn>
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
