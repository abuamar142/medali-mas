<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <div id="app" class="min-h-screen bg-white font-sans antialiased">
    <Header />
    <main>
      <HomeView />
    </main>
    <Footer />
  </div>
</template>
