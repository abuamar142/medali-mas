<template>
  <BaseCard
    :class="cardClasses"
    hover
    rounded="xl"
    shadow="lg"
    padding="none"
    clickable
    @click="handleClick"
  >
    <template #image>
      <div class="relative aspect-[4/5] overflow-hidden">
        <img 
          v-if="item.image" 
          :src="item.image" 
          :alt="item.title"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          loading="lazy"
          @error="handleImageError"
        >
        <!-- Fallback untuk item tanpa image -->
        <div 
          v-else
          class="w-full h-full bg-gradient-to-br from-amber-200 via-orange-300 to-red-400 flex items-center justify-center"
        >
          <div class="text-center text-white">
            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <p class="font-medium text-sm">{{ item.title }}</p>
          </div>
        </div>

        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

        <!-- Category Badge -->
        <div class="absolute top-3 left-3 z-10">
          <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
            {{ categoryName }}
          </span>
        </div>

        <!-- Overlay Content -->
        <div class="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <div class="text-white">
            <h3 class="text-lg font-bold mb-2 line-clamp-2">{{ item.title }}</h3>
            <p class="text-sm text-gray-200 mb-4 line-clamp-2">{{ item.description }}</p>
            <div class="flex gap-2">
              <BaseButton
                variant="outline"
                size="sm"
                rounded
                class="bg-white/10 border-white/30 text-white hover:bg-white/20"
                @click.stop="$emit('preview', item)"
              >
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                Preview
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from '../ui/BaseCard.vue'
import BaseButton from '../ui/BaseButton.vue'

interface GalleryItem {
  title: string
  description: string
  category: string
  image?: string
}

interface Props {
  item: GalleryItem
  index: number
  categories: Array<{ id: string; name: string }>
}

const props = defineProps<Props>()

const emit = defineEmits<{
  click: [item: GalleryItem]
  preview: [item: GalleryItem]
}>()

const categoryName = computed(() => {
  const category = props.categories.find(cat => cat.id === props.item.category)
  return category?.name || props.item.category
})

const cardClasses = computed(() => {
  // Variasi tinggi untuk grid yang dinamis
  const heights = ['h-64', 'h-72', 'h-80', 'h-64', 'h-76']
  const heightClass = heights[props.index % heights.length]
  
  return `${heightClass} group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1`
})

const handleClick = () => {
  emit('click', props.item)
}

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.style.display = 'none'
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
</style>
