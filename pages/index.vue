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
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import ShoppingList from "../components/ShoppingList/ShoppingListDetail";

export default {
  components: {
    ShoppingList,
    Logo,
    VuetifyLogo
  }
}
</script>
