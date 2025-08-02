<template>
  <section id="contact" class="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Hubungi <span class="text-amber-600">Kami</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Tertarik dengan produk tenun ikat kami? Jangan ragu untuk menghubungi kami
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start">
        <!-- Contact Information -->
        <div class="space-y-8 h-full flex flex-col">
          <!-- Business Info -->
          <div class="bg-white rounded-3xl p-8 shadow-lg flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Informasi Usaha</h3>
            
            <div class="space-y-6">
              <!-- Name -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-800">Nama Usaha</h4>
                  <p class="text-gray-600">UD. Medali Mas (Medali Emas)</p>
                </div>
              </div>

              <!-- Owner -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-800">Pemilik</h4>
                  <p class="text-gray-600">Bapak Munawar</p>
                </div>
              </div>

              <!-- Since -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-800">Berdiri Sejak</h4>
                  <p class="text-gray-600">27 Februari 1989</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Details -->
          <div class="bg-white rounded-3xl p-8 shadow-lg flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Kontak & Lokasi</h3>
            
            <div class="space-y-6">
              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-800">Alamat</h4>
                  <a href="https://maps.app.goo.gl/G2ybeAR28QuU1CD76" target="_blank" class="text-blue-600 hover:text-blue-700 transition-colors duration-300 leading-relaxed">
                    Jl. KH. Agus Salim Gg. VIII, No. 54 C<br>
                    Kelurahan Bandar Kidul, Kecamatan Mojoroto<br>
                    Kota Kediri, Jawa Timur
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-800">Telepon</h4>
                  <a href="https://wa.me/6285736712477" target="_blank" class="text-green-600 hover:text-green-700 transition-colors duration-300">
                    +62 857-3671-2477
                  </a>
                </div>
              </div>

              <!-- Instagram -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.132-1.551c-.684-.94-.684-2.134 0-3.074c.684-.94 1.835-1.551 3.132-1.551s2.448.611 3.132 1.551c.684.94.684 2.134 0 3.074c-.684.94-1.835 1.551-3.132 1.551zm7.518 0c-1.297 0-2.448-.611-3.132-1.551c-.684-.94-.684-2.134 0-3.074c.684-.94 1.835-1.551 3.132-1.551s2.448.611 3.132 1.551c.684.94.684 2.134 0 3.074c-.684.94-1.835 1.551-3.132 1.551z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-800">Instagram</h4>
                  <a href="https://www.instagram.com/tenunmedalimasofficial" target="_blank" class="text-pink-600 hover:text-pink-700 transition-colors duration-300">
                    @tenunmedalimasofficial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Maps Section -->
        <div class="space-y-8 h-full flex flex-col">
          <!-- Location Tabs -->
          <div class="bg-white rounded-3xl p-8 shadow-lg flex-1 flex flex-col">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Lokasi Workshop</h3>
            
            <!-- Tab Navigation -->
            <div class="flex space-x-4 mb-6">
              <button 
                @click="activeMapTab = 'main'"
                :class="[
                  'px-4 py-2 rounded-lg font-semibold transition-all duration-300',
                  activeMapTab === 'main'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                ]"
              >
                Workshop Utama
              </button>
              <button 
                @click="activeMapTab = 'branch'"
                :class="[
                  'px-4 py-2 rounded-lg font-semibold transition-all duration-300',
                  activeMapTab === 'branch'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                ]"
              >
                Lokasi Kedua
              </button>
            </div>

            <!-- Map Container -->
            <div class="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 flex-1">
              <div class="aspect-w-16 aspect-h-12 h-full min-h-96">
                <!-- Main Workshop Map -->
                <iframe 
                  v-if="activeMapTab === 'main'"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.6081548695656!2d111.99778907622941!3d-7.831229992189825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7857002c9076af%3A0x44d7c36146020b31!2sKerajinan%20Tenun%20Ikat%20Medali%20Mas!5e0!3m2!1sen!2sid!4v1754128473528!5m2!1sen!2sid"
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  :allowfullscreen="true"
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  class="w-full h-full"
                ></iframe>
                
                <!-- Branch Location Map -->
                <iframe 
                  v-if="activeMapTab === 'branch'"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.3708950686339!2d111.99936658219512!3d-7.8315862766091975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785767d7a10ca7%3A0x3c4a9ccf906bc239!2sTENUN%20IKAT%20ATBM%20MEDALI%20MAS%202!5e0!3m2!1sen!2sid!4v1754128528381!5m2!1sen!2sid"
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  :allowfullscreen="true"
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                  class="w-full h-full"
                ></iframe>
              </div>
              
              <!-- Loading Overlay -->
              <div v-if="!mapsLoaded" class="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div class="flex items-center space-x-3">
                  <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
                  <span class="text-gray-600">Memuat peta...</span>
                </div>
              </div>
            </div>

            <!-- Map Info -->
            <div class="mt-6 p-4 bg-amber-50 rounded-xl">
              <div v-if="activeMapTab === 'main'" class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-amber-800">Workshop Utama</h4>
                  <p class="text-sm text-amber-700">Jl. KH. Agus Salim Gg. VIII No.55B, Bandar Kidul, Kec. Mojoroto, Kota Kediri, Jawa Timur 64118</p>
                  <a href="https://maps.app.goo.gl/PFBhRY6yppepX7wV8" target="_blank" class="inline-flex items-center mt-2 text-sm text-amber-600 hover:text-amber-700 font-medium">
                    Buka di Google Maps
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div v-if="activeMapTab === 'branch'" class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-amber-800">Lokasi Kedua</h4>
                  <p class="text-sm text-amber-700">Gg. IX No.51, Banjarmlati, Kec. Mojoroto, Kabupaten Kediri, Jawa Timur 64118</p>
                  <a href="https://maps.app.goo.gl/krhPPoRnkYh9xNEC9" target="_blank" class="inline-flex items-center mt-2 text-sm text-amber-600 hover:text-amber-700 font-medium">
                    Buka di Google Maps
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Maps -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const activeMapTab = ref('main')
const mapsLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    mapsLoaded.value = true
  }, 1000)
})
</script>