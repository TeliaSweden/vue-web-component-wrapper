# @telia/vue-web-component-wrapper-ie11
> Wrap and register a Vue component as a custom element (with Shadow DOM), in IE 11 and beyond.

## Features

### From the original project: [@vue/web-component-wrapper](https://github.com/vuejs/vue-web-component-wrapper):
- Automatically emits Custom Events from `this.$emit()` calls
- Supports passing in slots
- Isolated styles, thanks to Shadow DOM (has limitations with leaking styles in IE 11, [see this section](https://github.com/TeliaSweden/vue-web-component-wrapper-ie11/blob/master/README.md#ie11-warning-note-on-css-encapsulation-when-using-the-shady-dom-polyfill))
- Very simple to use.

### From this fork
- _Best-effort_ IE 11 support thanks to ES5 transpilation, as well as [a work-around to fix a bug in ShadyDOM regarding Mutation Observers](https://github.com/TeliaSweden/vue-web-component-wrapper-ie11/blob/bd385d5641688c83ff32ed26bd4d4268ca197a07/src/index.js#L171). Just make sure to include the polyfill described in the next section.
- If enabled, offers auto-injection of global styles. Can be configured to be selective, too.
- If enabled, exposes "-json" suffixed props based on your source component props, that automatically map JSON to Objects/Arrays back to your source props.


## Usage

``` js
import "@webcomponents/webcomponentsjs";

import Vue from 'vue'
import wrap from '@telia/vue-web-component-wrapper-ie11';
import VueComponent from './VueComponent.vue';

const CustomElement = wrap(Vue, VueComponent, {
    // globalStyles: true,
    // jsonMapping: true,
});

window.customElements.define(
    'vue-component',
    CustomElement,
);
```

Now you can just add `<vue-component>` anywhere in the page, and the component will appear fully loaded, like it was made by the browser itself. This seamless step is arguably the best part of utilizing Web Components.

It works with async components as well - you can pass an async component factory function that returns a Promise, and the function will only be called when an instance of the custom element is created on the page:

``` js
const CustomElement = wrap(Vue, () => import(`VueComponent.vue`))

window.customElements.define('my-element', CustomElement)
```

You can also import or just have a <script> tag point to `@telia/vue-web-component-wrapper-ie11/dist/vue-wc-wrapper.global.js`, which will expose `wrap` as `wrapVueWebComponent` globally on the window object.

## Polyfilling for IE 11

Easiest is to do:

```js
import "@webcomponents/webcomponentsjs";
```

The polyfill bundle with check if the browser supports web components and will apply polyfills as needed. If you want to reduce bundle size even further, that is possible, just consult the [@webcomponents/webcomponentsjs documentation on using their loader](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs).

Whatever you do, do not import the custom elements and other polyfills directly, as it will overwrite native browser functionality for browsers like Chrome, that already  support Web Components.

### IE11 Warning: Note on CSS Encapsulation When Using the Shady DOM polyfill

The styles will leak through to your web components in IE 11 in several cases, like when passing slots to the web component. Make sure you use a way to encapsulate your styles like BEM, Scoped styles (has drawbacks of its own), or CSS Modules. Choose the one that fits you.

## API

### wrap(VueInstance, sourceComponent, wrapOptions?)

Returns a Custom Element, that can be used in the browser-provided `window.customElements.define` call.

#### VueInstance

Type: `object`

Your Vue instance.

#### sourceComponent

Type: `object`

Your source component (can also just be a simple javascript object `{}`, not a separate vue file).

#### wrapOptions?

Type: `object`

##### globalStyles?

Type: `boolean | object`\
Default: `false`

If you want auto-injection of the global styles, set it to `true`.

You can specify more granular rules for global style injection, refer to [this part of the source code](https://github.com/TeliaSweden/vue-web-component-wrapper-ie11/blob/bd385d5641688c83ff32ed26bd4d4268ca197a07/src/index.js#L23) for details. The defaults should be reasonable for most developers.

##### jsonMapping?

Type: `boolean`\
Default: `false`

If you want automatic deserialization of javascript objects and arrays.

Then just pass "my-array-json" like `:my-array-json="JSON.stringify({ a: 1 })"` to your web component, it will parse it to the prop called "myArray" in the vue file as a regular js object again. If the json is invalid it will become "INVALID_JSON". This works for props defined with type `Array` and `Object`

## Interface Proxying Details

### Props

- All `props` declared in the Vue component are exposed on the custom element as its properties. Kebab-case props are converted to camelCase properties, similar to how they are converted in Vue.

- Setting properties on the custom element updates the props passed to the inner Vue component.

- Setting attributes on the custom element updates corresponding declared props. Attributes are mapped to kebab-case. For example, a prop named `someProp` will have a corresponding attribute named `some-prop`.

- Attributes that map to props declared with `type: Boolean` are auto-casted into boolean values in the following rules:

  - `""` or same value as attribute name: -> `true`

  - `"true"` -> `true`

  - `"false"` -> `false`

- Attributes that map to props declared with `type: Number` are auto-casted into numbers if the value is a parsable number.

### Events

Custom events emitted on the inner Vue component are dispatched on the custom element as a `CustomEvent`. Additional arguments passed to `$emit` will be exposed as an Array as `event.detail`.

### Slots

Slots work the same way as expected, including named slots. They also update when changed (using `MutationObserver`).

Scoped slots however, are not supported as they are a Vue specific concept.

### Lifecycle

When the custom element is removed from the document, the Vue component behaves just as if it's inside a `<keep-alive>` and its `deactivated` hook will be called. When it's inserted again, the `activated` hook will be called.

If you wish to destroy the inner component, you'd have to do that explicitly:

``` js
myElement.vueComponent.$destroy()
```

## Acknowledgments

Special thanks to the prior work by @karol-f in [vue-custom-element](https://github.com/karol-f/vue-custom-element).

## License

MIT
