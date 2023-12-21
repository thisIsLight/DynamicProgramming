//Question
//Stocks - You can buy once and sell once
//Can you find the maximum profit


//Solution


const stock1 = (arr) => {
    let min = Infinity
    let max = -Infinity
    let profit = -Infinity
    for(let i=0;i<arr.length;i++){
        if(max < arr[i]){
            max = arr[i]
        }
        if(min > arr[i]){
            min = arr[i]
            max = arr[i]
        }
        if(profit < max-min){
            profit = max-min
        }
    }
    return profit
}


//Input

let input = [7,1,5,3,6,4]

console.log(stock1(input))