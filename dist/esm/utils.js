const camelizeRE = /-(\w)/g;
const camelize = (str) => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = (str) => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps(propsList) {
  const res = {};
  propsList.forEach((key) => {
    res[key] = undefined;
  });
  return res
}

function cloneElementsToShadowRoot(shadowRoot, elements) {
  elements.forEach((el) => shadowRoot.appendChild(el.cloneNode(true)));
}

function getAllStyles(target, selector, filter) {
  return filter
    ? Array.from(target.querySelectorAll(selector)).filter(filter)
    : Array.from(target.querySelectorAll(selector))
}

function observeStyleChanges(callback, target, selector, filter, observeOptions) {
  return new MutationObserver((mutations, observer) => {
    mutations.forEach((mutation) => {
      const matchedElements = Array.from(mutation.addedNodes).filter(
        (node) => node.matches && node.matches(selector)
      );

      if (matchedElements.length > 0) {
        callback(filter ? matchedElements.filter(filter) : matchedElements);
      }
    });
  }).observe(target, observeOptions)
}

function injectHook(options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks(vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach((hook) => {
      hook.call(vm);
    });
  }
}

function createCustomEvent(name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = (val) => /function Boolean/.test(String(val));
const isNumber = (val) => /function Number/.test(String(val));

function convertAttributeValue(value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes(h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode(h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes(node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

export { callHooks, camelize, cloneElementsToShadowRoot, convertAttributeValue, createCustomEvent, getAllStyles, getInitialProps, hyphenate, injectHook, observeStyleChanges, toVNodes };
//# sourceMappingURL=utils.js.map
