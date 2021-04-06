export default function menuMobile(){
   const menuHamburguer = document.querySelector('[data-menu]')
   const menuAberto = document.querySelector('[data-menu="aberto"]')
   const eventos = ['click', 'touchstart'];
   
   function callback(){
      menuAberto.classList.add('ative')
   }
   
   
   menuHamburguer.addEventListener('click', callback)
   
}

