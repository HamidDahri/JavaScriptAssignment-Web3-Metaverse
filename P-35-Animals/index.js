const animals = ['dog','impala','horse'];

//printing the list

for(i=0;i<animals.length;i++){
    console.log(animals[i]);
    if(i===2 ){
        for(i=0;i<animals.length;i++){
           if(animals[i].toLowerCase() === "dog"){
            console.log(`A ${animals[i]} would be a great pet`);
           } else if(animals[i].toLowerCase() === "impala"){
            console.log(`A ${animals[i]} would be a beautiful pet`);
           }else if(animals[i].toLowerCase() === "horse"){
            console.log(`A ${animals[i]} doesn't care how much you know until he knows how much you care.`);
           }
        }
        console.log("These pet animals can become a good friend");
    }
}

