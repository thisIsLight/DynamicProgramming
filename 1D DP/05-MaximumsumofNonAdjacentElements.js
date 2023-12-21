//Question
//We are given an array and we want to find the maximum sum of the non adjacent
//elements in that array


//Solution

const maxsumnonadj = (arr,i,dp) => {
    if(i >= arr.length){
        return 0
    }
    if(dp[i] != -1){
        return dp[i]
    }
    let take = arr[i] + maxsumnonadj(arr,i+2,dp)
    let leave = maxsumnonadj(arr,i+1,dp)

    return dp[i] = Math.max(take,leave)
}

//Inputs

let input1 = [1,1,3,1,5,6,7,8]
let dp = new Array(input1.length+1).fill(-1)
console.log(maxsumnonadj(input1,0,dp))