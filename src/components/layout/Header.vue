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
            {{ $t(`nav.${item.id}`) }}
          </a>
          <LanguageSwitcher />
          <BaseButton
            variant="primary"
            size="sm"
            rounded
            tag="a"
            href="#contact"
            class="shadow-md hover:shadow-lg"
          >
            <Mail class="w-4 h-4 mr-2" />
            {{ $t('nav.contact') }}
          </BaseButton>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <BaseButton
            variant="ghost"
            size="sm"
            class="p-2"
            @click="toggleMobileMenu"
          >
            <Transition name="fade" mode="out-in">
              <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
              <X v-else class="w-6 h-6" />
            </Transition>
          </BaseButton>
        </div>
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
                <Home v-if="item.id === 'home'" class="w-5 h-5" />
                <User v-else-if="item.id === 'about'" class="w-5 h-5" />
                <Package v-else-if="item.id === 'products'" class="w-5 h-5" />
                <Image v-else-if="item.id === 'gallery'" class="w-5 h-5" />
                <Award v-else class="w-5 h-5" />
                <span>{{ $t(`nav.${item.id}`) }}</span>
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
                <Mail class="w-4 h-4 mr-2" />
                {{ $t('nav.contact') }}
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
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'
import { Menu, X, Mail, Home, User, Package, Image, Award } from '@/components/icons'

const isMobileMenuOpen = ref(false)

const navigationItems = [
  { id: 'home', href: '#hero' },
  { id: 'about', href: '#about' },
  { id: 'products', href: '#products' },
  { id: 'gallery', href: '#gallery' },
  { id: 'achievements', href: '#achievements' }
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