<template>
  <TemplateListDetail :id="id"/>
</template>

<script>
  import TemplateListDetail from "../../components/Templates/TemplateListDetail";

  export default {
    name: 'template_id',
    components: {TemplateListDetail},
    data() {
      return {
        id: this.$route.params.id,
      }
    }
  }
</script>

<style scoped>

</style>
