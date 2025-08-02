<template>
  <div class="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
    <BaseButton
      v-for="category in categories"
      :key="category.id"
      :variant="activeCategory === category.id ? 'primary' : 'ghost'"
      size="sm"
      rounded
      :class="[
        'transition-all duration-300 text-sm sm:text-base',
        activeCategory === category.id
          ? 'shadow-lg scale-105'
          : 'hover:scale-105 border border-gray-200 hover:border-amber-300'
      ]"
      @click="$emit('update:activeCategory', category.id)"
    >
      <span class="flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="category.id === 'all'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          <path v-else-if="category.id === 'fabric'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
          <path v-else-if="category.id === 'fashion'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0V3a2 2 0 012-2h4a2 2 0 012 2v4zM8 7v8a2 2 0 002 2h4a2 2 0 002-2V7"></path>
          <path v-else-if="category.id === 'home'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
        </svg>
        {{ category.name }}
        <span 
          v-if="getItemCount(category.id) > 0"
          class="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs"
        >
          {{ getItemCount(category.id) }}
        </span>
      </span>
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue'

interface Category {
  id: string
  name: string
}

interface GalleryItem {
  category: string
  [key: string]: any
}

interface Props {
  categories: Category[]
  activeCategory: string
  items: GalleryItem[]
}

const props = defineProps<Props>()

defineEmits<{
  'update:activeCategory': [value: string]
}>()

const getItemCount = (categoryId: string) => {
  if (categoryId === 'all') {
    return props.items.length
  }
  return props.items.filter(item => item.category === categoryId).length
}
</script>
