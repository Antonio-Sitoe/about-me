function initAcordion() {
   const acordionH3 = document.querySelectorAll('.dayle-div h3')
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
initAcordion()

function tables() {
   const tablessMenu = document.querySelectorAll('.js-tablesmenu li')
   const tablescontent = document.querySelectorAll('.js-tablescontent p')
   const ativeClass = 'ativeClass'
   tablescontent[0].classList.add(ativeClass)
   function tabClass(index) {
      tablescontent.forEach((item) => {
         item.classList.remove(ativeClass)
      })
      tablescontent[index].classList.add(ativeClass)
   }
   tablessMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
         tabClass(index)
      })
   })
}tables()