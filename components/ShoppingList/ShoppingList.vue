<template>
  <v-container grid-list-md>
    <v-text-field
      v-model="shoppingList"
      label="Give your new list a name"
      solo
      @keydown.enter="create"
      :disabled="remainingShoppingLists === 0"
    >
      <v-fade-transition slot="append">
        <v-icon
          v-if="shoppingList"
          @click="create"
        >
          add_circle
        </v-icon>
      </v-fade-transition>
    </v-text-field>

    <v-progress-linear indeterminate v-if="loadingLists"></v-progress-linear>

    <v-divider class="mt-3"></v-divider>

    <v-layout
      my-1
      align-center
    >
      <strong class="mx-3 info--text text--darken-3">
        Remaining: {{ remainingShoppingLists }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-3 black--text">
        Created: {{ shoppingLists.length }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-3 black--text">
        Max: {{ maxLists }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        :value="progress"
        class="mr-2"
      ></v-progress-circular>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 md6 lg4 v-for="shoppingList in shoppingLists" :key="shoppingList.id">
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
        shoppingList: null,
        maxLists: 12,
        shoppingLists: [],
        loadingLists: false,
      }
    },
    async mounted() {
      const self = this;
      await self.fetchShoppingLists();
    },
    computed: {
      progress() {
        return this.shoppingLists.length / this.maxLists * 100
      },
      remainingShoppingLists() {
        return this.maxLists - this.shoppingLists.length
      }
    },
    methods: {
      async create() {
        if (this.shoppingList === null) return;

        const item = await this.$repos.shoppingLists.add({name: this.shoppingList});
        this.shoppingLists.unshift(item);

        this.shoppingList = null
      },
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
