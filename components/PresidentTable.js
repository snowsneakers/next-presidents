function PresidentTable({ president }) {
     const { name, portraitLarge, presidentNumber, born } = president;

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
               <div className="absolute bottom-0 right-0 b flex items-end p-2 md:relative text-md md:text-xl py-5 md:py-0 backdrop-blur md:backdrop-blur-0 bg-black/25 md:bg-transparent text-gray-300 md:text-black rounded-t-xl">
                    <div className="w-full md:w-1/2">
                         {/* <h1 className="text-4xl md:text-6xl font-bold">
                              {president.name.split(" ").length === 2
                                   ? president.name.split(" ").join("\n")
                                   : president.name.split(".").join(". \n")}
                         </h1> */}
                         <p className="">
                              <span className="font-bold text-xl md:text-4xl">
                                   {president.name}{" "}
                              </span>{" "}
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
                              {president.vicePresident.filter(
                                   (vp) => vp !== "None"
                              ).length > 1 ? (
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
                              on{" "}
                              <span className="font-bold">
                                   {president.born}
                              </span>
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
                         <p className="mt-10">
                              <span className="font-bold">Quote:</span>
                              {president.quote}
                         </p>
                         <p>
                              <span className="font-bold">Fact:</span>
                              {president.funFact}
                         </p>
                    </div>
               </div>
          </>
     );
}

export default PresidentTable;
