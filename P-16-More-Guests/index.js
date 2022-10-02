const list = ["hamid", "aqib" , "saqib"];

console.log(` Dear ${list[0].toUpperCase()}, I send this invitation for the dinner party at my residence tomorrow. \n I hope you will join me for the dinner and the special dessert treat laid out for all.`);
console.log("---------------------------------------------------------------------");
console.log(`To my special friend ${list[1].toUpperCase()}, do join me for the dinner party tomorrow at Regalia.\n I am sure you would have lots of fun with the invited guests and enjoy the evening.`);
console.log("---------------------------------------------------------------------");
console.log(`To a dear friend ${list[2].toUpperCase()}, inviting you to the dinner party at my place tomorrow.\n Make sure you arrive in time and have a blast in the celebration with friends and family.`);
console.log("---------------------------------------------------------------------");
console.log(`i just got a text from ${list[1].toUpperCase()} that he can't make it due to the high fever`);
console.log("----------------------Changing Guests------------------------");

const i = list.indexOf("aqib");

list.splice(i ,1, 'zahid');

console.log(` Dear ${list[0].toUpperCase()}, I send this invitation for the dinner party at my residence tomorrow. \n I hope you will join me for the dinner and the special dessert treat laid out for all.`);
console.log("---------------------------------------------------------------------");
console.log(`To my special friend ${list[1].toUpperCase()}, do join me for the dinner party tomorrow at Regalia.\n I am sure you would have lots of fun with the invited guests and enjoy the evening.`);
console.log("---------------------------------------------------------------------");
console.log(`To a dear friend ${list[2].toUpperCase()}, inviting you to the dinner party at my place tomorrow.\n Make sure you arrive in time and have a blast in the celebration with friends and family.`);
console.log("-----------------More Guests---------------------");

list.unshift("Rashid");// adding guest to the beginning

list.splice(list.length/2 , 0  , "adil"); // adding guest to the middle

list.push("mazhar"); //adding guest to the end

console.log(` Dear ${list[0].toUpperCase()}, I send this invitation for the dinner party at my residence tomorrow. \n I hope you will join me for the dinner and the special dessert treat laid out for all.`);
console.log("---------------------------------------------------------------------");
console.log(`To my special friend ${list[1].toUpperCase()}, do join me for the dinner party tomorrow at Regalia.\n I am sure you would have lots of fun with the invited guests and enjoy the evening.`);
console.log("---------------------------------------------------------------------");
console.log(`To a dear friend ${list[2].toUpperCase()}, inviting you to the dinner party at my place tomorrow.\n Make sure you arrive in time and have a blast in the celebration with friends and family.`);
console.log("---------------------------------------------------------------------");
console.log(` Dear ${list[5].toUpperCase()}, I send this invitation for the dinner party at my residence tomorrow. \n I hope you will join me for the dinner and the special dessert treat laid out for all.`);
console.log("---------------------------------------------------------------------");
console.log(`To my special friend ${list[4].toUpperCase()}, do join me for the dinner party tomorrow at Regalia.\n I am sure you would have lots of fun with the invited guests and enjoy the evening.`);
console.log("---------------------------------------------------------------------");
console.log(`To a dear friend ${list[3].toUpperCase()}, inviting you to the dinner party at my place tomorrow.\n Make sure you arrive in time and have a blast in the celebration with friends and family.`);


