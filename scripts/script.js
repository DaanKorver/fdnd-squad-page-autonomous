const tl = gsap.timeline({
  delay: 2,
  onComplete: changeContent
})

tl.to(".card-1", {duration: .7, y: "-110%"}, "cards")
  .set(".card-1", {css:{zIndex: 1}})
  .to(".card-2", {duration: .7, y: "0%"}, "cards")
  .to(".card-3", {duration: .7, y: "3%"}, "cards")
  .to(".card-1", {duration: 1, y: "6%"})


tl.play()

let arr = ["Hello", "Hello2", "Hello3"]

const card1 = document.querySelector(".card-1")
const card2 = document.querySelector(".card-2")
let i = 0

function changeContent() {
  card1.innerHTML = arr[i]
  if(i+1 > (arr.length - 1)) i = -1
  card2.innerHTML = arr[i + 1]
  i++
  tl.restart()
  tl.pause()
}

changeContent()