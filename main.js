$(".icon").click(function () {
  $(".menu-items").toggle();
});
$(".menu-anchor").click(function () {
  $(".menu-items").toggle();
});


$(".bmi-btn").click(function () {
  $(".bmi-wrapper").toggle();
  $(".bmi-container").toggle();
});
$("#back").click(function () {
  $(".bmi-container").toggle();
  $(".bmi-wrapper").toggle();
});

function bmi() {
  let name = document.getElementById("nm").value;
  let a = document.getElementById("height").value;
  let b = document.getElementById("weight").value;
  let c = a / 100;
  var BMI = b / (c * c);
  var nbmi = BMI.toFixed(2);
  document.getElementById("label-bmi").innerHTML = "BMI = " + nbmi;

  if (nbmi < 18.5) {
    document.getElementById("ans").innerHTML = "Underweight";
    document.getElementById("bmi-text").innerHTML =
      "Hello " +
      name +
      "! Don't worry we've got the best diet plans to gain weight and maintain a healthy lifestyle. ";
  } else if (nbmi >= 18.5 && nbmi <= 24.9) {
    document.getElementById("ans").innerHTML = "Normal";
    document.getElementById("bmi-text").innerHTML =
      "Hello " +
      name +
      "! Looks like you are very fit. Join us to level up your fitness.";
  } else if (nbmi >= 25 && nbmi <= 29.9) {
    document.getElementById("ans").innerHTML = "Overweight";
    document.getElementById("bmi-text").innerHTML =
      "Hello " + name + "! Don't worry join us to get back in shape.";
  } else if (nbmi >= 30) {
    document.getElementById("ans").innerHTML = "Obesity";
    document.getElementById("bmi-text").innerHTML =
      "Hello " +
      name +
      "! Join us to get the best diet and fitness plans to lead a healthy lifestyle.";
  }
}


const back = document.getElementById('back');
const calc = document.getElementById('calc');
const nm = document.getElementById('nm');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const l = document.getElementById('label-bmi');
const ans = document.getElementById('ans');
const bt = document.getElementById('bmi-text');

back.addEventListener('click', function handleClick(event) {
  nm.value = '';
  height.value = '';
  weight.value = '';
  l.innerHTML = '';
  ans.innerHTML = '';
  bt.innerHTML = '';
});