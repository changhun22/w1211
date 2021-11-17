

console.log("lotto..............")
console.log("lotto..............")
console.log("lotto..............")
console.log("lotto..............")

// 가장 정석적인 이벤트 코드
const btn = document.getElementById("btn")

console.log(btn)

btn.addEventListener("click",(event)=> {
    console.log(event)

    const target = document.getElementById("resultDiv")

    const balls = makeLottoNum()

    //clear all <h3> tags
    target.innerHTML =''

    for (const num of balls) {
        const tag = document.createElement("h3")
        const textNode = document.createTextNode(num)
        tag.appendChild(textNode)
        target.appendChild(tag)
    }

}, false)

// ---------------------------------------

function makeLottoNum(){

    const arr = []

    for (let i = 0; i < 6; i++) {
        const tempNum = parseInt(Math.random() * 45) + 1
        //arr안에 tempNum이 있다면
        if( arr.indexOf(tempNum) >= 0){
            console.log("중복")
            i--
            continue
        }
        arr.push(tempNum)
    }
   /* //정렬하기1
    arr.sort(function (a,b) {
        return a-b
    })*/

    //정렬하기2
    arr.sort((a,b) => a - b)

    return arr










// 로또 다른버전

    // let numArr = [];
    // for(let i = 0; i < 6; i++){
    //     numArr.push(Math.floor(Math.random()*45)+1);
    //     for(let c = 0; c<i; c++){
    //         if (numArr[i] === numArr[c]) {
    //             numArr.pop();
    //             i--;
    //         }
    //     }
    // }
    // console.log(numArr);
    // return numArr
}