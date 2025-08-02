<template>
  <BaseSection
    id="gallery"
    title='Galeri <span class="text-amber-600">Produk</span>'
    subtitle="Koleksi foto produk tenun ikat berkualitas tinggi dari Medali Mas"
    background="gradient"
    padding="xl"
  >
    <!-- Gallery Categories -->
    <div class="mb-12 lg:mb-16">
      <GalleryFilter
        :categories="categories"
        :active-category="activeCategory"
        :items="galleryItems"
        @update:active-category="activeCategory = $event"
      />
    </div>

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20">
      <GalleryItem
        v-for="(item, index) in filteredGallery"
        :key="`${item.title}-${index}`"
        :item="item"
        :index="index"
        :categories="categories"
        @click="openImageModal"
        @preview="openImageModal"
      />
    </div>

    <!-- Process Gallery -->
    <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
      <div class="text-center mb-12">
        <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Proses Pembuatan</h3>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Dari benang hingga menjadi kain tenun ikat yang indah
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(step, index) in processSteps" :key="index" class="text-center group">
          <div class="relative mb-6">
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span class="text-xl sm:text-2xl font-bold text-white">{{ index + 1 }}</span>
            </div>
            <div v-if="index < processSteps.length - 1" class="hidden lg:block absolute top-8 sm:top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-orange-400 -translate-x-2"></div>
          </div>
          <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3">{{ step.title }}</h4>
          <p class="text-gray-600 text-sm sm:text-base">{{ step.description }}</p>
        </div>
      </div>
    </div>

    <template #footer>
      <!-- CTA Section -->
      <div class="text-center bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
        <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Ingin Melihat Produk Secara Langsung?</h3>
        <p class="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Kunjungi workshop kami di Kediri atau hubungi untuk konsultasi produk
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <BaseButton
            variant="primary"
            size="lg"
            rounded
            tag="a"
            href="#contact"
            class="shadow-lg hover:shadow-xl"
          >
            <MapPin class="w-5 h-5 mr-2" />
            Kunjungi Workshop
          </BaseButton>
          <BaseButton
            variant="outline"
            size="lg"
            rounded
            tag="a"
            href="https://www.instagram.com/tenunmedalimasofficial"
            target="_blank"
          >
            <Instagram class="w-5 h-5 mr-2" />
            Follow Instagram
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseSection>

  <!-- Image Modal -->
  <BaseModal
    v-model:is-open="isModalOpen"
    :title="selectedImage?.title"
    size="xl"
    @close="closeImageModal"
  >
    <div v-if="selectedImage" class="text-center">
      <img 
        :src="selectedImage.image" 
        :alt="selectedImage.title"
        class="w-full max-h-[60vh] object-contain rounded-lg mb-4"
      >
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ selectedImage.title }}</h3>
      <p class="text-gray-600 mb-4">{{ selectedImage.description }}</p>
      <div class="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
        {{ getCategoryName(selectedImage.category) }}
      </div>
    </div>
    
    <template #footer>
      <BaseButton variant="secondary" @click="closeImageModal">
        Tutup
      </BaseButton>
      <BaseButton variant="primary" @click="shareImage">
        <Share2 class="w-4 h-4 mr-2" />
        Bagikan
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseSection from '../ui/BaseSection.vue'
import BaseButton from '../ui/BaseButton.vue'
import BaseModal from '../ui/BaseModal.vue'
import GalleryFilter from '../gallery/GalleryFilter.vue'
import GalleryItem from '../gallery/GalleryItem.vue'
import { categories, galleryItems, processSteps } from '@/data'
import type { GalleryItem as GalleryItemType } from '@/types'
import { MapPin, Instagram, Share2 } from '@/components/icons'

const activeCategory = ref('all')
const isModalOpen = ref(false)
const selectedImage = ref<GalleryItemType | null>(null)

const filteredGallery = computed(() => {
  if (activeCategory.value === 'all') {
    return galleryItems
  }
  return galleryItems.filter(item => item.category === activeCategory.value)
})

const openImageModal = (item: GalleryItemType) => {
  selectedImage.value = item
  isModalOpen.value = true
}

const closeImageModal = () => {
  isModalOpen.value = false
  selectedImage.value = null
}

const getCategoryName = (categoryId: string) => {
  const category = categories.find(cat => cat.id === categoryId)
  return category?.name || categoryId
}

const shareImage = () => {
  if (selectedImage.value && navigator.share) {
    navigator.share({
      title: selectedImage.value.title,
      text: selectedImage.value.description,
      url: window.location.href
    })
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href)
  }
}
</script>
