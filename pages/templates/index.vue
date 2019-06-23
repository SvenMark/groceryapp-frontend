<template>
  <v-layout
  >
    <v-flex
      xs12
    >
      <TemplateList/>
    </v-flex>
  </v-layout>
</template>

<script>
  import TemplateList from "../../components/Templates/TemplateList";

  export default {
    name: "index",
    components: {TemplateList}
  }
</script>

<style scoped>

</style>
