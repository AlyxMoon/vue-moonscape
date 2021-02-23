<template>
  <slot
    :open="open"
    :hide="hide"
    :show="show"
    :toggle="toggle"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AccordionRenderless',

  emits: ['hide', 'show', 'toggle'],

  data: () => ({
    open: false,
  }),

  methods: {
    hide (): void {
      this.open = false
      this.$emit('hide')
    },

    show (): void {
      this.open = true
      this.$emit('show')
    },

    toggle (): void {
      this.open = !this.open
      this.$emit('toggle', this.open)
    },
  },
})
</script>
