<template>
  <div class="home">
    <div>
      <table>
        <thead>
            <tr>
                <th colspan="2">All tasks</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="task in tasks" :key="task">
                <td>{{ task.id }}</td>
                <td>{{ task.body }}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex"

export default {
  name: 'Home',
  data() {
    return {};
  },
  computed: {
    ...mapActions({'tasks': 'auth/tasks'})
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
