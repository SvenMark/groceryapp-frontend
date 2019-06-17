<template>
    <v-card>
      <v-card-title>{{ shoppingList.name }}</v-card-title>
      <v-card-text>hi this is a shopping list</v-card-text>
      <v-card-actions>
        <v-btn @click="goToList">Go to list</v-btn>
        <v-btn @click="destroy" color="warning">Delete List</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ShoppingListCard",
        props: {
          shoppingList: {
            required: true,
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
