var popup=document.querySelector(".popup-container")
var layer=document.querySelector(".popup-layer")
var button=document.querySelector(".add-btn")
var cancel=document.querySelector(".cancel-book")
button.addEventListener("click",function(){
    popup.style.display="block"
    layer.style.display="block"
})
cancel.addEventListener("click",function(){
    popup.style.display="none"
    layer.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.querySelector(".add-book")
var titlebook=document.getElementById("title")
var authorbook=document.getElementById("author")
var descbook=document.getElementById("desc")

addbook.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${titlebook.value}</h2>
    <h4>${authorbook.value}</h4
    <p>${descbook.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    popup.style.display="none"
    layer.style.display="none"    
})
function del(event){
    event.target.parentElement.remove()
}