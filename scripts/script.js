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
