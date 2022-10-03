const model = "2017";
const type = "BMW";
const color = "WHITE & BLUE";

const fun = (m , t , c) => {
    //create an object
    const car = {
        type, 
        model,
        color
    }
     
    car.type = t;
    car.model= m;
    car.color = c;

    return car;
}


console.log("Car created \n", fun(model , type, color));
