// function showAlert(item) {
//     alert("You selected: " + item);
// }




export function elevenChange() {
    var x = document.getElementById("7ElevenSelect").value;
    if (x === "7Eleven-Centralstationen") {
        window.location.replace("https://www.conductor.com/");
        console.log("centralstatione selected")
    } else if (x === "7Eleven-Korsetten" ) {
        window.location.replace("/home");

    }
}


// if (option value = "7-Eleven-Centralstationen") {
//     window.location.replace("https://www.conductor.com/");
// } else if (option value = "7 - Eleven - Korsetten") {
//     window.location.replace("/home");
// } else {
//     window.location.replace("/info");

// }
