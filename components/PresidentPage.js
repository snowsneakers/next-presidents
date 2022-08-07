import Image from "next/image";
import Link from "next/link";
import PresidentTable from "./PresidentTable";
import PresidentInfo from "./PresidentInfo";
import { FaArrowCircleDown } from "react-icons/fa";
import { useRef } from "react";

function PresidentPage({ soloPresident }) {
     const ref = useRef(null);
     return (
          <section>
               {soloPresident.map((president) => {
                    const { name, portraitLarge, presidentNumber } = president;
                    return (
                         <div
                              key={presidentNumber[0]}
                              className="flex flex-col md:flex-row items-center justify-between w-full md:px-0"
                         >
                              <div className="w-full md:w-1/3 h-screen relative">
                                   {/* <img
                                        className="w-full h-screen object-cover object-center"
                                        src={portraitLarge}
                                        alt={name}
                                   /> */}
                                   <span
                                        className="md:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 text-3xl backdrop-blur text-white/30 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                                        onClick={() =>
                                             ref.current?.scrollIntoView({
                                                  behavior: "smooth",
                                             })
                                        }
                                   >
                                        <FaArrowCircleDown />
                                   </span>

                                   <Image
                                        src={portraitLarge}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                        blurDataURL={portraitLarge}
                                        placeholder="blur"
                                   />
                              </div>
                              <div
                                   className="w-full md:w-2/3 min-h-screen flex flex-col items-center justify-start"
                                   ref={ref}
                              >
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
