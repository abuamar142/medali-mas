<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <div
    id="app"
    class="min-h-screen bg-white font-sans antialiased"
  >
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>
