import { nextTick } from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
import Component from '@/components/Accordion/Accordion.renderless.vue'

describe('Accordion.renderless.vue', () => {
  it('does not explode', () => {
    const wrapper = shallowMount(Component)

    expect(wrapper).toBeTruthy()
  })

  it('starts with expected defaults', () => {
    const wrapper = shallowMount(Component)

    expect(wrapper.vm.$data.open).toBe(false)
  })

  it('changes value of open when toggle() method is used', () => {
    const wrapper = shallowMount(Component)

    wrapper.vm.toggle()
    expect(wrapper.vm.$data.open).toBe(true)

    wrapper.vm.toggle()
    expect(wrapper.vm.$data.open).toBe(false)
  })

  it('changes value of open to false when hide() method is used', () => {
    const wrapper = shallowMount(Component, {
      data: () => ({ open: true }),
    })

    wrapper.vm.hide()
    expect(wrapper.vm.$data.open).toBe(false)
  })

  it('changes value of open to true when show() method is used', () => {
    const wrapper = shallowMount(Component)

    wrapper.vm.show()
    expect(wrapper.vm.$data.open).toBe(true)
  })

  it('emits the "toggle" event when toggle() method is used', () => {
    const wrapper = shallowMount(Component)

    wrapper.vm.toggle()
    expect(wrapper.emitted().toggle.length).toBe(1)
    wrapper.vm.toggle()
    expect(wrapper.emitted().toggle).toEqual([[true], [false]])
  })

  it('emits the "hide" event when hide() method is used', () => {
    const wrapper = shallowMount(Component)

    wrapper.vm.hide()
    expect(wrapper.emitted().hide.length).toBe(1)
  })

  it('emits the "show" event when show() method is used', () => {
    const wrapper = shallowMount(Component)

    wrapper.vm.show()
    expect(wrapper.emitted().show.length).toBe(1)
  })

  it('displays nothing by default', () => {
    const wrapper = mount(Component)
    expect(wrapper.html()).toBe('')
  })

  it('displays content passed to it via a slot', () => {
    const html = '<div class="test">Hello World!</div>'

    const wrapper = mount(Component, {
      slots: { default: html },
    })

    expect(wrapper.html()).toBe(html)
  })

  it('passes data to slot content | open', async () => {
    const html = `
      <template v-slot:default="props">
        <span class="status">{{ props.open }}</span>
      </template>
    `
    const wrapper = mount(Component, {
      slots: { default: html },
    })

    expect(wrapper.get('.status').element.textContent).toBe('false')
    wrapper.vm.show()
    await nextTick()
    expect(wrapper.get('.status').element.textContent).toBe('true')
  })

  it('passes data to slot content | hide(), show(), toggle()', () => {
    const html = `
      <template v-slot:default="props">
        <button class="hide" @click="props.hide"></button>
        <button class="show" @click="props.show"></button>
        <button class="toggle" @click="props.toggle"></button>
      </template>
    `

    const wrapper = mount(Component, {
      slots: { default: html },
    })

    wrapper.get('.hide').trigger('click')
    expect(wrapper.emitted('hide')?.length).toBe(1)
    expect(wrapper.emitted('show')?.length).toBe(undefined)
    expect(wrapper.emitted('toggle')?.length).toBe(undefined)

    wrapper.get('.show').trigger('click')
    expect(wrapper.emitted('hide')?.length).toBe(1)
    expect(wrapper.emitted('show')?.length).toBe(1)
    expect(wrapper.emitted('toggle')?.length).toBe(undefined)

    wrapper.get('.toggle').trigger('click')
    expect(wrapper.emitted('hide')?.length).toBe(1)
    expect(wrapper.emitted('show')?.length).toBe(1)
    expect(wrapper.emitted('toggle')?.length).toBe(1)
  })
})
