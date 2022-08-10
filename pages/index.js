import Link from "next/link";
import Header from "../components/Header";
import { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
import President from "./presidents/[id]";
import Welcome from "../components/Welcome";
import { motion } from "framer-motion";

function Home({ presidents }) {
     const [searchText, setSearchText] = useState(null);
     const presidentsNames = Object.values(presidents).map((name, index) => ({
          id: index + 1,
          label: name.name,
     }));

     return (
          <motion.section
               className="w-full md:w-[880px] mx-auto"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
          >
               <Header />
               <section className="w-full md:w-[880px] px-5 my-5">
                    <Welcome presidents={presidents} />
               </section>
          </motion.section>
     );
}

export default Home;

export async function getStaticProps() {
     const res = await fetch("https://presidential-api.herokuapp.com/api");
     const data = await res.json();
     return {
          props: { presidents: data },
     };
}
