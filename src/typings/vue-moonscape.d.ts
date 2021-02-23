
declare module '@alyx/vue-moonscape' {
  import { App, Component } from 'vue'

  export declare type Accordion = Component
  export declare type AccordionRenderless = Component

  declare type install = (app: App) => void

  export default {
    install,
  }
}
