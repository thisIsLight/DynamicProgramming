//Question
//Largest Palindromic Subsequence
//We are given a string and we want to find the largest palindromic subsequence
//Way to work is find the longest common subsequence between the string and its reverse


//Solution


const maxpalindromicsubsequence = (a, b, index1,index2,dp,res,cur) => {
    if(index1 >= a.length || index2 >= b.length){
        if(res.length < cur.length){
            for(let i=0;i<cur.length;i++){
                res[i]= cur[i]
            }
        }
        return 0
    }
    if(dp[index1][index2] != -1){
        return dp[index1][index2]
    }
    let take = 0
    if(a[index1] == b[index2]){
        cur.push(a[index1])
        take = 1+maxpalindromicsubsequence(a,b,index1+1,index2+1,dp,res,cur)
        cur.pop()
    }

    let takefirst = maxpalindromicsubsequence(a,b,index1+1,index2,dp,res,cur)
    let takesecond = maxpalindromicsubsequence(a,b,index1,index2+1,dp,res,cur)
    let skipboth = maxpalindromicsubsequence(a,b,index1+1,index2+1,dp,res,cur)

    return dp[index1][index2] = Math.max(take,takefirst,takesecond,skipboth)

}


//Inputs

let input1 = 'abcda'
let input2 = 'adcba' //reverse of input 1

let dp = new Array(input1.length+1).fill(new Array(input2.length+1).fill(-1))
let res = []
console.log(maxpalindromicsubsequence(input1,input2,0,0,dp,res,[]))
console.log(res.join(''))