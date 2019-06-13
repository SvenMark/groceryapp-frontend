<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs4 v-for="shoppingList in shoppingLists" :key="shoppingList.id">
        <ShoppingListCard :shopping-list="shoppingList"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ShoppingListCard from "./ShoppingListCard";

  export default {
    name: "ShoppingList",
    components: {ShoppingListCard},
    data() {
      return {
        shoppingLists: [],
        loadingLists: false,
      }
    },
    mounted() {
      const self = this;
      self.loadingLists = true;
      self.shoppingLists = [
        {
          id: 8,
          name: "dfsdf"
        },
        {
          id: 9,
          name: "new list"
        },
        {
          id: 10,
          name: "second shopping list"
        },
        {
          id: 11,
          name: "third shopping list"
        }
      ];
      self.loadingLists = false;
    }
  }
</script>

<style scoped>

</style>
