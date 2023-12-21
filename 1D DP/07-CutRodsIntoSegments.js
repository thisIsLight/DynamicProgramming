//Question
//We are given a rod of length N
//We can cut this rod into three segments of type X,Y,Z
//We need to find the minimum number of splits for this rod
//If its not possible, return -1

//Solution

const smartrodcut = (arr, length,dp) => {
    if(length == 0){
        return 0
    }
    if(length < 0){
        return Infinity
    }
    if(dp[length] != -1){
        return dp[length]
    }
    let ans = Infinity
    for(let i=0;i<arr.length;i++){
        let res = 1+smartrodcut(arr,length-arr[i],dp)
        ans = Math.min(res,ans)
    }
    return dp[length] = ans
}

//Inputs

let input1 = [1,2,3]
let input2 = 10
let dp = new Array(input2+1).fill(-1)
console.log(smartrodcut(input1,input2,dp))