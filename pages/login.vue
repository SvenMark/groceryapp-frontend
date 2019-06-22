<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="email" name="login" label="Login" type="text" v-model="email" @keydown.enter="login"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Password" id="password"
                            type="password" v-model="password" @keydown.enter="login"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/register/">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="login" :disabled="email.length === 0 || password.length === 0" :loading="processingLogin">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "login",
    layout: 'nogui',
    data() {
      return {
        email: '',
        password: '',
        processingLogin: false,
      }
    },
    methods: {
      async login() {
        const self = this;

        if (!self.email || !self.password) return;

        self.processingLogin = true;
        const body = {
          'email': self.email,
          'password': self.password
        };
        try {
          const response = await self.$repos.authentication.login(body);
          const token = response.token;
          await self.$auth.signInWithCustomToken(token);
          self.processingLogin = false;
          self.$router.push('/')
        }
        catch (e) {
          console.log(e);
          self.processingLogin = false;
        }
      }
    }
  }
</script>

<style scoped>

</style>
