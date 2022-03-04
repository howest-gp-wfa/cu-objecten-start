"use strict";

window.addEventListener("load", initialize);

// Globals
let divAnalysis, divNumberObject, divMathObject, divDateObject, divObjectObject;
let inpSentence;


function initialize() {
    // DOM-binding    
    const btnAnalyseSentence = document.querySelector('#analyse-sentence');

    divAnalysis = document.querySelector('#analysis');
    inpSentence = document.querySelector('#sentence');
    divNumberObject = document.querySelector('#number-object');
    divMathObject = document.querySelector('#math-object');
    divDateObject = document.querySelector('#date-object');
    divObjectObject = document.querySelector('#object-example');

    // EventListeners
    btnAnalyseSentence.addEventListener('click', displayStrinAnalysis);

    // Startup
    inpSentence.value = 'Jantje zag een pruimen hangen, als eieren zo groot ...';
    displayNumberExample();
    displayMathExample();
    displayDateExample();
    displayObjectExample();
}

function displayStringAnalysis(){
    const sentence = inpSentence.value;
    let word = [];  // Emty Array
    let analysis = `Analyse van de ingegeven zin :`;

    // Add logic

    divAnalysis.innerHTML = `${analysis}`;
}

function displayNumberExample(){
    // Add logic

    console.info('Functieuitvoer - displayNumberExample');
}

function displayMathExample(){
    // Add logic


    console.info('Functieuitvoer - displayMathExample');
}

function displayDateExample(){
    const date = new Date();

    divDateObject.textContent = date;
}

function displayObjectExample(){
    const mountain = {
        name : "Tourmalet",
        country : "Frankrijk",
        height : 2115,
        visited : false
    }

    divObjectObject.textContent = mountain;
}
