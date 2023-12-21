//Question
//Minimum side jumps for a frog
//There is a frog that can jump sideways and front.
//There are three lanes where we can jump. Frog starts from 0. He can jump sideways over an obstacle but not front
//We want to bring the frog to the destination
//We need to count minimum number of jumps for frog to reach destination



//Solution

const minsidejumps = (arr,lanepos,pos) => {
    if(pos >= arr.length){
        return 0
    }
    let ans = Infinity

    for(let i = pos;i<arr.length;i++){
        if(arr[i] != lanepos){
            pos++
        }
    }
    if(pos>= arr.length){
        return 0
    }

    for(let i=1;i<=3;i++){
        if(lanepos != i && arr[pos] != i){
            ans = Math.min(ans, 1+minsidejumps(arr,i,pos))
        }
    }
    return ans
}


//Inputs

let input1 = [0,1,2,3]

console.log(minsidejumps(input1,2,0))