<template>
    <v-list-tile :key="shoppingItem.id">
      <v-list-tile-action>
        <v-checkbox
          v-model="shoppingItem.done"
          color="info darken-3"
        >
          <template slot="label">
            <div
              :class="shoppingItem.done && 'grey--text' || 'text--primary'"
              class="ml-3"
              v-text="shoppingItem.description"
            ></div>
          </template>
        </v-checkbox>
      </v-list-tile-action>

      <v-spacer></v-spacer>

      <v-scroll-x-transition>
        <v-icon
          v-if="shoppingItem.done"
          color="success"
        >
          check
        </v-icon>
      </v-scroll-x-transition>
    </v-list-tile>
</template>

<script>
  export default {
    name: "ShoppingListDetailItem",
    props: {
      shoppingItem: {
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>
