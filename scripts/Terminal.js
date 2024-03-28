import { exec, displayOutput } from "./Commands.js"
// import { recent_command } from "./global.js";
let recent_command;

const outputDiv = document.getElementById("output");
const inputField = document.getElementById("input");
inputField.style.width = inputField.value.length + "ch";
const input_container = document.getElementById("input-container")


function executeCommand(command) {
    recent_command = command
    console.log(recent_command)
    if (recent_command === "projects") {
        console.log("displaying project list")
    }
    displayOutput(`<span id="commandSignature" style="color:#39FF14;line-height:1.5;margin-right:0.090em">guest@thainguyen.com:~$</span>&nbsp${command}`);
    exec(command)
    input_container.scrollIntoView()
}

inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let command = inputField.value.trim();
        if (command !== "") {
            executeCommand(command);
            inputField.value = "";
        }
        this.style.width = this.value.length + 'ch'
        return;
    }

    if (this.value.length >= 20) {
        return 
    }
    this.style.width = this.value.length + 1 + "ch";

});

inputField.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        this.style.width = (this.value.length - 1) + "ch";
    }
});