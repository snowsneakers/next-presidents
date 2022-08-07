import React from "react";

function PresidentInfo({ president }) {
     const { presidentNumber } = president;

     function ordinal_suffix_of(i) {
          var j = i % 10,
               k = i % 100;
          if (j == 1 && k != 11) {
               return <span className="font-bold">{i + "st"}</span>;
          }
          if (j == 2 && k != 12) {
               return <span className="font-bold">{i + "nd"}</span>;
          }
          if (j == 3 && k != 13) {
               return <span className="font-bold">{i + "rd"}</span>;
          }
          return <span className="font-bold">{i + "th"}</span>;
     }

     return (
          <>
               <h1
                    className={
                         president.politicalParty === "Democratic"
                              ? "w-full text-[4rem] font-bold uppercase bg-[#0A3161] text-gray-100 p-2 text-center mb-5"
                              : president.politicalParty === "Republican"
                              ? "w-full text-[4rem] font-bold uppercase bg-[#B31942] text-gray-100 p-2 text-center mb-5"
                              : "w-full text-[4rem] font-bold uppercase bg-[#FFFFFF] text-black p-2 text-center mb-5"
                    }
               >
                    {
                         president.name.split(" ")[
                              president.name.split(" ").length - 1
                         ]
                    }
               </h1>
               <h2>Bio</h2>
               <div className="w-full bg-gray-200 text-black mb-5 p-2 text-lg">
                    {/* <h1 className="text-4xl md:text-6xl font-bold">
               {president.name.split(" ").length === 2
                    ? president.name.split(" ").join("\n")
                    : president.name.split(".").join(". \n")}
          </h1> */}
                    <p className="">
                         <span className="font-bold">{president.name} </span>{" "}
                         was the{" "}
                         {presidentNumber.length === 1
                              ? ordinal_suffix_of(presidentNumber)
                              : `${ordinal_suffix_of(
                                     presidentNumber[0]
                                )} and ${ordinal_suffix_of(
                                     presidentNumber[1]
                                )}`}{" "}
                         U.S. President. He was part of the{" "}
                         <span className="font-bold">
                              {president.politicalParty}
                         </span>{" "}
                         party and served from{" "}
                         <span className="font-bold">
                              {president.inOffice.join(" and ")}
                         </span>
                         .{" "}
                         {president.vicePresident.filter((vp) => vp !== "None")
                              .length > 1 ? (
                              <span>
                                   His Vice Presidents were{" "}
                                   <span className="font-bold">
                                        {president.vicePresident
                                             .filter((vp) => vp !== "None")
                                             .join(", ")}
                                   </span>
                              </span>
                         ) : president.vicePresident.filter(
                                (vp) => vp !== "None"
                           ).length === 0 ? (
                              `He did not have a Vice President`
                         ) : (
                              `His Vice President was ${president.vicePresident.filter(
                                   (vp) => vp !== "None"
                              )}`
                         )}
                         . He was born in{" "}
                         <span className="font-bold">
                              {president.birthLocation}
                         </span>{" "}
                         on <span className="font-bold">{president.born}</span>
                         {/* . He died on{" "}
               <span className="font-bold">
                    {!president.died !== "N/A" && president.died}
               </span>{" "}
               and now rests in{" "}
               <span className="font-bold">
                    {president.died == "N/A" &&
                         president.restingPlace}
               </span> */}
                         .{" "}
                         {president.died !== "N/A" ? (
                              <span>
                                   He died on{" "}
                                   <span className="font-bold">
                                        {president.died}
                                   </span>
                              </span>
                         ) : null}{" "}
                         {president.died !== "N/A" ? (
                              <span>
                                   and now rests in{" "}
                                   <span>{president.restingPlace}</span>
                              </span>
                         ) : null}
                         .
                    </p>
               </div>
               <h3>Quote</h3>
               <div className="w-full bg-gray-200 p-2 mb-5">
                    <p className="text-center text-xl">"{president.quote}"</p>
               </div>
               <h4>Fact</h4>
               <div className="w-full bg-gray-200 p-2">
                    <p className="text-center text-xl">"{president.funFact}"</p>
               </div>
          </>
     );
}

export default PresidentInfo;
