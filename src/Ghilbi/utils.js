// returns a random integer between the min/max

  // document element selector
  export const DOM = {
    get: (selector) => document.querySelector(selector),
    getAll: (selector) => [...document.querySelectorAll(selector)],
  }



  export function getNodes(parentSelector) {
    const el = DOM.get(parentSelector)

    if (!el) return {}

    const allowedNodes = ['div', 'span', 'svg', 'g', 'ellipse', 'path'].map(
      (node) => `${parentSelector} ${node}`
    )

    const children = DOM.getAll(allowedNodes.join(','))

    children.forEach((child) => {
      if (child.classList[0]) {
        const childClass = child.classList[0].trim()
        el[camelCase(childClass)] = child || `.${childClass}`
      }
    })

    return el
  }
