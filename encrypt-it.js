/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    // when user click "encrypt-it" button, call handleClick()
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
  }

  // print "Button clicked!" on console
  function handleClick(){
    console.log("Button  clicked!");
    var userInput = document.getElementById("input-text").value;  // get content in textarea
    var output = shiftCipher(userInput);  // encrypt the text
    document.getElementById("result").innerHTML = output  // write the output to result paragraph
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function shiftCipher(userInput){
    userInput = userInput.toLowerCase();  // lower case the text
    let outputString = "";  // to store result

    for(let i = 0; i < userInput.length; i++){
      if(userInput[i] < 'a' || userInput[i] > 'z'){ // if the element is not a alphabet character
        outputString += userInput[i]; // don't change the element
      }
      else if(userInput[i] == 'z'){ // if theelement is 'z'
        outputString += 'a';    // change it to 'a'
      }
      else{ // if element is between 'a' and 'y'
          let letter = userInput.charCodeAt(i); // get the UTF-16 code for this character
          let resultLetter = String.fromCharCode(letter + 1); // get the next character
          outputString += resultLetter;
      }
    }

    return outputString;
  }
})();


