<template>
  <article class="container">
    <div class="block">
      <img class="image" :src="guest.image" />
      <h1 class="title">{{ guest.name }}</h1>
      <em class="subtitle">{{ guest.country }}</em>
      <p>{{ guest.description }}</p>
    </div>
  </article>
</template>

<script>
  export default {
    computed: {
      guest() {
        const { id } = this.$route.params
        return this.$store.getters.getCurrentGuest(id)
      }
    }
  }
</script>

<style scoped>
  .block {
    width: 60%;
    min-height: 650px;
    padding: 15px 30px;
    background: white;
    border-radius: 4px;
    text-align: left;
  }
  .image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    display: block;
    margin-bottom: 15px;
  }
</style>