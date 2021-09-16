// Who knew programmers could be funny?

// Write an function that makes an API call to `https://xkcd.now.sh/?comic=latest`

// 1. Create a `HTML`, `CSS` and `JavaScript` file to write your code in

// - Inside the same file write a program that gets the `json` using Fetch.
// - A function should make an API call to the given endpoint: `https://xkcd.now.sh/?comic=latest`
// - Log the received data to the console
// - Render the `img` property into an `<img>` tag in the DOM
// - Incorporate error handling

function programmingApiCall(){
// Write an function that makes an API call to `https://xkcd.now.sh/?comic=latest`
 fetch ("https://xkcd.now.sh/?comic=latest")
     .then((response) =>  {
        return response.json;
  
     })
     .then((data) =>{
        console.log(data);
       document.documentElementId("img").src=data.img;
     })
     .catch((error) => {
         console.warn("There is an error while loading this page");
    });
