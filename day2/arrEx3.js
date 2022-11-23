

const arr = [54,22,14,64,95,85]

//평균 => 모든 점수의 합 / 개수
let sum = 0

for (let i = 0;  i < arr.length ; i++) {
    sum += arr[i]
    console.log(`SUM : ${sum}`)
}


let avg = (sum / arr.length).toFixed(3)

console.log("AVG: " + avg)

//최저
let min = 101

for (let i = 0; i < arr.length ; i++) {
    const score = arr[i]
    //만일 score 가 min 보다 작으면 swap
    if(score < min){
        min = score
    }
}
console.log(`MIN: ${min}`)

//최고
let max = -1

for (let i = 0; i < arr.length ; i++) {
    const score = arr[i]
    //만일 score 가 max 보다 크면 swap
    if(score > max) {
        max = score
    }
}
console.log(`MAX: ${max}`)