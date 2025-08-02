<template>
  <section :id="id" :class="sectionClasses">
    <div :class="containerClasses">
      <!-- Section Header -->
      <div v-if="$slots.header || title || subtitle" :class="headerClasses">
        <slot name="header">
          <h2 v-if="title" :class="titleClasses">
            <span v-html="title"></span>
          </h2>
          <p v-if="subtitle" :class="subtitleClasses">
            {{ subtitle }}
          </p>
        </slot>
      </div>

      <!-- Section Content -->
      <div v-if="$slots.default" :class="contentClasses">
        <slot />
      </div>

      <!-- Section Footer -->
      <div v-if="$slots.footer" :class="footerClasses">
        <slot name="footer" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id?: string
  title?: string
  subtitle?: string
  background?: 'white' | 'gray' | 'gradient' | 'amber' | 'transparent'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  textAlign?: 'left' | 'center' | 'right'
  headerSpacing?: 'sm' | 'md' | 'lg' | 'xl'
  contentSpacing?: 'sm' | 'md' | 'lg' | 'xl'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'
}

const props = withDefaults(defineProps<Props>(), {
  background: 'white',
  padding: 'lg',
  textAlign: 'center',
  headerSpacing: 'lg',
  contentSpacing: 'md',
  maxWidth: '7xl'
})

const sectionClasses = computed(() => {
  const baseClasses = ['relative']

  // Background classes
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 to-amber-50',
    amber: 'bg-gradient-to-br from-amber-50 to-orange-50',
    transparent: 'bg-transparent'
  }

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 lg:py-20',
    xl: 'py-20 lg:py-28'
  }

  return [
    ...baseClasses,
    backgroundClasses[props.background],
    paddingClasses[props.padding]
  ].join(' ')
})

const containerClasses = computed(() => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  }

  return `container mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClasses[props.maxWidth]}`
})

const headerClasses = computed(() => {
  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const spacingClasses = {
    sm: 'mb-8',
    md: 'mb-12',
    lg: 'mb-16',
    xl: 'mb-20'
  }

  return `${textAlignClasses[props.textAlign]} ${spacingClasses[props.headerSpacing]}`
})

const titleClasses = computed(() => {
  return 'text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6'
})

const subtitleClasses = computed(() => {
  const maxWidthClasses = {
    left: '',
    center: 'max-w-3xl mx-auto',
    right: 'max-w-3xl ml-auto'
  }

  return `text-lg sm:text-xl text-gray-600 leading-relaxed ${maxWidthClasses[props.textAlign]}`
})

const contentClasses = computed(() => {
  const spacingClasses = {
    sm: 'mb-8',
    md: 'mb-12',
    lg: 'mb-16',
    xl: 'mb-20'
  }

  return spacingClasses[props.contentSpacing]
})

const footerClasses = computed(() => {
  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return `mt-12 lg:mt-16 ${textAlignClasses[props.textAlign]}`
})
</script>
