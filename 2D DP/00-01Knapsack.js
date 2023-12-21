//Question
//KnapSack problem
//You have a bag that can contain w wieght
//You have array with wieght and profit
//Pick highest profit so that bas if=s filled


//Solution
const knapsack = (weight,profit,capacity,target,dp) => {
    if(target == profit.length-1){
        if(capacity >= weight[target]){
            return profit[target]
        }
        return 0
    }
    if(target > profit.length-1){
        return 0
    }
    if(dp[target][capacity] != -1){
        return dp[target][capacity]
    }
    let include = 0
    if(weight[target] <= capacity){
        include = profit[target] + knapsack(weight,profit,capacity-weight[target],target+1,dp)
    }
    let exclude = knapsack(weight,profit,capacity,target+1,dp)

    return dp[target][capacity] = Math.max(include,exclude)
}

//Inputs
let input1 = [10,1,1,20] //weight
let input2 = [1,100,3,5] //Profit
let capacity = 3

//Now we are applying 2D DP because two elements are changing in the recursive calls
// Ist is the capacity and second is the index

let dp = new Array(input1.length+1).fill(new Array(capacity+1).fill(-1))

console.log(knapsack(input1,input2,capacity,0,dp))