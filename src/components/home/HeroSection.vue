<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-orange-800/85 to-red-900/90 z-10"></div>
      <div class="absolute inset-0 bg-amber-900/20 opacity-20"></div>
    </div>

    <!-- Content -->
    <div class="relative z-20 container mx-auto px-4 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Logo/Brand -->
        <div class="mb-8 flex justify-center">
          <div class="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <span class="text-white font-bold text-4xl">M</span>
          </div>
        </div>

        <!-- Main Title -->
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span class="block">Tenun Ikat</span>
          <span class="block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            Medali Mas
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
          Warisan Budaya Kediri Sejak 1989
        </p>

        <!-- Description -->
        <p class="text-lg text-amber-50/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Melestarikan keindahan tenun ikat tradisional dengan sentuhan modern. 
          Produk berkualitas tinggi dari tangan-tangan terampil pengrajin Kediri.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#products" class="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Lihat Produk Kami
          </a>
          <a href="#contact" class="border-2 border-white text-white hover:bg-white hover:text-orange-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Hubungi Kami
          </a>
        </div>

        <!-- Features -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">Sejak 1989</h3>
            <p class="text-amber-100/80">Pengalaman lebih dari 35 tahun</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">Kualitas Terjamin</h3>
            <p class="text-amber-100/80">Produk berkualitas tinggi</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">60 Pekerja</h3>
            <p class="text-amber-100/80">Tim pengrajin berpengalaman</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <a href="#about" class="block animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>
