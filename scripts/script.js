const tl = gsap.timeline({
  delay: 2,
  onComplete: changeContent,
})

tl.pause()

tl.to(".card-1", {duration: .7, x: "-110%"}, "cards")
  .set(".card-1", {css:{zIndex: 1}})
  .to(".card-2", {duration: .7, x: "0%"}, "cards")
  .to(".card-3", {duration: .7, x: "3%"}, "cards")
  .to(".card-1", {duration: 1, x: "6%"})


// tl.play()

let arr = ["Daan", "Beau", "Yaser", "Jean"]

const card1 = document.querySelector(".card-1")
const card2 = document.querySelector(".card-2")
let i = 0

function changeContent() {
  card1.innerText = arr[i]
  if(i+1 > (arr.length - 1)) i = -1
  card2.innerText = arr[i + 1]
  i++
  tl.restart()
  tl.pause()
}

// changeContent()



fetch("../assets/persons.json").then(res=>{
  return res.json()
}).then(data=>{
  console.log(data)
})

function setActive(elem, i) {
  deActive();
  document.querySelector("nav").classList.add("active");
  elem.parentNode.classList.add("active-item");
  let content = document.querySelectorAll("nav .content-container li")[i].classList.add("active");
  console.log("activated", elem);
}

function deActive() {
  document.querySelector("nav").classList.remove("active");
  document.querySelectorAll("nav .content-container li").forEach((item)=>{
    item.classList.remove("active");
  });
  document.querySelectorAll("nav li").forEach((item) => {
    item.classList.remove("active-item");
  });
}