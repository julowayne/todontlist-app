<template>
  <div>
    <form method="post" @submit.prevent="login(form)">

      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="form.email">

      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="form.password">
      <!-- <div>
        <label for="email">Email</label>
        <input type="email"  :class="{'is-invalid': v$.form.email.$error}" id="email" v-model="form.email" />
        <div v-if="v$.form.email.$error">
          <span v-for="error in v$.form.email.$errors" :key="error"> {{ error.$message }}</span>
        </div>
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input type="password" :class="{'is-invalid': v$.form.password.$error}" id="password" v-model="form.password" />
        <div v-if="v$.form.password.$error">
          <span v-for="error in v$.form.password.$errors" :key="error"> {{ error.$message }}</span>
        </div>
      </div> -->

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    }
  },
  // setup () {
  //   return { v$: useVuelidate() }
  // },
  // validations () {
  //   return {
  //     form: {
  //       email: { required, email },
  //       password: { required, minLength: minLength(4) }
  //     }
  //   }
  // },
    methods: {
      ...mapActions({'login': 'auth/login'}),
      // async login(){
      //   this.v$.$touch()
      //   if (this.v$.$error) {
      //     console.log(this.v$)
      //     return
      //   }
      // }
    }
  }
</script>

<style scoped>

</style>