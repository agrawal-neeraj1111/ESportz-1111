const loader = document.querySelector('.loader');
loader.classList.remove('hidden');

// Simulating loading completion after 3 seconds
setTimeout(function () {
    loader.classList.add('hidden');
}, 1500);
function changeText() {
    var box = document.getElementById("box");
    
    if (!box.classList.contains("hovered")) {
      box.classList.add("hovered");
      box.textContent = "To my World";
    }
  }
  
  function resetText() {
    var box = document.getElementById("box");
    
    if (box.classList.contains("hovered")) {
      box.classList.remove("hovered");
      box.textContent = "Welcome";
    }
  }