const persons = [
  { 'name': 'Peter', age: 21 },
  { 'name': 'Mark', age: 28 },
  { 'name': 'Josn', age: 19 },
  { 'name': 'Jane', age: 31 },
  { 'name': 'Tony', age: 35 }
];

const newAge = persons.filter(item => item.age > 21);
console.log(newAge);