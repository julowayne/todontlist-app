<template>
  <div class="home">
    <div v-if="Object.keys(data).length != 0">
      <table>
        <thead>
          <tr>
            <th colspan="3">All tasks</th>
          </tr>
        </thead>
        <tbody v-if="Object.keys(data).length != 0">
          <tr v-for="task in tasks" :key="task">
              <td>{{ task.id }}</td>
              <td>{{ task.body }}</td>
              <td><a href="">modifier</a> | <a href="">supprimer</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>Vous devez vous connecter/inscrire pour avoir accès aux tâches</div>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex"

export default {
  name: 'Home',
  methods: {
    // ...mapActions({'tasks': 'auth/tasks'})
  },
  computed: {
    ...mapGetters({'data': 'auth/data'}),
    tasks(){
      // this.$store.dispatch('auth/tasks')
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
