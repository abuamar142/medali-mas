<template>
  <BaseSection
    id="products"
    title='Produk <span class="text-amber-600">Unggulan</span>'
    subtitle="Beragam produk tenun ikat berkualitas tinggi dengan desain tradisional dan modern"
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
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Kain Tenun Ikat</h3>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center text-gray-600">
              <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              Jenis Misris (Rp 125.000 - Rp 195.000)
            </li>
            <li class="flex items-center text-gray-600">
              <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              Semi Sutra (Rp 300.000)
            </li>
            <li class="flex items-center text-gray-600">
              <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              Kain Sutra Import
            </li>
          </ul>
          <div class="text-sm text-gray-500">
            Kain berkualitas tinggi dengan motif tradisional
          </div>
        </div>

        <!-- Fashion Items -->
        <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Fashion & Aksesoris</h3>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center text-gray-600">
              <span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Shal Tenun
            </li>
            <li class="flex items-center text-gray-600">
              <span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Sarung Tenun
            </li>
            <li class="flex items-center text-gray-600">
              <span class="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Tas Souvenir
            </li>
          </ul>
          <div class="text-sm text-gray-500">
            Produk fashion dengan sentuhan tenun ikat
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
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Dekorasi Rumah</h3>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center text-gray-600">
              <span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Kain Penutup Tisu
            </li>
            <li class="flex items-center text-gray-600">
              <span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Kain Penutup Galon Air
            </li>
            <li class="flex items-center text-gray-600">
              <span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Kain Penutup Gelas
            </li>
          </ul>
          <div class="text-sm text-gray-500">
            Dekorasi rumah dengan nuansa tradisional
          </div>
        </div>
      </div>

      <!-- Partnership Products -->
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-800 mb-4">Produk Kemitraan</h3>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Berkolaborasi dengan UKM lain untuk menghadirkan produk inovatif berbahan dasar tenun ikat
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Partnership 1 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 003 15.546V12a9 9 0 018.59-8.987A9 9 0 0021 12v3.546z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-2">UKM Den Yu</h4>
            <p class="text-gray-600">Sepatu & Sandal bermotif tenun ikat</p>
          </div>

          <!-- Partnership 2 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-2">UKM Gakris</h4>
            <p class="text-gray-600">Tas berbahan dasar kain tenun</p>
          </div>

          <!-- Partnership 3 -->
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-2">UD Sinar Sejati</h4>
            <p class="text-gray-600">Produk dekorasi rumah tangga</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Tertarik dengan Produk Kami?</h3>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Hubungi kami untuk informasi lebih lanjut tentang produk dan harga terkini
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" class="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Hubungi Kami
          </a>
          <a href="#gallery" class="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            Lihat Galeri
          </a>
        </div>
      </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from '@/components/ui/BaseSection.vue'
</script>
