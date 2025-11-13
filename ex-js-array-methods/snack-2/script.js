const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// METODO MAP + decostruzione all'interno della funzione 
const peopleMap = people.map(function({name}){
  
  console.log(name);
  
})