import outsideClick from './outsideclick.js';

export default function menuMobile() {

}

const menuButton = document.querySelector('[data-menu="button"]')
const menuLista = document.querySelector('[data-menu="lista"]')

const eventos = ['touchstart', 'click']



function menuOpen() {
    menuLista.classList.add('ative')
}



eventos.forEach((event) => {
    menuButton.addEventListener(event, menuOpen)
})