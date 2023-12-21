//Question
//We are given an array and a value
//We need to find if we can partition this array such that the two halves have same sum



//Solution

const partitionarr = (arr,index,target,dp) => {
    if(index >= arr.length){
        if(target == 0){
            return true
        }
        else{
            return false
        }
    }
    if(target < 0){
        return false
    }
    if(target == 0){
        return true
    }

    if(dp[index][target] != -1){
        return dp[index][target]
    }

    let take = partitionarr(arr,index+1,target-arr[index],dp)
    let skip = partitionarr(arr,index+1,target,dp)

    return dp[index][target] = take || skip
}


//Input

let input = [1,5,11,5]

let sum = input.reduce((sum,item) => {return sum+item})

if(sum%2 != 0){
    console.log('No')
}

let dp = new Array(input.length+1).fill(new Array(sum/2+1).fill(-1))

console.log(partitionarr(input,0,sum/2,dp))