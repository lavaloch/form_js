let headerElt = document.querySelector("header")
let mainElt = document.querySelector("main")
let selectElt = document.getElementById("select")
let buttonElt = document.querySelector("button")
let titleElt = document.querySelector("h1")
let containerElt = document.getElementById("container")
let removeElt = document.querySelectorAll("remove-button")
let inputElt = document.querySelectorAll("input")
let innerElt = document.querySelectorAll(".inner")
let i = 0

var options = {
    "0 - 20" : '0 - 20',
    "21 - 40" : '21 - 40',
    "41 - 60" : '41 - 60',
    "61 - 80" : '61 - 80',
    "81 et plus" : "81 et plus"
};

let thanks = function() {
  let innerElt = document.createElement("inner");
  innerElt.innerHTML = '<div class="inner"><div class="item">' + firstName.value + ' ' + lastName.value + '</div><div class="item">' + age.value + '</div></div>'
  containerElt.appendChild(innerElt)
}

window.addEventListener("load", function() {
  console.dir(selectElt)
  console.log(selectElt)

  // STYLE
  mainElt.style.marginTop = headerElt.offsetHeight * 2 + "px"

  // HTML ADD
  for(index in options) {
    selectElt.options[selectElt.options.length] = new Option(options[index], index);
  }
})

buttonElt.addEventListener("click", function(e) {
  if (inputElt[0].value == "" && inputElt[1].value == "") {
    e.preventDefault();
    inputElt[0].style.borderColor = "salmon"
    inputElt[1].style.borderColor = "salmon"
    titleElt.innerHTML = "Only three fields to fill and you miss it..."
  } else {
    i += 1
    //console.dir(buttonElt)
    e.preventDefault();
    let innerElt = document.createElement("div");
    innerElt.className = "inner"
    let firstName = document.getElementById("first-name")
    let lastName = document.getElementById("last-name")
    let age = selectElt
    innerElt.innerHTML = '<div class="item">' + firstName.value + ' ' + lastName.value + '</div><div class="item">' + age.value + '</div><button id="rembut_' + i + '" class="remove-button">DELETE</button>'
    containerElt.appendChild(innerElt)
    firstName.value = ""
    lastName.value = ""
    age.value = "0 - 20"
    //console.dir(titleElt)
    titleElt.innerHTML = "Thanks ! Feed me again..."
    let removeElt = document.querySelector("button")
    removeElt = document.querySelectorAll(".remove-button")
    //console.log(removeElt)
    inputElt[0].style.borderColor = "navajowhite"
    inputElt[1].style.borderColor = "navajowhite"
  }
})

// let deleteInnerELt = function() {

// }

function hide(e){
  // e.target se réfère à l'élément <li> cliqué
  // C'est différent de e.currentTarget qui doit faire référence au parent <ul> dans ce contexte
  if (e.className = "remove-button") {
    e.target.parentNode.remove()
    titleElt.innerHTML = "Done. Give me more !"
  } else {
    console.log("Oula")
  }
}

document.body.addEventListener('DOMSubtreeModified', function () {
  removeElt = document.querySelectorAll(".remove-button")
  containerElt.addEventListener("click", hide, false)
})

document.addEventListener("change", function() {
})
