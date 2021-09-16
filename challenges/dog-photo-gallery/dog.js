//  # Dog photo gallery

// Let's make a randomized dog photo gallery!

// Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.

// - Create an `index.html` file that will display your random image
// - Add 2 `<button>` and 1 `<ul>` element, either in the HTML or through JavaScript
// - When the button is clicked it should make an API call to `https://dog.ceo/api/breeds/image/random`
// - After receiving the data, append to the `<ul>` a `<li>` that contains an `<img>` element with the dog image
// - Incorporate error handling

let fetchinImage = document.querySelector(".images");
let btn = document.querySelector(".btn");

function dogImageFetch(){
  // Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`. It should trigger after clicking a button in your webpage. Every time the button is clicked it should append a new dog image to the DOM.   fetch ("https://dog.ceo/api/breeds/image/random")
  fetch("https://dog.ceo/api/breeds/image/random")
      .then((fetchinImage) => {
        let response =fetchinImage.json();
      return response;

   })
   .then((data) =>{
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let img = document.querySelector("img");

fetchinImage.scr =data.message;
img.classList ="img";
li.appendChild(img);

   })

   .catch((error)=> console.log("error", error));
   

}

btn.addEventListener("click", () => {
    dogImageFetch();
});
