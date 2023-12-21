//Question
//Stocks - You can buy once and sell at most k transactions
//Can you find the maximum profit


//Solution

const stock4 = (arr,index,bought,count) => {
    if(count == 0){
        return 0
    }
    if(index >= arr.length){
        return 0
    }

    let profit = 0
    if(!bought){

        let buynow = -arr[index] + stock4(arr,index+1,1,count)
        let buyskip = stock4(arr,index+1,bought,count)
        profit = Math.max(buynow,buyskip)
    }
    else{

        let sellnow = arr[index] + stock4(arr,index+1,0,count-1)
        let skipsell = stock4(arr,index+1,bought,count)
        profit = Math.max(sellnow,skipsell)
    }

    return profit
}


//Input

let input = [3,2,6,5,0,3]
let input2 = 2 // k

console.log(stock4(input,0,0,input2))