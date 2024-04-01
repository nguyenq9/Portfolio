import { sleep } from './Helper.js';
const message_container = document.getElementById("message_container")
const chat_input = document.getElementById("chat_input");
const send_button = document.getElementById("send-button")

let latest;

let bot_message_counter = 0;
async function botResponse () {
    await sleep(1000)
    message_container.innerHTML += `
    <div class="chat-message bot-message" id="bot_chat_message_${bot_message_counter}">
        🚧🚧🚧 Bot is under construction 🚧🚧🚧
    </div>
    `;
    latest = document.getElementById(`bot_chat_message_${bot_message_counter}`)
    latest.scrollIntoView({ behavior: "smooth" });
    bot_message_counter++;
}

let user_message_counter = 0;
chat_input.addEventListener("keypress", async function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        if (!event.shiftKey && chat_input.innerText.trim() === "") {
            event.preventDefault(); // Prevent default behavior (adding new line) when input is empty
            return;
        }

        event.preventDefault(); // Prevent default behavior (adding new line)
        message_container.innerHTML += `
        <div class="chat-message user-message" id="user_chat_message_${user_message_counter}">
            ${chat_input.innerText} 
        </div>
        `;
        user_message_counter++;
        chat_input.innerText = ""; // Clear input
        const latest = document.getElementById(`user_chat_message_${user_message_counter - 1}`);
        latest.scrollIntoView({ behavior: "smooth" }); // Scroll to the latest message

        await botResponse();
    } else if (event.key === "Enter" && event.shiftKey) {
        // Shift + Enter, add a new line
        console.log("shift enter")
        return true;
    }
});



send_button.addEventListener("click", async function () {
    console.log('sned button clicked')
    if (chat_input.innerText != "") {
        message_container.innerHTML += `
        <div class="chat-message user-message" id="user_chat_message_${user_message_counter}">
            ${chat_input.innerText}
        </div>
        `;
        chat_input.innerText = ""; // Clear input
        latest = document.getElementById(`user_chat_message_${user_message_counter}`);
        latest.scrollIntoView();
        user_message_counter++;
        await botResponse();
    }
    chat_input.focus();
})



