let count = 0;
const button = document.querySelector("#dot");
const counter = document.querySelector("#counter");
const audio = document.querySelector("#fart");

button.addEventListener("click", function() {
  count++;
  counter.innerHTML = count;
  if (count >= 5) {
    document.getElementById("message").innerHTML= "You have reached level 1: Clicker Noob";
    document.getElementById("dot").style.backgroundColor = "blue";
    }

    if (count >= 20) {
        document.getElementById("message").innerHTML= "You have reached level 2: Purple Cat";
        document.getElementById("dot").style.backgroundColor = "purple";
        document.getElementById('purpleCat').style.display= "block";
        }

    if (count >= 50) {
        document.getElementById("message").innerHTML= "You have reached level 3: Pug";
        document.getElementById("dot").style.backgroundColor = "orange";
        document.getElementById('purpleCat').style.display= "none";
        document.getElementById('pug').style.display = "block";
        }


    if (count >= 100) {
        document.getElementById("message").innerHTML= "You have reached level 4: Trump";
        document.getElementById("dot").style.backgroundColor = "pink";
        document.getElementById('purpleCat').style.display= "none";
        document.getElementById('pug').style.display = "none";
        document.getElementById('trump').style.display = "block";
        audio.play();
        
        
    }
    
    


});





   