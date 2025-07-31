<template>
  <section id="gallery" class="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Galeri <span class="text-amber-600">Produk</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Koleksi foto produk tenun ikat berkualitas tinggi dari Medali Mas
        </p>
      </div>

      <!-- Gallery Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'px-6 py-3 rounded-full font-semibold transition-all duration-300',
            activeCategory === category.id
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:text-amber-600 hover:shadow-md border border-gray-200'
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="(item, index) in filteredGallery" 
          :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          :class="getGridClass(index)"
        >
          <!-- Placeholder Image -->
          <div class="w-full h-full bg-gradient-to-br from-amber-200 via-orange-300 to-red-400 flex items-center justify-center relative">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Image Content -->
            <div class="text-center text-white z-10">
              <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <p class="font-medium text-sm">{{ item.title }}</p>
            </div>

            <!-- Overlay Content -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div class="text-center text-white">
                <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
                <p class="text-sm text-gray-200 mb-4">{{ item.description }}</p>
                <button class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-300">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Process Gallery -->
      <div class="mt-20">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Proses Pembuatan</h3>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Dari benang hingga menjadi kain tenun ikat yang indah
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in processSteps" :key="index" class="text-center">
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
              </div>
              <div v-if="index < processSteps.length - 1" class="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-orange-400 -translate-x-2"></div>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-3">{{ step.title }}</h4>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Ingin Melihat Produk Secara Langsung?</h3>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Kunjungi workshop kami di Kediri atau hubungi untuk konsultasi produk
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" class="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Kunjungi Workshop
          </a>
          <a href="https://www.instagram.com/tenunmedalimasofficial" target="_blank" class="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            Follow Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const activeCategory = ref('all');

const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'fabric', name: 'Kain Tenun' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'home', name: 'Dekorasi Rumah' },
  { id: 'partnership', name: 'Produk Kemitraan' }
];

const galleryItems = [
  { title: 'Kain Tenun Misris', description: 'Kain tenun berkualitas tinggi', category: 'fabric' },
  { title: 'Semi Sutra Premium', description: 'Kain sutra dengan motif elegan', category: 'fabric' },
  { title: 'Shal Tenun Elegant', description: 'Shal dengan sentuhan modern', category: 'fashion' },
  { title: 'Sarung Tenun Tradisional', description: 'Sarung dengan motif klasik', category: 'fashion' },
  { title: 'Tas Souvenir Unik', description: 'Tas dengan desain khas Kediri', category: 'fashion' },
  { title: 'Penutup Tisu Cantik', description: 'Dekorasi rumah yang fungsional', category: 'home' },
  { title: 'Penutup Galon Stylish', description: 'Pelindung galon yang estetik', category: 'home' },
  { title: 'Sepatu Tenun Ikat', description: 'Kolaborasi dengan UKM Den Yu', category: 'partnership' },
  { title: 'Tas Premium Gakris', description: 'Kolaborasi dengan UKM Gakris', category: 'partnership' },
  { title: 'Motif Tradisional', description: 'Ragam motif khas Kediri', category: 'fabric' },
  { title: 'Proses Pewarnaan', description: 'Teknik pewarnaan tradisional', category: 'fabric' },
  { title: 'Kain Sutra Import', description: 'Kain sutra berkualitas tinggi', category: 'fabric' }
];

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
];

const filteredGallery = computed(() => {
  if (activeCategory.value === 'all') {
    return galleryItems;
  }
  return galleryItems.filter(item => item.category === activeCategory.value);
});

const getGridClass = (index: number) => {
  const patterns = [
    'h-64', 'h-80', 'h-64', 'h-72',
    'h-72', 'h-64', 'h-80', 'h-64',
    'h-64', 'h-72', 'h-64', 'h-80'
  ];
  return patterns[index % patterns.length];
};
</script>
