// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunc(str)
{
    let n=str.length
    let ans = ""
    for(let i=n-3;i<n;i++)
    {
        ans = ans + str[i]
    }
    return (ans) 
}


console.log(myFunc('abcdefg'))
console.log(myFunc('1234'))

// author's sol
//  return str.slice(-3);

// 1st three ele
// sol : return a.slice(0, 3);
