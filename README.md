# Moonscape

- [Introduction](#introduction)
- [Why Moonscape?](#why-moonscape)
- [Questions, Comments, Feedback?](#questions-comments-feedback)
- [Planned Components](#planned-components)
- [Implemented Components](#implemented-components)
- [Usage](#usage)
  - [Getting Started](#getting-started)

-----

### Introduction

Moonscape is a Vue UI library that contains components I've found useful to reuse. It's my hope to make these as versatile as possible while leaving the design up the developer. 

### Why Moonscape?
I've made use of many libraries and frameworks that provide UI components, most notably Vuetify. However, I've often found myself having to override a lot of styling when utilizing them. So this is my response, a collection of minimal UI components that provide as much functionality as possible while leaving the design up to you.

### Questions, Comments, Feedback?
I welcome anything! Whether you have anything to say about the code, documentation, or anything else, I'm happy to get your input. You can leave an issue here or find a variety of ways to get in touch with me on my website: https://allistermoon.com/

### Implemented Components
- Accordion

### Planned Components
- Dialog Window
- Data Table
- Alerts

## Usage

#### Getting Started

This uses Vue 3, earlier versions will not be compatible.  
This library is available on npm as `@alyx/vue-moonscape`.

My focus on this library is to get the core functionality of a UI component and provide that free of any and all styling. These components are all suffixed as `Renderless`. However, if you want to use a component that contains some basic styling/layout that you can build off of, I will have those available as well. For example, there is `Accordion` which has styling and `AccordionRenderless` which contains only the functionality.

To bring in the entire set of components, you can include the module like so in your main entry file:

```js
import { createApp } from 'vue'
import VueMoonscape from '@alyx/vue-moonscape'

import App from './App.vue'

createApp(App)
  .use(VueMoonscape)
  .mount('#app')
```

If you want to use the rendered components you'll need to include the styles as well, for example if you are using the standard `vue-cli` setup that contains a style parser:
```js
import VueMoonscape from '@alyx/vue-moonscape'
import '@alyx/vue-moonscape/dist/vue-moonscape.css'
```
