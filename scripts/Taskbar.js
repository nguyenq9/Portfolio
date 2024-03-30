const exit = document.getElementById("exit-circle");
const terminal_container = document.getElementById("terminal_container");
const terminal_icon = document.getElementById("terminal_icon");
const outputDiv = document.getElementById("output");
const wallpaper = document.getElementById("wallpaper");

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

exit.addEventListener( "click", function() { 
    terminal_container.style.setProperty("display", "none")
    terminal_icon.style.setProperty("background-color","transparent")
    wallpaper.style.setProperty("display", "flex")
    outputDiv.innerHTML = ""
})

terminal_icon.addEventListener( "click", function() { 
    wallpaper.style.setProperty("display", "none")
    terminal_container.style.removeProperty("display")
    terminal_icon.style.setProperty("background-color","#d2e3e9")
    displayBanner();
})