let headerElt = document.querySelector("header")
let mainElt = document.querySelector("main")
let selectElt = document.getElementById("select")
let buttonElt = document.querySelector("button")
let titleElt = document.querySelector("h1")
let containerElt = document.getElementById("container");


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
  console.dir(buttonElt)
  e.preventDefault();
  let innerElt = document.createElement("inner");
  let firstName = document.getElementById("first-name")
  let lastName = document.getElementById("last-name")
  let age = selectElt
  innerElt.innerHTML = '<div class="inner"><div class="item">' + firstName.value + ' ' + lastName.value + '</div><div class="item">' + age.value + '</div></div>'
  containerElt.appendChild(innerElt)
  firstName.value = ""
  lastName.value = ""
  age.value = "0 - 20"
  console.dir(titleElt)
  titleElt.innerHTML = "Thanks ! Feed me again..."
})

