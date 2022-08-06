import Image from "next/image";
import Link from "next/link";
import PresidentTable from "./PresidentTable";

function PresidentPage({ soloPresident }) {
     return (
          <section>
               {soloPresident.map((president) => {
                    const { name, portraitLarge, presidentNumber } = president;
                    return (
                         <div
                              key={presidentNumber[0]}
                              className="flex flex-row w-fullmd:px-0"
                         >
                              <div className="w-full md:w-3/5 h-screen relative">
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
                              <div className="w-0 md:w-full whitespace-pre-line flex items-center">
                                   <PresidentTable president={president} />
                              </div>
                         </div>
                    );
               })}
          </section>
     );
}

export default PresidentPage;
