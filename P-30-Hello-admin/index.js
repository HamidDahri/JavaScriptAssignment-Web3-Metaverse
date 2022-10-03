const usernames = ["Hamid" , "aqib" , "Saqib" , "Admin" , "HR"]

// usernames.map( username => {
//    if(username ="Admin"){
//     console.log("Hello Admin, \n Would you like to see a status report?");
//    } else {
//       console.log(`Hello ${username}, Thank you logging in again.`);
//    }
// });

for( i = 0; i<=usernames.length-1; i++){
   if(usernames[i] === 'Admin'){
    console.log("Hello Admin, \n Would you like to see a status report?");
   }
   else {
    console.log(`Hello ${usernames[i]}, Thank you logging in again.`);
   }
}