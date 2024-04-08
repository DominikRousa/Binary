function morseToText() {
    const morse = document.getElementById('inputText').value;
    const morseCode = {
        '.-': 'a',
        '-...': 'b', 
        '-.-.': 'c', 
        '-..': 'd', 
        '.': 'e', 
        '..-.': 'f', 
        '--.': 'g', 
        '....': 'h',
        '..': 'i', 
        '.---': 'j', 
        '-.-': 'k', 
        '.-..': 'l', 
        '--': 'm', 
        '-.': 'n', 
        '---': 'o', 
        '.--.': 'p',
        '--.-': 'q', 
        '.-.': 'r', 
        '...': 's', 
        '-': 't', 
        '..-': 'u', 
        '...-': 'v', 
        '.--': 'w', 
        '-..-': 'x',
        '-.--': 'y', 
        '--..': 'z', 
        '.----': '1', 
        '..---': '2', 
        '...--': '3', 
        '....-': '4', 
        '.....': '5',
        '-....': '6', 
        '--...': '7', 
        '---..': '8', 
        '----.': '9', 
        '-----': '0', 
        '/': ' '
    };
    const words = morse.split(' ');
    let text = '';
    for (let i = 0; i < words.length; i++) {
        text += morseCode[words[i]] ? morseCode[words[i]] : words[i];
    }
    document.getElementById('outputText').value = text;
}

// Convert binary string to decimal number
let bin = "101010";
let dec = parseInt(bin, 2); // Specify radix 2 for binary
console.log(dec); // 42

function textToMorse(){
    let num = parseInt(document.getElementById('inputText').value);
    let sbin = num.toString(2);
    console.log(sbin);
    document.getElementById('outputText').value = sbin;
    // "101010"
}

function morseToText(){
    let bin = document.getElementById('outputText').value
    let dec = parseInt(bin, 2); // Specify radix 2 for binary
    document.getElementById('inputText').value = dec;
}