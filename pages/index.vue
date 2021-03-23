<template>
  <div class="container">
    <UserCard v-for="guest in $store.state.guests" :guest="guest" :key="guest._id" />
  </div>
</template>

<script>

export default {

};
</script>
