//Question
//There is a robber who wants to rob in a neighbourhood
//Houses are arranged in a circular manner
//If he robs a house, he can't rob adjacent houses since if we rob adjacent houses, alarms fire off
//Find the total sum he can rob given an array with the profits in each house

//Solution

const smartrobbery = (arr, i, n,dp) => {
    if(i >= n){
        return 0
    }
    if(dp[i] != -1){
        return dp[i]
    }
    let take = smartrobbery(arr,i+2,n,dp)+arr[i]
    let leave = smartrobbery(arr, i+1,n,dp)

    return dp[i] = Math.max(take,leave)
}

//Inputs

let input = [1,1,3,1,5,6,7,8]
let dp = new Array(input.length).fill(-1)
//Since houses are in circular manner, we need to make sure that we ommit last house if we are sending first house
let withfirsthouse = smartrobbery(input, 0, input.length-1,dp)
dp = new Array(input.length).fill(-1)
let withoutfirsthouse = smartrobbery(input, 1, input.length,dp)

console.log(Math.max(withfirsthouse,withoutfirsthouse))