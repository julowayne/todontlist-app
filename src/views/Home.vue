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
            <tr>
                <td>id</td>
                <td>content</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Home',
  methods: {
    getTasks(){
        axios("http://127.0.0.1:8000/api/tasks")
        .then((response)=> {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
      });
    }
  },
  mounted(){
    this.getTasks();
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
