import { useState } from "react";
import Confetti from "react-confetti";
import { useReward } from "react-rewards";

function QuizGame({ presidents }) {
     const [showScore, setShowScore] = useState(false);
     const [score, setScore] = useState(0);
     const [start, setStart] = useState(true);
     const [inOrder, setInOrder] = useState(false);
     const [question, setQuestion] = useState(
          inOrder ? 0 : Math.floor(Math.random() * (44 - 0 + 1) + 0)
     );
     const [questionNum, setQuestionNum] = useState(1);
     const [questionAmount, setQuestionAmount] = useState("");
     const { reward: confettiReward, isAnimating: isConfettiAnimating } =
          useReward("confettiReward", "confetti");

     const firstFour = Object.values(presidents);

     const answers = firstFour.map((x) => x.answerOptions);

     const handleNext = (isCorrect) => {
          if (isCorrect) {
               setScore((prevState) => prevState + 1);
          }
          if (questionNum < questionAmount) {
               setQuestion(
                    inOrder
                         ? question + 1
                         : Math.floor(Math.random() * (44 - 0 + 1) + 0)
               );
               setQuestionNum((prevState) => prevState + 1);
          } else {
               setShowScore(true);
               //  confettiReward();
          }
     };

     const startQuiz = () => {
          setScore(0);
          setShowScore(false);
          setQuestion(
               inOrder ? 0 : Math.floor(Math.random() * (44 - 0 + 1) + 0)
          );
          setStart(false);
          setQuestionNum(1);
     };

     const resetQuiz = () => {
          setScore(0);
          setShowScore(false);
          setStart(true);
          setQuestionAmount("");
          setQuestionNum(1);
          setInOrder(false);
     };

     //  console.log(firstFour);
     console.log(inOrder);

     return (
          <section className="mt-5">
               {/* <span
                    id="confettiReward"
                    className="fixed top-0 right-0 -translate-x-50 w-[2px] h-[2px] border border-black "
               /> */}
               {start ? (
                    <div className="mt-5 min-h-[269px] rounded-md">
                         <form onSubmit={startQuiz}>
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
                                   min="1"
                                   max="45"
                                   onChange={(e) =>
                                        setQuestionAmount(+e.target.value)
                                   }
                                   name="howMany"
                              />
                              <button
                                   className="py-1 px-2 bg-red-200 disabled:opacity-50"
                                   type="submit"
                                   disabled={questionAmount.length < 1}
                              >
                                   Start
                              </button>
                         </form>
                         <div className="flex items-center gap-2">
                              <label htmlFor="order">Not Random</label>
                              <input
                                   type="checkbox"
                                   name="order"
                                   onChange={() =>
                                        setInOrder((prevState) => !prevState)
                                   }
                              />
                         </div>
                    </div>
               ) : (
                    <div className="min-h-[269px] flex flex-col-reverse md:flex-row items-center justify-evenly rounded-md">
                         {showScore ? (
                              <div>
                                   <p className="text-3xl font-semibold">
                                        You Scored {score} / {questionNum}{" "}
                                        {(score / questionNum) * 100 >= 90 ? (
                                             <>
                                                  🤓
                                                  <Confetti
                                                       className="w-full min-h-screen"
                                                       colors={[
                                                            "#B31942",
                                                            "#0A3161",
                                                            "#FFFFFF",
                                                       ]}
                                                  />
                                             </>
                                        ) : (score / questionNum) * 100 >=
                                          80 ? (
                                             <>
                                                  😀
                                                  <Confetti
                                                       className="w-full min-h-screen"
                                                       colors={[
                                                            "#B31942",
                                                            "#0A3161",
                                                            "#FFFFFF",
                                                       ]}
                                                  />
                                             </>
                                        ) : (score / questionNum) * 100 >=
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
                                        Question {questionNum}
                                   </h2>
                                   {answers[question].map((answer) => (
                                        <div key={answer.answerText}>
                                             <button
                                                  className="rounded-full w-48 py-1 px-2 bg-blue-100 transition duration-500 ease-in-out font-medium"
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
                              className="rounded mb-2 md:mb-0"
                         />
                    </div>
               )}
          </section>
     );
}

export default QuizGame;
