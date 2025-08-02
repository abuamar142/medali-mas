<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white">
    <!-- Main Footer -->
    <div class="container mx-auto px-4 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-6">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">M</span>
            </div>
            <div>
              <h3 class="text-xl font-bold">Medali Mas</h3>
              <p class="text-amber-200 text-sm">Tenun Ikat Kediri</p>
            </div>
          </div>
          <p class="text-gray-300 leading-relaxed">
            {{ $t('footer.description') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold text-amber-300">{{ $t('footer.quickLinks') }}</h4>
          <nav class="space-y-3">
            <a href="#hero" class="block text-gray-300 hover:text-amber-300 transition-colors duration-300">{{ $t('nav.home') }}</a>
            <a href="#about" class="block text-gray-300 hover:text-amber-300 transition-colors duration-300">{{ $t('nav.about') }}</a>
            <a href="#products" class="block text-gray-300 hover:text-amber-300 transition-colors duration-300">{{ $t('nav.products') }}</a>
            <a href="#gallery" class="block text-gray-300 hover:text-amber-300 transition-colors duration-300">{{ $t('nav.gallery') }}</a>
            <a href="#achievements" class="block text-gray-300 hover:text-amber-300 transition-colors duration-300">{{ $t('nav.achievements') }}</a>
            <a href="#contact" class="block text-gray-300 hover:text-amber-300 transition-colors duration-300">{{ $t('nav.contact') }}</a>
          </nav>
        </div>

        <!-- Products -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold text-amber-300">{{ $t('products.title') }}</h4>
          <nav class="space-y-3">
            <a href="#products" class="block text-gray-300 hover:text-amber-300 transition-colors duration-300">{{ $t('gallery.categories.fabric') }}</a>
            <a href="#products" class="block text-gray-300 hover:text-amber-300 transition-colors duration-300">{{ $t('gallery.categories.fashion') }}</a>
            <a href="#products" class="block text-gray-300 hover:text-amber-300 transition-colors duration-300">{{ $t('gallery.categories.home') }}</a>
            <a href="#products" class="block text-gray-300 hover:text-amber-300 transition-colors duration-300">{{ $t('gallery.categories.partnership') }}</a>
          </nav>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold text-amber-300">{{ $t('footer.contact') }}</h4>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <MapPin class="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
              <div class="text-gray-300 text-sm leading-relaxed">
                Jl. KH. Agus Salim Gg. VIII, No. 54 C<br>
                Bandar Kidul, Mojoroto<br>
                Kota Kediri, Jawa Timur
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <User class="w-5 h-5 text-amber-400" />
              <span class="text-gray-300 text-sm">{{ $t('contact.businessInfo.owner') }}: Bapak Munawar</span>
            </div>
            
            <div class="flex items-center space-x-3">
              <Calendar class="w-5 h-5 text-amber-400" />
              <span class="text-gray-300 text-sm">{{ $t('contact.businessInfo.foundedDate') }} 27 Februari 1989</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-700">
      <div class="container mx-auto px-4 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm">
            {{ $t('footer.copyright') }}
          </div>
          <div class="flex items-center space-x-6 text-sm text-gray-400">
            <span>{{ $t('footer.ukm') }}</span>
            <span>•</span>
            <span>{{ $t('footer.traditional') }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating WhatsApp Button -->
    <div class="fixed bottom-6 right-6 z-50 group/whatsapp">
      <!-- Tooltip -->
      <div class="absolute bottom-full right-0 mb-2 opacity-0 group-hover/whatsapp:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/whatsapp:translate-y-0 pointer-events-none">
        <div class="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          {{ $t('footer.chatTooltip') }}
          <!-- Arrow -->
          <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
      
      <!-- WhatsApp Button -->
      <a href="https://wa.me/6285736712477" target="_blank" class="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
        <MessageCircle class="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { MapPin, User, Calendar, MessageCircle } from '@/components/icons'

const { t } = useI18n()
const currentYear = computed(() => new Date().getFullYear())
</script>