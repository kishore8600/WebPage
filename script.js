var popup = document.querySelector(".popup")
var popbox = document.querySelector(".popbox")
var add = document.querySelector(".add")

add.addEventListener("click",function(){
  popup.style.display="block"
  popbox.style.display="block"
})

var cancel = document.getElementById("cancel");
cancel.addEventListener("click",function(event) {
      event.preventDefault();
      popup.style.display="none"
      popbox.style.display="none"
})

var container = document.querySelector(".container")
var add = document.getElementById("add")
var booktitle = document.getElementById("book title input")
var bookauthor = document.getElementById("book Author input")
var decription = document.getElementById("book-description")

add.addEventListener("click",function(event){
  event.preventDefault();
  var div=document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML=`<h2>${booktitle.value}</h2>
      <h5>${bookauthor.value}</h5>
      <p>${decription.value}</p>
      <button onclick="del(event)">
        Delete
      </button>`
  container.append(div)
  popup.style.display="none"
  popbox.style.display="none"
})

function del(event) {
  event.target.parentElement.remove();
}