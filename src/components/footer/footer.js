soporte
compra
nosotros
contacto
final

import {
  compra,
  contacto,
  final,
  nosotros,
  soporte
} from '../plantillas/plantillas'
import './footer.css'

export const footer = () => {
  const footer = document.createElement('footer')

  const footerContainer = document.createElement('div')
  footerContainer.classList.add('footerContainer')
  const footerEnd = document.createElement('div')
  const aFooterEnd = document.createElement('a')
  footerEnd.append(aFooterEnd)
  aFooterEnd.textContent = final

  footerEnd.classList.add('footerEnd')
  const soporteDiv = document.createElement('div')
  const compraDiv = document.createElement('div')
  const nosotrosDiv = document.createElement('div')
  const contactoDiv = document.createElement('div')

  const footerList = (list, div) => {
    const ul = document.createElement('ul')

    for (const item of list) {
      const li = document.createElement('li')
      li.classList.add('footerList')
      const a = document.createElement('a')
      a.textContent = item
      li.append(a)
      ul.append(li)
    }
    div.appendChild(ul)
  }

  footerList(soporte, soporteDiv)
  footerList(compra, compraDiv)
  footerList(nosotros, nosotrosDiv)
  footerList(contacto, contactoDiv)

  footerContainer.append(soporteDiv, compraDiv, nosotrosDiv, contactoDiv)
  footer.append(footerContainer, footerEnd)
  document.body.append(footer)

  document.body.append(footer)
}

footer()
