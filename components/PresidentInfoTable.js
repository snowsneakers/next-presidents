import React from "react";

function PresidentInfoTable({ president }) {
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
                    className={`w-full text-5xl md:text-[4rem] font-bold uppercase text-gray-100 p-2 text-center mb-5 ${
                         president.politicalParty === "Democratic"
                              ? "bg-[#0A3161]"
                              : president.politicalParty === "Republican"
                              ? "bg-[#B31942]"
                              : president.politicalParty ===
                                "Democratic-Republican"
                              ? "bg-gradient-to-tr from-[#B31942] to-[#0A3161]"
                              : president.politicalParty === "Whig"
                              ? "bg-[#F1BF70] text-black"
                              : "bg-gray-200 text-black"
                    }`}
               >
                    {president.name === "Martin Van Buren"
                         ? president.name.split(" ")[1] +
                           " " +
                           president.name.split(" ")[2]
                         : president.name.split(" ")[
                                president.name.split(" ").length - 1
                           ]}
               </h1>
               <table className="min-w-full mb-5">
                    {/* <thead>
                         <tr className="border-b">
                              <td className="text-2xl font-semibold px-6 py-4 whitespace-pre-line">
                                   About
                              </td>
                         </tr>
                    </thead> */}
                    <tbody>
                         <tr className="border-b">
                              <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                   Name
                              </td>
                              <td className="font-light px-6 py-4 whitespace-pre-line">
                                   {president.name}
                              </td>
                         </tr>
                         <tr className="bg-white border-b">
                              <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                   In Office
                              </td>
                              <td className="font-light px-6 py-4 whitespace-pre-line">
                                   {president.inOffice.join("\n")}
                              </td>
                         </tr>
                         <tr className="bg-white border-b">
                              <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                   President Number
                              </td>
                              <td className="font-light px-6 py-4 whitespace-pre-line">
                                   {presidentNumber.join(", ")}
                              </td>
                         </tr>
                         <tr className="bg-white border-b">
                              <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                   {president.vicePresident.length > 1
                                        ? "Vice Presidents"
                                        : "Vice President"}
                              </td>
                              <td className="font-light px-6 py-4 whitespace-pre-line">
                                   {president.vicePresident.join("\n")}
                              </td>
                         </tr>
                         <tr className="bg-white border-b">
                              <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                   Party
                              </td>
                              <td className="font-light px-6 py-4 whitespace-pre-line">
                                   {president.politicalParty}
                              </td>
                         </tr>
                         <tr className="bg-white border-b">
                              <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                   Born
                              </td>
                              <td className="font-light px-6 py-4 whitespace-pre-line">
                                   {president.born}
                              </td>
                         </tr>
                         <tr className="bg-white border-b">
                              <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                   From
                              </td>
                              <td className="font-light px-6 py-4 whitespace-pre-line">
                                   {president.birthLocation}
                              </td>
                         </tr>
                         {president.died !== "N/A" && (
                              <tr className="bg-white border-b">
                                   <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                        Died
                                   </td>
                                   <td className="font-light px-6 py-4 whitespace-pre-line">
                                        {president.died}
                                   </td>
                              </tr>
                         )}
                         {president.died !== "N/A" && (
                              <tr className="bg-white border-b">
                                   <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                        Resting Place
                                   </td>
                                   <td className="font-light px-6 py-4 whitespace-pre-line">
                                        {president.restingPlace}
                                   </td>
                              </tr>
                         )}
                         <tr className="bg-white border-b">
                              <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                   Quote
                              </td>
                              <td className="font-light px-6 py-4 whitespace-pre-line">
                                   "{president.quote}"
                              </td>
                         </tr>
                         <tr className="bg-white border-b">
                              <td className="font-semibold px-6 py-4 whitespace-pre-line">
                                   Fact
                              </td>
                              <td className="font-light px-6 py-4 whitespace-pre-line">
                                   {president.funFact}
                              </td>
                         </tr>
                    </tbody>
               </table>
          </>
     );
}

export default PresidentInfoTable;
