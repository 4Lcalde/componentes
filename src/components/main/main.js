import { headerContainer } from '../header/header'
import './main.css'
headerContainer

export const mainCreator = () => {
  const main = document.createElement('main')
  const mainDiv = document.createElement('div')
  const buttonsDiv = document.createElement('div')
  buttonsDiv.className = 'apagado'
  buttonsDiv.className = 'buttons-div'
  mainDiv.className = 'resultado-busqueda'

  const mainButton = document.createElement('button')
  mainButton.className = 'apagado'
  mainButton.textContent = 'Mostrar más'
  mainButton.id = 'mostrar-mas'

  const clearButton = document.createElement('button')
  clearButton.className = 'apagado'
  clearButton.textContent = 'Limpiar'
  clearButton.id = 'limpiar'

  const h1 = document.createElement('h1')
  h1.textContent = 'Todavía no has buscado imágenes'
  h1.className = 'title'
  buttonsDiv.append(mainButton, clearButton)
  main.append(mainDiv, buttonsDiv)
  document.body.append(main)
}

mainCreator()

const h1 = document.querySelector('.title')

// BUSCADOR
//!FUNCIONALIDAD API UNPLASH
const formBusqueda = document.querySelector('#form-busqueda')
const cajaBusqueda = document.querySelector('#caja-busqueda')
const resultadoBusqueda = document.querySelector('.resultado-busqueda')
const mostrarMas = document.querySelector('#mostrar-mas')
const limpiar = document.querySelector('#limpiar')
let keyword = ''
let accessKey = '7I3Vyi7nEZ63nwmbqhAe16woZmgIiaVI7EybF8Obz7A'
let page = 1

export async function primerDiv() {
  keyword = 'random'
  page = Math.floor(Math.random() * (50 - 1 + 1) + 1)
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`
  const response = await fetch(url)
  const data = await response.json()

  const resultados = data.results
  resultados.map((result) => {
    const imagen = document.createElement('img')
    imagen.src = result.urls.small
    const imagenLink = document.createElement('a')
    imagenLink.href = result.links.html
    imagenLink.target = '_blank'
    imagenLink.appendChild(imagen)

    resultadoBusqueda.appendChild(imagenLink)
  })
}

primerDiv()

export async function buscarImagenes() {
  const main = document.querySelector('.resultado-busqueda')
  const keyword = cajaBusqueda.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`
  const response = await fetch(url)
  const data = await response.json()

  const resultados = data.results
  if (resultados && resultados.length > 0) {
    resultados.map((result) => {
      const imagen = document.createElement('img')
      imagen.src = result.urls.small
      const imagenLink = document.createElement('a')
      imagenLink.href = result.links.html
      imagenLink.target = '_blank'
      imagenLink.appendChild(imagen)

      resultadoBusqueda.appendChild(imagenLink)

      mostrarMas.classList.remove('apagado')
      limpiar.classList.remove('apagado')
    })
  } else {
    const mal = document.createElement('h2')
    mal.textContent = 'No se encuentran resultados'
    mal.className = 'Error'
    main.append(mal)
  }

  h1.className = 'apagado'
}

formBusqueda.addEventListener('submit', (e) => {
  e.preventDefault()
  page = 1
  resultadoBusqueda.innerHTML = ''
  buscarImagenes()
})

mostrarMas.addEventListener('click', () => {
  page++
  buscarImagenes()
})

limpiar.addEventListener('click', () => {
  resultadoBusqueda.innerHTML = ''
  cajaBusqueda.value = ''
  primerDiv()
  mostrarMas.classList = 'apagado'
  limpiar.classList = 'apagado'
})
