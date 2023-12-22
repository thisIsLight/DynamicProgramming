//Question
//We are given a string and a regex string with wildcards
//We want to match the wildcard string with the wildcard string
//Return if matching is possible or not


//Solution


const matchwildcard = (a,b,index1,index2,dp) => {
    if(index1 >= a.length && index2 >= b.length){
        return true
    }
    if(index1 >= a.length || index2 >= b.length){
        return false
    }
    if(dp[index1][index2] != -1){
        return dp[index1][index2]
    }
    let res = false
    if(a[index1] == b[index2] || b[index2] == '?'){
        res = res || matchwildcard(a,b,index1+1,index2+1,dp)
    }
    else if(b[index2] != '*'){
        res = false
    }
    else{
        res = res || matchwildcard(a,b,index1,index2+1,dp)
        for(let i=index1;i<a.length;i++){
            res = res || matchwildcard(a,b,index1+i,index2+1,dp)
        }
    }
    return dp[index1][index2] = res
}


//Inputs

let input1 = 'abcde'
let input2 = 'a*c?e'

let dp = new Array(input1.length+1).fill(new Array(input2.length+1).fill(-1))

console.log(matchwildcard(input1,input2,0,0,dp))