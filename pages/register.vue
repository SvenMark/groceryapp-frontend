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
              <v-text-field prepend-icon="email" name="login" label="Login" type="text" v-model="email"
                            @keydown.enter="register"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Password" id="password"
                            type="password" v-model="password" @keydown.enter="register"></v-text-field>
              <v-text-field prepend-icon="lock" name="confirmation_password" label="Confirm Password"
                            id="confirmation_password"
                            type="password" v-model="passwordConfirm" @keydown.enter="register"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" to="/login/">Login</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="register" :disabled="disableRegisterButton" :loading="processingRegister">
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "register",
    layout: "nogui",
    data() {
      return {
        email: '',
        password: '',
        passwordConfirm: '',
        processingRegister: false,
      }
    },
    computed: {
      disableRegisterButton() {
        if (this.email.length === 0) return true;
        if (this.password.length === 0) return true;
        if (this.passwordConfirm.length === 0) return true;
        return this.password !== this.passwordConfirm;

      }
    },
    methods: {
      async register() {
        const self = this;

        if (self.disableRegisterButton) return;

        self.processingRegister = true;
        const body = {
          'email': self.email,
          'password': self.password,
          'password_confirm': self.passwordConfirm
        };
        try {
          const response = await self.$repos.authentication.register(body);
          const token = response.token;
          await self.$auth.signInWithCustomToken(token);
          self.processingRegister = false;
          self.$router.push('/')
        } catch (e) {
          console.log(e);
          self.processingRegister = false;
        }
      }
    }
  }
</script>

<style scoped>

</style>
