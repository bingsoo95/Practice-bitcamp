let sum = 0
let number = 0

do {
    sum += number
    number = parseInt(prompt('숫자를 입력하시오.'))
} while(number >= 0)

console.log('합계는 ${sum}')