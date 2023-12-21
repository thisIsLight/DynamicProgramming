//Question
//You are given an amount and a set of coins
//You need to use n number of coins to make this amount
//Find the minimum number of coins used to make it happen

//Solution

const coinstoamount = (arr,target,dp) => {
    if(target == 0){
        return 0
    }
    if(target < 0){
        return Infinity
    }
    if(dp[target] != -1){
        return dp[target]
    }
    let ans = Infinity
    for(let i=0;i<arr.length;i++){
        let coins = coinstoamount(arr,target-arr[i],dp)+1
        ans = Math.min(ans,coins)
    }
    return dp[target] = ans
}

//Inputs

let input1 = 10
let input2 = [1,2,3]

let dp = new Array(input1+1).fill(-1)

console.log(coinstoamount(input2,input1,dp))
