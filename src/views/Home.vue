<template>
  <div class="home">
    <div v-if="Object.keys(data).length != 0">
      <table>
        <thead>
          <tr>
            <th colspan="4">All tasks</th>
          </tr>
        </thead>
        <tbody v-if="Object.keys(data).length != 0">
          <tr v-for="task in tasks" :key="task">
            <td>{{ task.id }}</td>
            <td>{{ task.created_at.toLocaleString('fr-FR', { timeZone: 'UTC' })}}</td>
            <td>{{ task.body }}</td>
            <td><a href="">modifier</a> | <a href="">supprimer</a></td>
          </tr>
        </tbody>
      </table>
      <div>
        <button @click.prevent="getForm">Ajouter une nouvelle tache</button>
        <form action="post" @submit.prevent="addTask(task)">
          <div v-if="displayForm">
            <div v-if="error.status" id="error"> {{ error.msg }} </div>
            <label for="name">Contenu de la tâche: </label>
            <input v-model="task.content" type="text" name="content" id="content">
            <button @click="taskValidation">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
    <div v-else>Vous devez vous connecter/inscrire pour avoir accès aux tâches</div>

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
      if(!this.content) return this.error.status = true
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
<style scoped>
  table,
  td {
    border: 1px solid #333;
    border-collapse: collapse;
    padding: 2em;
    margin: 0 auto;
  }

  thead,
  tfoot {
    background-color: #333;
    color: #fff;
  }
</style>
