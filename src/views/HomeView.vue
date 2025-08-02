<script setup lang="ts">
import { onMounted } from 'vue'
import { useSEO } from '@/composables/useSEO'
import HeroSection from '../components/home/HeroSection.vue';
import AboutSection from '../components/home/AboutSection.vue';
import ProductsSection from '../components/home/ProductsSection.vue';
import GallerySection from '../components/home/GallerySection.vue';
import AchievementsSection from '../components/home/AchievementsSection.vue';
import ContactSection from '../components/home/ContactSection.vue';

const { setHomeSEO } = useSEO()

onMounted(() => {
  setHomeSEO()
})
</script>

<template>
  <main class="pt-16">
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <GallerySection />
    <AchievementsSection />
    <ContactSection />
  </main>
</template>