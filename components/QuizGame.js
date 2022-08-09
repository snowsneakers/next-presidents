import { useState } from "react";
import Confetti from "react-confetti";

function QuizGame({ presidents }) {
     const [answer, setAnswer] = useState("");
     const [showScore, setShowScore] = useState(false);
     const [score, setScore] = useState(0);
     const [start, setStart] = useState(true);
     const [question, setQuestion] = useState(0);
     const [questionAmount, setQuestionAmount] = useState("");

     const firstFour = Object.values(presidents).filter(
          (x, i) => i < questionAmount
     );

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

     const startQuiz = () => {
          setScore(0);
          setShowScore(false);
          setQuestion(0);
          setStart(false);
     };

     const resetQuiz = () => {
          setScore(0);
          setShowScore(false);
          setQuestion(0);
          setStart(true);
     };

     //  console.log(firstFour);

     return (
          <section className="mt-5">
               {start ? (
                    <div className="mt-5 min-h-[269px] rounded-md">
                         <label
                              className="block text-3xl font-bold mb-2"
                              htmlFor="howMany"
                         >
                              How Many Questions
                         </label>
                         <input
                              className="border p-1"
                              type="number"
                              placeholder="1"
                              onChange={(e) =>
                                   setQuestionAmount(+e.target.value)
                              }
                              name="howMany"
                         />
                         <button
                              className="py-1 px-2 bg-red-200 disabled:opacity-50"
                              onClick={startQuiz}
                              disabled={questionAmount.length < 1}
                         >
                              Start
                         </button>
                    </div>
               ) : (
                    <div className="min-h-[269px] flex items-center justify-evenly rounded-md">
                         {showScore ? (
                              <div>
                                   <p className="text-3xl font-semibold ">
                                        You Scored {score} / {question + 1}{" "}
                                        {(score / (question + 1)) * 100 >=
                                        90 ? (
                                             <>
                                                  🤓
                                                  <Confetti />
                                             </>
                                        ) : (score / (question + 1)) * 100 >=
                                          80 ? (
                                             <>
                                                  😀
                                                  <Confetti />
                                             </>
                                        ) : (score / (question + 1)) * 100 >=
                                          70 ? (
                                             "😐"
                                        ) : (
                                             "😢"
                                        )}
                                   </p>
                                   <button
                                        className="bg-red-200 py-1 px-2 rounded-full mt-5 text-xl font-semibold"
                                        onClick={resetQuiz}
                                   >
                                        Play Again?
                                   </button>
                              </div>
                         ) : (
                              <div className="flex flex-col items-start gap-2">
                                   <h2 className="text-xl font-semibold">
                                        Question {question + 1}
                                   </h2>
                                   {answers[question].map((answer) => (
                                        <div key={answer.answerText}>
                                             <button
                                                  className="bg-red-200 rounded-full w-48 py-1 px-2 hover:bg-blue-200 transition duration-500 ease-in-out font-medium"
                                                  onClick={() =>
                                                       handleNext(
                                                            answer.isCorrect
                                                       )
                                                  }
                                             >
                                                  {answer.answerText}
                                             </button>
                                        </div>
                                   ))}
                              </div>
                         )}
                         <img
                              src={firstFour[question].portraitSmall}
                              alt="president portrait"
                              className="rounded"
                         />
                    </div>
               )}
          </section>
     );
}

export default QuizGame;
