<template>
  <AccordionRenderless v-slot="props">
    <article
      class="moonscape-accordion"
      :class="{ open: props.open }"
    >
      <header
        class="moonscape-accordion-header"
        @click="props.toggle"
      >
        <slot
          name="header"
          v-bind="props"
        />

        <div class="moonscape-accordion-toggle">
          <slot
            name="toggle-icon"
            v-bind="props"
          >
            >
          </slot>
        </div>
      </header>

      <div class="moonscape-accordion-content">
        <slot
          name="content"
          v-bind="props"
        />
      </div>
    </article>
  </AccordionRenderless>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AccordionRenderless from './Accordion.renderless.vue'

export default defineComponent({
  name: 'Accordion',
  components: {
    AccordionRenderless,
  },
})
</script>

<style lang="scss">
.moonscape-accordion {
  --content-display: none;

  &.open {
    --content-display: block;
  }

  &-header {
    display: flex;
    justify-content: space-between;

    cursor: pointer;
  }

  &-content {
    display: var(--content-display);
  }
}
</style>
