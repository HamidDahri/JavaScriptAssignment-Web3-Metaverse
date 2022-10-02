const Name = "Hamid Mustafa";

console.log(Name.toLowerCase());
console.log(Name.toUpperCase());

const fun = (Name) => {
    var s = Name.toLowerCase().split(" ");
    for( i = 0 ; i<s.length; i++){
        s[i] = s[i][0].toUpperCase()+s[i].slice(1);
    }

    console.log(s.join(' '));
    return s;
}


 fun(Name);
