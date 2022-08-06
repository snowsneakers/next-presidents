import Image from "next/image";
import Link from "next/link";
import PresidentTable from "./PresidentTable";

function PresidentPage({ soloPresident }) {
     return (
          <section>
               {soloPresident.map((president) => {
                    const { name, portraitLarge } = president;
                    return (
                         <div className="flex items-center justify-evenly flex-row w-fullmd:px-0">
                              <div className="w-3/5 h-screen relative">
                                   {/* <img
                                        className="w-full h-screen object-cover object-center"
                                        src={portraitLarge}
                                        alt={name}
                                   /> */}
                                   <Image
                                        src={portraitLarge}
                                        layout="fill"
                                        objectFit="cover"
                                        blurDataURL={portraitLarge}
                                        placeholder="blur"
                                   />
                              </div>
                              <div class="w-full whitespace-pre-line flex items-center justify-center">
                                   <PresidentTable president={president} />
                              </div>
                         </div>
                    );
               })}
          </section>
     );
}

export default PresidentPage;
