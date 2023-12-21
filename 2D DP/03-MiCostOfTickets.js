//Question
//We are given dates when we want to travel (in 365 day format)
//We are given passes cost for 1 day, 7days and monthly - 30days
//We need to find out the minimum cost of tickets so that we can travel


//Solution

const mincostticket = (cost,days,index) => {
    if(index >= days.length){
        return 0
    }

    let daily = cost[0] + mincostticket(cost,days,index+1)
    let weekpassindex = 0
    let monthpassindex = 0
    for(let i = index;i<days.length;i++){
        if(days[i] <= days[index]+7){
            weekpassindex = i
        }
        if(days[i] <= days[index]+30){
            monthpassindex = i
        }
    }
    let weekly = cost[1] + mincostticket(cost,days, weekpassindex+1)
    let monthly = cost[2] + mincostticket(cost,days, monthpassindex+1)

    return Math.min(daily,weekly,monthly)
}


//Inputs

let input1 = [1,20,5]
let input2 = [2,3,]

console.log(mincostticket(input1,input2,0))
