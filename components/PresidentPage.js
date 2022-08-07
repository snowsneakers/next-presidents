import Image from "next/image";
import Link from "next/link";
import PresidentTable from "./PresidentTable";
import PresidentInfo from "./PresidentInfo";

function PresidentPage({ soloPresident }) {
     return (
          <section>
               {soloPresident.map((president) => {
                    const { name, portraitLarge, presidentNumber } = president;
                    return (
                         <div
                              key={presidentNumber[0]}
                              className="flex flex-row items-center justify-between w-fullmd:px-0"
                         >
                              <div className="w-full md:w-1/3 h-screen relative">
                                   {/* <img
                                        className="w-full h-screen object-cover object-center"
                                        src={portraitLarge}
                                        alt={name}
                                   /> */}
                                   <Image
                                        src={portraitLarge}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                        blurDataURL={portraitLarge}
                                        placeholder="blur"
                                   />
                              </div>
                              <div className="w-0 md:w-2/3 min-h-screen flex flex-col items-center justify-start">
                                   {/* <PresidentTable president={president} /> */}
                                   <PresidentInfo president={president} />
                              </div>
                         </div>
                    );
               })}
          </section>
     );
}

export default PresidentPage;
