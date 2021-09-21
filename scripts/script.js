
// const nextCard = gsap.timeline({
//   paused: true,
//   onComplete: changeContent
// })

// const previousCard = gsap.timeline({
//   paused: true,
//   onComplete: changeContent
// })

// nextCard.to(".card-1", {duration: .7, x: "-110%"}, "cards")
//   .set(".card-1", {css:{zIndex: 1}})
//   .to(".card-2", {duration: .7, x: "0%"}, "cards")
//   .to(".card-3", {duration: .7, x: "3%"}, "cards")
//   .to(".card-1", {duration: 1, x: "6%"})

// previousCard.to(".card-1", {duration: .7, x: "110%"}, "cards")
// .set(".card-1", {css:{zIndex: 1}})
// .to(".card-2", {duration: .7, x: "0%"}, "cards")
// .to(".card-3", {duration: .7, x: "3%"}, "cards")
// .to(".card-1", {duration: 1, x: "6%"})

// const students = [
//   {name: "Daan Korver", link: "http://www.daan.student.fdnd.nl"},
//   {name: "Beau Dekker", link: "http://www.beau.student.fdnd.nl"},
//   {name: "Jean Roger", link: "http://www.jean.student.fdnd.nl"},
//   {name: "Yasser idk", link: "http://www.yasser.student.fdnd.nl"},
//   {name: "Armando idk", link: "http://www.armando.student.fdnd.nl"}
// ]

// let index = 0;
// let canAnimate = true
// const card1 = document.getElementById("card-1")
// const card2 = document.getElementById("card-2")
// const card3 = document.getElementById("card-3")

// function next() {
//   if(!canAnimate) return;
//   index++
//   if(index > (students.length - 1)) index = 0
//   console.log(index);
//   animateCardsNext()
// }

// function previous() {
//   if(!canAnimate) return;
//   index--
//   if(index < 0) index = (students.length - 1)
//   console.log(index);
//   animateCardsPrevious()
// }

// function animateCardsNext() {
//   nextCard.play()
// }
function populateCards(data){
  const cards = document.querySelector("#cards ul");
  let zIndex = 0
  data.forEach((item)=>{
    let element = document.createElement("LI");
    element.innerHTML = "<div><span>"+item["name"]+"</span><span><img src='../assets/playcard.jpeg'/></span></div>";
    element.onclick = function(e){
      console.log(e.currentTarget)
      e.currentTarget.style.zIndex = zIndex
      zIndex++
      if (e.currentTarget.classList.contains("flipped")){
        e.currentTarget.classList.remove("flipped");
      } else {
        e.currentTarget.classList.add("flipped");
      }
    };
    cards.appendChild(element)
  })
}

fetch("../assets/persons.json").then(res=>{
  return res.json()
}).then(data=>{
  populateCards(data.persons);
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
