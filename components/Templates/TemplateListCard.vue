<template>
  <v-card height="100%">
      <v-card-title primary-title class="display-1 pl-3">{{ template.name }}</v-card-title>
      <v-card-text>
        <TemplateListDetail :limit="templatesOnPreview" :id="template.id"/>
      </v-card-text>
      <v-card-actions>
        <v-btn icon @click="gotToTemplate">
          <v-icon large>view_list</v-icon>
        </v-btn>
        <TemplateConvertToListDialog :id="template.id"/>
        <v-btn icon @click="destroy" color="error">
          <v-icon large>remove</v-icon>
        </v-btn>
      </v-card-actions>
  </v-card>

</template>

<script>
  import TemplateListDetail from "./TemplateListDetail";
  import TemplateConvertToListDialog from "./TemplateConvertToListDialog";

  export default {
    name: "TemplateListCard",
    components: {TemplateConvertToListDialog, TemplateListDetail},
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
