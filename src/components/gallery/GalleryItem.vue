<template>
  <div 
    :class="cardClasses"
    @click="handleClick"
  >
    <div class="relative w-full h-full overflow-hidden rounded-xl">
      <!-- Image -->
      <img 
        v-if="item.image && !imageError" 
        :src="item.image" 
        :alt="item.title"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
        @error="handleImageError"
        @load="handleImageLoad"
      >
      
      <!-- Fallback for items without image or error -->
      <div 
        v-if="!item.image || imageError"
        class="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-200 via-orange-300 to-red-400 flex items-center justify-center"
      >
        <div class="text-center text-white">
          <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Image class="w-6 h-6" />
          </div>
          <p class="font-medium text-sm">
            {{ item.title }}
          </p>
        </div>
      </div>

      <!-- Base gradient overlay for text readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <!-- Enhanced hover overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <!-- Category Badge -->
      <div class="absolute top-4 left-4 z-20">
        <span class="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full shadow-md">
          {{ categoryName }}
        </span>
      </div>

      <!-- Content overlay - always at bottom -->
      <div class="absolute bottom-0 left-0 right-0 p-4 z-30">
        <!-- Mobile: Simple title always visible -->
        <div class="block md:hidden">
          <h3 class="text-white text-base font-bold line-clamp-2 drop-shadow-lg">
            {{ item.title }}
          </h3>
        </div>

        <!-- Desktop: Hover content layout -->
        <div class="hidden md:block">
          <!-- Description - appears above title on hover -->
          <div class="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out mb-3">
            <p class="text-gray-200 text-sm line-clamp-2 drop-shadow-md relative z-40">
              {{ item.description }}
            </p>
          </div>
          
          <!-- Title always visible at bottom -->
          <h3 class="text-white text-lg font-bold line-clamp-2 drop-shadow-lg transition-all duration-500 relative z-40">
            {{ item.title }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { GalleryItem, Category } from '@/types'
import { Image } from '@/components/icons'

interface Props {
  item: GalleryItem
  index: number
  categories: Category[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  preview: [item: GalleryItem]
}>()

const imageError = ref(false)
const imageLoaded = ref(false)

const categoryName = computed(() => {
  const category = props.categories.find(cat => cat.id === props.item.category)
  return category?.name || props.item.category
})

const cardClasses = computed(() => {
  // Dynamic height variations for masonry grid with consistent aspect ratios
  const heights = ['aspect-[4/5]', 'aspect-[3/4]', 'aspect-[5/6]', 'aspect-[4/5]', 'aspect-[3/4]']
  const aspectClass = heights[props.index % heights.length]
  
  return `${aspectClass} w-full group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl bg-white rounded-xl shadow-lg overflow-hidden`
})

const handleClick = () => {
  emit('preview', props.item)
}

const handleImageError = () => {
  console.warn('Image failed to load:', props.item.image)
  imageError.value = true
}

const handleImageLoad = () => {
  imageLoaded.value = true
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Ensure smooth transitions and proper stacking */
.group {
  isolation: isolate;
}

/* Prevent content jumping during animations */
.group img {
  transform-origin: center center;
}

/* Enhanced shadow on hover */
.group:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
