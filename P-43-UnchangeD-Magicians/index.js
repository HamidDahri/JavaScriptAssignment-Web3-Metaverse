const magicians = ["hamid", "aqib", "saqib" ,"zameer", "rashid", "zahid"]

const show_magicians = (magicians) => {
    magicians.map( magician => {
        console.log("Magician :",magician);
    })
}

show_magicians(magicians);

new_array = [];

const make_great = (magicians) => {
    for(i=0 ; i<magicians.length-1;i++){
        
        new_array.push("Good luck today! " + magicians[i]); 
    }
    return new_array;
}

make_great(magicians)
console.log(magicians);
console.log(new_array);

