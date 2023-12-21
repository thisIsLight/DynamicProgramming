//Question
//Stocks - You can buy once and sell at most k transactions
//Here we need to find profit whenever there is a transaction cost added


//Solution

const stock5 = (arr,index,bought,count,charge) => {
    if(count == 0){
        return 0
    }
    if(index >= arr.length){
        return 0
    }

    let profit = 0
    if(!bought){

        let buynow = -arr[index] + stock5(arr,index+1,1,count,charge) - charge
        let buyskip = stock5(arr,index+1,bought,count,charge)
        profit = Math.max(buynow,buyskip)
    }
    else{

        let sellnow = arr[index] + stock5(arr,index+1,0,count-1,charge)- charge
        let skipsell = stock5(arr,index+1,bought,count,charge)
        profit = Math.max(sellnow,skipsell)
    }

    return profit
}


//Input

let input = [3,2,6,5,0,3]
let input2 = 2 // k
let input3 = 1 //transactioncost

console.log(stock5(input,0,0,input2,input3))