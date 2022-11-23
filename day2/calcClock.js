
//시침의 각도 구하는 함수 --> 입력 시 12 출력 각도
function calcHour(hour) {

    const result = (360 / 12) * (hour % 12)

    return result
}

//분침의 각도 구하는 함수 화살표 함수
//const calcMin = function(min){
//      return(360/60) * min
//}
const calcMin = min => (360/60) * min

console.log(calcHour(12))
console.log(calcMin(38))




//분침에 시침의 이동 각도를 구하는 함수
function getExtra (min){

    return ( (360 / 12) / 60 ) * min
}

function calcTotal(hourValue, minValue){

    //시침의 각도 구하는 함수 --> 입력 시 12 출력 각도
    function calcHour(hour) {"..."}

    const calcMin = min => (360/60) * min

    //분침에 시침의 이동 각도를 구하는 함수
    function  getExtra(min) {"..."}

    const result = Math.abs((calcHour(hourValue) + getExtra(minValue)) - calcMin(minValue))

    return result > 180? 360 - result: result
}

console.log(calcTotal(12,38))





//12 38