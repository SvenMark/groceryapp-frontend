<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="info" dark v-on="on">List</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create List</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="name" label="List name" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="save" :disabled="preventSave">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: "TemplateConvertToListDialog",
    props: {
      id: {
        required: true,
      }
    },
    data() {
      return {
        dialog: false,
        name: '',
      }
    },
    computed: {
      preventSave() {
        return !this.name.length > 0
      }
    },
    methods: {
      async save() {
        this.dialog = false;

        const shoppingList = await this.$repos.templates.fromTemplate(this.id, {"name": this.name});
        this.$router.push(`/shoppinglists/${shoppingList.id}/`)
      }
    }
  }
</script>

<style scoped>

</style>
