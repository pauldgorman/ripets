const modals = {
    contact: {
      button: document.getElementById("contactButton"),
      modal: document.getElementById("contactFormModal"),
      close: document.getElementById("closeModal"),
    },
    about: {
      button: document.getElementById("aboutButton"),
      modal: document.getElementById("aboutModal"),
      close: document.getElementById("closeAboutModal"),
    },
  };

  Object.values(modals).forEach(({ button, modal, close }) => {
    button.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });