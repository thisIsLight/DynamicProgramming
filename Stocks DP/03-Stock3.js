//Question
//Stocks - You can buy once and sell at most two times
//Can you find the maximum profit


//Solution

const stock3 = (arr,index,bought,count) => {
    if(count == 0){
        return 0
    }
    if(index >= arr.length){
        return 0
    }

    let profit = 0
    if(!bought){

        let buynow = -arr[index] + stock3(arr,index+1,1,count)
        let buyskip = stock3(arr,index+1,bought,count)
        profit = Math.max(buynow,buyskip)
    }
    else{

        let sellnow = arr[index] + stock3(arr,index+1,0,count-1)
        let skipsell = stock3(arr,index+1,bought,count)
        profit = Math.max(sellnow,skipsell)
    }

    return profit
}


//Input

let input = [3,3,5,0,0,3,1,4]
let input2 = 2

console.log(stock3(input,0,0,input2))