<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs4 v-for="shoppingList in shoppingLists" :key="shoppingList.id">
        <ShoppingListCard :shopping-list="shoppingList" @destroy="destroyList($event)"/>
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
    async mounted() {
      const self = this;
      await self.fetchShoppingLists();
    },
    methods: {
      async fetchShoppingLists() {
        const self = this;
        self.loadingLists = true;
        self.shoppingLists = await self.$repos.shoppingLists.all();
        self.loadingLists = false;
      },
      destroyList(id) {
        const index = this.shoppingLists.findIndex(c => c.id === id);
        this.shoppingLists.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

</style>
