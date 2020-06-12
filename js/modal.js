(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    noScroll: document.querySelector("[data-no-scroll]"),
    blureWrapper: document.querySelector("[data-blur-wrapper"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.noScroll.classList.toggle("no-scroll");
    refs.blureWrapper.classList.toggle("blur");
  }
})();
