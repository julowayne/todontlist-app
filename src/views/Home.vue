<template>
  <div class="home">
    <div v-if="Object.keys(data).length != 0" class="allInformations">
      <table>
        <tbody v-if="Object.keys(data).length != 0">
          <tr v-for="task in tasks" :key="task">
            <td>{{ task.id }}</td>
            <td>{{ task.created_at }}</td>
            <td>{{ task.body }}</td>
            <td><button class="actionButton">Modifier</button><button class="actionButton">Supprimer</button></td>
          </tr>
        </tbody>
      </table>
      <div>
        <button @click.prevent="getForm">Ajouter une nouvelle tache</button>
        <form action="post" @submit.prevent="addTask(task)">
          <div v-if="displayForm" class="new-task">
            <div v-if="error.status" id="error"> {{ error.msg }} </div>
            <label for="name">Contenu de la tâche: </label>
            <input v-model="task.content" type="text" name="content" id="content">
            <button type="submit" @click="taskValidation" id="create-new-task">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
    <div v-else id="notConnected">Vous devez vous  <a href="/login" class="connect">connecter</a> ou vous <a href="/register" class="connect">inscrire</a> pour avoir accès aux tâches</div>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex"

export default {
  name: 'Home',
    data(){
      return{
        displayForm: false,
        task: {
          content: "",
          done: false,
        },
        error : {
          status: false,
          msg: "La tâche doit être complète pour être ajoutée!"
        }
      }
    },
  methods: {
    getForm(){
      return this.displayForm = true
    },
    ...mapActions({'addTask': 'auth/addTask'}),
    taskValidation(){
      if(!this.task.content) return this.error.status = true
      this.error.status = false
    }
  },
  computed: {
    ...mapGetters({'data': 'auth/data'}),
    tasks(){
      return this.$store.getters['auth/tasks']
    },
  },
  created: function(){
    this.$store.dispatch('auth/tasks')
  }
}
</script>
<style>
  table{
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
    border-radius: 4px;
    border: none;
  }
  td {
    /* border-collapse: collapse; */
    padding: 1em;
    margin: 0 auto;
    background-color: #f8f9fa;
    border: none;
  }

  #error {
    font-size: 15px;
    color: red;
    padding: 0.5rem;
    border: 1px solid lightgray;
    border-radius: 6px;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
    margin-bottom: 15px;
  }
.allInformations {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;
}
.new-task {
  padding: 2rem;
  background-color: #f8f9fa;
  max-width: 30%;
  border-radius: 4px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  display: flex;
  margin: auto;
  flex-direction: column;
}
#create-new-task {
  width: 50%;
  margin: 10px 0;
  font-size: 15px;
}
.actionButton {
  width: 50%;
  font-size: small;
  text-align: center;
}
#notConnected {
  padding: 2rem;
  background-color: #f8f9fa;
  max-width: 50%;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  margin: 0 auto;
}
.connect {
  color: #20c997;
  text-decoration: none;
}
label {
  text-align: left;
  margin-bottom: 5px;
}
input {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}
select {
    border: 1px solid #ccc;
    border-radius: 4px;

}
label + input {
  margin-bottom: 10px;
}
button {
  font-size: 20px;
  transition-duration: 0.4s;
  padding: 0.5rem;
  margin: 10px auto;
  /* width: 20%; */
  border-radius: 4px;
  background-color: white;
  color: black;
  border: 1px solid lightgray;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  cursor: pointer;
}
button:hover {
  background-color: #20c997; /* Green */
  color: white;
}
button:focus {
  outline:0;
}
</style>
