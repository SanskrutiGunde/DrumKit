var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function handleClick() {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keypress", function (event) {
  //console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      toastPrint(key);
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      toastPrint(key);
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      toastPrint(key);
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      toastPrint(key);
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      toastPrint(key);
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      toastPrint(key);
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      toastPrint(key);
      break;
    default:
      console.log("wrong key: ", key);

      iziToast.error({
        message: "wrong key",
        title: key + " Key pressed",
        position: "topRight",
        timeout: 500,
      });
  }
}
function toastPrint(key) {
  iziToast.success({
    message: "Good",
    title: key + " Key pressed",
    position: "topLeft",
    timeout: 500,
  });
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
