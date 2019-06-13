<template>
  <v-container>
    <v-text-field
      v-model="task"
      label="What are you working on?"
      solo
      @keydown.enter="create"
    >
      <v-fade-transition slot="append">
        <v-icon
          v-if="task"
          @click="create"
        >
          add_circle
        </v-icon>
      </v-fade-transition>
    </v-text-field>

    <h2 class="display-1 success--text pl-3">
      shoppingItems :&nbsp;
      <v-fade-transition leave-absolute>
          <span :key="`shoppingItems-${shoppingItems.length}`">
            {{ shoppingItems.length }}
          </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-3"></v-divider>

    <v-layout
      my-1
      align-center
    >
      <strong class="mx-3 info--text text--darken-3">
        Remaining: {{ remainingShoppingItems }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-3 black--text">
        Completed: {{ completedShoppingItems }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        :value="progress"
        class="mr-2"
      ></v-progress-circular>
    </v-layout>

    <v-divider class="mb-3"></v-divider>

    <v-card v-if="shoppingItems.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
      >
        <template v-for="(shoppingItem, i) in shoppingItems">
          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          ></v-divider>

          <v-list-tile :key="`${i}-${shoppingItem.description}`">
            <v-list-tile-action>
              <v-checkbox
                v-model="shoppingItem.done"
                color="info darken-3"
              >
                <template slot="label">
                  <div
                    :class="shoppingItem.done && 'grey--text' || 'text--primary'"
                    class="ml-3"
                    v-text="shoppingItem.description"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-tile-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon
                v-if="shoppingItem.done"
                color="success"
              >
                check
              </v-icon>
            </v-scroll-x-transition>
          </v-list-tile>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'ShoppingList',
    props: {
      id: {
        required: true,
      }
    },
    data: () => ({
      shoppingItems: [],
      shoppingItem: null
    }),
    mounted() {
      const self = this;
      self.shoppingItems = [
        {
          id: 26,
          description: "first item",
          done: false
        },
        {
          id: 27,
          description: "second item",
          done: false
        },
        {
          id: 28,
          description: "third item",
          done: false
        }
      ]
    },

    computed: {
      completedShoppingItems() {
        return this.shoppingItems.filter(shoppingItem => shoppingItem.done).length
      },
      progress() {
        return this.completedShoppingItems / this.shoppingItems.length * 100
      },
      remainingShoppingItems() {
        return this.shoppingItems.length - this.completedShoppingItems
      }
    },

    methods: {
      create() {
        this.shoppingItems.push({
          done: false,
          description: this.shoppingItem
        });

        this.shoppingItem = null
      }
    }
  }
</script>
