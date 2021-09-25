<template>
  <div class="container mt-2">
    
      <Navbar />

    <div class="row mt-3">
          <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>
<style>
</style>
