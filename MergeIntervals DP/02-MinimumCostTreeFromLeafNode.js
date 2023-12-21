//Question
//Minimum cost tree from leaf node
//We are given an array of leaf nodes. We need to find the minimum cost of the tree from leaf nodes
// cost of a non leaf node is multiplication of highest leaf nodes in the tree


//Solution

const mincosttree = (arr,start,end) => {
    if(start == end){
        return 0
    }

    let ans = Infinity
    for(let i=start;i<end;i++){
        ans = Math.min(ans, Math.max(...arr.slice(start,i+1))*Math.max(...arr.slice(i+1,end+1)) + mincosttree(arr,start,i) + mincosttree(arr,i+1,end) )
    }
    return ans
}


//Input

let input = [6,2,4]

console.log(mincosttree(input,0,input.length-1))