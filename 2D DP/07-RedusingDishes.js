//Questions
//Redusing Dishes. We have a chef who wants to reduce his dishes so that he can
//get maximum ratings in the dishes
//We are given array with satisfation factor
//To get the rating, we multiply the factor with time and find total time


//Solution

const likerating = (arr,index,time,dp) => {
    if(index >= arr.length){
        return 0
    }
    if(dp[index][time] != -1){
        return dp[index][time]
    }

    let take = likerating(arr,index+1,time+1,dp)+(time*arr[index])
    let skip = likerating(arr,index+1,time,dp)

    return Math.max(take,skip)
}


//Inputs

let input = [-1,-8,0,5,-9]

input.sort((a,b) => {
    return a-b
})

let dp = new Array(input.length+1).fill(new Array(input.length+1).fill(-1))

console.log(likerating(input,0,1,dp))