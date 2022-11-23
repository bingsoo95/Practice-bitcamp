const totalArr = [
    {month:1, total:90}, {month:2, total:87}, {month:3,total:140},
    {month:4, total:120}, {month:5, total:130}, {month:6,total:150},
    {month:7, total:180}, {month:8, total:240}, {month:9,total:200},
    {month:10, total:180}, {month:11, total:140}, {month:12,total:190}
]

let max = 0
let period = 0

for (let i = 0; i < totalArr.length; i++) {

    if(totalArr[i].total > max){
        max = totalArr[i].total
        period = i
    }

}
console.log(`MAX: ${max}만원입니다.`)
console.log(`MAX: ${period+1}월입니다.`)
