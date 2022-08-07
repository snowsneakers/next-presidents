import Link from "next/link";
import Header from "../components/Header";
import { useState } from "react";
function Home() {
     const [searchText, setSearchText] = useState("");

     return (
          <section className="w-full md:w-[880px] mx-auto">
               <Header />
               <section>
                    <Link href="/quiz">
                         <button className="block bg-slate-500">Quiz</button>
                    </Link>
                    <Link href="/presidents">
                         <button className="block bg-yellow-100">Learn</button>
                    </Link>
                    <input
                         type="text"
                         className="border"
                         value={searchText}
                         onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Link href={"/presidents/" + searchText.toLowerCase()}>
                         <button>Search</button>
                    </Link>
               </section>
          </section>
     );
}

export default Home;
