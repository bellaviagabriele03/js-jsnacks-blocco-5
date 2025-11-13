const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'


//METODO FOR EACH + DECOSTRUZIONE OGGETTO ALL'INTERNO DELLA FUNZIONE 

people.forEach(function({name}){
  console.log(name);
  
})