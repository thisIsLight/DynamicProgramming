//Question
//Russian Doll Envelops
//We are given envelops of size w width and l length
//We need to russian doll them so that we can find the maximum number of russian
//dolled envelops
//Also we can't flip the envelops


//Solution

const russiandollEnvelop = (arr, index,prev,dp) => {
    if(index >= arr.length){
        return 0
    }
    if(dp[index][prev+1] != -1){
        return dp[index][prev+1]
    }
    let take = 0
    if(prev == -1 || arr[prev] < arr[index]){
        take = 1+russiandollEnvelop(arr,index+1,index,dp)
    }
    let skip = russiandollEnvelop(arr,index+1,prev,dp)

    return dp[index][prev+1] = Math.max(take,skip)
}


//Inputs

let input = [
    [5,4],
    [6,4],
    [6,7],
    [2,3],
]

input.sort((a,b) => {
    if(a[0] == b[0]){
        return b[1]- a[1]
    }
    else{
        return a[0]-b[0]
    }
})

input.map(a => a[1])

let dp = new Array(input.length).fill(new Array(input.length+1).fill(-1))

console.log(russiandollEnvelop(input,0,-1,dp))