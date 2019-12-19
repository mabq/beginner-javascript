const state = {
  items: [],
};

const dom = {
  elements: {
    form: document.querySelector('.shopping'),
    list: document.querySelector('.list'),
  },
  methods: {
    renderList() {
      dom.elements.list.innerHTML = list.toHtml();
    },
  },
};

const list = {
  toHtml() {
    return state.items.map(item.toHtml).join('');
  },
};

const item = {
  toHtml({ name, id, complete }) {
    checked = complete ? 'checked' : '';
    return `
    <li class="shopping-item"> 
      <input type="checkbox" id="${id}" name="${name}" ${checked}>
      <label class="itemName" for="${id}">${name}</label>
      <button aria-label="Remove ${name}">Borrar</button>
    </li>
    `;
  },
  add(name) {
    state.items.push({
      name,
      id: Date.now(),
      complete: false,
    });
    customEvents.listUpdate.emit();
  },
  delete(id) {
    state.items = state.items.filter(item => item.id !== Number(id));
    customEvents.listUpdate.emit();
  },
  toogle(id) {
    const item = state.items.find(item => item.id === Number(id));
    if (item) {
      item.complete = !item.complete;
      customEvents.listUpdate.emit();
    }
  },
};

const customEvents = {
  listUpdate: {
    emit() {
      dom.elements.list.dispatchEvent(new CustomEvent('listUpdate'));
    },
    listen() {
      dom.elements.list.addEventListener('listUpdate', listeners.onListUpdate);
    },
  },
};

const storage = {
  items: {
    set() {
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    get() {
      const lsItems = JSON.parse(localStorage.getItem('items'));
      return Array.isArray(lsItems) ? lsItems : undefined;
    },
  },
};

const listeners = {
  onFormSubmit(e) {
    e.preventDefault();
    const itemName = e.currentTarget.item.value.trim(); // currentTarge is the form
    if (itemName) {
      item.add(itemName);
    }
    e.target.reset();
  },
  onListClick(e) {
    e.preventDefault();
    const id = e.target.closest('.shopping-item').querySelector('input').id;
    if (e.target.matches('button')) {
      item.delete(id);
    } else {
      item.toogle(id); // clickedElement puede ser "label", "input" o "li".
    }
  },
  onListUpdate() {
    storage.items.set();
    dom.methods.renderList();
  },
};

dom.elements.form.addEventListener('submit', listeners.onFormSubmit);
dom.elements.list.addEventListener('click', listeners.onListClick); /*** 1 ***/
customEvents.listUpdate.listen();

(function restoreFromLocalStorageOnPageLoad() {
  const lsItems = storage.items.get();
  if (lsItems) {
    state.items = lsItems;
    dom.methods.renderList();
  }
})();

/* ----------------------------------------------------------------------------

1:  Event delegation:
    In order to listen for events on elements that do not exist yet, we must 
    attach a listener on the parent and check the "target" property on the 
    callback function (not the currentTarget).

---------------------------------------------------------------------------- */
