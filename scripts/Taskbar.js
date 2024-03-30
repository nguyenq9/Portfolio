const exit = document.getElementById("exit-circle");
const terminal_container = document.getElementById("terminal_container");
const terminal_icon = document.getElementById("terminal_icon");
const outputDiv = document.getElementById("output");
const wallpaper = document.getElementById("wallpaper");
const inputField = document.getElementById("input");
const chatgpt_icon = document.getElementById("chatgpt_icon");

function displayBanner() {
    outputDiv.innerHTML += `
<pre>
████████╗██╗  ██╗ █████╗ ██╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗
╚══██╔══╝██║  ██║██╔══██╗██║    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║
   ██║   ███████║███████║██║    ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║
   ██║   ██╔══██║██╔══██║██║    ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║
   ██║   ██║  ██║██║  ██║██║    ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝    ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝</pre>
  <span style="line-height: 2;">Welcome to my interactive web portfolio/terminal.<br></span>
  <pre style="line-height: 0;">
<span id="commandOptions" >about</span>              <span>Who is Thai?<br></span>
<span id="commandOptions" >projects [index]</span>   <span>View coding projects<br></span>
<span id="commandOptions" >social</span>             <span>Display social media links<br></span>
  </pre>                        
  <span>For a list of available commands, type <span id="help-text">'help'</span>.<br></span>`
}

terminal_icon.style.setProperty("background-color","#7393B3")

exit.addEventListener( "click", function() { 
    terminal_container.style.setProperty("display", "none")
    terminal_icon.style.setProperty("background-color","transparent")
    wallpaper.style.setProperty("display", "flex")
    outputDiv.innerHTML = ""
})

terminal_icon.addEventListener( "click", function() { 
  if (terminal_container.style.display !== "") {
    wallpaper.style.setProperty("display", "none")
    terminal_container.style.removeProperty("display")
    terminal_icon.style.setProperty("background-color","#7393B3")
    displayBanner();
    inputField.focus();
  }
})

chatgpt_icon.addEventListener( "click", function() { 
  chatgpt_icon.style.setProperty("background-color", "#7393B3")
})