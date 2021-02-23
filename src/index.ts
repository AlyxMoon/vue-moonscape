import { App, Plugin } from 'vue'

import Accordion from '@/components/Accordion/Accordion.vue'
import AccordionRenderless from '@/components/Accordion/Accordion.renderless.vue'

const Module: Plugin = {
  install (app: App): void {
    app.component('MoonscapeAccordion', Accordion)
    app.component('MoonscapeAccordionRenderless', AccordionRenderless)
  },
}

export default Module

export {
  Accordion,
  AccordionRenderless,
}
