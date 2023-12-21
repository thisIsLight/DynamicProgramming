//Question : 
//We want to find the fibonacci of a number which will be given as input
//Add DP for higher values

//Solution with DP

//--Recursive
const fibonacci = (n,dp) => {
    if(n == 0){
        return 0
    }
    if(n == 1){
        return 1
    }
    if(dp[n] != -1){
        return dp[n]
    } 
       
    
    return dp[n] = fibonacci(n-1,dp)+fibonacci(n-2,dp)
}

//--Tabulation
const fibonaccitab = (n) => {
    let dp = new Array(input+1).fill(-1)
    dp[0] = 0
    dp[1] = 1

    for(let i=2;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[n]
}

//Inputs

let input = 15
let dp = new Array(input+1).fill(-1)
console.log(fibonacci(input,dp))
console.log(fibonaccitab(input))