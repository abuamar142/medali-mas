<template>
  <BaseSection
    id="contact"
    :title="contactTitle"
    :subtitle="$t('contact.subtitle')"
    background="amber"
    padding="xl"
    header-spacing="xl"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start">
      <!-- Contact Information -->
      <div class="space-y-8 h-full flex flex-col">
        <!-- Business Info -->
        <div class="bg-white rounded-3xl p-8 shadow-lg flex-1">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">
            {{ $t('contact.businessInfo.title') }}
          </h3>
            
          <div class="space-y-6">
            <!-- Name -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Building class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-800">
                  {{ $t('contact.businessInfo.name') }}
                </h4>
                <p class="text-gray-600">
                  {{ businessInfo.name }}
                </p>
              </div>
            </div>

            <!-- Owner -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <User class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-800">
                  {{ $t('contact.businessInfo.owner') }}
                </h4>
                <p class="text-gray-600">
                  {{ businessInfo.owner }}
                </p>
              </div>
            </div>

            <!-- Since -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Calendar class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-800">
                  {{ $t('contact.businessInfo.foundedDate') }}
                </h4>
                <p class="text-gray-600">
                  {{ businessInfo.foundedDate }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Details -->
        <div class="bg-white rounded-3xl p-8 shadow-lg flex-1">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">
            {{ $t('contact.contactDetails.title') }}
          </h3>
            
          <div class="space-y-6">
            <!-- Address -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-800">
                  {{ $t('contact.contactDetails.address') }}
                </h4>
                <a
                  :href="businessInfo.addresses.main.mapUrl"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-700 transition-colors duration-300 leading-relaxed"
                >
                  {{ businessInfo.addresses.main.address }}
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-800">
                  {{ $t('contact.contactDetails.phone') }}
                </h4>
                <a
                  :href="`https://wa.me/${businessInfo.whatsapp}`"
                  target="_blank"
                  class="text-green-600 hover:text-green-700 transition-colors duration-300"
                >
                  {{ businessInfo.phone }}
                </a>
              </div>
            </div>

            <!-- Instagram -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Instagram class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-800">
                  {{ $t('contact.contactDetails.instagram') }}
                </h4>
                <a
                  :href="`https://www.instagram.com/${businessInfo.instagram}`"
                  target="_blank"
                  class="text-pink-600 hover:text-pink-700 transition-colors duration-300"
                >
                  @{{ businessInfo.instagram }}
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
          <h3 class="text-2xl font-bold text-gray-800 mb-6">
            {{ $t('contact.location.title') }}
          </h3>
            
          <!-- Tab Navigation -->
          <div class="flex space-x-4 mb-6">
            <button 
              :class="[
                'px-4 py-2 rounded-lg font-semibold transition-all duration-300',
                activeMapTab === 'main'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
              @click="activeMapTab = 'main'"
            >
              {{ $t('contact.location.mainWorkshop') }}
            </button>
            <button 
              :class="[
                'px-4 py-2 rounded-lg font-semibold transition-all duration-300',
                activeMapTab === 'branch'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
              @click="activeMapTab = 'branch'"
            >
              {{ $t('contact.location.secondLocation') }}
            </button>
          </div>

          <!-- Map Container -->
          <div class="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 flex-1">
            <div class="aspect-w-16 aspect-h-12 h-full min-h-96">
              <!-- Main Workshop Map -->
              <iframe 
                v-if="activeMapTab === 'main'"
                :src="businessInfo.addresses.main.embedUrl"
                width="100%" 
                height="100%" 
                style="border:0;" 
                :allowfullscreen="true"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
              />
                
              <!-- Branch Location Map -->
              <iframe 
                v-if="activeMapTab === 'branch'"
                :src="businessInfo.addresses.branch.embedUrl"
                width="100%" 
                height="100%" 
                style="border:0;" 
                :allowfullscreen="true"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
              />
            </div>
              
            <!-- Loading Overlay -->
            <div
              v-if="!mapsLoaded"
              class="absolute inset-0 flex items-center justify-center bg-gray-100"
            >
              <div class="flex items-center space-x-3">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600" />
                <span class="text-gray-600">Memuat peta...</span>
              </div>
            </div>
          </div>

          <!-- Map Info -->
          <div class="mt-6 p-4 bg-amber-50 rounded-xl">
            <div
              v-if="activeMapTab === 'main'"
              class="flex items-start space-x-3"
            >
              <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin class="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-amber-800">
                  {{ $t('contact.location.mainWorkshop') }}
                </h4>
                <p class="text-sm text-amber-700">
                  {{ businessInfo.addresses.main.address }}
                </p>
                <a
                  :href="businessInfo.addresses.main.mapUrl"
                  target="_blank"
                  class="inline-flex items-center mt-2 text-sm text-amber-600 hover:text-amber-700 font-medium"
                >
                  {{ $t('contact.location.openInMaps') }}
                  <ExternalLink class="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            <div
              v-if="activeMapTab === 'branch'"
              class="flex items-start space-x-3"
            >
              <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin class="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-amber-800">
                  {{ $t('contact.location.secondLocation') }}
                </h4>
                <p class="text-sm text-amber-700">
                  {{ businessInfo.addresses.branch.address }}
                </p>
                <a
                  :href="businessInfo.addresses.branch.mapUrl"
                  target="_blank"
                  class="inline-flex items-center mt-2 text-sm text-amber-600 hover:text-amber-700 font-medium"
                >
                  {{ $t('contact.location.openInMaps') }}
                  <ExternalLink class="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { businessInfo } from '@/data'
import { Building, User, Calendar, MapPin, Phone, Instagram, ExternalLink } from '@/components/icons'
import BaseSection from '@/components/ui/BaseSection.vue'

const { t } = useI18n()

const contactTitle = computed(() => {
  return t('contact.title', { 
    highlight: `<span class="text-amber-600">${t('contact.titleHighlight')}</span>` 
  })
})

const activeMapTab = ref('main')
const mapsLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    mapsLoaded.value = true
  }, 1000)
})
</script>