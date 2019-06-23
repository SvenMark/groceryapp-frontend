<template>
  <v-layout row wrap
  >
    <v-flex
      xs12
    >
      <ShoppingList/>
    </v-flex>
    <v-flex xs12>
      <v-divider/>
      <TemplateList/>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import ShoppingList from "../components/ShoppingList/ShoppingList";
import TemplateList from "../components/Templates/TemplateList";

export default {
  components: {
    TemplateList,
    ShoppingList,
    Logo,
    VuetifyLogo
  }
}
</script>
