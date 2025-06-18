const input = document.forms["calc"]["display"];

function calculate() {
    try {
        input.value = new Function("return " + input.value)();
    } catch {
        input.value = "Error";
    }
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (/[\d+\-*/.]/.test(key)) {
        input.value += key;
    }
    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }
    if (key === "Backspace") {
        input.value = input.value.slice(0, -1);
    }
    if (key === "Escape") {
        input.value = "";
    }
});
