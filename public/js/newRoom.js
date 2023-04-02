'use strict';

let adjectives = [
    'meet',
    
];

let nouns = [
    'ing',
    
];

function getRandomNumber(length) {
    let result = '';
    let characters = '';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let noun = nouns[Math.floor(Math.random() * nouns.length)];
let num = getRandomNumber(5);
noun = noun.charAt(0).toUpperCase() + noun.substring(1);
adjective = adjective.charAt(0).toUpperCase() + adjective.substring(1);
document.getElementById('roomName').value = '';

// ####################################################
// TYPING EFFECT
// ####################################################

let i = 0;
let txt = num + adjective + noun;
let speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('roomName').value += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
