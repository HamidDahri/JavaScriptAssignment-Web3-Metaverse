const describe_city = (city , country = "Pakistan") => {
     console.log(`${city} is in ${country}`);
}

describe_city("islamabad");
describe_city("karachi");
describe_city("lahore");
describe_city("makkah" , "Saudi Arabia");