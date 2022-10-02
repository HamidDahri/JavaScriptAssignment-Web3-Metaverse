const Name = "Hamid Mustafa"; //This is constant variable with String data type 

console.log(Name.toLowerCase()); //toLowerCase() is a function to convert string to lowercase
console.log(Name.toUpperCase()); //toUpperCase() is a function to convert string to uppercase

const fun = (Name) => {  
    var s = Name.toLowerCase().split(" ");
    for( i = 0 ; i<s.length; i++){
        s[i] = s[i][0].toUpperCase()+s[i].slice(1);
    }

    console.log(s.join(' '));
    return s;
}


 fun(Name);
