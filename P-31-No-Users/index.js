const usernames = ["Hamid" , "aqib" , "Saqib" , "Admin" , "HR"]

if(usernames.length !== 0){
    for( i = 0; i<=usernames.length-1; i++){
        if(usernames[i] === 'Admin'){
         console.log("Hello Admin, \n Would you like to see a status report?");
        }
        else {
         console.log(`Hello ${usernames[i]}, Thank you logging in again.`);
        }
     }
} else {
    console.log("We need to find some users ");
}

//removing all the elements
usernames.splice(0 , usernames.length)
console.log("---------------------------------------------------------------");
console.log("Removing the Usernames for array");
console.log(usernames);

if(usernames.length !== 0){
    for( i = 0; i<=usernames.length-1; i++){
        if(usernames[i] === 'Admin'){
         console.log("Hello Admin, \n Would you like to see a status report?");
        }
        else {
         console.log(`Hello ${usernames[i]}, Thank you logging in again.`);
        }
     }
} else {
    console.log("We need to find some users ");
}