//Question
//Minimum Score of triangulation in polugon
//We will be given a polygon wherein we can make partitions to it so that it can become a triangle
//We need to cut the polygon so that the multiple of its vertices is smallest when it becomes triangle


//Solution

const polugon = (arr,i,j,dp) => {
    if(i+1 == j){
        return 0
    }
    if(dp[i][j] != -1){
        return dp[i][j]
    }
    let ans = Infinity
    for(let k=i+1;k<j;k++){
        ans = Math.min(ans,arr[i]*arr[j]*arr[k] + polugon(arr,i,k,dp) + polugon(arr,k,j,dp))
    }

    return dp[i][j] = ans
}


//Inputs

let input = [1,2,3,4]

let dp = new Array(input.length+1).fill(new Array(input.length+1).fill(-1))

console.log(polugon(input,0,input.length-1,dp))