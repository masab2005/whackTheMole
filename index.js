const holes = document.querySelectorAll(".box");
const mode = document.getElementById("mode");
const audio = document.getElementById("audio");
const scoredisplay = document.getElementById("score");

let score = 0;
mode.addEventListener("change",(event)=>{
    score=0;
    scoredisplay.innerText = `Score: ${score}`;
    if(event.target.value == "Easy"){
        holes.forEach((hole)=>{
            hole.classList.remove("extreme");
            hole.classList.add("box");
        });
        clearInterval(timeid);
      timeid = setInterval(generator,1500);
        document.documentElement.style.setProperty('--sec','1.5s');
      }
    else if(event.target.value == "Medium"){
        score=0;
        scoredisplay.innerText = `Score: ${score}`;
        holes.forEach((hole)=>{
            hole.classList.remove("extreme");
            hole.classList.add("box");
        });
      clearInterval(timeid);
      timeid = setInterval(generator,1000);
      document.documentElement.style.setProperty('--sec','1s');
    }
    else if(event.target.value == "Hard"){
        score=0;
        scoredisplay.innerText = `Score: ${score}`;
        holes.forEach((hole)=>{
            hole.classList.remove("extreme");
            hole.classList.add("box");
        });
        clearInterval(timeid);
       timeid = setInterval(generator,700);
        document.documentElement.style.setProperty('--sec','.7s');
      }
      else if(event.target.value == "Extreme"){
        clearInterval(timeid);
        score=0;
        scoredisplay.innerText = `Score: ${score}`;
        timeid = setInterval(generator,500);
        document.documentElement.style.setProperty('--sec','.5s');
        holes.forEach((hole)=>{
            hole.classList.remove("box");
            hole.classList.add("extreme");
        });
    
      }
});

holes.forEach((hole)=>{
    hole.addEventListener("click",(event)=>{
        if(event.target.classList.contains("mole")){
            audio.currentTime = 0; // Rewind to the start
            audio.play();
            score++;
            scoredisplay.innerText = `Score: ${score}`;
        }    
    });
});

function generator() {
    holes.forEach((hole)=>{
        hole.classList.remove("mole");
    });
    let num = Math.floor(Math.random() * 16);
    holes[num].classList.add("mole");
}

let timeid = setInterval(generator,1500);