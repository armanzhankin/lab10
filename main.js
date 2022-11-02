let lab1 = [5, 5, 5, 5, 10, 10]
let lab2 = [5, 5, 5, 5, 5, 5, 10]
let lab3 = [5, 10, 10, 15]
let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 0]
let lab6 = [5, 5, 10, 0, 5, 10]
let lab8 = [5, 10, 10, 10, 5]

function get_sum(arr){
    let sum = 0
    for (let i=0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}
let labs = [lab1, lab2, lab3, lab4_5, lab6, lab8]

function main(labs){
    let sums = []
    for (i = 0; i < labs.length; i++){
        sums.push(get_sum(labs[i]))
    }
    const results = {
        lab1: labs[0],
        lab2: labs[1],
        lab3: labs[2],
        lab4_5: labs[3],
        lab6: labs[4],
        lab8: labs[5],
        sums : sums
    }
    return results
}

console.log(main(labs))

