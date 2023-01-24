// This is the function that will send our message to the content script.
// It is asyncronous because we want to use the "await" keyword inside it,
// which lets us wait for something to complete. In this case we wait for
// a response from the content script.

const spawnToggle = document.getElementById("spawn-toggle");
spawnToggle.addEventListener("change", (e) => updateContentScript());


async function updateContentScript() {

    let toggleState = spawnToggle.checked;

    // chrome.storage.sync.set({addAnimal: toggleState});

    const message = {addAnimal: toggleState};
    const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });
    
    const response = await chrome.tabs.sendMessage(tab.id, message);


}

// chrome.storage.sync.get(["addAnimal"], (result) => {
//   spawnToggle.checked = result.addAnimal;
// })
