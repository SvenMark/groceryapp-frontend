<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-bottom="20"
    transition="slide-y-transition"
    offset-y>
    <v-btn
      slot="activator"
      icon>
      <v-avatar
        size="32px">
        <img
          :src="activeUser.avatar_image_url"
        >
      </v-avatar>
    </v-btn>
    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img
              :src="activeUser.avatar_image_url"
              :alt="activeUser.first_name">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ activeUser.first_name}} {{ activeUser.last_name}}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <TheLogoutButton/>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card></v-menu>
</template>

<script>
  import TheLogoutButton from '../components/TheLogoutButton'
  export default {
    components: {
      TheLogoutButton
    },
    data() {
      return {
      }
    },
    computed: {
      activeUser() {
        return this.$store.getters['user/user']
      },
    }
  }
</script>

<style>
</style>
