<template>
  <v-container>
    <v-text-field
      v-model="shoppingItem"
      label="What do you want to add to your list?"
      solo
      @keydown.enter="create"
    >
      <v-fade-transition slot="append">
        <v-icon
          v-if="shoppingItem"
          @click="create"
        >
          add_circle
        </v-icon>
      </v-fade-transition>
    </v-text-field>

    <v-divider class="mt-3"></v-divider>

    <v-layout
      my-1
      align-center
    >
      <strong class="mx-3 info--text text--darken-3">
        Remaining: {{ remainingShoppingItems }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-3 black--text">
        Completed: {{ completedShoppingItems }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        :value="progress"
        class="mr-2"
      ></v-progress-circular>
    </v-layout>

    <v-divider class="mb-3"></v-divider>

    <v-card v-if="shoppingItems.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
      >
        <template v-for="(shoppingItem, i) in limitShoppingItems">
          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          ></v-divider>

          <ShoppingListDetailItem :id="id" :shoppingItem="shoppingItem" :key="shoppingItem.id" @done="done($event)" @destroy="destroy($event)"/>
        </template>
      </v-slide-y-transition>
      <v-list-tile :key="id" v-if="shoppingItems.length > 5 && limit !== 0"><v-spacer/> And {{shoppingItems.length - limit}} more!</v-list-tile>

    </v-card>
  </v-container>
</template>

<script>
  import ShoppingListDetailItem from "./ShoppingListDetailItem";
  export default {
    name: 'ShoppingListDetail',
    components: {ShoppingListDetailItem},
    props: {
      id: {
        required: true,
      },
      limit: {
        required: false,
        type: Number,
        default: 0,
      }
    },
    data: () => ({
      shoppingItems: [],
      shoppingItem: null
    }),
    async mounted() {
      const self = this;
      await self.fetchListItems();
    },

    computed: {
      completedShoppingItems() {
        return this.shoppingItems.filter(shoppingItem => shoppingItem.done).length
      },
      progress() {
        return this.completedShoppingItems / this.shoppingItems.length * 100
      },
      remainingShoppingItems() {
        return this.shoppingItems.length - this.completedShoppingItems
      },
      limitShoppingItems() {
        if (this.limit === 0) return this.shoppingItems;
        return this.shoppingItems.slice(0, this.limit);
      }
    },

    methods: {
      async fetchListItems() {
        const self = this;
        self.shoppingItems = await self.$repos.shoppingLists.items(self.id)
      },
      async create() {
        if (this.shoppingItem === null) return;
        const item = await this.$repos.shoppingLists.itemsAdd(this.id, {description: this.shoppingItem});
        console.log(item);
        this.shoppingItems.unshift(item);

        this.shoppingItem = null
      },
      async done(item) {
        console.log('done');
        const self = this;
        await self.$repos.shoppingLists.itemsEdit(self.id, item);
      },
      async destroy(item) {
        console.log('destroy');
        const self = this;
        await self.$repos.shoppingLists.itemsDestroy(self.id, item);
        const index = self.shoppingItems.findIndex(c => c.id === item.id);
        self.shoppingItems.splice(index, 1);
      }
    }
  }
</script>
