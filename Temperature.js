let number;
let from;
let to;
let invalue;
let outvalue;
function replace() {
    document.getElementById("input").value = "";
    document.getElementById("input").type = "Number";
};
function check() {
    number = document.getElementById("input").value;
    if (number == "enter Degrees") {
        alert("do not submit without entering Degrees");
    }
    else {
        Degrees();
    };
};
function Degrees() {
    from = document.getElementById("from").value;
    to = document.getElementById("to").value;
    if (from == "Celsius") {
        if (to == "Celsius") {
            // Celsius to Celsius
            number=number;
        }
        else if (to == "Farnheit") {
            // Celsius to Farnheit
            number = (number * 9 / 5) + 32;
        }
        else {
            // Celsius to Kelvin
            number = Number(number) + 273.15;
        }
    }
    else if (from == "Farnheit") {
        if (to == "Celsius") {
            // Farnheit to Celsius
            number = (number - 32) * 5 / 9;
        }
        else if (to == "Farnheit") {
            // Farnheit to Farnheit
            number=number;
        }
        else {
            // Farnheit to Kelvin
            number = (number - 32) * 5 / 9 + 273.15;
        }
    }
    else {
        if (to == "Celsius") {
            // Kelvin to Celsius
            number = number - 273.15;
        }
        else if (to == "Farnheit") {
            // kelvin to Farnheit
            number = ((number - 273.15) * 9 / 5) + 32;
        }
        else {
            // kelvin to Kelvin
            number=number;
        }
    };
    invalue = document.getElementById("value").textContent;
    document.getElementById("value").textContent = invalue + number;
};
function disable() {
    document.getElementById("input").disabled = true;
    document.getElementById("from").disabled = true;
    document.getElementById("to").disabled = true;
    document.getElementById("submit").disabled = true;
};
function clean() {
    document.getElementById("input").type = "text";
    document.getElementById("input").value = "enter Degrees";
    document.getElementById("from").value = "Celsius";
    document.getElementById("to").value = "Celsius";
    document.getElementById("value").textContent = "value:";
};
function enable() {
    document.getElementById("input").disabled = false;
    document.getElementById("from").disabled = false;
    document.getElementById("to").disabled = false;
    document.getElementById("submit").disabled = false;
};