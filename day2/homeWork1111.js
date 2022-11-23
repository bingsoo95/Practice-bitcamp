function takeNum(start,end){
    for (let i = 0; i < end-start+1; i++) {
        console.log(start+i)
    }
}
function maxNum(arr){
    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (temp<arr[i]){
            temp=arr[i]
        }
    }
    return temp
}
function minNum(arr){
    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (temp>arr[i]){
            temp=arr[i]
        }
    }
    return temp
}
function makeLotto(arr){
    for (let i = 0; i < 6; i++) {
        let ranNum = (Math.random()*45+1).toFixed(0)
        if (-1<arr.indexOf(ranNum)){
            i--
            continue
        }else{
            arr.push(ranNum)
        }
    }
    console.log(arr)
}
function makeSale(arr){
    let max = 0
    let period = 0
    for (let i = 0; i < salesArr.length ; i++) {
        if(salesArr[i].sales>max) {
            max = salesArr[i].sales
            period = i
        }
    }
    console.log(`MAX: ${max} 만원입니다.`)
    console.log(`MAX: ${period+1}월이 매출이 가장 좋습니다.`)
}



const targetArr= [1,3,15,20,8,10]

takeNum(10,20)
//타겟배열에서 최대값 찾기
let resultMax =maxNum(targetArr)
console.log("최대 : "+resultMax)

//타겟배열에서 최소값 찾기
let resultMin =minNum(targetArr)
console.log("최소 : "+resultMin)

//로또번호 만들기
const lottoArr = []
makeLotto(lottoArr)

//최고매출 알림이
const salesArr = [
    {month:1, sales:90},
    {month:2, sales:87},
    {month:3, sales:140},
    {month:4, sales:120},
    {month:5, sales:130},
    {month:6, sales:150},
    {month:7, sales:180},
    {month:8, sales:240},
    {month:9, sales:200},
    {month:10, sales:180},
    {month:11, sales:140},
    {month:12, sales:190}
]
makeSale(salesArr)

