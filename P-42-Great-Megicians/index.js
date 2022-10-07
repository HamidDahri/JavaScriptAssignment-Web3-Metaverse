const magicians = ["hamid", "aqib", "saqib" ,"zameer", "rashid", "zahid"]

const show_magicians = (magicians) => {
    magicians.map( magician => {
        console.log("Magician :",magician);
    })
}

show_magicians(magicians);


// excercise 42

const make_great = (magicians) => {
    for(i=0 ; i<magicians.length;i++){
        magicians[i] = "Good luck today! " + magicians[i]
    }
}

make_great(magicians)

show_magicians(magicians)