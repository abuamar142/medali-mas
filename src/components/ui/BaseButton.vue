<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :target="target"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <span
      v-if="loading"
      class="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"
    />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  rounded?: boolean
  fullWidth?: boolean
  to?: string
  href?: string
  target?: string
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  rounded: false,
  fullWidth: false,
  tag: 'button'
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center font-semibold transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transform hover:scale-105 active:scale-95'
  ]

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-gradient-to-r from-amber-500 to-orange-600',
      'hover:from-amber-600 hover:to-orange-700',
      'text-white shadow-lg hover:shadow-xl',
      'focus:ring-amber-500'
    ],
    secondary: [
      'bg-gray-100 hover:bg-gray-200',
      'text-gray-800',
      'border border-gray-300',
      'focus:ring-gray-500'
    ],
    outline: [
      'border-2 border-amber-500',
      'text-amber-600 hover:bg-amber-500 hover:text-white',
      'focus:ring-amber-500'
    ],
    ghost: [
      'text-gray-600 hover:text-amber-600',
      'hover:bg-gray-100',
      'focus:ring-gray-500'
    ],
    danger: [
      'bg-red-500 hover:bg-red-600',
      'text-white',
      'focus:ring-red-500'
    ]
  }

  // Size classes
  const sizeClasses = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const classes = [
    ...baseClasses,
    ...variantClasses[props.variant],
    sizeClasses[props.size]
  ]

  if (props.rounded) {
    classes.push('rounded-full')
  } else {
    classes.push('rounded-lg')
  }

  if (props.fullWidth) {
    classes.push('w-full')
  }

  return classes.join(' ')
})

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
