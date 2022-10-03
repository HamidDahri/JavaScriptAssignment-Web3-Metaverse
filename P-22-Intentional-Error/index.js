const countries = ["Pakistan","India" ,"Australia" , "Iran" , "America"];

console.log("Total Number of Countries in above array is: ", countries.length);

const testerror = (index) => {
    try {
        console.log("Printing the country which is at index ",index);

        if(countries[index] === undefined ) throw "Index in not defined";
        else {
            console.log(countries[index]);
        }
   } catch (error) {
       console.log("The Error is ",error);
   }
}

testerror(3); // Enter the index to print the country at that index.