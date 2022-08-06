import Link from "next/link";
import Image from "next/image";

function Card({ president }) {
     return (
          <div className="flex items-center justify-center flex-col">
               <div className="w-full flex flex-col items-center justify-center overflow-hidden relative">
                    <Link
                         href={
                              "/presidents/" +
                              president.name
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
                    >
                         <img
                              className="cursor-pointer w-full h-[300px] object-cover object-top hover:scale-105 transition duration-500 ease-in-out"
                              src={president.portraitSmall}
                              alt={president.name}
                         />
                         {/* <Image
                              src={president.portraitLarge}
                              alt={president.name}
                              width={250}
                              height={300}
                              blurDataURL={president.portraitLarge}
                              placeholder="blur"
                         /> */}
                    </Link>
                    <div>
                         <h2 className="font-medium absolute bottom-1 right-5 text-white bg-black py-0.5 px-1">
                              {president.name}
                         </h2>
                    </div>
               </div>
          </div>
     );
}

export default Card;
