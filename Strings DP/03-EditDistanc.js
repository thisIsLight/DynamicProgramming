//Question
//Minimum Edit distance
//You are given two strings
//You need to convert the first string to the second string
//You can insert, delete and replace the characters in one go
//Find the minimum number of operations to edit the string


//Solution


const mineditdistance = (a,b,index1,index2,dp) => {
    if(index1 >= a.length && index2 >= b.length){
        return 0
    }
    if(index1 >= a.length || index2 >= b.length){
        return Math.abs(index1-index2)
    }
    if(a[index1] === b[index2]){
        mineditdistance(a,b,index1+1,index2+1,dp)
    }
    if(dp[index1][index2] != -1){
        return dp[index1][index2]
    }
    let deletes = 1+mineditdistance(a,b,index1+1,index2,dp)
    let insert = 1+mineditdistance(a,b,index1,index2+1,dp)
    let replace = 1+mineditdistance(a,b,index1+1,index2+1,dp)

    return dp[index1][index2] = Math.min(insert,deletes,replace)
}


//Inputs

let input1 = 'horse'
let input2 = 'ros'

let dp = new Array(input1.length+1).fill(new Array(input2.length+1).fill(-1))

console.log(mineditdistance(input1,input2,0,0,dp))