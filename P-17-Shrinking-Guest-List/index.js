const list = ["hamid", "aqib" , "saqib"];

console.log(` Dear ${list[0].toUpperCase()}, I send this invitation for the dinner party at my residence tomorrow. \n I hope you will join me for the dinner and the special dessert treat laid out for all.`);
console.log("---------------------------------------------------------------------");
console.log(`To my special friend ${list[1].toUpperCase()}, do join me for the dinner party tomorrow at Regalia.\n I am sure you would have lots of fun with the invited guests and enjoy the evening.`);
console.log("---------------------------------------------------------------------");
console.log(` dear friend ${list[2].toUpperCase()}, inviting you to the dinner party at my place tomorrow.\n Make sure you arrive in time and have a blast in the celebration with friends and family.`);
console.log("---------------------------------------------------------------------");
console.log(`i just got a text from ${list[1].toUpperCase()} that he can't make it due to the high fever`);
console.log("----------------------Changing Guests------------------------");

const i = list.indexOf("aqib");

list.splice(i ,1, 'zahid');

console.log(` Dear ${list[0].toUpperCase()}, I send this invitation for the dinner party at my residence tomorrow. \n I hope you will join me for the dinner and the special dessert treat laid out for all.`);
console.log("---------------------------------------------------------------------");
console.log(`To my special friend ${list[1].toUpperCase()}, do join me for the dinner party tomorrow at Regalia.\n I am sure you would have lots of fun with the invited guests and enjoy the evening.`);
console.log("---------------------------------------------------------------------");
console.log(` dear friend ${list[2].toUpperCase()}, inviting you to the dinner party at my place tomorrow.\n Make sure you arrive in time and have a blast in the celebration with friends and family.`);
console.log("-----------------More Guests---------------------");

list.unshift("Rashid");// adding guest to the beginning

list.splice(list.length/2 , 0  , "adil"); // adding guest to the middle

list.push("mazhar"); //adding guest to the end

console.log(` Dear ${list[0].toUpperCase()}, I send this invitation for the dinner party at my residence tomorrow. \n I hope you will join me for the dinner and the special dessert treat laid out for all.`);
console.log("---------------------------------------------------------------------");
console.log(`To my special friend ${list[1].toUpperCase()}, do join me for the dinner party tomorrow at Regalia.\n I am sure you would have lots of fun with the invited guests and enjoy the evening.`);
console.log("---------------------------------------------------------------------");
console.log(`dear friend ${list[2].toUpperCase()}, inviting you to the dinner party at my place tomorrow.\n Make sure you arrive in time and have a blast in the celebration with friends and family.`);
console.log("---------------------------------------------------------------------");
console.log(` Dear ${list[5].toUpperCase()}, I send this invitation for the dinner party at my residence tomorrow. \n I hope you will join me for the dinner and the special dessert treat laid out for all.`);
console.log("---------------------------------------------------------------------");
console.log(`To my special friend ${list[4].toUpperCase()}, do join me for the dinner party tomorrow at Regalia.\n I am sure you would have lots of fun with the invited guests and enjoy the evening.`);
console.log("---------------------------------------------------------------------");
console.log(`Dear friend ${list[3].toUpperCase()}, inviting you to the dinner party at my place tomorrow.\n Make sure you arrive in time and have a blast in the celebration with friends and family.`);


console.log("------------------Shrinking Guest List-------------");
console.log("I CAN INVITE ONLY 2 GUESTS AT THE DINNER BECAUSE THE SPACE IS ONLY AVAILABLE FOR THE 2 GUESTS");


for(let i = 0 ; list.length-1 >= 2 ; i++ ){
       console.log(`Dear ${list[list.length-1].toUpperCase()} Sorry To inform you that i can't invite you to the dinner because the space is not available`);
       console.log("---------------------------------------------------------------------");
       list.pop();
 }

 list.map(name => {
      console.log(`Dear ${name.toUpperCase()} You are still invited to the Dinner`);
      console.log("---------------------------------------------------------------------");
 })


  console.log("================Removing The Last 2 Guests from the list===============");

  list.splice(0, list.length );

 console.log(list);
