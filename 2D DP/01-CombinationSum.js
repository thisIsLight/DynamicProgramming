//Question
//We are given an array and a integer value
//We need to find out in how many ways can we make the sum equal to the given value


//Solution

const combinationSum = (arr,index,sum,dp) => {
    if(sum == 0){
        return 1
    }
    if(sum < 0){
        return 0
    }
    if(index >= arr.length){
        return 0
    }
    if(dp[index][sum] != -1){
        return dp[index][sum]
    }
    let include = combinationSum(arr,index+1,sum-arr[index],dp)
    let exclude = combinationSum(arr,index+1,sum,dp)

    return dp[index][sum] = include+exclude
}

//Inputs

let input1 = [1,2,3,4,3]
let input2 = 5

let dp = new Array(input1.length+1).fill(new Array(input2+1).fill(-1))

console.log(combinationSum(input1,0,input2,dp))