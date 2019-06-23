<template>
  <v-container>
    <v-text-field
      v-model="templateItem"
      label="What do you want to add to your list?"
      solo
      @keydown.enter="create"
    >
      <v-fade-transition slot="append">
        <v-icon
          v-if="templateItem"
          @click="create"
        >
          add_circle
        </v-icon>
      </v-fade-transition>
    </v-text-field>

    <v-divider class="mb-3"></v-divider>

    <v-card v-if="templateItems.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
      >
        <template v-for="(templateItem, i) in limitTemplateItems">
          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          ></v-divider>

          <TemplateListDetailItem :id="id" :templateItem="templateItem" :key="templateItem.id" @done="done($event)"
                                  @destroy="destroy($event)"/>
        </template>
      </v-slide-y-transition>
      <v-list-tile :key="id" v-if="templateItems.length > 5 && limit !== 0">
        <v-spacer/>
        And {{templateItems.length - limit}} more!
      </v-list-tile>

    </v-card>
  </v-container>
</template>

<script>
  import TemplateListDetailItem from "./TemplateListDetailItem";
  export default {
    name: "TemplateListDetail",
    components: {TemplateListDetailItem},
    props: {
      id: {
        required: true
      },
      limit: {
        required: false,
        type: Number,
        default: 0,
      }
    },
    data() {
      return {
        templateItems: [],
        templateItem: null
      }
    },
    async mounted() {
      const self = this;
      await self.fetchTemplateItems();
    },
    computed: {
      limitTemplateItems() {
        if (this.limit === 0) return this.templateItems;
        return this.templateItems.slice(0, this.limit);
      }
    },
    methods: {
      async fetchTemplateItems() {
        const self = this;
        self.templateItems = await self.$repos.templates.items(self.id)
      },
      async create() {
        if (this.templateItem === null) return;
        const item = await this.$repos.templates.itemsAdd(this.id, {description: this.templateItem});
        this.templateItems.unshift(item);

        this.templateItem = null
      },
      async destroy(item) {
        const self = this;
        await self.$repos.templates.itemsDestroy(self.id, item);
        const index = self.templateItems.findIndex(c => c.id === item.id);
        self.templateItems.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

</style>
