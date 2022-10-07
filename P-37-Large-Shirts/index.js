
//  make_shirt = () => {
//     const size = "large";
//     const msg = "i love javascript"
//     console.log(`THe size of the shirt is ${size} and the message is "${msg}"`);
// }

 make_shirt = ( size = "large") => {
    const msg = "i love javascript"
    console.log(`THe size of the shirt is ${size} and the message is "${msg}"`);
}

make_shirt();
make_shirt("large");
make_shirt("medium");
make_shirt("small");