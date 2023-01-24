// Add a message listener that listens for a message from the popup

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // This is the whole message object that was sent from the popup
   
    // Pull out whether the user wants animals to spawn

    const spawn = message["addAnimal"];

    // chrome.storage.sync.get("addAnimal", (result) => {
    //     spawn = result.addAnimal;
    // });

    // alert(spawn)
    
    if (spawn) {
        document.addEventListener('click', spawnAnimal);
    }

    const spawnToggle = document.getElementById("spawnToggle");

    spawnToggle.addEventListener("change", deleteAnimals(spawn));



    // if (spawn) {
    //     let docBody = document.createElement('div');
    //     docBody.style.position = 'absolute';
    //     docBody.style.width = "100vw";
    //     docBody.style.height = "100vh";
    //     docBody.style.zIndex = "999";
    //     document.body.appendChild(docBody);

    //     docBody.addEventListener("click", spawnAnimal);
    // }
  
    // // Get the current color of the background to send it back to the popup
    // const oldColor = getComputedStyle(document.body).backgroundColor;
  
    // // Set the background color to the new color
    // document.body.style.backgroundColor = newColor;
  
    // // Use the sendResponse function passed in by chrome to send a response
    // sendResponse(`the color has been changed from ${oldColor} to ${newColor}!`);
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