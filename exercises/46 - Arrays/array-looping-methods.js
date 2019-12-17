const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley',
    },
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep',
    },
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer',
    },
  },
  {
    birthday: 'August 9, 1983',
    names: {
      first: 'Manuel',
      last: 'Banderas',
    },
  },
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

// /*Looping Methods*/
// function getAge(dateString) {
//   var today = new Date();
//   var birthDate = new Date(dateString);
//   var age = today.getFullYear() - birthDate.getFullYear();
//   var m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//     age -= 1;
//   }
//   return age;
// }

// const cleanPeople = people.map(function(e) {
//   return {
//     fullName: `${e.names.first} ${e.names.last}`,
//     age: getAge(e.birthday),
//   };
// });

// const over40 = people.filter(e => getAge(e.birthday) > 40);

// console.table(over40);

const students = [
  {
    id: '11ce',
    first_name: 'Dall',
    last_name: 'Puckring',
  },
  {
    id: '2958',
    first_name: 'Margarete',
    last_name: 'Brandi',
  },
  {
    id: '565a',
    first_name: 'Bendicty',
    last_name: 'Woodage',
  },
  {
    id: '3a16',
    first_name: 'Micki',
    last_name: 'Mattes',
  },
  {
    id: 'f396',
    first_name: 'Flory',
    last_name: 'Gladeche',
  },
  {
    id: 'de5f',
    first_name: 'Jamill',
    last_name: 'Emilien',
  },
  {
    id: '54cb',
    first_name: 'Brett',
    last_name: 'Aizikowitz',
  },
  {
    id: '9135',
    first_name: 'Lorry',
    last_name: 'Smallman',
  },
  {
    id: '978f',
    first_name: 'Gilly',
    last_name: 'Flott',
  },
];

// function findStudentByProp(property) {
//   return function(value) {
//     return students.find(e => e[property] === value);
//   };
// }

// const findById = findStudentByProp('id');
// const s1 = findById('9135');

// const findByFirstName = findStudentByProp('first_name');
// const s2 = findByFirstName('Brett');

// const findByLastName = findStudentByProp('last_name');
// const s3 = findByLastName('Emilien');

// console.log(s1);
// console.log(s2);
// console.log(s3);

const inventory = [
  { type: 'shirt', price: 4000 },
  { type: 'pants', price: 4532 },
  { type: 'socks', price: 234 },
  { type: 'shirt', price: 2343 },
  { type: 'pants', price: 2343 },
  { type: 'socks', price: 542 },
  { type: 'pants', price: 123 },
  { type: 'flannels', price: 400 },
];

// const total = inventory.reduce((acc, e) => acc + e.price, 0);
// console.log(total);

const inventoryReport = inventory.reduce((acc, e) => {
  acc[e.type] = acc[e.type] || {};
  acc[e.type].value = (acc[e.type].value || 0) + e.price;
  acc[e.type].count = (acc[e.type].count || 0) + 1;
  acc[e.type].averageValue = acc[e.type].value / acc[e.type].count;
  return acc;
}, {});
console.log(inventoryReport);
