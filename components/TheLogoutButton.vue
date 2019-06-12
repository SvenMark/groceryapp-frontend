<template>
  <v-btn
    icon
    @click="logout"><v-icon>logout</v-icon></v-btn>
</template>

<script>
  export default {
    name: 'TheLogoutButton',
    methods: {
      async logout() {

        await this.$auth.signOut()
      }
    }
  }
</script>

<style>
</style>
