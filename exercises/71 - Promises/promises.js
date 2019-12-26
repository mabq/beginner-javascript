const menu = {
  '#51': ['tomate', 'mozarella'],
  '#53': ['tomate', 'ajo', 'alcaparras', 'oregano'],
  '#54': ['tomate', 'cebolla', 'oregano'],
  '#56': ['tomate', 'mozarella', 'cebolla', 'pesto', 'salsa de albahaca'],
  '#61': ['tomate', 'mozarella', 'champiñones'],
  '#75': ['tomate', 'mozarella', 'berenjena', 'aceitunas'],
  '#77': ['tomate', 'mozarella', 'queso paremsano', 'rúcula'],
  '#89': ['vegetales'],
  '#95': [
    'tomate',
    'mozarella',
    'melazane',
    'zuquini',
    'pimiento',
    'champiñones',
  ],
  '#97': ['tomate', 'mozarella', '4 quesos'],
};

function makePizza(ingredients = []) {
  const amountOfTimeToBake = ingredients.length * 200;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Pizza is ready > ${ingredients.join(', ')}.`);
    }, amountOfTimeToBake);
  });
}

function parallel() {
  Object.keys(menu).forEach(key => {
    makePizza(menu[key]).then(pizza => {
      console.log(pizza);
    });
  });
}

function parallel2() {
  Object.keys(menu).forEach(async key => {
    const pizza = await makePizza(menu[key]);
    console.log(pizza);
  });
}

function sequence() {
  const menuKeys = Object.keys(menu);
  makePizza(menu[menuKeys[0]])
    .then(pizza => {
      console.log(pizza);
      return makePizza(menu[menuKeys[1]]);
    })
    .then(pizza => {
      console.log(pizza);
      return makePizza(menu[menuKeys[2]]);
    })
    .then(pizza => {
      console.log(pizza);
      return makePizza(menu[menuKeys[3]]);
    })
    .then(pizza => {
      console.log(pizza);
      return makePizza(menu[menuKeys[4]]);
    })
    .then(pizza => {
      console.log(pizza);
      return makePizza(menu[menuKeys[5]]);
    })
    .then(pizza => {
      console.log(pizza);
      return makePizza(menu[menuKeys[6]]);
    })
    .then(pizza => {
      console.log(pizza);
      return makePizza(menu[menuKeys[7]]);
    })
    .then(pizza => {
      console.log(pizza);
      return makePizza(menu[menuKeys[8]]);
    })
    .then(pizza => {
      console.log(pizza);
      return makePizza(menu[menuKeys[9]]);
    })
    .then(pizza => {
      console.log(pizza);
    });
}

async function sequence2() {
  const menuKeys = Object.keys(menu);
  console.log(await makePizza(menu[menuKeys[0]]));
  console.log(await makePizza(menu[menuKeys[1]]));
  console.log(await makePizza(menu[menuKeys[2]]));
  console.log(await makePizza(menu[menuKeys[3]]));
  console.log(await makePizza(menu[menuKeys[4]]));
  console.log(await makePizza(menu[menuKeys[5]]));
  console.log(await makePizza(menu[menuKeys[6]]));
  console.log(await makePizza(menu[menuKeys[7]]));
  console.log(await makePizza(menu[menuKeys[8]]));
  console.log(await makePizza(menu[menuKeys[9]]));
}

function race() {
  const menuKeys = Object.keys(menu);
  Promise.race([
    makePizza(menu[menuKeys[0]]),
    makePizza(menu[menuKeys[1]]),
    makePizza(menu[menuKeys[2]]),
    makePizza(menu[menuKeys[3]]),
    makePizza(menu[menuKeys[4]]),
    makePizza(menu[menuKeys[5]]),
    makePizza(menu[menuKeys[6]]),
    makePizza(menu[menuKeys[7]]),
    makePizza(menu[menuKeys[8]]),
    makePizza(menu[menuKeys[9]]),
  ]).then(pizza => {
    console.log(pizza);
  });
}

async function race2() {
  const menuKeys = Object.keys(menu);
  const pizza = await Promise.race([
    makePizza(menu[menuKeys[0]]),
    makePizza(menu[menuKeys[1]]),
    makePizza(menu[menuKeys[2]]),
    makePizza(menu[menuKeys[3]]),
    makePizza(menu[menuKeys[4]]),
    makePizza(menu[menuKeys[5]]),
    makePizza(menu[menuKeys[6]]),
    makePizza(menu[menuKeys[7]]),
    makePizza(menu[menuKeys[8]]),
    makePizza(menu[menuKeys[9]]),
  ]);
  console.log(pizza);
}

function all() {
  const menuKeys = Object.keys(menu);
  Promise.all([
    makePizza(menu[menuKeys[0]]),
    makePizza(menu[menuKeys[1]]),
    makePizza(menu[menuKeys[2]]),
    makePizza(menu[menuKeys[3]]),
    makePizza(menu[menuKeys[4]]),
    makePizza(menu[menuKeys[5]]),
    makePizza(menu[menuKeys[6]]),
    makePizza(menu[menuKeys[7]]),
    makePizza(menu[menuKeys[8]]),
    makePizza(menu[menuKeys[9]]),
  ]).then(pizzas => {
    pizzas.forEach(pizza => console.log(pizza));
  });
}

async function all2() {
  const menuKeys = Object.keys(menu);
  const pizzas = await Promise.all([
    makePizza(menu[menuKeys[0]]),
    makePizza(menu[menuKeys[1]]),
    makePizza(menu[menuKeys[2]]),
    makePizza(menu[menuKeys[3]]),
    makePizza(menu[menuKeys[4]]),
    makePizza(menu[menuKeys[5]]),
    makePizza(menu[menuKeys[6]]),
    makePizza(menu[menuKeys[7]]),
    makePizza(menu[menuKeys[8]]),
    makePizza(menu[menuKeys[9]]),
  ]);
  pizzas.forEach(pizza => console.log(pizza));
}

all2();
