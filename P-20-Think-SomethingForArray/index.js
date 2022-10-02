const items = ["egypt", "Pakistan", "India" , "Russia" , "Paris" , "Iran" , "Turkey"];
let Countries = []; //empty list

//function to create a new list

console.log(`The items = ${items}`);

const fun = (somthing) => {
     somthing.map(country => {
        Countries.push(country);
     })
}

fun(items); // run the function

console.log(Countries); //print the list of countries
