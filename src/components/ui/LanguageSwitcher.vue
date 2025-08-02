<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-colors duration-200 text-gray-800 min-w-[120px] justify-between"
      :class="{ 'bg-gray-200 shadow-inner': isOpen }"
    >
      <div class="flex items-center space-x-2">
        <span class="text-lg">{{ currentLocale.flag }}</span>
        <span class="font-medium text-sm">{{ currentLocale.code.toUpperCase() }}</span>
      </div>
      <ChevronDown class="w-4 h-4 transition-transform duration-200" :class="{ 'rotate-180': isOpen }" />
    </button>

    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 transform translate-y-1"
      enter-to-class="opacity-100 scale-100 transform translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 transform translate-y-0"
      leave-to-class="opacity-0 scale-95 transform translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50 min-w-[200px]"
      >
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="changeLocale(locale.code)"
          class="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-left"
          :class="{ 'bg-amber-50 text-amber-800': currentLocale.code === locale.code }"
        >
          <span class="text-lg">{{ locale.flag }}</span>
          <span class="font-medium text-gray-800">{{ locale.name }}</span>
          <CheckCircle 
            v-if="currentLocale.code === locale.code" 
            class="w-4 h-4 text-amber-600 ml-auto" 
          />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { availableLocales } from '@/locales'
import { ChevronDown, CheckCircle } from '@/components/icons'

const { locale } = useI18n()
const isOpen = ref(false)

const currentLocale = computed(() => {
  return availableLocales.find(l => l.code === locale.value) || availableLocales[0]
})

const changeLocale = (newLocale: string) => {
  locale.value = newLocale
  localStorage.setItem('preferred-locale', newLocale)
  isOpen.value = false
}

const closeDropdown = (event: MouseEvent) => {
  const target = event.target as Element
  if (!target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  // Load saved locale preference
  const savedLocale = localStorage.getItem('preferred-locale')
  if (savedLocale && availableLocales.some(l => l.code === savedLocale)) {
    locale.value = savedLocale
  }
  
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>
