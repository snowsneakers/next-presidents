import React from "react";
import Header from "../components/Header";
import { useState } from "react";

function Quiz({ presidents }) {
     // console.log(presidents);
     return (
          <>
               <Header />
               <h1></h1>
          </>
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
