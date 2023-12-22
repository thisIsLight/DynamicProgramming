//Question
//We are given an array and we need to find the largest AP in the subsequence
//We are not given an deviation value


//Solution

const LargestAPwithdeviation = (arr, index, prev, d) => {
    if(index >= arr.length){
        return 0
    }

    let take = 0
    if(prev == -1 || arr[index] - arr[prev] == d){
        take = 1+ LargestAPwithdeviation(arr,index+1,index,d)
    }

    let skip = LargestAPwithdeviation(arr,index+1,prev,d)

    return Math.max(take,skip)
}


//Inputs

let input = [1,2,3,4,5]

let max = 0

for(let i=0;i<input.length;i++){
    for(let j = 0;j<input.length;j++){
        max = Math.max(max, LargestAPwithdeviation(input,0,-1,input[i]-input[j]))
    }
}

console.log(max)

