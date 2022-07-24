// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction(str)
{
    n=str.length
    ans = ""
    for(let i=n-3;i<n;i++)
    {
        ans = ans + str[i]
    }
    return (ans)
    
}

console.log(myFunction('abcdefg'))
console.log(myFunction('1234'))

// author's sol
//  return str.slice(-3);

// 1st three ele
// sol : return a.slice(0, 3);
