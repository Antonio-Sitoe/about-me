function initModal() {
   const modalopen = document.querySelector(`.lite`)

   modalopen.addEventListener('click', function () {
      const modalOverlay = document.querySelector(`.modal-overlay`)
      modalOverlay.classList.add('ative')
      if (modalOverlay.classList.contains('ative')) {
         const close = document.querySelector('.close')
         close.addEventListener('click', function () {
            modalOverlay.classList.remove('ative')
         })
      }
   })
} initModal()


function initEventGalery() {
   const galery = document.querySelectorAll('.galery img')
   const galeryContent = document.querySelectorAll('.galery p')
   if (galery.length && galery.length) {
      function ativeEvent(index) {
         galeryContent[index].classList.add('ativeEnvent')
      }
      galery.forEach((item, index) => {
         item.addEventListener('click', () => {
            ativeEvent(index)
         })
      })
   }
} initEventGalery()


function initAnimaScroll() {
   const secoes = document.querySelectorAll('.js-scroll')
   //--10 verificar se o sections existe atravez do if.lengh
   if (secoes.length) {
      //--6-fazer o calculo que pega 60% da tela com uma variavel
      const pegarTela = window.innerHeight * 0.6;
      //--1 funcao que anima scroll que dispara
      function animaScroll() {
         secoes.forEach((section) => {
            //--3-saber a distancia que cada elemento esta do top
            const secaoTopo = section.getBoundingClientRect().top;

            //--7-criar uma outra variavel que ajuda a fazer calculo
            const calculo = (secaoTopo - pegarTela) < 0
            //-4-verificar se a variavel e menor que 0
            if (calculo) {
               //-5- adicionar uma classe ai no if
               section.classList.add('ativo')
            }//--9 adicionar o else que faz a animacao sair 
            else {
               section.classList.remove('ativo')
            }
         })
      } animaScroll()
   }
   //--2 adicionar o evento scroll
   window.addEventListener('scroll', animaScroll)
}initAnimaScroll() 





