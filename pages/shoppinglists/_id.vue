<template>
   <ShoppingListDetail :id="id"/>
</template>

<script>
    import ShoppingListDetail from "../../components/ShoppingList/ShoppingListDetail";
    export default {
        name: "index",
      components: {ShoppingListDetail},
      data() {
          return {
            id: this.$route.params.id,
          }
      }
    }
</script>

<style scoped>

</style>
