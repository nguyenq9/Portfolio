import { exec, displayOutput } from "./Commands.js"
let recent_command;

const outputDiv = document.getElementById("output");
const inputField = document.getElementById("input");
inputField.style.width = inputField.value.length + "ch";
const input_container = document.getElementById("input-container")
const terminal = document.getElementById('terminal');

const cursor = document.getElementById('cursor');

inputField.addEventListener('focus', () => {
    cursor.style.display = 'inline-block';
});

inputField.addEventListener('blur', () => {
    cursor.style.display = 'none';
});

terminal.addEventListener('click', () => {
    inputField.focus();
})


async function executeCommand(command) {
    displayOutput(`<span id="commandSignature" style="color:#39FF14;line-height:1.5;margin-right:0.090em">guest@myportfolio:~$</span>&nbsp${command}`);
    await exec(command, recent_command)
    recent_command = command
}

inputField.addEventListener("keypress", async function (event) {
    if (event.key === "Enter") {
        let command = inputField.value.trim();
        if (command !== "") {
            input_container.style.setProperty("display", "none")
            await executeCommand(command);
            inputField.value = "";
            input_container.style.removeProperty("display")
            input_container.scrollIntoView()
            inputField.focus();
            // console.log(terminal.offsetHeight);

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