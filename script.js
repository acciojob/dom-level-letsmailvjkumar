//your JS code here. If required.
window.onload = function() {
  var levelElement = document.getElementById('level');
  var level = 1;

  while (levelElement !== null) {
    level++;
    levelElement = levelElement.parentElement;
  }

  alert('The level of the element is: ' + level);
};