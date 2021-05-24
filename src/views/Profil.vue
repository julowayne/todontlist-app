<template>
    <div>
    <h1>Me</h1>

    <div v-if="user">
    <pre><code>{{ user }}</code></pre>
    </div>
    <div v-else>Not logged.</div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
      computed: {
          ...mapGetters({'user': 'auth/user'})
      }
    }
</script>

<style scoped>

</style>