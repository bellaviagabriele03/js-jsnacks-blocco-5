const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


const numsPari = nums.filter(function(num){
    return !(num % 2); // !1000 => 0 / !0 = 1  
});

console.log(numsPari);
