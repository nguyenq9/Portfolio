

const outputDiv = document.getElementById("output");
const inputField = document.getElementById("input");
const terminal = document.getElementById("terminal");

function displayOutput(output) {
    outputDiv.innerHTML += `<span style="line-height:1.5;">${output}<br></span>`;
}


function displayHelp() {
    outputDiv.innerHTML += `
        <pre style="line-height:0;"> 
  <span id="commandOptions" >about</span>              <span>Who is Thai?<br></span>
  <span id="commandOptions" >projects</span>           <span>View coding projects<br></span>
  <span id="commandOptions" >social</span>             <span>Display social media links<br></span>
  <span id="commandOptions" >help</span>               <span>Displays available commands<br></span>
  <span id="commandOptions" >banner</span>             <span>Display the header<br></span>
  <span id="commandOptions" >trivia</span>             <span>Get a random general knowledge trivia question<br></span>
  <span id="commandOptions" >clear</span>              <span>Clear the terminal<br></span>
        </pre>
    `;
}

function displaySocial() {
    outputDiv.innerHTML += `
    <pre style="line-height:00;"> 
  <span id="socialOptions" >github</span>             <span id="socialLinks"><a href="https://github.com/nguyenq9" target="_blank">github/thainguyen</a><br></span>
  <span id="socialOptions" >linkedin</span>           <span id="socialLinks"><a href="https://www.linkedin.com/in/quoc-thai-nguyen-589261223/" target="_blank">linkedin/thainguyen</a><br></span>
  <span id="socialOptions" >instagram</span>          <span id="socialLinks"><a href="https://www.instagram.com/thainguyen.exe/" target="_blank">instagram/thainguyen</a><br></span>
    </pre>
  `;
}

function displayProjects() {
  displayOutput("Still curating... most projects are offline, on GitHub, or confidential.")
}



function displayAbout() {
  outputDiv.innerHTML += `
  <pre id= "about-sentence">
  Hi my name is Thai Nguyen! 👋
  I'm a budding web developer and Computer Science student at Western Washington University.
  I like to build engaging websites and make cool apps using AI tools like Azure Computer Vision 
  and Vertex AI. In the past, I was a math and computer science tutor at Western, helping students
  better understand concepts taught in their classes. I'm currently working for Western's 
  Web Communications Technology team to build web pages and web apps that will help the university.
  When I'm not in class or at work, you can find me playing pickleball, disc golf, or trying new recipes.
  </pre>`
}

function displayBanner() {
          outputDiv.innerHTML += `
      <pre>
        ████████╗██╗  ██╗ █████╗ ██╗    ███╗   ██╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗███╗   ██╗
        ╚══██╔══╝██║  ██║██╔══██╗██║    ████╗  ██║██╔════╝ ██║   ██║╚██╗ ██╔╝██╔════╝████╗  ██║
           ██║   ███████║███████║██║    ██╔██╗ ██║██║  ███╗██║   ██║ ╚████╔╝ █████╗  ██╔██╗ ██║
           ██║   ██╔══██║██╔══██║██║    ██║╚██╗██║██║   ██║██║   ██║  ╚██╔╝  ██╔══╝  ██║╚██╗██║
           ██║   ██║  ██║██║  ██║██║    ██║ ╚████║╚██████╔╝╚██████╔╝   ██║   ███████╗██║ ╚████║
           ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝    ╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═══╝
      </pre>                        
        <span>For a list of available commands, type <span id="help-text">'help'</span>.<br></span>`
}
  
function exec(command) {
    if (command === 'clear') {
      outputDiv.innerHTML = "";
    } else if (command === 'help') {
      displayHelp();
    } else if (command === 'banner') {
      displayBanner();
    } else if (command === 'social') {
      displaySocial();
    } else if (command === 'projects') {
      displayProjects();
    } else if (command === 'about') {
      displayAbout();
    } else if (command === 'all') {
      displayBanner();
      displaySocial();
      displayHelp();
    } else {
      displayOutput("Command not recognized.");
    }
}

export { exec, displayOutput}