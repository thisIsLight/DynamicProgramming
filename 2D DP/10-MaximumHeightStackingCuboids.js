//Question
//Cuboids Stacking
//We are given cuboids of dimension l,b and h
//We need to find the bighest tower we can make so that every cuboid below is of smaller
//heigh, width and length


//Solution


const cuboidstack = (arr,index,prev,dp) => {
    if(index >= arr.length){
        return 0
    }

    if(dp[index][prev+1] != -1){
        return dp[index][prev+1]
    }

    let take = 0
    if(prev == -1 || (arr[prev][0] < arr[index][0] && arr[prev][1] < arr[index][1] &&arr[prev][2] < arr[index][2])){
        take = 1 + cuboidstack(arr,index+1,index,dp)
    }

    let skip = cuboidstack(arr,index+1,prev,dp)

    return dp[index][prev+1] = Math.max(take,skip)
}


//Inputs

let input = [
    [12,23,45],
    [37,53,95],
    [20,45,50]
]

input.sort((a,b) => {
    return a[0] - b[0]
})

let dp = new Array(input.length+1).fill(new Array(input.length+1).fill(-1))

console.log(cuboidstack(input,0,-1,dp))

