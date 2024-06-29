window.onload = function() {
  
  function randomPalo() {
    const palos = ["♦", "♥", "♠", "♣"];
    let indexPalo = Math.floor(Math.random() * palos.length);
    return palos[indexPalo];
  }

  function randomNumber() {
    const number = ["A", "2", "3", "4", "5", "6", "8", "9", "J", "Q", "K"];
    let indexNumber = Math.floor(Math.random() * number.length);
    return number[indexNumber];
  }


  let generarPalo = randomPalo();
  let generarNumero = randomNumber();


  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  let numero = document.querySelector(".numbers");


  top.innerHTML = generarPalo;
  bottom.innerHTML = generarPalo;
  numero.innerHTML = generarNumero;


  if (top.innerHTML === "♦" || top.innerHTML === "♥") {
    top.style.color = "red";
  } else {
    top.style.color = "black";
  }

  if (bottom.innerHTML === "♦" || bottom.innerHTML === "♥") {
    bottom.style.color = "red";
  } else {
    bottom.style.color = "black";
  }
};

