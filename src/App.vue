<template>
  <div class="container">
      <ListEmployees />
  </div>
</template>

<script>

import ListEmployees from './components/employee/ListEmployees.vue'
export default {
  name: 'App',
  components: {
    ListEmployees,
  }
}
</script>

<style>
</style>
