export default function menuMobile() {

    const menuButton = document.querySelector('[data-menu="button"]')
    const menuLista = document.querySelector('[data-menu="lista"]')

    const eventos = ['touchstart', 'click']
    function menuOpen() {
        menuLista.classList.toggle('ative')
        window.addEventListener('click', handleEventCLick)
    }

    eventos.forEach((event) => {
        menuButton.addEventListener(event, menuOpen)
    })

    function handleEventCLick(e) {
        const lis = menuLista.querySelectorAll('li');
        if (e.target !== menuLista && e.target !== menuButton && e.target !== lis[0] && e.target !== lis[1] && e.target !== lis[2]) {
            menuLista.classList.remove('ative')
        }
    }

}