import { useRouter } from "next/router";
import PresidentPage from "../../components/PresidentPage";
import Header from "../../components/Header";
import { motion } from "framer-motion";

function President({ presidents }) {
     const router = useRouter();
     const { id } = router.query;
     const soloPresident = Object.values(presidents).filter(
          (president) =>
               president.name
                    .toLowerCase()
                    .split(" ")
                    .map((x) =>
                         x
                              .split("")
                              .filter((x) => !x.includes("."))
                              .join("")
                    )
                    .join(" ") === id
     );
     // console.log(soloPresident);
     return (
          <motion.section
               className="w-full md:w-[880px] mx-auto max-h-screen"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Header />
               <section className="">
                    <PresidentPage soloPresident={soloPresident} />
               </section>
          </motion.section>
     );
}

export default President;

export async function getStaticProps() {
     const res = await fetch("https://presidential-api.herokuapp.com/api");
     const data = await res.json();
     return {
          props: { presidents: data },
     };
}

export async function getStaticPaths() {
     const res = await fetch(`https://presidential-api.herokuapp.com/api/`);
     const data = await res.json();
     const paths = Object.values(data).map((president) => {
          return {
               params: {
                    id: president.name
                         .toLowerCase()
                         .split(" ")
                         .map((x) =>
                              x
                                   .split("")
                                   .filter((x) => !x.includes("."))
                                   .join("")
                         )
                         .join(" "),
               },
          };
     });

     return {
          paths,
          fallback: false,
     };
}
