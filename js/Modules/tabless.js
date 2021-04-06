
export default function tables() {
   const tablessMenu = document.querySelectorAll('[data-tables="menu"] li')
   const tablescontent = document.querySelectorAll('[data-tables="content"] p')
   const ativeClass = 'ativeClass';
   tablescontent[0].classList.add(ativeClass)
   function tabClass(index) {
      tablescontent.forEach((item) => {
         item.classList.remove(ativeClass)
      }) ;tablescontent[index].classList.add(ativeClass)
   }
   tablessMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
         tabClass(index)
      })
   })
}