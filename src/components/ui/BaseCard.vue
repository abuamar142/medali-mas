<template>
  <div :class="cardClasses">
    <div
      v-if="$slots.image || image"
      class="relative overflow-hidden"
    >
      <slot name="image">
        <img 
          v-if="image"
          :src="image"
          :alt="imageAlt"
          :class="imageClasses"
          loading="lazy"
        >
      </slot>
      <div
        v-if="overlay"
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
    
    <div
      v-if="$slots.default || $slots.header || $slots.content"
      :class="contentClasses"
    >
      <div
        v-if="$slots.header"
        class="mb-4"
      >
        <slot name="header" />
      </div>
      
      <div v-if="$slots.content">
        <slot name="content" />
      </div>
      
      <slot />
    </div>
    
    <div
      v-if="$slots.footer"
      :class="footerClasses"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
  image?: string
  imageAlt?: string
  imageClass?: string
  overlay?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  rounded: 'lg',
  shadow: 'md',
  hover: true,
  imageAlt: '',
  imageClass: '',
  overlay: false,
  clickable: false
})

const cardClasses = computed(() => {
  const baseClasses = [
    'relative overflow-hidden transition-all duration-300'
  ]

  // Variant classes
  const variantClasses = {
    default: ['bg-white'],
    elevated: ['bg-white shadow-lg'],
    outlined: ['bg-white border border-gray-200'],
    filled: ['bg-gray-50']
  }

  // Rounded classes
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-2xl'
  }

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }

  const classes = [
    ...baseClasses,
    ...variantClasses[props.variant],
    roundedClasses[props.rounded],
    shadowClasses[props.shadow]
  ]

  if (props.hover) {
    classes.push('hover:shadow-xl hover:-translate-y-1 group')
  }

  if (props.clickable) {
    classes.push('cursor-pointer')
  }

  return classes.join(' ')
})

const contentClasses = computed(() => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8'
  }

  return paddingClasses[props.padding]
})

const footerClasses = computed(() => {
  const paddingClasses = {
    none: '',
    sm: 'px-3 pb-3',
    md: 'px-4 pb-4',
    lg: 'px-6 pb-6',
    xl: 'px-8 pb-8'
  }

  return `border-t border-gray-100 pt-4 ${paddingClasses[props.padding]}`
})

const imageClasses = computed(() => {
  const baseImageClasses = 'w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
  return `${baseImageClasses} ${props.imageClass}`
})
</script>
