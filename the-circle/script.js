var circle = document.querySelector('.circle');

function makeItGreen() {
    circle.style.backgroundColor = 'green';
circle.addEventListener("click", function () {
    makeItGreen();
});
}
circle.addEventListener("click", function () {
    makeItGreen();
});
var box = document.querySelector('.event-box');

circle.addEventListener('mouseover', function() {
  this.textContent = 'Water is sometimes green';
    this.style.backgroundColor = 'green';
});

circle.addEventListener('mouseout', function() {
  this.textContent = 'Money';
  this.style.backgroundColor = 'green';
});

circle.addEventListener('click', function() {
  this.textContent = 'frogs are green';
  this.style.backgroundColor = 'lightgreen';
});

circle.addEventListener('dblclick', function() {
  this.textContent = 'trees are green';
  this.style.backgroundColor = 'darkgreen';
});

var isBlue = true;