<template>
  <div>
    <form method="post" @submit.prevent="register(form)">

        <!-- <div v-if="error">
            {{error.message}}
        </div> -->
        <h3>Bienvenue</h3>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" v-model="form.name">
          <div v-if="errors.name.length > 0">
            <div v-for="error in errors.name" :key="error">
              {{ error }}
            </div>
          </div>

          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="form.email">
          <div v-if="errors.email.length > 0">
            <div v-for="error in errors.email" :key="error">
              {{ error }}
            </div>
          </div>
          <label for="password">Password</label>
          <input type="password" name="password" id="password" v-model="form.password">
          <div v-if="errors.password.length > 0">
            <div v-for="error in errors.password" :key="error">
              {{ error }}
            </div>
          </div>
        <!-- <div >
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
        </div> -->
        <div>
          <button type="submit" @click="formValidation">
            créer mon compte
          </button>
        </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      token: "",
      errors: {
            name: [],
            email: [],
            password: []
        }
    }
  },
  // setup () {
  //   return { v$: useVuelidate() }
  // },
  // validations () {
  //   return {
  //     form: {
  //       name: {required, minLength: minLength(3)},
  //       email: { required, email },
  //       password: { required, minLength: minLength(8) }
  //     }
  //   }
  // },
  methods: {
    ...mapActions({'register': 'auth/register'}),
    formValidation(){
        this.errors.name = []
        this.errors.email = []
        this.errors.password = []
        if(this.form.name.trim().length == 0){
            this.errors.name.push('Le champ est obligatoire');
        }
        if(this.form.email.trim().length == 0){
            this.errors.email.push('Le champ est obligatoire');
        }
        if(!this.validateEmail(this.form.email)){
            this.errors.email.push("L'email n'est pas valide");
        }
        if(this.form.password.trim().length == 0){
            this.errors.password.push('Le champ est obligatoire');
        }
        if(this.errors.password.length > 0 || this.errors.email.length > 0 || this.errors.name.length > 0)
            return;
        this.register(this.form)
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    // async register(){
    //     this.v$.$touch()
    //     if (this.v$.$error) {
    //       console.log(this.v$)
    //       return
    //     }
    // }
  }
}
</script>

<style>
    body {
        background-color: #e9ecef;
    }

</style>