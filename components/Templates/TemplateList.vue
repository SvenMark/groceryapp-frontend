<template>
  <v-container grid-list-md>
    <h1 class="ma-2">Templates</h1>
    <v-text-field
      v-model="template"
      label="Give your new template a name"
      solo
      @keydown.enter="create"
      :disabled="remainingTemplates === 0"
    >
      <v-fade-transition slot="append">
        <v-icon
          v-if="template"
          @click="create"
        >
          add_circle
        </v-icon>
      </v-fade-transition>
    </v-text-field>

    <v-progress-linear indeterminate v-if="loadingTemplates"></v-progress-linear>

    <v-divider class="mt-3"></v-divider>

    <v-layout
      my-1
      align-center
    >
      <strong class="mx-3 info--text text--darken-3">
        Remaining: {{ remainingTemplates }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-3 black--text">
        Created: {{ templates.length }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-3 black--text">
        Max: {{ maxTemplates }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        :value="progress"
        class="mr-2"
      ></v-progress-circular>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 md6 lg4 v-for="template in templates" :key="template.id">
        <TemplateListCard :template="template" @destroy="destroyTemplate($event)"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import TemplateListCard from "./TemplateListCard";
  export default {
    name: "TemplateList",
    components: {TemplateListCard},
    data() {
      return {
        template: null,
        maxTemplates: 12,
        templates: [],
        loadingTemplates: false,
      }
    },
    async mounted() {
      const self = this;
      await self.fetchTemplates();
    },
    computed: {
      progress() {
        return this.templates.length / this.maxTemplates * 100
      },
      remainingTemplates() {
        return this.maxTemplates - this.templates.length
      }
    },
    methods: {
      async create() {
        if (this.templates === null) return;

        const item = await this.$repos.templates.add({name: this.template});
        this.templates.unshift(item);

        this.template = null
      },
      async fetchTemplates() {
        const self = this;
        self.loadingTemplates = true;
        self.templates = await self.$repos.templates.all();
        self.loadingTemplates = false;
      },
      destroyTemplate(id) {
        const index = this.templates.findIndex(c => c.id === id);
        this.templates.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

</style>
