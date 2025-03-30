<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
}
</style>
