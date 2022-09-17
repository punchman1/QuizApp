const quizDB=[
     {
          question: "Q1> What is the full form of HTML? ",
          a: "Hello to my land ",
          b: "Hey text markup language ",
          c: "HyperText makeup language ",
          d: "Hypertext markup language ",
          ans:"ans4"
     },
     {
          question: "Q2> What is the full form of css ? ",
          a: "Cascading style sheets ",
          b: "Cascading style sheep ",
          c: "cartoon style sheets ",
          d: "cascading super sheet ",
          ans: "ans1"
     },
     {
          question: "Q3> What is the full form of HTTP? ",
          a: "Hypertext transfer product ",
          b: "Hypertext test protocol ",
          c: "Hey transfer protocol ",
          d: "Hypertext transfer protocol ",
          ans: "ans4"

     },
     {
          question: "Q4> What is the full form of JS? ",
          a: "Javasuper",
          b: "Javascript",
          c: "justscript",
          d: "jordanscript",
          ans: "ans2"
     }
];

const question=document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');

const submit = document.querySelector('#submit');
const showScore=document.querySelector('#showScore');
const answers=document.querySelectorAll('.answer');
let questionCount=0;
let score=0; 
const loadQuestion = () => {
    const questionList= quizDB[questionCount];
    question.innerText = questionList.question;
     option1.innerText = questionList.a;
     option2.innerText = questionList.b;
     option3.innerText = questionList.c;
     option4.innerText = questionList.d;
} 
loadQuestion();
const getCheckAnswer = () => {
     let answer;
     answers.forEach((curAnsElem)=>{
          if(curAnsElem.checked){
               answer=curAnsElem.id;
          }
          
     });
     return answer;

};
const deselectAll =() =>
{
     answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}
submit.addEventListener('click',() => {
     const checkedAnswer=getCheckAnswer();
     console.log(checkedAnswer);
     if(checkedAnswer == quizDB[questionCount].ans)
     {
          score++;
     };
     questionCount++;
     deselectAll();
     if(questionCount<quizDB.length)
     {
          loadQuestion();
     }
     else{
          showScore.innerHTML=`
          <h3> You Scored ${score}/${quizDB.length} </h3>
          <button class="btn" onclick="location.reload()">Play Again</button>
          `;
          showScore.classList.remove(`scoreArea`);
     }

});