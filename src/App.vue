<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link v-if="Object.keys(data).length != 0" to="/profil">Profil</router-link>
    <router-link v-if="Object.keys(data).length == 0" to="/register">Register</router-link>
    <router-link v-if="Object.keys(data).length == 0" to="/login">Login</router-link>

    <a href="#" v-if="Object.keys(data).length != 0" @click.prevent="logout">Logout</a>
  </div>
  <router-view/>
</template>
<script>
import axios from 'axios'
import { mapActions, mapGetters } from "vuex"
  export default {
    methods: {
      ...mapActions({'logout': 'auth/logout'}),
    //   logout(){
    //     axios("http://127.0.0.1:8000/api/auth/logout", {
    //       method: 'POST',
    //       headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     }
    //   })
    //   .then((response)=> {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    // });
    // }
    },
    computed: {
      ...mapGetters({'data': 'auth/data'})
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e9ecef;
  min-height: 100vh;
}
body {
  margin: 0;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 15px;
  text-decoration: none;
}


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
