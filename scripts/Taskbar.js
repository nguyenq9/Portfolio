import { sleep } from "./Helper.js";

const terminal_exit = document.getElementById("exit-circle");
const terminal_container = document.getElementById("terminal_container");
const terminal_icon = document.getElementById("terminal_icon");
const outputDiv = document.getElementById("output");
const wallpaper = document.getElementById("wallpaper");
const inputField = document.getElementById("input");
const chatgpt_icon = document.getElementById("chatgpt_icon");
const chat_container = document.getElementById("chat-container");
const chat_exit = document.getElementById("exit-symbol");

function displayBanner() {
    outputDiv.innerHTML += `
<pre>
████████╗██╗  ██╗ █████╗ ██╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗
╚══██╔══╝██║  ██║██╔══██╗██║    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║
   ██║   ███████║███████║██║    ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║
   ██║   ██╔══██║██╔══██║██║    ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║
   ██║   ██║  ██║██║  ██║██║    ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝    ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝</pre>
  <span style="line-height: 2;">Welcome to my interactive web portfolio/terminal. Here are some useful commands:<br></span>
  <pre style="line-height: 0;">
<span id="commandOptions" >about</span>              <span>Who is Thai?<br></span>
<span id="commandOptions" >projects [index]</span>   <span>View coding projects<br></span>
<span id="commandOptions" >social</span>             <span>Display social media links<br></span>
  </pre>                        
  <span>For a list of available commands, type <span id="help-text">'help'</span>.<br></span>`
}

let current_icon = "none";

// terminal_icon.style.setProperty("background-color","#7393B3")

export function closeTerminalContainer () {
  terminal_container.style.setProperty("display", "none")
  terminal_icon.style.removeProperty("background-color")
  outputDiv.innerHTML = ""
}

function openTerminalContainer () {
  // terminal_container.style.removeProperty("display")
  terminal_container.style.setProperty("display", "block")
  terminal_icon.style.setProperty("background-color","#7393B3")
  displayBanner();
  inputField.focus();
}

function openChatContainer () {
  chat_container.style.setProperty("display", 'flex')
  chatgpt_icon.style.setProperty("background-color", "#7393B3") // #7393B3
  document.getElementById("chat_input").focus();
}

function closeChatContainer () {
  document.getElementById("message_container").innerHTML = "";
  chatgpt_icon.style.removeProperty("background-color")
  chat_container.style.setProperty("display", 'none')
}

function closeAllContainers () {
  closeTerminalContainer();
}

async function openWallpaper() {
  wallpaper.style.setProperty("display", "flex")
  let name = "Thai nGuyEn";

  wallpaper.innerHTML = ""
  await sleep(200);
  for (let i = 0; i < name.length; i++) {
    wallpaper.innerHTML += name[i];
    if (name[i] !== " ") await sleep(150);
  }
}

terminal_exit.addEventListener( "click", function() { 
  closeTerminalContainer();
  openWallpaper();
  current_icon = "none"
})

chat_exit.addEventListener("click", () => {
  closeChatContainer();
  openWallpaper();
  current_icon = 'none'
})

terminal_icon.addEventListener( "click", function() { 
  if (current_icon !== "terminal") {
    console.log("terminal icon clicked")
    closeChatContainer();
    wallpaper.style.setProperty("display", "none")
    wallpaper.innerHTML = ""
    openTerminalContainer();
    current_icon = "terminal"
  }
})

chatgpt_icon.addEventListener( "click", function() { 
  if (current_icon !== "chatgpt") {
    console.log("chatgpt icon clicked")
    closeTerminalContainer();
    wallpaper.style.setProperty("display", "none")
    wallpaper.innerHTML = ""
    openChatContainer();
    current_icon = "chatgpt"
  }
})

// on start close the terminal
// closeTerminalContainer();
// wallpaper.style.setProperty("display", "flex")
openWallpaper();
// current_icon = "none"