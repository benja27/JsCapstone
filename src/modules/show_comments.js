const showComments = () => {
  let modal = document.querySelector(".modal-pokemon")
    console.log(modal)
    modal.classList.add = "active"
    modal.className = "modal-pokemon active d-flex align-items-center justify-content-center check"
}

const closeModal = () => {    
  let modal = document.querySelector(".modal-pokemon")
  modal.className = "modal-pokemon d-flex align-items-center justify-content-center check"
}

export {showComments, closeModal}