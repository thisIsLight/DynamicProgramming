//Solution
//We are given an array and a deviation
//We need to find the largest AP that can beformed with this deviation


//Solution

const largestAP = (arr,d,index,prev) => {
    if(index >= arr.length){
        return 0
    }

    let take = 0
    if(prev == -1 || arr[prev]+d == arr[index]){
        take = 1 + largestAP(arr,d,index+1,index)
    }

    let skip = largestAP(arr,d,index+1,prev)

    return Math.max(take,skip)
}


//Input

let input1 = [1,5,7,8,5,3,4,2,1]
let input2 = -2

console.log(largestAP(input1,input2,0,-1))
