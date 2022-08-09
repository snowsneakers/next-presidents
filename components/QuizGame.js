import { useState } from "react";

function QuizGame({ presidents }) {
     const [answer, setAnswer] = useState("");
     const [question, setQuestion] = useState(0);
     const [showScore, setShowScore] = useState(false);
     const [score, setScore] = useState(0);

     const firstFour = Object.values(presidents);
     const answers = firstFour.map((x) => x.answerOptions);

     const handleNext = (isCorrect) => {
          if (isCorrect) {
               setScore((prevState) => prevState + 1);
          }
          if (question + 1 < answers.length) {
               setQuestion(question + 1);
          } else {
               setShowScore(true);
          }
     };

     console.log(firstFour);

     return (
          <div className="mt-20">
               <h1 className="text-3xl font-bold">Quiz</h1>
               <img
                    src={firstFour[question].portraitSmall}
                    alt="president portrait"
               />
               {showScore ? (
                    <div>
                         you scored {score} / {question + 1}
                    </div>
               ) : (
                    <div className="flex flex-col items-start gap-2 border">
                         <h2>Question {question + 1}</h2>
                         {answers[question].map((answer) => (
                              <div key={answer.answerText}>
                                   <button
                                        className="bg-slate-300 py-1 px-2"
                                        onClick={() =>
                                             handleNext(answer.isCorrect)
                                        }
                                   >
                                        {answer.answerText}
                                   </button>
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
}

export default QuizGame;
