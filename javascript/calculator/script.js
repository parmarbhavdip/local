let inputBox = document.getElementById("inputbox");let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (value === "ac") {
            string = "";
            inputBox.value = "";
        } else if (value === "del") {
            string = string.slice(0, -1);
            inputBox.value = string;
        } else if (value === "=") {
            try {
                string = eval(string).toString(); // WARNING: `eval` is dangerous in production!
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = "";
            }
        } else {
            string += value;
            inputBox.value = string;
        }
    });
});

