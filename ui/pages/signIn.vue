<template>
  <div class="">
    <h1>Sign In</h1>
    <form action="" method="get">
      <label for="email">Email: </label>
      <input type="text" id="email">
      <label for="password">Password: </label>
      <input type="password" id="password">
    </form>
    <p>{{ users }}</p>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchData()
  },
  methods: ({
    async fetchData() {
      await fetch('http://localhost:3001/users')
    .then(res=>res.json())
    .then(data => this.users = data)
  },
  })
}

</script>

<style>

</style>