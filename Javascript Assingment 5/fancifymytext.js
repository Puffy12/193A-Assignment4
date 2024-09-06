alert("Hello, world!");

function makeTextBigger() {
    let textArea = document.getElementById("inputText");
    textArea.style.fontSize = "24pt";
}

function makeTextSmaller() {
    let textArea = document.getElementById("inputText");
    textArea.style.fontSize = "10pt";
}

function fancifyText() {
    let textArea = document.getElementById("inputText");

    // FancyShmancy style 
    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // BoringBetty stlye
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    let textArea = document.getElementById("inputText");
    let text = textArea.value.trim(); //remove any spaces

    if (text === "") {
        return;
    }

    let sentencesArray = text.toUpperCase().split(".");

    let sentences = [];     //Filter out empty sentences
    for (let sentence of sentencesArray) {
        
        if (sentence.trim() !== "") {
            sentences.push(sentence);
        }
    }

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" "); // Split each sentence into words

        if (words.length > 0) {
            let temp = words[words.length - 1] + "-Moo" //Add moo to last word
            words[words.length - 1] = temp; // Append "-Moo" to word array
        }

        sentences[i] = words.join(" "); // Join the words together
    }

    textArea.value = sentences.join(". ") + "."; // . At the end 
}

