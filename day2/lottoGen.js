

const arr = [1,2,3,4,5]

while(true) {

    //숫자를 생성 1 - 45 사이의 숫자
    const num = parseInt(Math.random()) * 45 + 1


    //검사
    const index = arr.indexOf(num)

    console.log(`NUM: ${num} INDEX: ${num}`)

    if(index >= 0){
        continue
    }
    const newLength = arr.push(num)

    if(newLength === 6){
        break
    }

}

console.log(arr)