const magicians = ["hamid", "aqib", "saqib" ,"zameer", "rashid", "zahid"]

const show_magicians = (magicians) => {
    magicians.map( magician => {
        console.log("Magician :",magician);
    })
}

show_magicians(magicians);