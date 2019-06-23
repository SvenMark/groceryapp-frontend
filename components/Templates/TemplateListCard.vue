<template>
  <v-card>
    <v-card-title class="display-1 success--text pl-3">{{ template.name }}</v-card-title>
    <v-card-text>
      <TemplateListDetail :limit="templatesOnPreview" :id="template.id"/>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="gotToTemplate">Go to template</v-btn>
      <v-btn @click="makeList" color="info">To list</v-btn>
      <v-btn @click="destroy" color="error">Delete template</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import TemplateListDetail from "./TemplateListDetail";
  export default {
    name: "TemplateListCard",
    components: {TemplateListDetail},
    props: {
      template: {
        required: true,
      }
    },
    data() {
      return {
        templatesOnPreview: 5,
      }
    },
    methods: {
      gotToTemplate() {
        const self = this;
        self.$router.push(`/templates/${self.template.id}`)
      },
      makeList() {
        // @todo popup for the name of the list to make
        console.log('making list')
      },
      destroy() {
        const self = this;
        self.$repos.templates.destroy(self.template.id);
        self.$emit('destroy', self.template.id);
      }
    }
  }
</script>

<style scoped>

</style>
