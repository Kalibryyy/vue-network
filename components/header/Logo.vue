<template>
  <h1 class="logo">
    {{ title }}
  </h1>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style scoped>
.logo:hover {
  opacity: 0.6;
  transition: opacity 0.3s linear;
}
</style>