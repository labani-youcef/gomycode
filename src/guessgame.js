var chances = 8;
document.querySelector("span").textContent = chances;

var rNumber = Math.floor(Math.random() * 100) + 1;
console.log(rNumber);

function checkgess() {
    var userguess = parseInt(document.querySelector(".int").value);

    if (rNumber === userguess) {
        console.log("You won!");
        document.querySelector("p").textContent = "You won!";
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
         
     } else if (rNumber > userguess) {
        console.log("Your guess is too low!");
        document.querySelector("p").textContent = "Your guess is too low!";
    } else if (rNumber < userguess) {
        console.log("Your guess is too high!");
        document.querySelector("p").textContent = "Your guess is too high!";
    }

    chances--;
    document.querySelector("span").textContent = chances;  

   
    if (chances === 0 && rNumber !== userguess) {
        console.log("Game over! You've run out of chances.");
        document.querySelector("p").textContent = "Game over! The correct number was " + rNumber + ".";
        document.querySelector(".ch").textContent = "Replay"
        document.querySelector(".ch").disabled = true;
    }
}


