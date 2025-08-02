<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
    <!-- Loading State -->
    <div
      v-if="!product"
      class="flex items-center justify-center min-h-screen"
    >
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4" />
        <p class="text-gray-600">
          {{ $t('common.loading') }}
        </p>
      </div>
    </div>

    <!-- Product Detail -->
    <div
      v-else
      class="container mx-auto px-4 py-8 lg:py-16"
    >
      <!-- Breadcrumb -->
      <nav class="mb-8">
        <ol class="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <router-link
              to="/"
              class="hover:text-amber-600 transition-colors"
            >
              {{ $t('common.home') }}
            </router-link>
          </li>
          <li class="text-gray-400">
            /
          </li>
          <li>
            <router-link
              to="/#gallery"
              class="hover:text-amber-600 transition-colors"
            >
              {{ $t('gallery.title') }}
            </router-link>
          </li>
          <li class="text-gray-400">
            /
          </li>
          <li class="text-gray-800 font-medium">
            {{ product.title }}
          </li>
        </ol>
      </nav>

      <!-- Product Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
        <!-- Product Image -->
        <div class="space-y-6">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              v-if="product.image && !imageError" 
              :src="product.image" 
              :alt="product.title"
              class="w-full h-full object-cover"
              @error="handleImageError"
            >
            <div 
              v-else
              class="w-full h-full bg-gradient-to-br from-amber-200 via-orange-300 to-red-400 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image class="w-8 h-8" />
                </div>
                <p class="font-medium">
                  {{ product.title }}
                </p>
              </div>
            </div>
          </div>

          <!-- Category Badge -->
          <div class="flex justify-center">
            <span class="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
              {{ getCategoryName(product.category) }}
            </span>
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-8">
          <div>
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {{ product.title }}
            </h1>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ product.description }}
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-4">
            <div class="flex flex-col sm:flex-row gap-4">
              <BaseButton
                variant="primary"
                size="lg"
                rounded
                class="flex-1 shadow-lg hover:shadow-xl"
                @click="contactForProduct"
              >
                <MessageCircle class="w-5 h-5 mr-2" />
                {{ $t('product.contact') }}
              </BaseButton>
              
              <BaseButton
                variant="outline"
                size="lg"
                rounded
                class="flex-1"
                @click="shareProduct"
              >
                <Share2 class="w-5 h-5 mr-2" />
                {{ $t('product.share') }}
              </BaseButton>
            </div>

            <BaseButton
              variant="secondary"
              size="lg"
              rounded
              class="w-full"
              @click="goToGallery"
            >
              <ArrowLeft class="w-5 h-5 mr-2" />
              {{ $t('product.backToGallery') }}
            </BaseButton>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div
        v-if="relatedProducts.length > 0"
        class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
      >
        <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
          {{ $t('product.related') }}
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GalleryItem
            v-for="(item, index) in relatedProducts"
            :key="`related-${item.id}`"
            :item="item"
            :index="index"
            :categories="categories"
            @click="goToProduct"
            @preview="goToProduct"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTranslatedData } from '@/composables/useTranslatedData'
import { useSEO } from '@/composables/useSEO'
import BaseButton from '@/components/ui/BaseButton.vue'
import GalleryItem from '@/components/gallery/GalleryItem.vue'
import { galleryItems, businessInfo } from '@/data'
import type { GalleryItem as GalleryItemType } from '@/types'
import { Image, MessageCircle, Share2, ArrowLeft } from '@/components/icons'

const route = useRoute()
const router = useRouter()
const { categories } = useTranslatedData()
const { setProductSEO } = useSEO()

const imageError = ref(false)

// Find product by ID
const product = computed(() => {
  const id = route.params.id as string
  return galleryItems.find(item => item.id === id)
})

// Related products (same category, excluding current)
const relatedProducts = computed(() => {
  if (!product.value) return []
  
  return galleryItems
    .filter(item => 
      item.category === product.value!.category && 
      item.id !== product.value!.id
    )
    .slice(0, 3) // Limit to 3 related products
})

const getCategoryName = (categoryId: string) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  return category?.name || categoryId
}

const handleImageError = () => {
  imageError.value = true
}

const contactForProduct = () => {
  // Redirect to contact section with product info
  const message = encodeURIComponent(`Halo, saya tertarik dengan produk "${product.value?.title}". Bisa tolong berikan informasi lebih lanjut?`)
  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}?text=${message}`
  window.open(whatsappUrl, '_blank')
}

const shareProduct = () => {
  const url = window.location.href
  const title = product.value?.title || ''
  const text = product.value?.description || ''

  if (navigator.share) {
    navigator.share({
      title: `${title} - Tenun Medali Mas`,
      text: text,
      url: url
    })
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(url).then(() => {
      alert('Link produk telah disalin ke clipboard!')
    })
  }
}

const goToProduct = (item: GalleryItemType) => {
  router.push({ name: 'product-detail', params: { id: item.id } })
}

const goToGallery = () => {
  router.push({ path: '/', hash: '#gallery' })
}

// Redirect to home if product not found
onMounted(() => {
  if (!product.value) {
    router.push('/')
  } else {
    // Set SEO meta tags for product
    setProductSEO(product.value.id)
  }
})

// Update SEO when route changes
watch(() => route.params.id, (newId) => {
  if (newId && typeof newId === 'string') {
    setProductSEO(newId)
  }
})
</script>
