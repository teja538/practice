// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object

function myFunction(a)
{
    let myObj = {
        "key":a
    }
    return myObj
    // n=a.length
    // console.log(a.slice(0,n-3))
}

// console.log(myFunction('abcdefg')); return exept last 3 char
console.log(myFunction('z'));
console.log(myFunction('b'));

// author's sol
// return { key: a };

