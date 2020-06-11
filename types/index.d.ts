import _Vue, { Component, AsyncComponent } from 'vue'

interface WrapOptions {
  target?: HTMLElement,
  selector?: string,
  filter?(el: HTMLElement): Boolean,
  observeOptions?: Object
}

declare function wrap(
  Vue: typeof _Vue,
  Component: Component | AsyncComponent,
  wrapOptions: Boolean | WrapOptions
): HTMLElement

export default wrap
