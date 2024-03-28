import info from '../info.json' assert { type: "json" };

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
  <span id="commandOptions" >exit</span>               <span>Close the terminal site<br></span>
        </pre>
    `;
}

function displaySocial() {
  let spanHTML = '';
  for (let i = 0; i < info.socials.length; i++) {
    spanHTML += `<span id="socialOptions" >&nbsp&nbsp<a href=${info.socials[i].url} target="_blank">${info.socials[i].type}</a></span>&nbsp🡽<br>`
  }
  outputDiv.innerHTML += `
  <p style="line-height:0;">
      ${spanHTML}
  </p>
  `; 
}


function displayProjects() {
    let spanHTML = '';
    for (let i = 0; i < info.projects.length; i++) {
        spanHTML += 
        `
        <span id="projectName">&nbsp&nbsp${i+1}.&nbsp${info.projects[i].name}<br></span>

        `;
    }
    outputDiv.innerHTML += `
    <p style="line-height:1.5;">
        ${spanHTML}
        <span><br>&nbsp&nbspEnter a number to read more about that project. </span>
    </p>
    `;
}

function displayProjectInfo (num) {
    outputDiv.innerHTML += `
    <p style="line-height:1.5;" id="projectDescription">
        <span id="projectName">${info.projects[num].name}<br></span>
        ${info.projects[num].description}
    </p>
    `
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
  When I'm not in class or at work, you can find me playing pickleball, disc golf, or trying new recipes.</pre>`
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
        <span style="line-height: 2;">Welcome to my interactive web portfolio/terminal.<br></span>                        
        <span>For a list of available commands, type <span id="help-text">'help'</span>.<br></span>`
}

function close_window() {
    window.close()
  }
  
function exec(command, recent_command) {
    // console.log (`command: ${command} | recent: ${recent_command}`);
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
    } else if (command === 'exit') {
        close_window();
    } else if (command === '1' && recent_command === 'projects') {
        displayProjectInfo(0);
    }
    else if (command === '2' && recent_command === 'projects') {
        displayProjectInfo(1);
    }
    else if (command === '3' && recent_command === 'projects') {
        displayProjectInfo(2);
    }
    else {
        displayOutput(`Command not recognized. <span>For a list of available commands, type <span id="help-text">'help'</span>.</span>`);
    }
}

export { exec, displayOutput}