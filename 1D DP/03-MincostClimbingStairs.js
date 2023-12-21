//Question
//We have to climb the stairs to a given number n but we should pay the tax for each stair
//Cost is given in an array
//We can only take one step or two steps
//Find the minimum cost that we can pay to reach top


//Solution

//--Recursive solution
const climbstairwithcost = (arr, n,dp) => {
    if(n <= 0){
        return 0
    }
    if(n == 1){
        return arr[arr.length-n]
    }
    if(dp[n]!=-1){
        return dp[n]
    }
    let takeone = arr[arr.length-n] + climbstairwithcost(arr,n-1,dp)
    let taketwo = arr[arr.length-n] + climbstairwithcost(arr,n-2,dp)

    return dp[n] = Math.min(takeone,taketwo)
}

//--Tabular
const climbstairwithcostTab = (arr, n,dp) => {
    dp[0] = 0
    dp[1] = arr[arr.length-1]

    for(let i=2;i<=n;i++){
        let takeone = arr[arr.length-i] + dp[n-1]
        let taketwo = arr[arr.length-i] + dp[n-2]

        dp[i] = Math.min(takeone,taketwo)
    }
    return dp[n]
}

//Inputs

let input1 = 3
let input2 = [12,2,1] 
let dp1 = new Array(input1+1).fill(-1)
let dp2 = new Array(input1+1).fill(-1)

console.log(Math.min(climbstairwithcost(input2,input1,dp1), climbstairwithcost(input2,input1-1,dp2)))
dp1 = new Array(input1+1).fill(-1)
dp2 = new Array(input1+1).fill(-1)
console.log(Math.min(climbstairwithcostTab(input2,input1,dp1), climbstairwithcostTab(input2,input1-1,dp2)))