//Question
//Stocks - You can buy once and sell any number of times
//Can you find the maximum profit


//Solution


const stock2 = (arr,index,bought) => {
    if(index >= arr.length){
        return 0
    }

    let profit = 0
    if(!bought){

        let buynow = -arr[index] + stock2(arr,index+1,1)
        let buyskip = stock2(arr,index+1,bought)
        profit = Math.max(buynow,buyskip)
    }
    else{

        let sellnow = arr[index] + stock2(arr,index+1,0)
        let skipsell = stock2(arr,index+1,bought)
        profit = Math.max(sellnow,skipsell)
    }

    return profit
}


//Input

let input = [7,1,5,3,6,4]

console.log(stock2(input,0,0))