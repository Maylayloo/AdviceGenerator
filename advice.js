let advice = document.getElementById("advice")
let id = document.getElementById('adviceID')
const API_URL = "https://api.adviceslip.com/advice"

new_advice()

function new_advice() {
    fetch(API_URL)
        .then(response => response.json())
        .then(json => {
            advice.innerText = JSON.stringify(json["slip"]["advice"])
            id.innerText = "ADVICE #" + JSON.stringify(json["slip"]["id"])
        } )

}
