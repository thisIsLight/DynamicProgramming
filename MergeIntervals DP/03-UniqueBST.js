//Question
//Given an array having inorder traversal of the  BST
//We need to find all the possible unique bsts in structure


//Solution


const UniqueBST = (n,dp) => {
    if(n<= 1){
        return 1
    }
    let ans = 0
    if(dp[n] != -1){
        return dp[n]
    }
    for(let i=1;i<=n;i++){
        ans += (UniqueBST(i-1,dp) * UniqueBST(n-i,dp))
    }
    return dp[n] = ans
}


//Inputs

let input1 = 3

let dp = new Array(input1+1).fill(-1)
console.log(UniqueBST(input1,dp))

