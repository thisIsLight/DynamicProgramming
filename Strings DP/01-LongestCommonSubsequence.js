//QUestion
//We are given two strings and we need to find the longest common subsequence in those two strings
//Find the length of the longest common subsequence


//Solution 

const maxcomsubsequence = (a, b, index1,index2,dp) => {
    if(index1 >= a.length || index2 >= b.length){
        return 0
    }
    if(dp[index1][index2] != -1){
        return dp[index1][index2]
    }
    let take = 0
    if(a[index1] == b[index2]){
        take = 1+maxcomsubsequence(a,b,index1+1,index2+1,dp)
    }

    let takefirst = maxcomsubsequence(a,b,index1+1,index2,dp)
    let takesecond = maxcomsubsequence(a,b,index1,index2+1,dp)
    let skipboth = maxcomsubsequence(a,b,index1+1,index2+1,dp)

    return dp[index1][index2] = Math.max(take,takefirst,takesecond,skipboth)

}


//Inputs

let input1 = 'abcde'
let input2 = 'dxe'

let dp = new Array(input1.length+1).fill(new Array(input2.length+1).fill(-1))
console.log(maxcomsubsequence(input1,input2,0,0,dp))