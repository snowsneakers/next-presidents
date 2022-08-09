import Link from "next/link";
import Header from "../components/Header";
import { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import President from "./presidents/[id]";

function Home({ presidents }) {
     // const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
     const skills = [
          { id: 0, label: "html" },
          { id: 1, label: "css" },
     ];
     const [searchText, setSearchText] = useState(null);
     const presidentsNames = Object.values(presidents).map((name, index) => ({
          id: index + 1,
          label: name.name,
     }));
     // console.log(presidentsNames);

     return (
          <section className="w-full md:w-[880px] mx-auto">
               <Header />
               <section>
                    <Link href="/quiz">
                         <button className="block bg-slate-500">Quiz</button>
                    </Link>
                    <Link href="/presidents">
                         <button className="block bg-yellow-100">Learn</button>
                    </Link>
                    {/* <input
                         type="text"
                         className="border"
                         value={searchText}
                         onChange={(e) => setSearchText(e.target.value)}
                    /> */}
                    {/* <button>Search</button> */}

                    <Autocomplete
                         id="free-solo-demo"
                         options={presidentsNames.map((option) => option.label)}
                         renderInput={(params) => (
                              <TextField
                                   {...params}
                                   label="Presidents"
                                   margin="normal"
                                   variant="outlined"
                                   className=" border !focus:border-black"
                              />
                         )}
                         value={searchText}
                         onChange={(e) => setSearchText(e.target.innerText)}
                    />
                    {/* <Link
                         href={
                              "/presidents/" +
                              searchText
                                   .toLowerCase()
                                   .split(" ")
                                   .map((x) =>
                                        x
                                             .split("")
                                             .filter((x) => !x.includes("."))
                                             .join("")
                                   )
                                   .join(" ")
                         }
                    ></Link> */}
                    {/* <p>{searchText}</p> */}
                    <Link
                         href={
                              searchText === null
                                   ? "/presidents/"
                                   : "/presidents/" +
                                     searchText
                                          .toLowerCase()
                                          .split(" ")
                                          .map((x) =>
                                               x
                                                    .split("")
                                                    .filter(
                                                         (x) => !x.includes(".")
                                                    )
                                                    .join("")
                                          )
                                          .join(" ")
                         }
                    >
                         button
                    </Link>
               </section>
          </section>
     );
}

export default Home;

export async function getStaticProps() {
     const res = await fetch("https://presidential-api.herokuapp.com/api");
     const data = await res.json();
     return {
          props: { presidents: data },
     };
}
