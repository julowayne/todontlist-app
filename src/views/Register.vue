<template>
  <div>
    <form method="post" @submit.prevent="register(form)">

        <div v-if="error">
            {{error.message}}
        </div>
        <h3>Bienvenue</h3>
        <div >
          <label for="name">Nom</label>
          <input type="text" :class="{'is-invalid': v$.form.name.$error}" id="name" v-model="form.name" />
          <div v-if="v$.form.name.$error">
            <span v-for="error in v$.form.name.$errors" :key="error"> {{ error.$message }}</span>
          </div>
        </div>
        <div>
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
        </div>
        <div>
          <button type="submit">
            CREER MON COMPTE
          </button>
        </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      token: "",
      error: null
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations () {
    return {
      form: {
        name: {required, minLength: minLength(3)},
        email: { required, email },
        password: { required, minLength: minLength(8) }
      }
    }
  },
  methods: {
    ...mapActions({'register': 'auth/register'}),
    async register(){
        this.v$.$touch()
        if (this.v$.$error) {
          console.log(this.v$)
          return
        }
    }
  }
}
</script>

<style lang="scss">
    body {
        background-color: #e9ecef;
    }

</style>