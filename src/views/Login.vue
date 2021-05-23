<template>
  <div>
    <form method="post" @submit.prevent="login(form)">

      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="form.email">

      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="form.password">


      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        form: {}
      }
    },
    methods: {
      ...mapActions({'login': 'auth/login'})
    }
  }
</script>

<style lang="scss" scoped>

</style>