<template>
  <v-list-tile :key="templateItem.id">
    <v-list-tile-content v-text="templateItem.description"/>

    <v-spacer/>

    <v-scroll-x-transition>
      <v-icon
        color="error"
        @click="destroy"
      >
        remove
      </v-icon>
    </v-scroll-x-transition>
  </v-list-tile>
</template>

<script>
  export default {
    name: "TemplateListDetailItem",
    props: {
      id: {
        required: true,
      },
      templateItem: {
        required: true,
      }
    },
    methods: {
      async destroy() {
        this.$emit('destroy', this.templateItem);
      }
    }
  }
</script>

<style scoped>

</style>
