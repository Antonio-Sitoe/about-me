export default function initAnimaScroll() {
   const secoes = document.querySelectorAll('[data-js="scroll"]')
   if (secoes.length) {
      const pegarTela = window.innerHeight * 0.7;
      function animaScroll() {
         secoes.forEach((section) => {
            const secaoTopo = section.getBoundingClientRect().top;
            const calculo = (secaoTopo - pegarTela) < 0
            if (calculo) {
               section.classList.add('ativo')
            }
            else {
               section.classList.remove('ativo')
            }
         })
      } 
      animaScroll()
      window.addEventListener('scroll', animaScroll)
   }
}
