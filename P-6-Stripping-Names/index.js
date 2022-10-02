const Name = "H\nA\tM\nI\tD";

console.log("Displayed with whitespace")
console.log(Name);

console.log("Displayed without whitespace")

console.log(Name.replace(/\s/g, ''));