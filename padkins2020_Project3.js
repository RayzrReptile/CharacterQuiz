// Peyton Adkins Z23553314
// COP 3813 – Introduction to Internet Computing
// June 22nd, 2022

// This work is inspired by an online tool. Many of the functions have been heavily altered. It was used as 
// a starting tool, not a finishing tool.

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded () {

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const characters = {
      Chez: [0, "./assets/P3Chez.png"],
      Lilypop: [1, "./assets/P3Lilypop.png"],
      Ruben: [2, "./assets/P3Ruben.png"],
      Levi: [3, "./assets/P3Levi.png"],
      Karat: [4, "./assets/P3Karat.png"],
      Bungalow: [5, "./assets/P3Bungalow.png"],
      Bucyt: [6, "./assets/P3Bucyt.png"]
  };
  const myQuestions = [
    {
      question: "1. On any normal day, which describes your energy level?",
      answers: { // Text, Characters to Increment, Characters to Decrement
        a: ["Low", [characters.Chez[0], characters.Chez[0], characters.Ruben[0]], [characters.Lilypop[0], characters.Lilypop[0], characters.Karat[0], characters.Bungalow[0]]],
        b: ["Average", [characters.Ruben[0], characters.Levi[0]], [characters.Chez[0], characters.Lilypop[0], characters.Karat[0], characters.Bungalow[0]]], 
        c: ["High", [characters.Bungalow[0], characters.Karat[0], characters.Lilypop[0], characters.Bucyt[0]], [characters.Chez[0], characters.Chez[0], characters.Levi[0], characters.Ruben[0], characters.Ruben[0]]]
      }
    },
    {
      question: "2. How often do you use humor to lighten / nullify an otherwise tense mood?",
      answers: { // Text, Characters to Increment, Characters to Decrement
        a: ["Never", [characters.Karat[0], characters.Lilypop[0], characters.Levi[0]], [characters.Chez[0], characters.Bucyt[0], characters.Bungalow[0], characters.Ruben[0]]],
        b: ["Infrequently", [characters.Bungalow[0], characters.Ruben[0], characters.Chez[0]], [characters.Karat[0], characters.Levi[0]]],
        c: ["Often", [characters.Chez[0], characters.Bucyt[0], characters.Bucyt[0]], [characters.Karat[0], characters.Karat[0], characters.Lilypop[0], characters.Levi[0]]]
      }
    },
    {
      question: "3. How do you generally feel during large social gatherings?",
      answers: { // Text, Characters to Increment, Characters to Decrement
        a: ["Uncomfortable", [characters.Chez[0], characters.Levi[0], characters.Bucyt[0], characters.Bucyt[0]], [characters.Lilypop[0], characters.Karat[0], characters.Karat[0], characters.Bungalow[0], characters.Bungalow[0]]],
        b: ["Alright", [characters.Ruben[0], characters.Lilypop[0]], [characters.Chez[0], characters.Bucyt[0], characters.Bucyt[0], characters.Bungalow[0]]] ,
        c: ["Sociable", [characters.Bungalow[0], characters.Karat[0], characters.Lilypop[0]], [characters.Chez[0], characters.Chez[0], characters.Bucyt[0], characters.Bucyt[0], characters.Bucyt[0], characters.Levi[0], characters.Ruben[0], characters.Ruben[0]]]
      }
    },
    {
      question: "4. On a sunny day, which would you rather be doing?",
      answers: { // Text, Characters to Increment, Characters to Decrement
        a: ["Going on an adventure", [characters.Karat[0], characters.Karat[0], characters.Bungalow[0]], [characters.Chez[0], characters.Bucyt[0], characters.Bucyt[0]]],
        b: ["Nothing much", [characters.Chez[0], characters.Chez[0], characters.Bucyt[0]], [characters.Ruben[0], characters.Ruben[0], characters.Karat[0], characters.Karat[0], characters.Bungalow[0], characters.Bungalow[0]]],
        c: ["Enjoying hobbies indoors", [characters.Levi[0], characters.Ruben[0], characters.Lilypop[0]], [characters.Karat[0], , characters.Bucyt[0]]]
      }
    },
    {
      question: "5. Describe your handle of emotions given these three options:",
      answers: { // Text, Characters to Increment, Characters to Decrement
        a: ["I'll usually let my emotions run their course", [characters.Lilypop[0], characters.Lilypop[0], characters.Bungalow[0], characters.Bucyt[0]], [characters.Chez[0], characters.Ruben[0], characters.Ruben[0]]],
        b: ["I oftentimes stop myself from showing emotions", [characters.Karat[0], characters.Ruben[0], characters.Levi[0]], [characters.Lilypop[0], characters.Lilypop[0]]],
        c: ["I let nobody see me when I'm emotional", [characters.Ruben[0], characters.Ruben[0], characters.Chez[0], characters.Karat[0]], [characters.Bungalow[0], characters.Bungalow[0], characters.Bungalow[0], characters.Bucyt[0], characters.Lilypop[0], characters.Lilypop[0], characters.Lilypop[0]]]
      }
    },
    {
      question: "6. What would you do if you were given a lemon?",
      answers: { // Text, Characters to Increment, Characters to Decrement
        a: ["Make some lemonade or lemon bread", [characters.Lilypop[0], characters.Bungalow[0], characters.Karat[0], characters.Levi[0]], [characters.Bucyt[0], characters.Bucyt[0]]],
        b: ["Eat it", [characters.Chez[0], characters.Bungalow[0], characters.Bungalow[0]], [characters.Karat[0], characters.Ruben[0]]],
        c: ["Squirt it in someone's eyes", [characters.Bucyt[0], characters.Bucyt[0], characters.Chez[0]], [characters.Bungalow[0], characters.Bungalow[0], characters.Bungalow[0]]]
      }
    },
    {
      question: "7. Describe the closest approach you have with planning things out:",
      answers: { // Text, Characters to Increment, Characters to Decrement
        a: ["Plans are important and should be followed as best as they can", [characters.Levi[0], characters.Levi[0], characters.Levi[0]], [characters.Bucyt[0], characters.Bucyt[0], characters.Bungalow[0], characters.Bungalow[0]]],
        b: ["Plans are good as long as I don't make them", [characters.Chez[0], characters.Ruben[0], characters.Karat[0]], [characters.Levi[0]]],
        c: ["I don't care for plans that much", [characters.Bucyt[0], characters.Bucyt[0], characters.Chez[0], characters.Bungalow[0], characters.Bungalow[0], characters.Karat[0]], [characters.Levi[0], characters.Levi[0], characters.Levi[0]]]
      }
    },
    {
      question: "8. With a group of friends, which movie do you think would be best?",
      answers: { // Text, Characters to Increment, Characters to Decrement
        a: ["Scary / Horror", [characters.Ruben[0], characters.Chez[0], characters.Bucyt[0], characters.Bucyt[0]], [characters.Bungalow[0], characters.Bungalow[0], characters.Bungalow[0], characters.Lilypop[0], characters.Levi[0], characters.Levi[0], characters.Karat[0]]],
        b: ["Comedy / Rom Com", [characters.Chez[0], characters.Chez[0], characters.Karat[0], characters.Bungalow[0], characters.Bucyt[0], characters.Lilypop[0]], [characters.Ruben[0]]],
        c: ["Action / Blockbuster", [characters.Levi[0], characters.Levi[0], characters.Lilypop[0], characters.Lilypop[0], characters.Bungalow[0], characters.Karat[0], characters.Karat[0], characters.Karat[0]], [characters.Bucyt[0]]]
      }
    },
    {
      question: "9. You can only afford one ticket; which do you go to?",
      answers: { // Text, Characters to Increment, Characters to Decrement
        a: ["An interactive science museum", [characters.Ruben[0], characters.Ruben[0], characters.Karat[0], characters.Levi[0], characters.Levi[0]], [characters.Bungalow[0], characters.Lilypop[0]]],
        b: ["An amusement park with roller coasters", [characters.Karat[0], characters.Bungalow[0], characters.Bucyt[0], characters.Lilypop[0]], [characters.Ruben[0], characters.Levi[0]]],
        c: ["Zoo / Aquarium", [characters.Levi[0], characters.Bungalow[0], characters.Karat[0], characters.Chez[0]], [characters.Bucyt[0], characters.Lilypop[0]]]
      }
    },
    {
      question: "10. One of them has to go:",
      answers: { // Text, Characters to Increment, Characters to Decrement
        a: ["Chocolate", [], [characters.Bungalow[0], characters.Bungalow[0], characters.Lilypop[0], characters.Lilypop[0], characters.Lilypop[0]]],
        b: ["Pasta", [], [characters.Levi[0], characters.Levi[0], characters.Karat[0]]],
        c: ["Coffee", [], [characters.Bucyt[0], characters.Ruben[0], characters.Chez[0], characters.Chez[0]]]
      }
    }
  ];

    // This function is the primary reason for source of inspiration.
    function initialize(){
      // HTML for later
      const html = [];

      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const choices = [];

          // Note: I am enveloping a better sense of how to handle the complex
          // changing of innerHTML through these types of string manipulations.
          // Again, this style has been helpful for my understanding of what's 
          // possible in JavaScript
          choices.push("<ul>");
          for(choice in currentQuestion.answers){
            choices.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${choice}">
                ${choice} : ${currentQuestion.answers[choice][0]}
              </label>`
            );
          }
          choices.push("</ul>");
  
          html.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${choices.join('')} </div>`
          );
        }
      );
  
      // add HTML
      quizContainer.innerHTML = html.join('');
    }

    function showCharacter(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
      // Chez, Lilypop, Ruben, Levi, Karat, Bungalow, Bucyt
      finalPoints = [0, 0, 0, 0, 0, 0, 0];
      var blank = false; // Condition for if the user leaves a question unanswered
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // Check if a question is unanswered
        if (userAnswer !== undefined) {
          //increment
          for (let i=0; i<currentQuestion.answers[userAnswer][1].length; i++) { // All increment characters
            finalPoints[currentQuestion.answers[userAnswer][1][i]]++;
          }
          
          //decrement
          for (let i=0; i<currentQuestion.answers[userAnswer][2].length; i++) { // All decrement characters
            finalPoints[currentQuestion.answers[userAnswer][2][i]]--;
          }
        }
        else {
          blank = true;
        }

        
      });

      // Show best fit character
      let best = -1; //Integer used for holding maximum results of finalPoints array
      let results = []; //Contains all characters considered best fit
      let charArray = [];

      //initialize charArray
      for (let i of Object.keys(characters)){
        charArray.push(i);
      }

      //find maximum of finalPoints
      for (let z of finalPoints) {
        if (z > best) {
          best = z;
        }
      }

      if (blank){
        resultsContainer.innerHTML = `Some questions have been unanswered. Please try again.`;
      }
      else {
        //push best characters onto charArray
        for (let [key, value] of Object.entries(finalPoints)) {
          if (value == best){
            results.push(charArray[key]);
          }
        }

        //head container for coloring
        const headContainer = document.getElementById("head");

        //displaying character in a sentence
        if (results.length == 1){
          resultsContainer.innerHTML = `Your character is <strong>${results[0]}</strong>!`;
          submitButton.style.backgroundColor = `var(--${results[0]})`;
          headContainer.style.backgroundColor = `var(--${results[0]})`;
        }
        else if (results.length == 2){
          resultsContainer.innerHTML = `Your characters are <strong>${results[0]}</strong> and <strong>${results[1]}</strong>!`;
          submitButton.style.backgroundColor = `var(--Multi)`;
          headContainer.style.backgroundColor = `var(--Multi)`;
        }
        else {
          resultsContainer.innerHTML = `Your characters are `;
          for (let [key,value] of Object.entries(results)){
            if (key == results.length-1){
              resultsContainer.innerHTML += `and <strong>${value}</strong>!`;
              submitButton.style.backgroundColor = `var(--Multi)`;
              headContainer.style.backgroundColor = `var(--Multi)`;
            }
            else resultsContainer.innerHTML += `<strong>${value}</strong>, `;
          }
        }

        //creating the grid container
        resultsContainer.innerHTML += `<div id="grid" style="display: grid" class="container-fluid">`;
        const gridContainer = document.querySelector("#grid");

        //For every entry in result, we will display a picture of the character
        for (let [key,value] of Object.entries(results)){
          //for every matching entry, loop through the character struct and return the matching picture
          for (let [key1,value1] of Object.entries(characters)){
            if (value == key1){
              gridContainer.innerHTML += `<img class="responsive" src="` + value1[1] + `" width=400px alt="${key1}"></img>`;
            }
          }
        }

        gridContainer.innerHTML += `</div>`;
        resultsContainer.innerHTML += `</div>`;
      }
    }

    initialize();
  
    // Event listeners
    submitButton.addEventListener('click', showCharacter);
  };