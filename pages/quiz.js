import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import QuizAbout from "../components/QuizAbout";
import QuizGame from "../components/QuizGame";

function Quiz({ presidents }) {
     // console.log(presidents);
     return (
          <section className="min-h-screen">
               <Header />
               <QuizAbout />
               <QuizGame presidents={presidents} />
          </section>
     );
}

export default Quiz;

export async function getStaticProps() {
     const res = await fetch("https://presidential-api.herokuapp.com/api");
     const data = await res.json();
     return {
          props: {
               presidents: data,
          },
     };
}
