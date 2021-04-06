export default function initAcordion() {
   const acordionH3 = document.querySelectorAll('[data-dayle="div"] h3')
   const ativeAcordion = 'ativeAcordion'
   acordionH3[0].classList.add(ativeAcordion)
   acordionH3[0].nextElementSibling.classList.add(ativeAcordion)

   function acordionEvent(index) {
      this.classList.toggle(ativeAcordion)
      this.nextElementSibling.classList.toggle(ativeAcordion)
   }
   acordionH3.forEach((item) => {
      item.addEventListener('click', acordionEvent)
   })
}
