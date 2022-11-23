const pointArr = [

    {name:'암살', kiss:2, action:12,gg:"A"},
    {name:'어바웃타임', kiss:14, action:2,gg:"M"},
    {name:'토이스토리', kiss:2, action:7,gg:"A"},
    {name:'노팅힐', kiss:10, action:2,gg:"M"},
    {name:'타이타닉', kiss:15, action:6,gg:"M"}

]

// for (let i = 0; i < pointArr.length; i++) {
//     const pointArrElement = pointArr[i]
//     console.log(pointArrElement)
// }

const target = {kiss: 5, action: 6}

pointArr.sort((a,b) => {
    const distanceA = Math.sqrt(Math.pow(a.kiss - target.kiss, 2) + Math.pow(a.action - target.action, 2))
    const distanceB = Math.sqrt(Math.pow(b.kiss - target.kiss, 2) + Math.pow(b.action - target.action, 2))

    return distanceA - distanceB

})

console.log(pointArr)

let aCnt =0
let mCnt =0
for (let i = 0; i < 3; i++) {
    if(pointArr[i].gg==="A"){
        aCnt++
    }else{
        mCnt++
    }
}
// for (const pointArrElement of pointArr) {
//     console.log(pointArrElement)
//
//     const distance = Math.sqrt(Math.pow(pointArrElement.kiss - target.kiss, 2) + Math.pow(pointArrElement.action - target.action, 2))
//
//     console.log(distance)
// }

if (aCnt>mCnt){
    console.log("타겟영화는 액션영화입니다.")
}else{
    console.log("타겟영화는 멜로영화입니다.")
}

// target과 pointArrElement의 거리 계산