export default function initModal() {
   const modalopen = document.querySelector(`[data-btn="btnModal"]`)

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
} 