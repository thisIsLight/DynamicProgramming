//Question
//We are given n number of stairs
//We can take either one step or two steps
//We need to find all the ways we can reach top


//Solution

//--Recursive Solution
const countStairs = (n,dp) => {
    if(n <= 0){
        return 0
    }
    if(n == 1){
        return 1
    }
    if(dp[n] != -1){
        return dp[n]
    }
    let takingone = 1+countStairs(n-1,dp)
    let takingtwo = 1+countStairs(n-2,dp)
    return dp[n] = takingone+takingtwo
}

//--Tabular Solution
const countStairsTab = (n,dp) => {
    dp[0] = 0
    dp[1] = 1

    for(let i=2;i<=n;i++){
        let taking1 = dp[i-1]+1
        let taking2 = dp[i-2]+1
        dp[i] = taking1+taking2
    }

    return dp[n]
}

//Inputs

let input = 100

let dp = new Array(input+1).fill(-1)
console.log(countStairs(input,dp))
console.log(countStairsTab(input,dp))
