<template>
  <header class="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3 lg:py-4">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg flex items-center justify-center shadow-md">
            <span class="text-white font-bold text-lg sm:text-xl">M</span>
          </div>
          <div>
            <h1 class="text-lg sm:text-2xl font-bold text-gray-800">Medali Mas</h1>
            <p class="text-xs text-gray-500 hidden sm:block">Tenun Ikat Kediri</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a 
            v-for="item in navigationItems" 
            :key="item.id"
            :href="item.href" 
            :class="[
              'text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 relative group',
              'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5',
              'after:bg-gradient-to-r after:from-amber-500 after:to-orange-600',
              'after:transition-all after:duration-300 hover:after:w-full'
            ]"
          >
            {{ item.name }}
          </a>
          <BaseButton
            variant="primary"
            size="sm"
            rounded
            tag="a"
            href="#contact"
            class="shadow-md hover:shadow-lg"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Kontak
          </BaseButton>
        </nav>

        <!-- Mobile Menu Button -->
        <BaseButton
          variant="ghost"
          size="sm"
          class="lg:hidden p-2"
          @click="toggleMobileMenu"
        >
          <Transition name="fade" mode="out-in">
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </Transition>
        </BaseButton>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="lg:hidden py-4 border-t border-gray-200/50 bg-white/95 backdrop-blur-sm">
          <nav class="flex flex-col space-y-1">
            <a 
              v-for="item in navigationItems" 
              :key="item.id"
              :href="item.href" 
              class="text-gray-700 hover:text-amber-600 hover:bg-amber-50 font-medium py-3 px-4 rounded-lg transition-all duration-300"
              @click="closeMobileMenu"
            >
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path v-if="item.id === 'hero'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  <path v-else-if="item.id === 'about'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  <path v-else-if="item.id === 'products'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  <path v-else-if="item.id === 'gallery'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                <span>{{ item.name }}</span>
              </div>
            </a>
            <div class="pt-4 border-t border-gray-200/50 mt-4">
              <BaseButton
                variant="primary"
                fullWidth
                rounded
                tag="a"
                href="#contact"
                @click="closeMobileMenu"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Hubungi Kami
              </BaseButton>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '../ui/BaseButton.vue'

const isMobileMenuOpen = ref(false)

const navigationItems = [
  { id: 'hero', name: 'Beranda', href: '#hero' },
  { id: 'about', name: 'Tentang', href: '#about' },
  { id: 'products', name: 'Produk', href: '#products' },
  { id: 'gallery', name: 'Galeri', href: '#gallery' },
  { id: 'achievements', name: 'Prestasi', href: '#achievements' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>