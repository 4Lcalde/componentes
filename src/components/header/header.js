import { arrayInicio, iconos } from '../plantillas/plantillas.js'
import './header.css'

export const headerContainer = () => {
  //HEADER
  const header = document.createElement('header')

  //LOGO
  const logo = document.createElement('img')
  const aImg = document.createElement('a')
  logo.src = './assets/logo.png'
  logo.className = 'logo'
  logo.alt = 'Logo'
  aImg.append(logo)

  //NAV
  const nav = document.createElement('nav')
  nav.className = 'off'
  const toggleButton = document.createElement('button')
  toggleButton.className = 'toggleButton'
  const toggle = document.createElement('img')
  toggleButton.append(toggle)
  toggle.src = './assets/toggle.svg'
  toggle.id = 'toggle'
  toggle.className = 'closed'
  const loginContainer = document.createElement('div')
  loginContainer.className = 'login-container'
  let navUl = document.createElement('ul')
  navUl.className = 'buttonsUl'

  // BUCLE CREAR BOTONES IZQ
  for (const item of arrayInicio) {
    const button = document.createElement('button')
    button.className = 'principal'
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = item
    button.append(a)
    li.append(button)
    navUl.append(li)
  }

  // BUSCADOR
  const divBuscador = document.createElement('div')
  divBuscador.className = 'div-buscador'
  const buscador = document.createElement('form')
  buscador.id = 'form-busqueda'
  const input = document.createElement('input')
  input.type = 'text'
  input.placeholder = 'Qué estás buscando...'
  input.id = 'caja-busqueda'
  const SearchButton = document.createElement('button')
  const SearchButtonImg = document.createElement('img')
  SearchButtonImg.className = 'lupa'
  SearchButton.className = 'principal'
  SearchButtonImg.src = './assets/lupa.svg'
  SearchButton.append(SearchButtonImg)
  buscador.append(input, SearchButton)
  divBuscador.append(buscador)

  // BOTONES DERECHA
  const divButtons = document.createElement('div')

  const buttonsUl = document.createElement('ul')
  buttonsUl.className = 'buttonsUl'
  divButtons.append(buttonsUl)
  divButtons.className = 'div-buttons'

  for (const icon of iconos) {
    const li = document.createElement('li')
    const button = document.createElement('button')
    button.classList.add('icon')

    const img = document.createElement('img')
    img.classList.add('navButtons')
    img.src = icon
    button.append(img)
    li.append(button)
    buttonsUl.append(li)
  }

  //AÑADIR ELEMENTOS

  loginContainer.append(navUl)
  header.append(logo, loginContainer, divBuscador, toggleButton, divButtons)
  document.body.append(header)
}

headerContainer()

const toggleButton = document.querySelector('.toggleButton')
const buttonsUl = document.querySelector('.buttonsUl')
const divbuttons = document.querySelector('.div-buttons')

toggleButton.addEventListener('click', () => {
  buttonsUl.classList.toggle('cerrado')
  divbuttons.classList.toggle('cerrado')
})

const logoImg = document.querySelector('.logo')

logoImg.addEventListener('click', () => {
  location.reload()
})
