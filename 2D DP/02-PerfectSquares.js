//Question
//You are given a value and you need to find minimum number of squares needed to 
//make this number
//Example : 6 -> 1^2 + 1^2 + 2^2 Hence 3
//Example : 100 -> 10^10 Hence 1


//Solution

const perfectsquarePartitionMinCount = (n,dp) => {
    if(n == 0){
        return 0
    }
    if(n<0){
        return Infinity
    }
    if(dp[n] != -1){
        return dp[n]
    }
    let upperbound = Math.floor(n/2)
    let ans = Infinity
    for(let i=1;i<=upperbound;i++){
        let res = 1 + perfectsquarePartitionMinCount(n - (i*i),dp)
        ans = Math.min(res,ans)
    }
    return dp[n] = ans
}


//Inputs

let input = 10

let dp = new Array(input+1).fill(-1)

console.log(perfectsquarePartitionMinCount(input,dp))