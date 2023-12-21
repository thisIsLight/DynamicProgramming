//Question
//You are given a matrix which has 1s and 0s.
//You need to find the largest area in the matrix


//Solution

const maxsquare = (arr, row,col,res,dp) => {
    if(row >= arr.length || col >= arr[0].length){
        return 0
    }
    if(dp[row][col] != -1){
        return dp[row][col]
    }
    let ans = 0
    if(arr[row][col] == 1){
        ans = 1
    }
    let diag = maxsquare(arr,row+1,col+1,res,dp)
    let down =  maxsquare(arr,row+1,col,res,dp)
    let right = maxsquare(arr,row,col+1,res,dp)
    ans =  ans + Math.min(diag,down,right)
    dp[row][col] = ans
    res[0] = Math.max(res[0],ans)
    return ans
}


//Inputs

let input = [
    [0,0,0],
    [1,1,0],
    [1,1,0]
]
let res = [0]
let dp = new Array(input.length+1).fill(new Array(input[0].length+1).fill(-1))

maxsquare(input,0,0,res,dp)
console.log(res)
