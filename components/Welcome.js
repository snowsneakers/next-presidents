import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function Welcome({ presidents }) {
     const [searchText, setSearchText] = useState(null);
     const presidentsNames = Object.values(presidents).map((name, index) => ({
          id: index + 1,
          label: name.name,
     }));

     return (
          <section>
               <section className="flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-2/3 mb-2 md:mb-0">
                         <h1 className="text-3xl font-bold mb-2">Welcome!</h1>

                         <p className="mb-2">
                              This is the place to learn all things U.S.
                              Presidents. Visiting the Presidents page will let
                              you learn about each President. The quiz page will
                              let you test your President Knowledge. "The
                              president of the United States is the head of
                              state and head of government of the United
                              States,indirectly elected to a four-year term via
                              the Electoral College. The officeholder leads the
                              executive branch of the federal government and is
                              the commander-in-chief of the United States Armed
                              Forces. Since the office was established in 1789,
                              45 men have served in 46 presidencies.""
                              -wikipedia
                         </p>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center justify-center">
                         <div className="w-[200px] h-[200px] relative">
                              <Image
                                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Seal_of_the_President_of_the_United_States.svg/1024px-Seal_of_the_President_of_the_United_States.svg.png"
                                   layout="fill"
                                   objectFit="cover"
                                   blurDataURL="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Seal_of_the_President_of_the_United_States.svg/1024px-Seal_of_the_President_of_the_United_States.svg.png"
                                   placeholder="blur"
                              />
                         </div>
                    </div>
               </section>
               <div className="flex items-center justify-center gap-2 text-white my-5">
                    <Link href="/quiz">
                         <button className="py-1 px-2 bg-[#0A3161] rounded font-semibold">
                              Quiz
                         </button>
                    </Link>
                    <Link href="/presidents">
                         <button className="py-1 px-2 bg-[#0A3161] rounded font-semibold">
                              Learn
                         </button>
                    </Link>
               </div>
               <div className="">
                    <h2 className="text-2xl font-bold">Search For President</h2>
               </div>
               <div className="flex flex-col items-center justify-start mb-5">
                    <Autocomplete
                         className="w-5/6 mx-auto relative"
                         id="free-solo-demo"
                         options={presidentsNames.map((option) => option.label)}
                         renderInput={(params) => (
                              <TextField
                                   {...params}
                                   label="Presidents"
                                   margin="normal"
                                   variant="outlined"
                              />
                         )}
                         value={searchText}
                         onChange={(e) => setSearchText(e.target.innerText)}
                    />
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
                         <button className="py-3 px-2 bg-[#0A3161] rounded font-semibold text-white">
                              Search
                         </button>
                    </Link>
               </div>
          </section>
     );
}

export default Welcome;
