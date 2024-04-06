import info from '../info.json' with { type: "json" };
import { sleep } from './Helper.js';
import { displayTrivia, trivia_answer, answer_string } from './Trivia.js';


const outputDiv = document.getElementById("output");
const inputField = document.getElementById("input");
const terminal = document.getElementById("terminal");
const body = document.body

function displayOutput(output) {
    outputDiv.innerHTML += `<span style="line-height:1.5;">${output}<br></span>`;
}

async function displayError() {
    const bottomofoutput = document.getElementById("bottomofoutput");
    let errorMessage = "Command not recognized. For a list of available commands, type "; 

    for (let i = 0; i < errorMessage.length; i++) {
        await sleep(10)
        outputDiv.innerHTML += errorMessage[i];
        bottomofoutput.scrollIntoView();
    }

    outputDiv.innerHTML += `<span id="help-text">'help'</span><br>`;
    bottomofoutput.scrollIntoView();
}

async function errorProjects() {
    const bottomofoutput = document.getElementById("bottomofoutput");
    let errorMessage = "Failed to find this project. For a list of available projects, type "; 

    for (let i = 0; i < errorMessage.length; i++) {
        await sleep(10)
        outputDiv.innerHTML += errorMessage[i];
        bottomofoutput.scrollIntoView();
    }

    outputDiv.innerHTML += `<span id="project-text">'projects'</span><br>`;
    bottomofoutput.scrollIntoView();
}

async function errorExp() {
    const bottomofoutput = document.getElementById("bottomofoutput");
    let errorMessage = "Failed to find this job. For a list of available experiences, type "; 

    for (let i = 0; i < errorMessage.length; i++) {
        await sleep(10)
        outputDiv.innerHTML += errorMessage[i];
        bottomofoutput.scrollIntoView();
    }

    outputDiv.innerHTML += `<span id="expNum">'exp'</span><br>`;
    bottomofoutput.scrollIntoView();
}

function displayHelp() {
    outputDiv.innerHTML += `
        <pre style="line-height:0;"> 
  <span id="commandOptions" >about</span>              <span>Who is Thai?<br></span>
  <span id="commandOptions" >exp [index]</span>        <span>View previous work experience<br></span>
  <span id="commandOptions" >projects [index]</span>   <span>View coding projects<br></span>
  <span id="commandOptions" >socials</span>            <span>Display social media links<br></span>
  <span id="commandOptions" >skills</span>             <span>Display my various skills<br></span>
  <span id="commandOptions" >help</span>               <span>Displays available commands<br></span>
  <span id="commandOptions" >banner</span>             <span>Display the header<br></span>
  <span id="commandOptions" >trivia</span>             <span>Get a random general knowledge trivia question<br></span>
  <span id="commandOptions" >clear</span>              <span>Clear the terminal<br></span>
  <span id="commandOptions" >exit</span>               <span>Close the terminal site<br></span>
        </pre>
    `;
}

let socialSectionCounter = 1;
async function displaySocial () {
    const bottomofoutput = document.getElementById("bottomofoutput");
    
    const sectionId = `social_${socialSectionCounter++}`
    outputDiv.innerHTML += `
    <span style="line-height:1.5;" id="${sectionId}">
    </span>
    `

    const social_section = document.getElementById(sectionId);
    for (let i = 0; i < info.socials.length; i++) {
        bottomofoutput.scrollIntoView();
        await sleep(10)
        let type = info.socials[i].type === "email" ? "inbox" : info.socials[i].type
        social_section.innerHTML += `&nbsp&nbsp<i class="fa fa-${type}" style="color:cyan"></i><span id="socialOptions" >&nbsp<a href=${info.socials[i].url} target="_blank" id="${sectionId}_${i}"></a>&nbsp</span><br>`
        const social_type = document.getElementById(`${sectionId}_${i}`);
        
        for (let j = 0; j < info.socials[i].type.length; j++) {
            await sleep(10)
            social_type.textContent += info.socials[i].type[j]
            bottomofoutput.scrollIntoView();
        }
    }

    

}

let projectSectionCounter = 1;
async function displayProjects () {
    const bottomofoutput = document.getElementById("bottomofoutput");

    const sectionId = `projects_${projectSectionCounter++}`
    outputDiv.innerHTML += `
    <span style="line-height:1.5;" id="${sectionId}">
    </span>
    `

    const project_section = document.getElementById(sectionId);
    for (let i = 0; i < info.projects.length; i++){
        bottomofoutput.scrollIntoView();
        await sleep(10)
        project_section.innerHTML += `<a href="${info.projects[i].url}" target="_blank" id="project_links"><span class="projectName" id="${sectionId}_${i}">&nbsp&nbsp${i+1}.&nbsp</span></a><br>`;
        const project = document.getElementById(`${sectionId}_${i}`)

        for (let j = 0; j < info.projects[i].name.length; j++) {
            await sleep(10)
            project.innerHTML += info.projects[i].name[j]
            bottomofoutput.scrollIntoView();
        }
        
        
    }
    let instruction = "Enter a number to read more about that project.";
    // project_section.innerHTML += "<br>&nbsp&nbsp";
    for (let k = 0; k < instruction.length; k++) {
        await sleep(20)
        project_section.innerHTML += instruction[k];
        bottomofoutput.scrollIntoView();
    }
    project_section.innerHTML += "<br>";
    bottomofoutput.scrollIntoView();
    await sleep(50);
}

let projectInfoSectionCounter = 1;
async function displayProjectInfo (num) {
    console.log(num)
    if (info.projects.length < num || isNaN(num)) {
        console.log("errorr")
        await errorProjects();
        return;
    }
    const bottomofoutput = document.getElementById("bottomofoutput");

    const sectionId = `project_info_${projectInfoSectionCounter++}`
    outputDiv.innerHTML += `
    <span style="line-height:1.5;display:block;width:70%" id="${sectionId}"></span>
    `

    const p_info_section = document.getElementById(sectionId);
    for (let i = 0; i < info.projects[num].name.length; i++) {
        bottomofoutput.scrollIntoView();
        await sleep(10);
        p_info_section.innerHTML += info.projects[num].name[i]
    }
    p_info_section.innerHTML += '<br>'

    // IMAGES SECTION
    // for (let p = 0; p < info.projects[num].images.length; p++){
    //     await sleep(500)
    //     p_info_section.innerHTML += `<img src="./images/${info.projects[num].images[p]}" width="40%"><br>`
    //     bottomofoutput.scrollIntoView();
    // }

    for (let j = 0; j< info.projects[num].description.length; j++) {
        bottomofoutput.scrollIntoView();
        for (let k = 0; k < info.projects[num].description[j].length; k++) {
            await sleep(0.5);
            p_info_section.innerHTML += info.projects[num].description[j][k]
            bottomofoutput.scrollIntoView();
        }
    }
    p_info_section.innerHTML += '<br>'
    // console.log(info.projects[num].images)
    bottomofoutput.scrollIntoView();

}

let aboutSectionCounter = 1; // Initialize a counter
async function displayAbout() {
    // Generate a unique ID for the about section
    const sectionId = `aboutme_${aboutSectionCounter++}`;
    const bottomofoutput = document.getElementById("bottomofoutput");
    
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
            bottomofoutput.scrollIntoView();
            continue;
        }

        if (info.about[i] === ">") {
            skip = false;
            continue;
        }

        if (!skip) {
            aboutSentence.innerHTML += info.about[i]
        }
        bottomofoutput.scrollIntoView();
      }
      aboutSentence.innerHTML += `<br>`;
}

async function checkAnswer (command) {
    const bottomofoutput = document.getElementById("bottomofoutput");
    const commandMap = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
    }
    console.log(trivia_answer)      
    let result_str = trivia_answer == commandMap[command] ?  "Correct!" : `Wrong! The correct answer is "${answer_string}"`;
    for (let i = 0; i <  result_str.length; i++) {
        outputDiv.innerHTML += result_str[i]
        await sleep(10);
        bottomofoutput.scrollIntoView();
    }
    outputDiv.innerHTML += "<br>"
}

let skillsSectionCounter = 1;
async function displaySkills () {
    // Generate a unique ID for the about section
    const sectionId = `skills_${skillsSectionCounter++}`;
    const bottomofoutput = document.getElementById("bottomofoutput");

    outputDiv.innerHTML += `
    <span style="line-height:1.5;" id="${sectionId}">
    </span>
    `
    
    const skillsSection = document.getElementById(sectionId);

    let header = "Languages: ";
    for (let i = 0; i < header.length; i++) {
        await sleep(5);
        skillsSection.innerHTML += header[i];   
        bottomofoutput.scrollIntoView();
    }
    skillsSection.innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"

    for (let i = 0; i < info.skills.languages.length; i++) {
        for (let j = 0; j < info.skills.languages[i].length; j++) {
            await sleep(5)
            skillsSection.innerHTML += info.skills.languages[i][j];
        }
        await sleep(5);
        if (i != info.skills.languages.length-1) skillsSection.innerHTML += ", ";
        bottomofoutput.scrollIntoView();
    }
    skillsSection.innerHTML += `<br>`;
    bottomofoutput.scrollIntoView();

    header = "Frameworks: ";
    for (let i = 0; i < header.length; i++) {
        await sleep(5);
        skillsSection.innerHTML += header[i];   
        bottomofoutput.scrollIntoView();
    }
    skillsSection.innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"

    for (let i = 0; i < info.skills.frameworks.length; i++) {
        for (let j = 0; j < info.skills.frameworks[i].length; j++) {
            await sleep(5)
            skillsSection.innerHTML += info.skills.frameworks[i][j];
        }
        await sleep(5)
        if (i != info.skills.frameworks.length-1) skillsSection.innerHTML += ", ";
        bottomofoutput.scrollIntoView();
    }
    skillsSection.innerHTML += `<br>`;
    bottomofoutput.scrollIntoView();

    header = "Developer Tools: ";
    for (let i = 0; i < header.length; i++) {
        await sleep(5);
        skillsSection.innerHTML += header[i];   
        bottomofoutput.scrollIntoView();
    }
    skillsSection.innerHTML += "&nbsp&nbsp"

    for (let i = 0; i < info.skills.developer.length; i++) {
        for (let j = 0; j < info.skills.developer[i].length; j++) {
            await sleep(5)
            skillsSection.innerHTML += info.skills.developer[i][j];
        }
        await sleep(5)
        if (i != info.skills.developer.length-1) skillsSection.innerHTML += ", ";
        bottomofoutput.scrollIntoView();
    }
    skillsSection.innerHTML += `<br>`;
    bottomofoutput.scrollIntoView();

    header = "Interests: ";
    for (let i = 0; i < header.length; i++) {
        await sleep(10);
        skillsSection.innerHTML += header[i];   
        bottomofoutput.scrollIntoView();
    }
    skillsSection.innerHTML += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"

    for (let i = 0; i < info.skills.interests.length; i++) {
        for (let j = 0; j < info.skills.interests[i].length; j++) {
            await sleep(5)
            skillsSection.innerHTML += info.skills.interests[i][j];
        }
        await sleep(5)
        if (i != info.skills.interests.length-1) skillsSection.innerHTML += ", ";
        bottomofoutput.scrollIntoView();
    }
    skillsSection.innerHTML += `<br>`;
    bottomofoutput.scrollIntoView();
    
}

async function expHelper(sectionId, title, start, end) {
    const bottomofoutput = document.getElementById("bottomofoutput");
    const expSection = document.getElementById(sectionId);


    for (let i = 0; i < title.length; i++) {
        await sleep(10)
        expSection.innerHTML += title[i]; 
        bottomofoutput.scrollIntoView();
    }
}

let expSectionCounter = 1;
async function displayExp () {
    // Generate a unique ID for the experience section
    const sectionId = `aboutme_${expSectionCounter++}`;
    const bottomofoutput = document.getElementById("bottomofoutput");

    outputDiv.innerHTML += `
    <span style="line-height:1.5;" id="${sectionId}">
    </span>
    `
    let experience = info.experience
    const expSection = document.getElementById(sectionId);
    for (let i = 0; i < experience.length; i++) {
        expSection.innerHTML += `<span id="expNum">&nbsp&nbsp${i+1}. </span>`;
        bottomofoutput.scrollIntoView();
        await expHelper(sectionId, experience[i].title, experience[i].date.start, experience[i].date.end);
        expSection.innerHTML += `<br>`
        bottomofoutput.scrollIntoView();
    }
}

let expInfoSectionCounter = 1;
async function displayExpInfo (num) {
    console.log(num)
    if (info.experience.length < num || isNaN(num)) {
        console.log("error")
        await errorExp();
        return;
    }
}

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

function close_window() {
    window.close()
}
  
async function exec(command, recent_command) {
    if (command === 'clear') {
        outputDiv.innerHTML = "";
    } else if (command === 'help') {
        displayHelp();
    } else if (command === 'banner') {
        displayBanner();
    } else if (command === 'socials') {
        await displaySocial();
    } else if (command === 'projects') {
        await displayProjects();
    } else if (command === 'about') {
        await displayAbout();
    } else if (command === 'exit') {
        close_window();
    } else if (command === 'trivia') {
        await displayTrivia();
    } 
    else if (command === "skills") {
        await displaySkills();
    }
    else if (command === "exp") {
        await displayExp();
    }
    else if (command === '1' && recent_command === 'projects') {
        await displayProjectInfo(0);
    }
    else if (command === '2' && recent_command === 'projects') {
        await displayProjectInfo(1);
    }
    else if (command === '3' && recent_command === 'projects') {
        await displayProjectInfo(2);
    } 
    else if (recent_command === 'trivia') {
        await checkAnswer(command);
    }
    else if (command.startsWith("projects")) {
        const projectNumber = command.slice(8)
        await displayProjectInfo(parseInt(projectNumber)-1);
    }
    else if (command.startsWith("exp")) {
        const expNumber = command.slice(3)
        await displayExpInfo(parseInt(expNumber)-1);
    }
    else {
        await displayError();
    }
}

export { exec, displayOutput}