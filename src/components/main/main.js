import { headerContainer } from '../header/header'
import './main.css'
headerContainer

export const mainCreator = () => {
  const main = document.createElement('main')
  const mainDiv = document.createElement('div')
  mainDiv.className = 'resultado-busqueda'
  const mainButton = document.createElement('button')
  mainButton.className = 'apagado'
  mainButton.textContent = 'Mostrar más'
  mainButton.id = 'mostrar-mas'
  const h1 = document.createElement('h1')
  h1.textContent = 'Todavía no has buscado imágenes'
  h1.className = 'title'
  main.append(h1, mainDiv, mainButton)
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
let keyword = ''
let accessKey = '7I3Vyi7nEZ63nwmbqhAe16woZmgIiaVI7EybF8Obz7A'
let page = 1

export async function buscarImagenes() {
  keyword = cajaBusqueda.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`
  const response = await fetch(url)
  const data = await response.json()

  if (page === 1) {
    resultadoBusqueda.innerHTML = ''
  }

  const resultados = data.results
  if (resultados) {
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

  mostrarMas.classList.toggle('apagado')
  h1.className = 'apagado'
}

formBusqueda.addEventListener('submit', (e) => {
  e.preventDefault()
  page = 1
  buscarImagenes()
})

mostrarMas.addEventListener('click', () => {
  page++
  buscarImagenes()
  mostrarMas.classList.toggle('apagado')
})
