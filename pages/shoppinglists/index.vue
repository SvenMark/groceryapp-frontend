<template>
  <v-layout
  >
    <v-flex
      xs12
    >
      <ShoppingList/>
    </v-flex>
  </v-layout>
</template>

<script>
  import ShoppingList from "../../components/ShoppingList/ShoppingList";

  export default {
    components: {ShoppingList}
  }
</script>
