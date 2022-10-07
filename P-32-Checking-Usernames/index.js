const current_users = ["Hamid", "aqib" , "saqib" , "rashid" , "zahid"];

const new_users = ["asad" , "zubair" , "Hamid" , "saqib" , "hameed"];

     const current_users1 =  current_users.map(user => {
       return user.toUpperCase();
      })

      const new_users1 =  new_users.map(user => {
        return user.toUpperCase();
       })

    new_users1.map( user => {
      if(current_users1.includes(user)){
        console.log("The Person",user , "need to enter a new username");
      } else {
        console.log("The username",user ,'is available');
      }
    })