<template>
  <BaseSection
    id="products"
    :title="productsTitle"
    :subtitle="$t('products.subtitle')"
    background="white"
    padding="xl"
    header-spacing="xl"
  >
    <!-- Product Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Kain Tenun -->
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ $t('products.categories.fabric.title') }}</h3>
          <ul class="space-y-2 mb-6">
            <li 
              v-for="(item, index) in fabricItems" 
              :key="`fabric-${index}`" 
              class="flex items-center text-gray-600"
            >
              <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              {{ item }}
            </li>
          </ul>
          <div class="text-sm text-gray-500">
            {{ $t('products.categories.fabric.description') }}
          </div>
        </div>

        <!-- Fashion Items -->
        <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ $t('products.categories.fashion.title') }}</h3>
          <ul class="space-y-2 mb-6">
            <li 
              v-for="(item, index) in fashionItems" 
              :key="`fashion-${index}`" 
              class="flex items-center text-gray-600"
            >
              <span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              {{ item }}
            </li>
          </ul>
          <div class="text-sm text-gray-500">
            {{ $t('products.categories.fashion.description') }}
          </div>
        </div>

        <!-- Home Decor -->
        <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 4h6"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ $t('products.categories.home.title') }}</h3>
          <ul class="space-y-2 mb-6">
            <li 
              v-for="(item, index) in homeItems" 
              :key="`home-${index}`" 
              class="flex items-center text-gray-600"
            >
              <span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              {{ item }}
            </li>
          </ul>
          <div class="text-sm text-gray-500">
            {{ $t('products.categories.home.description') }}
          </div>
        </div>
      </div>

      <!-- Partnership Products -->
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">{{ $t('products.partnership.title') }}</h3>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            {{ $t('products.partnership.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Partnership Items -->
          <div 
            v-for="(item, index) in partnershipItems" 
            :key="`partnership-${index}`" 
            class="text-center"
          >
            <div class="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4" :class="getPartnershipIconClass(index)">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 003 15.546V12a9 9 0 018.59-8.987A9 9 0 0021 12v3.546z"></path>
                <path v-else-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-2">{{ item.name }}</h4>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ $t('products.cta.title') }}</h3>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {{ $t('products.cta.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" class="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            {{ $t('products.cta.contact') }}
          </a>
          <a href="#gallery" class="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            {{ $t('products.cta.gallery') }}
          </a>
        </div>
      </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseSection from '@/components/ui/BaseSection.vue'

const { t, tm } = useI18n()

const productsTitle = computed(() => {
  return t('products.title', { 
    highlight: `<span class="text-amber-600">${t('products.titleHighlight')}</span>` 
  })
})

const fabricItems = computed(() => {
  return tm('products.categories.fabric.items') as string[]
})

const fashionItems = computed(() => {
  return tm('products.categories.fashion.items') as string[]
})

const homeItems = computed(() => {
  return tm('products.categories.home.items') as string[]
})

const partnershipItems = computed(() => {
  return tm('products.partnership.items') as Array<{ name: string; description: string }>
})

const getPartnershipIconClass = (index: number) => {
  const classes = [
    'bg-gradient-to-br from-blue-500 to-purple-600',
    'bg-gradient-to-br from-green-500 to-teal-600',
    'bg-gradient-to-br from-yellow-500 to-orange-600'
  ]
  return classes[index] || classes[0]
}
</script>
