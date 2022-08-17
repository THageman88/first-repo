document.addEventListener("mousemove", function (pointer) { // changes background color based on mouse movement
    const g = Math.round(pointer.pageX * 75 / window.innerWidth);
    const b = Math.round(pointer.pageY * 15 / window.innerHeight);
    const color = `rgb(0,${g},${b})`;
    document.body.style.backgroundColor = color;
});

let form = document.getElementById("form"); //links meme form to javascript
let memeLink = document.getElementById("dank-image"); // links meme image to javascript

form.addEventListener("submit", function (e) { //creates submit button function to submit meme form
    e.preventDefault(); // creates form without resetting to default
    let meme = document.createElement("div"); //creates the actual meme (element)
    let memeImg = document.createElement("img"); // creates an object to recieve the img URL
    let topText = document.createElement("div"); // creates an element to handle the input from top text
    let bottomText = document.createElement("div"); // creates an element to handle the input from the bottom text
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Delete Meme";
    removeBtn.addEventListener("click", function(r) {
        r.target.parentElement.remove();
    });

   
    memeImg.src = document.getElementById("dank-image").value; // gets image url
    memeImg.setAttribute("id", "memeImg"); ///creates a meme image class to manipulate the meme image

    topText.setAttribute("id", "topText"); //creates a class for the top text so we can call it to do stuff like style or position it
    topText.innerHTML = document.getElementById("top-text").value; // sets the value for whatever the toptext input is

    bottomText.setAttribute("id", "bottomText"); // creates a class for the bottom text to be called for things like styling and positioning
    bottomText.innerHTML = document.getElementById("bottom-text").value //gets value from bottom text box and passes it to bottom text


    meme.classList.add("meme"); // creates a class for meme so we can begin to assemble
    meme.appendChild(memeImg); // creates the image
    meme.appendChild(topText); //creates the top text
    meme.appendChild(bottomText); // creates the bottom text
    meme.appendChild(removeBtn); // creates remove button
    
    let memeLocation = document.getElementById("meme-location");
    memeLocation.appendChild(meme);

    form.reset();
})