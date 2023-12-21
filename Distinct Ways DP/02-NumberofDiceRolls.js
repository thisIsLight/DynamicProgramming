//Question
//You are given n dice with m faces
//You are given a number x
//FInd all the possible ways you can get x summation


//Solution


const dicethrow = (dice,face,target) => {
    if(target < 0){
        return 0
    }
    if(dice == 0 && target != 0){
        return 0
    }
    if(target == 0 && dice != 0){
        return 0
    }
    if(target == 0 && dice == 0){
        return 1
    }

    let ans = 0
    for(let i=1;i<=face;i++){
        ans += dicethrow(dice-1,face,target-i)
    }
    return ans
}


//Inputs

let input1 = 3  //dice
let input2 = 6 //faces
let input3 = 12 //target

console.log(dicethrow(input1,input2,input3))
