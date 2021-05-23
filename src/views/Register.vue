<template>
  <div>
    <form method="post" @submit.prevent="register(form)">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="form.name">

      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="form.email">

      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="form.password">

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        form: {},
        token: ""
      }
    },
    methods: {
      ...mapActions({'register': 'auth/register'})
    }
  }
</script>

<style lang="scss" scoped>

</style>