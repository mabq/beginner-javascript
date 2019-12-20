function Gallery(gallery) {
  /*
    With this approach, all the code inside this function is duplicated for
    each gallery.
  */

  if (!gallery) {
    console.error('No gallery!');
    return;
  }

  const outerModal = document.querySelector('.modal');
  const modal = {
    state: {
      currentImageRef: undefined,
    },
    elements: {
      image: outerModal.querySelector('img'),
      title: outerModal.querySelector('h2'),
      desc: outerModal.querySelector('p'),
      prevBtn: outerModal.querySelector('.prev'),
      nextBtn: outerModal.querySelector('.next'),
    },
    listeners: {
      onKeydown(e) {
        if (e.key === 'Escape') {
          e.preventDefault();
          modal.methods.close();
        } else if (
          e.key === 'ArrowLeft' ||
          (event.shiftKey && event.keyCode == 9)
        ) {
          e.preventDefault();
          modal.methods.prev();
        } else if (e.key === 'ArrowRight' || event.keyCode == 9) {
          e.preventDefault();
          modal.methods.next();
        }
      },
      onClick(e) {
        if (e.target.closest('.modalInner') === null) {
          modal.methods.close();
        } else {
          if (e.target === modal.elements.nextBtn) {
            modal.methods.next();
          } else if (e.target === modal.elements.prevBtn) {
            modal.methods.prev();
          }
        }
      },
    },
    methods: {
      open(e) {
        e.stopPropagation();
        if (outerModal.classList.contains('open')) {
          return;
        }
        modal.methods.set(e.target);
        outerModal.classList.add('open');
        document.addEventListener('keydown', modal.listeners.onKeydown);
        outerModal.addEventListener('click', modal.listeners.onClick);
      },
      close() {
        outerModal.classList.remove('open');
        document.removeEventListener('keydown', modal.listeners.onKeydown);
        outerModal.removeEventListener('click', modal.listeners.onClick);
      },
      set(imageRef) {
        if (imageRef) {
          imageRef.focus();
          modal.state.currentImageRef = imageRef;
          modal.elements.image.src = imageRef.src;
          modal.elements.title.textContent = imageRef.title;
          modal.elements.desc.textContent = imageRef.dataset.description;
          modal.methods.getNextImageRef()
            ? modal.elements.nextBtn.classList.remove('disabled')
            : modal.elements.nextBtn.classList.add('disabled');
          modal.methods.getPrevImageRef()
            ? modal.elements.prevBtn.classList.remove('disabled')
            : modal.elements.prevBtn.classList.add('disabled');
        }
      },
      getNextImageRef() {
        return modal.state.currentImageRef.nextElementSibling;
      },
      next() {
        modal.methods.set(modal.methods.getNextImageRef());
      },
      getPrevImageRef() {
        return modal.state.currentImageRef.previousElementSibling;
      },
      prev() {
        modal.methods.set(modal.methods.getPrevImageRef());
      },
    },
  };

  const images = gallery.querySelectorAll('img');
  images.forEach(image => {
    image.addEventListener('click', modal.methods.open);
    image.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        modal.methods.open(e);
      }
    });
  });
}

const galleries = document.querySelectorAll('.gallery');
galleries.forEach(gallery => Gallery(gallery));
