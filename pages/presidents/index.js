import Card from "../../components/Card";
import Header from "../../components/Header";
import { useState } from "react";

export default function Home({ presidents }) {
     // console.log(Object.values(presidents));

     const [text, setText] = useState("");

     return (
          <section className="w-full md:w-[880px] mx-auto">
               <Header />
               <div className="w-full flex items-center justify-center px-5">
                    <input
                         type="text"
                         value={text}
                         onChange={(e) => setText(e.target.value)}
                         className="border p-2 rounded indent-1 my-5 w-full md:w-1/2"
                         placeholder="Search For President"
                    />
               </div>
               <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 rounded-xl overflow-hidden mb-10">
                    {Object.values(presidents)
                         .filter((president) =>
                              president.name.toLowerCase().includes(text)
                         )
                         .map((president) => {
                              return (
                                   <div
                                        key={president.presidentNumber[0]}
                                        className=""
                                   >
                                        <Card president={president} />
                                   </div>
                              );
                         })}
               </section>
          </section>
     );
}

export async function getStaticProps() {
     const res = await fetch("https://presidential-api.herokuapp.com/api");
     const data = await res.json();
     return {
          props: { presidents: data },
     };
}
