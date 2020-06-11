import _Vue, { Component, AsyncComponent } from 'vue'

interface WrapOptions {
  globalStyles?: {
    target?: HTMLElement,
    selector?: string,
    filter?(el: HTMLElement): Boolean,
    observeOptions?: Object
  },
  jsonMapping?: Boolean
}

declare function wrap(
  Vue: typeof _Vue,
  Component: Component | AsyncComponent,
  wrapOptions?: WrapOptions
): HTMLElement

export default wrap
