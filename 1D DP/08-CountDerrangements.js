//Question
//We need to count the number of derrangements we can make for an array
//A derrangement is basically a case wherein the positions of every element is changed

//Solution

const derrangments = (i) => {
    if(i == 0){
        return 0
    }
    if(i == 1){
        return 0
    }
    if(i == 2){
        return 1
    }

    return (i-1)*(derrangments(i-1) + derrangments(i-2))
}


//inputs

let input = 3

console.log(derrangments(input))