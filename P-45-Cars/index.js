const car = (manfacturer, model_name , options ) => {
      
    const car_info = {};
    if(manfacturer) car_info.manfacturer = manfacturer;
    if(model_name) car_info.model_name  = model_name;
    if(options) car_info.options = options;
    return car_info;
}

console.log(car("Audi", '2007' ,{color : "White" , price: "200000$"}));