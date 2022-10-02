const places = ['dubai', 'turkey' , 'saudi arabia' , 'egypt' , 'paris'];

console.log("Original Order", places); //in original order

let list= [];  // new empty list

places.map( place => {  // adding places into the new list
    list.push(place);
})

console.log("alphabetical order",list.sort()); // alphabetical order
console.log("Original Order",places);   // orginal order

console.log('Reverse alphabetical order',list.reverse());
console.log("Original Order",places);   // orginal order

console.log("Reverse the Order of Original", places.reverse());
console.log("Reverse the Order of Original again to show original order", places.reverse());


console.log("original array in alpabetical order",places.sort());
console.log("original array in reverse alpabetical order",places.reverse());
