//Question
//We are playing a game and we need to guess in this game
//Find the minimum number of guesses so that the winning is guranteed


//Solution


const wintheguessgame = (start,end) => {
    if(start >= end){
        return 0
    }

    let ans = Infinity

    for(let i=start;i<=end;i++){
        ans = Math.min(ans, i+ Math.max(wintheguessgame(start,i-1) + wintheguessgame(i+1,end)))
    }
    return ans
}


//Input

let input = 10

console.log(wintheguessgame(1,input))