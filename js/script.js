/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const unitInput = document.getElementById("unit-input");
const lengthP = document.getElementById("length-p");
const volumeP = document.getElementById("volume-p");
const massP = document.getElementById("mass-p");

convertLength(unitInput.value);
convertVolume(unitInput.value);
convertMass(unitInput.value);

function convertLength(value){
    const meterToFeet = value * 3.281;
    const feetToMeter = value / 3.281;
    let sentenceForLength = `
    ${value} meters = ${meterToFeet.toFixed(3)} feet | 
    ${value} feet = ${feetToMeter.toFixed(3)} meters
    `;
    lengthP.textContent = sentenceForLength;
}

function convertVolume(value){
    const literToGallon = value * 0.264;
    const gallonToLiter = value / 0.264;
    let sentenceForVolume = `
    ${value} liters = ${literToGallon.toFixed(3)} gallons | 
    ${value} gallons = ${gallonToLiter.toFixed(3)} liters
    `;
    volumeP.textContent = sentenceForVolume;
}

function convertMass(value){
    const kgToPound = value * 2.204;
    const poundToKg = value / 2.204;
    let sentenceForMass = `
    ${value} kilos = ${kgToPound.toFixed(3)} pounds | 
    ${value} pounds = ${poundToKg.toFixed(3)} kilos
    `;
    massP.textContent = sentenceForMass;
}

convertBtn.addEventListener("click", function(){
    const inputValue = unitInput.value;
    convertLength(inputValue);
    convertVolume(inputValue);
    convertMass(inputValue);
})