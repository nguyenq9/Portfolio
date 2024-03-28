import info from '../info.json' with { type: "json" };
import { sleep } from './Helper.js';
import { displayTrivia } from './Trivia.js';

const outputDiv = document.getElementById("output");
const inputField = document.getElementById("input");
const terminal = document.getElementById("terminal");
const body = document.body

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
    // <br>
    // <img src="../images/datg1.png" alt="" width="50%" height="50%">
}


let aboutSectionCounter = 1; // Initialize a counter

async function displayAbout() {
    // Generate a unique ID for the about section
    const sectionId = `aboutme_${aboutSectionCounter++}`;
    const test = document.getElementById("bottomofoutput");
    
    outputDiv.innerHTML += `
    <span style="line-height:1.5;" id="${sectionId}">
    </span>
    `
      
    const aboutSentence = document.getElementById(sectionId);
    let skip = false;
    for (let i = 0; i < info.about.length; i++) {
        await sleep(0.5);
        if (info.about[i] === "<") {
            aboutSentence.innerHTML += `<br>`;
            skip = true
            test.scrollIntoView();
            continue;
        }

        if (info.about[i] === ">") {
            skip = false;
            continue;
        }

        if (!skip) {
            aboutSentence.innerHTML += info.about[i]
        }
        test.scrollIntoView();
      }
      aboutSentence.innerHTML += `<br>`;
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
  
async function exec(command, recent_command) {
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
        await displayAbout();
    } else if (command === 'exit') {
        close_window();
    } else if (command === 'trivia') {
        await displayTrivia();
    }
    
    else if (command === '1' && recent_command === 'projects') {
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