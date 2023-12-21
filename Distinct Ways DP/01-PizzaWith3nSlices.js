//Question
//You are given a pizza which has 3n slices in it
//You eat one and the adjacent two are eaten up by your two friends
//You need to find the way so that you eat maximum of the pizza
//Since pizza is round so we need to be careful for 1st and last peice


//Solution


const selfishpizzaparty = (arr,index,n,picks) => {
    if(picks == 0 || index >=n){
        return 0
    }

    let take = arr[index] + selfishpizzaparty(arr,index+2,n,picks-1)
    let skip = selfishpizzaparty(arr,index+1,n,picks)

    return Math.max(take,skip)
}


//Inputs

let input = [1,2,3,4,5,6]

let withfirst = selfishpizzaparty(input,0,input.length-1,input.length/3)
let withoutfirst = selfishpizzaparty(input,1,input.length,input.length/3)

console.log(Math.max(withfirst,withoutfirst))


