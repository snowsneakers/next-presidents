import Link from "next/link";
import Header from "../components/Header";
function Home() {
     return (
          <section className="w-full md:w-[880px] mx-auto">
               <Header />
               <section>
                    <h1>home</h1>
                    <Link href="/quiz">
                         <button className="block bg-slate-500">Quiz</button>
                    </Link>
                    <Link href="/presidents">
                         <button className="block bg-yellow-100">Learn</button>
                    </Link>
               </section>
          </section>
     );
}

export default Home;
