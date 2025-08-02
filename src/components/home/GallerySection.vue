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
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
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
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H6a2 2 0 00-2 2v6"></path>
            </svg>
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
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
        </svg>
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

interface GalleryItemType {
  title: string
  description: string
  category: string
  image?: string
}

const activeCategory = ref('all')
const isModalOpen = ref(false)
const selectedImage = ref<GalleryItemType | null>(null)

const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'fabric', name: 'Kain Tenun' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'home', name: 'Dekorasi Rumah' },
  { id: 'partnership', name: 'Produk Kemitraan' }
]

const galleryItems: GalleryItemType[] = [
  { title: 'Kain Tenun Misris', description: 'Kain tenun berkualitas tinggi', category: 'fabric', image: 'https://i.imgur.com/2gMWgmc.jpeg' },
  { title: 'Semi Sutra Premium', description: 'Kain sutra dengan motif elegan', category: 'fabric', image: 'https://images.unsplash.com/photo-1594736797933-d0d99b051677?w=400&h=600&fit=crop' },
  { title: 'Shal Tenun Elegant', description: 'Shal dengan sentuhan modern', category: 'fashion', image: 'https://images.unsplash.com/photo-1583743814966-8936f37f86df?w=400&h=600&fit=crop' },
  { title: 'Sarung Tenun Tradisional', description: 'Sarung dengan motif klasik', category: 'fashion', image: 'https://images.unsplash.com/photo-1564584217132-2271339881b4?w=400&h=600&fit=crop' },
  { title: 'Tas Souvenir Unik', description: 'Tas dengan desain khas Kediri', category: 'fashion', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop' },
  { title: 'Penutup Tisu Cantik', description: 'Dekorasi rumah yang fungsional', category: 'home', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop' },
  { title: 'Penutup Galon Stylish', description: 'Pelindung galon yang estetik', category: 'home', image: 'https://images.unsplash.com/photo-1615800001952-9c36f4447cc0?w=400&h=600&fit=crop' },
  { title: 'Sepatu Tenun Ikat', description: 'Kolaborasi dengan UKM Den Yu', category: 'partnership', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop' },
  { title: 'Tas Premium Gakris', description: 'Kolaborasi dengan UKM Gakris', category: 'partnership', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=600&fit=crop' },
  { title: 'Motif Tradisional', description: 'Ragam motif khas Kediri', category: 'fabric', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop' },
  { title: 'Proses Pewarnaan', description: 'Teknik pewarnaan tradisional', category: 'fabric', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop' },
  { title: 'Kain Sutra Import', description: 'Kain sutra berkualitas tinggi', category: 'fabric', image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=600&fit=crop' }
]

const processSteps = [
  {
    title: 'Persiapan Benang',
    description: 'Pemilihan dan persiapan benang berkualitas tinggi'
  },
  {
    title: 'Ikat & Celup',
    description: 'Proses pengikatan dan pencelupan dengan teknik tradisional'
  },
  {
    title: 'Tenun',
    description: 'Proses menenun dengan alat tenun bukan mesin (ATBM)'
  },
  {
    title: 'Finishing',
    description: 'Penyelesaian akhir dan quality control produk'
  }
]

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
