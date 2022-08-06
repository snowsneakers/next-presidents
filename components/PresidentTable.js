function PresidentTable({ president }) {
     const { name, portraitLarge, presidentNumber, born } = president;
     return (
          <>
               {/* <table class="w-full flex items-center justify-center text-left">
                    <tbody className="">
                         <tr class="bg-white border-b">
                              <th
                                   scope="row"
                                   class="py-1 px-2 font-semibold uppercase"
                              >
                                   Name
                              </th>
                              <td class="py-1 px-2">{name}</td>
                         </tr>
                         <tr class="bg-white border-b">
                              <th
                                   scope="row"
                                   class="py-1 px-2 font-semibold uppercase"
                              >
                                   President Number
                              </th>
                              <td class="py-1 px-2">
                                   {presidentNumber.join(", ")}
                              </td>
                         </tr>
                         <tr class="bg-white border-b">
                              <th
                                   scope="row"
                                   class="py-1 px-2 font-semibold uppercase"
                              >
                                   In Office
                              </th>
                              <td class="py-1 px-2 whitespace-pre-line">
                                   {president.inOffice.join("\n")}
                              </td>
                         </tr>
                         <tr class="bg-white border-b">
                              <th
                                   scope="row"
                                   class="py-1 px-2 font-semibold uppercase"
                              >
                                   Vice President(s)
                              </th>
                              <td class="py-1 px-2 whitespace-pre-line">
                                   {president.vicePresident.join("\n")}
                              </td>
                         </tr>
                         <tr class="bg-white border-b">
                              <th
                                   scope="row"
                                   class="py-1 px-2 font-semibold uppercase"
                              >
                                   Born
                              </th>
                              <td class="py-1 px-2 whitespace-pre-line">
                                   {president.born}
                              </td>
                         </tr>
                         <tr class="bg-white border-b">
                              <th
                                   scope="row"
                                   class="py-1 px-2 font-semibold uppercase"
                              >
                                   From
                              </th>
                              <td class="py-1 px-2 whitespace-pre-line">
                                   {president.birthLocation}
                              </td>
                         </tr>
                         {president.died !== "N/A" && (
                              <tr class="bg-white border-b">
                                   <th
                                        scope="row"
                                        class="py-1 px-2 font-semibold uppercase"
                                   >
                                        Died
                                   </th>
                                   <td class="py-1 px-2 whitespace-pre-line">
                                        {president.died}
                                   </td>
                              </tr>
                         )}
                         {president.died !== "N/A" && (
                              <tr class="bg-white border-b">
                                   <th
                                        scope="row"
                                        class="py-1 px-2 font-semibold uppercase"
                                   >
                                        Resting Place
                                   </th>
                                   <td class="py-1 px-2 whitespace-pre-line">
                                        {president.restingPlace}
                                   </td>
                              </tr>
                         )}
                         <tr class="bg-white border-b">
                              <th
                                   scope="row"
                                   class="py-1 px-2 font-semibold uppercase"
                              >
                                   Political Party
                              </th>
                              <td class="py-1 px-2 whitespace-pre-line">
                                   {president.politicalParty}
                              </td>
                         </tr>
                    </tbody>
               </table> */}
               <h1 className="text-6xl font-bold">
                    {president.name.length === 2
                         ? president.name.split(" ").join("\n")
                         : president.name.split(".").join(". \n")}
               </h1>
          </>
     );
}

export default PresidentTable;
