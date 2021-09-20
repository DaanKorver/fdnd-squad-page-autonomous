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

// Search ------------------------------------------------

const searchContainer = document.getElementById("search-results")
const searchBar = document.getElementById("searchbar")

async function getStudents() {
  return await fetch("../assets/persons.json").then(res=>{
    return res.json()
  }).then(data=>{
    return data.persons
  })
}

let students = []
getStudents().then((data)=>{
  students = data
  students.forEach(student=>{
    searchContainer.innerHTML += `<p>${student.name}</p>`
  })
})

function search(search) {
  let results = []
  const searchValue = search.value.toUpperCase()
  students.forEach((student)=>{
    if(student.name.toUpperCase().indexOf(searchValue) > -1) {
      results.push(student)
      console.log(student);
    }
  })
  renderSearch(results)
}

function renderSearch(results) {
  searchContainer.innerHTML = ""
  results.forEach(result=>{
    searchContainer.innerHTML += `<p>${result.name}</p>`
  })
}

searchBar.addEventListener("input", function() {
  search(this)
})