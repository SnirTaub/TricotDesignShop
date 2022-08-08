
// 10% discount pop up while loading the homepage

window.addEventListener("load", function(){
  setTimeout(
    function open(){
    document.querySelector(".popup").style.display = "block";
  },
  2000
  )
});

function disable_popup(){
  document.querySelector(".popup").style.display = "none";
}

// Filtering Search Bar

function filterNames() {
  var x = document.getElementById("search").value;
  const rugs = "שטיחים";
  const buckets = "סלים וסלסלות"
  let sumRugs = "";
  for(let i = 0;i<rugs.length;++i){
    sumRugs += rugs[i];
    if (x === sumRugs){
      window.open("rugs.html", "_self");
    }
  }
}

// Adding fade animation to "Welcome to my world" text 

const animatedText = document.querySelector(".fancytext");
const strText = animatedText.textContent;

const splitText = strText.split("");

animatedText.textContent = "";
for(let i=0; i < splitText.length; i++){
  animatedText.innerHTML += "<animated>" + splitText[i] + "</animated>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  const animated = animatedText.querySelectorAll('animated')[char];
  animated.classList.add('text-fade');
  char++;
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

  
// Changing the Policy and about me buttons color

  function changeColor()
  {
    document.getElementById("policy").style.color = "white"; // forecolor
    document.getElementById("policy").style.backgroundColor = "black"; // backcolor
  }
  function changeColor2()
  {
    document.getElementById("policy2").style.color = "white"; // forecolor
    document.getElementById("policy2").style.backgroundColor = "black"; // backcolor
  }
	
