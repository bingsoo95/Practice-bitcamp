const arr = [2,4,6,8]

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

//맨 마지막에 추가
arr.push(22)

console.log(arr)

arr.splice(1,2)

console.log(arr)

for (let i = 0; i < arr.length ; i++) {
    if(arr[i] === 4){
        continue
    }
    console.log(i)
    console.log(arr[i])
}

console.log("----------------")