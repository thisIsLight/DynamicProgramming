//Question
//Violaaaa, we are at the longest increasing subsequence
//Given an array we want to return the subsequence which is longest and on increasing order


//SOlution


const lis = (arr,index,prev,dp) => {
    if(index >= arr.length){
        return 0
    }
    if(dp[index][prev+1] != -1){
        return dp[index][prev+1]
    }
    let take = 0
    if(prev == -1 || arr[prev] < arr[index]){
        take = 1+lis(arr,index+1,index,dp)
    }
    let leave = lis(arr,index+1,prev,dp)

    return dp[index][prev+1] = Math.max(take,leave)
}


//Inputs

let input = [13,2,6,5,3,7,8,5,11,2,19]
// let input = [1,2,3,6,5]

let dp = new Array(input.length+1).fill(new Array(input.length+1).fill(-1))

console.log(lis(input,0,-1,dp))