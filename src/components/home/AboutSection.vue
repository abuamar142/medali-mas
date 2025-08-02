<template>
  <BaseSection
    id="about"
    title='Tentang <span class="text-amber-600">Medali Mas</span>'
    subtitle="Perjalanan panjang dalam melestarikan warisan budaya tenun ikat Kediri"
    background="amber"
    padding="xl"
    header-spacing="xl"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Story Content -->
        <div class="order-2 lg:order-1">
          <div class="space-y-6">
            <!-- History -->
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-3">Sejarah Singkat</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Didirikan oleh Bapak Munawar pada 27 Februari 1989, UD. Medali Mas telah berkembang 
                    dari usaha rumahan menjadi salah satu UKM unggulan Kota Kediri dalam bidang tenun ikat.
                  </p>
                </div>
              </div>
            </div>

            <!-- Vision -->
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-3">Visi & Misi</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Melestarikan dan mengembangkan seni tenun ikat tradisional dengan inovasi modern, 
                    menciptakan produk berkualitas tinggi yang membanggakan budaya Indonesia.
                  </p>
                </div>
              </div>
            </div>

            <!-- Location -->
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-3">Lokasi</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Beralamat di Jl. KH. Agus Salim Gg. VIII, No. 54 C, Kelurahan Bandar Kidul, 
                    Kecamatan Mojoroto, Kota Kediri - pusat sentra tenun ikat tradisional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Gallery -->
        <div class="order-1 lg:order-2">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl h-48 flex items-center justify-center shadow-lg">
                <span class="text-gray-700 font-medium">Proses Tenun</span>
              </div>
              <div class="bg-gradient-to-br from-orange-200 to-red-300 rounded-2xl h-32 flex items-center justify-center shadow-lg">
                <span class="text-gray-700 font-medium">Motif Tradisional</span>
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div class="bg-gradient-to-br from-red-200 to-pink-300 rounded-2xl h-32 flex items-center justify-center shadow-lg">
                <span class="text-gray-700 font-medium">Produk Jadi</span>
              </div>
              <div class="bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl h-48 flex items-center justify-center shadow-lg">
                <span class="text-gray-700 font-medium">Workshop</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl font-bold text-amber-600 mb-2">35+</div>
          <p class="text-gray-600 font-medium">Tahun Pengalaman</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-orange-600 mb-2">60</div>
          <p class="text-gray-600 font-medium">Tenaga Kerja</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-red-600 mb-2">100M+</div>
          <p class="text-gray-600 font-medium">Omset Bulanan</p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-pink-600 mb-2">10+</div>
          <p class="text-gray-600 font-medium">Daerah Pemasaran</p>
        </div>
      </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from '@/components/ui/BaseSection.vue'
</script>
