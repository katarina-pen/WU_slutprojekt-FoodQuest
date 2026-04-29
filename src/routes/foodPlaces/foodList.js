// function showAlert(item) {
//     alert("You selected: " + item);
// }




export function elevenChange() {
    var x = document.getElementById("7ElevenSelect").value;
    if (x === "7Eleven-Centralstationen") {
        window.location.replace("/foodPlaces/7-eleven-Centralstationen");
        console.log("centralstatione selected")
    } else if (x === "7Eleven-Korsetten" ) {
        window.location.replace("/foodPlaces/7-eleven-Korsetten");

    }
}

export function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// if (option value = "7-Eleven-Centralstationen") {
//     window.location.replace("https://www.conductor.com/");
// } else if (option value = "7 - Eleven - Korsetten") {
//     window.location.replace("/home");
// } else {
//     window.location.replace("/info");

// }
