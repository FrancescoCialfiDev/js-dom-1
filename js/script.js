// Applichiamo controlli ristertri del codice
"use strict"
// Effettuiamo un clear della console
console.clear()
const immagine = document.querySelector("img")
const onOff = document.getElementById("onOffButton")
onOff.addEventListener("click", accesoSpento)

let isOn = false;

function accesoSpento (){
    if (isOn === false) {
        immagine.src = "img/white_lamp.png"
        isOn = true;
    } else {
        isOn = false;
        immagine.src = "img/yellow_lamp.png"
    }
}