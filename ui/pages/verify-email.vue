<template>
  <div>
    <p v-if="loading"> Verifying email... </p>
    <p v-else-if="success"> Email verification successfull! </p>
    <p v-else> Email verification failed. </p>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        loading: true, 
        success: false,
      }
    },

    async mounted() {
      const token = this.$route.query.token;
      const email = this.$route.query.email;
      console.log("email: ", email);
      console.log("token: ", token);
      const response = await axios.post('http://localhost:3001/verify-email', {
        token,
        email
      })
      console.log(response);
      this.loading = false;
      this.success = response.data.success;
    }

  }
</script>

<style lang="scss" scoped>

</style>