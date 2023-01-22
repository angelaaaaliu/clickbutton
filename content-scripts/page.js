// Add a message listener that listens for a message from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // This is the whole message object that was sent from the popup
    console.log('hi');
    console.log(message);
   
    // Pull out whether the user wants animals to spawn
    const spawn = message["addAnimal"];

    console.log(spawn);

    if (spawn) {
        document.body.addEventListener("onclick", spawnAnimal)
    }
  
    // // Get the current color of the background to send it back to the popup
    // const oldColor = getComputedStyle(document.body).backgroundColor;
  
    // // Set the background color to the new color
    // document.body.style.backgroundColor = newColor;
  
    // // Use the sendResponse function passed in by chrome to send a response
    // sendResponse(`the color has been changed from ${oldColor} to ${newColor}!`);
  });

const animals = new Array("images/bear.png", "images/frog.png", "images/ken.png", "images/pig.png", "images/whale.png", )

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

    document.body.appendChild(animal);

}


// function addAnimal (element) {

// }   