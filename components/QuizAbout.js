import React from "react";

function QuizAbout() {
     return (
          <section>
               <div className="mb-3">
                    <h1 className="text-3xl font-bold">Ready For a Quiz?</h1>
                    <p className="mt-2">
                         Test your President knowledge and try to go 45/45!
                    </p>
               </div>
               <div>
                    <h2 className="mb-2 text-2xl font-bold">Directions</h2>
                    <p className="">
                         Just enter the amount of questions you want to answer.
                         By default the order is random, but if you check the
                         "Not Random" box before starting the quiz, Presidents
                         will be in ascending order. All you have to do is
                         choose the right name for the Presidential Portrait.
                         Good Luck!
                    </p>
               </div>
          </section>
     );
}

export default QuizAbout;
