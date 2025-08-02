<template>
  <BaseSection
    id="achievements"
    background="transparent"
    padding="xl"
    header-spacing="xl"
    class="bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 relative overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>

    <template #header>
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6" v-html="achievementsTitle"></h2>
        <p class="text-lg sm:text-xl text-amber-100 leading-relaxed max-w-3xl mx-auto">
          {{ $t('achievements.subtitle') }}
        </p>
      </div>
    </template>

    <div class="relative z-10">

      <!-- Main Achievements -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <!-- Achievement Cards -->
        <div 
          v-for="(achievement, index) in mainAchievements" 
          :key="`main-${index}`"
          class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
        >
          <div class="flex items-start space-x-6">
            <div :class="[
              'w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0',
              index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-gradient-to-br from-blue-400 to-purple-500'
            ]">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white mb-3">{{ achievement.title }}</h3>
              <p class="text-amber-100 leading-relaxed mb-4">
                {{ achievement.description }}
              </p>
              <div class="text-sm text-amber-200 font-medium">{{ achievement.category }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Achievements -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Additional Achievement Cards -->
        <div 
          v-for="(achievement, index) in additionalAchievements" 
          :key="`additional-${index}`"
          class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
        >
          <div class="flex items-center space-x-4 mb-4">
            <div :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center',
              index === 0 ? 'bg-green-500' : 'bg-red-500'
            ]">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">{{ achievement.title }}</h4>
              <p class="text-amber-200 text-sm">{{ achievement.issuer }}</p>
            </div>
          </div>
          <p class="text-amber-100 text-sm">
            {{ achievement.description }}
          </p>
        </div>
      </div>

      <!-- Statistics -->
      <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-white mb-4">{{ $t('achievements.statistics.title') }}</h3>
          <p class="text-lg text-amber-100 max-w-2xl mx-auto">
            {{ $t('achievements.statistics.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            v-for="(stat, index) in statisticsItems" 
            :key="`stat-${index}`"
            class="text-center"
          >
            <div :class="[
              'text-4xl font-bold mb-2',
              getStatisticColor(index)
            ]">{{ stat.value }}</div>
            <p class="text-amber-100 font-medium">{{ stat.label }}</p>
            <p class="text-amber-200 text-sm">{{ stat.unit }}</p>
          </div>
        </div>
      </div>

      <!-- Recognition Section -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-white mb-6">{{ $t('achievements.recognition.title') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(item, index) in recognitionItems" 
            :key="`recognition-${index}`"
            class="text-center"
          >
            <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                <path v-else-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="text-white font-semibold text-lg mb-2">{{ item.title }}</h4>
            <p class="text-amber-100/80">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseSection from '@/components/ui/BaseSection.vue'

const { t, tm } = useI18n()

const achievementsTitle = computed(() => {
  return t('achievements.title', { 
    highlight: `<span class="text-amber-600">${t('achievements.titleHighlight')}</span>` 
  })
})

const mainAchievements = computed(() => {
  return tm('achievements.mainAchievements') as Array<{ 
    title: string; 
    description: string; 
    category: string 
  }>
})

const additionalAchievements = computed(() => {
  return tm('achievements.additionalAchievements') as Array<{ 
    title: string; 
    issuer: string; 
    description: string 
  }>
})

const statisticsItems = computed(() => {
  return tm('achievements.statistics.items') as Array<{ 
    value: string; 
    label: string; 
    unit: string 
  }>
})

const recognitionItems = computed(() => {
  return tm('achievements.recognition.items') as Array<{ 
    title: string; 
    description: string 
  }>
})

const getStatisticColor = (index: number) => {
  const colors = [
    'text-amber-300',
    'text-orange-300', 
    'text-red-300',
    'text-pink-300'
  ]
  return colors[index] || colors[0]
}
</script>
