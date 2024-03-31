import { sleep } from './Helper.js';
const message_container = document.getElementById("message_container")

for (let i = 0; i < 20; i++) {
    await sleep(100)
    let latest;
    if (i%2 === 0) {
        message_container.innerHTML += `
        <div class="chat-message user-message" id="user_chat_message_${i}">
            User: message ${i}
        </div>
        `;
        latest = document.getElementById(`user_chat_message_${i}`)
    } else {
        message_container.innerHTML += `
        <div class="chat-message bot-message" id="bot_chat_message_${i}">
            Bot: message ${i}
        </div>
        `;
        latest = document.getElementById(`bot_chat_message_${i}`)
    }


    latest.scrollIntoView();
}

