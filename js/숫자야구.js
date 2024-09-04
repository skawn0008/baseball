// 랜덤 수 3개 뽑기 (문제)

let rdArray = []

// 다 채워질때까지 반복

// 랜덤수가 채워질 배열의 길이가 3보다 작을 동안
while(rdArray.length < 3){
  // 1 ~ 9 수 한 개 뽑기
  let num = Math.floor((Math.random() * 9) + 1 ) 

  // rdArray에서 num의 위치가 없다면
  if (rdArray.indexOf(num) == -1){
    rdArray.push(num)
    // document.write(num)
  }

}
document.write("<br>")

// 랜덤으로 뽑은 배열을 문자열로 만들기!
// let com = rdArray.join("")
// document.write("컴뮤터가 만든 문제 : ",com)

// 정답확인
let inputs = document.querySelectorAll("input")
let btn = document.querySelector("button")

let appendTemplete = "<br><input type='number' min='1' max='9' class='target'><input type='number' min='1' max='9' class='target'><input type='number' min='1' max='9' class='target'>"

// 버튼을 누르면
btn.addEventListener("click",function(){

  let inputs = document.querySelectorAll(".target")

  // input에 적힌 숫자 한개씩 확인
  for (let i = 0; i < inputs.length; i++){
    // 스트라이크?
    if (inputs[i].value == rdArray[i]){
      inputs[i].style.backgroundColor = "green"
    }else if(rdArray.indexOf(parseInt(inputs[i].value)) != -1){
      inputs[i].style.backgroundColor = "yellow"
    }else{
      inputs[i].style.backgroundColor = "gray"
    }

    // S / B 검사가 끝났으면 더이상 target이 아님! 
    inputs[i].classList.remove("target")
  }

  // let new_input = document.createElement("input")
  // document.querySelector("#container").appendChild(new_input)
  document.querySelector("#container").insertAdjacentHTML("beforeend",appendTemplete)
})









document.write("<br>")
let array = ["A","B","C","D","E"]

document.write("A의 위치 : ",array.indexOf("A"))
document.write("<br>")
document.write("E의 위치 : ",array.indexOf("E"))
document.write("<br>")
document.write("Z의 위치 : ",array.indexOf("Z"))
document.write("<br>")