export default function initEventGalery() {
   const galery = document.querySelectorAll('[data-projectos="galery"] img')
   const galeryContent = document.querySelectorAll('[data-projectos="galery"] p')
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
} 