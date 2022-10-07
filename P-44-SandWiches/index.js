const items = ["bacon", "avocado", "mozzarella" ,"alfalfa" , "sprouts" , "tomatoes" , "pesto" ]  


const fun = (person,items) => {
    
    console.log(`Summery of item Selected by "${person}" fro Sandwich`,items);
}

fun("hamid",{item1: "bacon" , item2 : "avocado"});
fun("Rashid",{item1: "bacon" , item2 : "avocado" , item3 : "pesto"});
fun("ZAHID",{item1: "bacon" , item2 : "avocado" ,item3 : "mozzarella" , item4 : "alfalfa"});
