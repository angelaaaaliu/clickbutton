// Add a message listener that listens for a message from the popup

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
   
    // Pull out whether the user wants animals to spawn

    const spawn = message["addAnimal"];

    
    if (spawn) {
        document.addEventListener('click', spawnAnimal);
    }

    const spawnToggle = document.getElementById("spawnToggle");

    spawnToggle.addEventListener("change", deleteAnimals(spawn));

  });



const animals = new Array("https://raw.githubusercontent.com/angelaaaaliu/clickbutton/main/animals/bear.png",
 "https://raw.githubusercontent.com/angelaaaaliu/clickbutton/main/animals/frog.png",
  "https://raw.githubusercontent.com/angelaaaaliu/clickbutton/main/animals/ken.png", 
  "https://raw.githubusercontent.com/angelaaaaliu/clickbutton/main/animals/pig.png", 
  "https://raw.githubusercontent.com/angelaaaaliu/clickbutton/main/animals/whale.png" );

function spawnAnimal (e) {

    let cursorX = e.clientX;
    let cursorY = e.clientY;

    let animal = document.createElement("img");
    let randomNum = Math.floor(Math.random() * animals.length);
    let animalsrc = animals[randomNum];
    animal.src = animalsrc;

    animal.classList.add("animal");
    animal.style.left = cursorX + "px";
    animal.style.top = cursorY + "px";
    animal.style.position = 'absolute';
    animal.style.zIndex = '1000';

    document.body.appendChild(animal);

}


function deleteAnimals (spawn) {
    if(!spawn) {
        const animals = document.querySelectorAll('.animal');

        animals.forEach(animal => {
            animal.style.display = 'none';
        })
    }
}   