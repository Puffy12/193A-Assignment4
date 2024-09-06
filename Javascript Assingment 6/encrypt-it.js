(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * This function initializes the event listeners and handles UI interaction.
   */
  function init() {
    console.log("Window loaded!");

    // Set up event listener for the "Encrypt-It!" button
    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    // Set up event listener for the "Reset" button
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * Event handler for the "Encrypt-It!" button.
   * This function retrieves the input text and applies the shift cipher,
   * then outputs the result in the result paragraph.
   */
  function handleEncrypt() {
    console.log("Button clicked!");

    // Get the input text value
    const inputText = document.getElementById("input-text").value;

    // Encrypt the input text using the shift cipher
    const encryptedText = shiftCipher(inputText);

    // Output the encrypted text in the result area
    const resultArea = document.getElementById("result");
    resultArea.textContent = encryptedText;
  }

  /**
   * Event handler for the "Reset" button.
   * Clears the input textarea and the result paragraph.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";  // Clear input text
    document.getElementById("result").textContent = "";  // Clear result text
  }

  /**
   * This function applies a basic shift cipher to the given text,
   * shifting each letter forward by one in the alphabet, and wrapping
   * from 'z' to 'a'. Non-alphabet characters are not modified.
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    
    for (let i = 0; i < text.length; i++) {
      let currentChar = text[i];
      if (currentChar >= 'a' && currentChar <= 'z') {
        // Shift each letter, wrapping 'z' to 'a'
        if (currentChar === 'z') {
          result += 'a';
        } else {
          result += String.fromCharCode(currentChar.charCodeAt(0) + 1);
        }
      } else {
        // Keep non-letter characters unchanged
        result += currentChar;
      }
    }
    
    return result;
  }

})();
