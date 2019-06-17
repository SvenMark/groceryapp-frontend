<template>
  <v-app
    v-touch="{left: () => drawer = false,
              right: () => drawer = true}"
    v-if="isAuthenticated">
    <v-navigation-drawer
      :mini-variant="miniVariant"
      v-model="drawer"
      width="200"
      clipped
      fixed
      app
      touchless
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      clipped-left
      fixed
      app
      color="primary"
    >
      <v-toolbar-side-icon
        @click="drawer = !drawer"/>
      <v-btn
        v-if="!$vuetify.breakpoint.mdAndDown"
        icon
        @click="miniVariant = !miniVariant">
        <v-icon>compare_arrows</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <TheProfileMenu/>
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
  import TheProfileMenu from "../components/TheProfileMenu";
  export default {
    components: {TheProfileMenu},
    data() {
      return {
        drawer: null,
        items: [
          {icon: 'dashboard', title: 'Dashboard', to: '/'},
          {icon: 'list', title: 'Shopping Lists', to: '/shoppinglists/'}
        ],
        miniVariant: false,
        title: 'Groceryapp'
      }
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters['user/isAuthenticated'];
      }
    }
  }
</script>
