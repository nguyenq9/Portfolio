import trivia from '../trivia.json' with { type: "json" };
import { sleep } from './Helper.js';
const outputDiv = document.getElementById("output");
const input_container = document.getElementById("input-container")
const bottomofoutput = document.getElementById("bottomofoutput");

let num_trivia = 0;
async function loadingAnimation() {
  let bar = "==============================".split(""); // Convert string to array
  const questionElement = document.getElementById(`question${num_trivia}`);
  bottomofoutput.scrollIntoView();
  questionElement.textContent = "Fetching trivia question: [" + bar.join("") + "]";
  for (let i = 0; i < 30; i++) {
    bar[i] = "█";
    if (i == Math.floor(Math.random() * 31)) {
      await sleep(750)
    } else {
      await sleep(75);
    }
    questionElement.textContent = "Fetching trivia question: [" + bar.join("") + "]";
    bottomofoutput.scrollIntoView();
  }
  await sleep(200)
  questionElement.textContent = ""
}

let skip = false;
async function displayQuestion(question) {
  const questionElement = document.getElementById(`question${num_trivia}`);
  for (let i = 0; i < question.length; i++) {
    await sleep(20);

    if (question[i] === "&") {
      skip = true;
    } else if (question[i] === ";") {
      skip = false;
      continue;
    }

    if (!skip) {
      // console.log(`adding |${question[i]}|`);
      if (question[i] === " ") {
        questionElement.textContent += " ";
      } else {
        questionElement.textContent += question[i];
      }
    }
  }
}
function decodeHTMLEntities(text) {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(`<!doctype html><body>${text}`, 'text/html').body.textContent;
  return decodedString;
}

export var trivia_answer;
export var answer_string
async function displayChoices(choices, answer) {
  shuffleArray(choices)
  trivia_answer = choices.findIndex(item => item === answer);
  answer_string = answer
  outputDiv.innerHTML += `
  <p style="line-height:1.5;" id="choiceContainer${num_trivia}">
  </p>
  `;
  input_container.scrollIntoView()
  const choiceElement = document.getElementById(`choiceContainer${num_trivia}`);

  for (let i = 0; i < choices.length; i++) {
    choiceElement.innerHTML += `&nbsp&nbsp${i}.&nbsp`;
    bottomofoutput.scrollIntoView();
    await sleep(20)
    for (let j = 0; j < choices[i].length; j++) {
      if (choices[i][j] === "&") break;
      choiceElement.innerHTML += choices[i][j]; 
      await sleep(20);
    }
    choiceElement.innerHTML += '<br>'; // Use <br> for line breaks in HTML
  }
}


/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

async function displayTrivia() {
  outputDiv.innerHTML += `<span id="question${num_trivia}"></span><br>`
  input_container.scrollIntoView()
  await loadingAnimation()
  let question = "";
  let choices = []
  let answer = "";
  await fetch('https://opentdb.com/api.php?amount=1&category=9&type=multiple')
    .then((response) => response.json())
    .then((data) => {
      question = data.results[0].question;
      question = question.split("")
      answer = decodeHTMLEntities(data.results[0].correct_answer)
      choices.push(decodeHTMLEntities(data.results[0].correct_answer))
      for (let i = 0; i < data.results[0].incorrect_answers.length; i++) {
        choices.push(decodeHTMLEntities(data.results[0].incorrect_answers[i]));
      }
      // console.log("question: ", question);
      console.log("choices: ", choices)
    })
    .catch((error) => {
      console.error("Error: ", error);
    });

  await displayQuestion(question);
  await displayChoices(choices, answer);


  num_trivia++;
}


export { displayTrivia }