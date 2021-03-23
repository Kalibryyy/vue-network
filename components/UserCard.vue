<template>
  <nuxt-link :to="`/id/${guest._id}`" class="card">
    <img class="image" :src="guest.image">
    <div class="text">
      <h2>{{ guest.name }}</h2>
      <em class="email">{{ guest.email }}</em>
      <p>{{ guest.country }}</p>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      guest: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 200px;
    height: 350px;
    margin: 30px;
    background: white;
    border-radius: 10px;
  }
  .image {
    width: 100%;
    height: 190px;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
  }
  .text {
    height: 40%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
  }
  .email {
    margin: 10px 0;
  }
</style>