"use client";

import Footer from "@/components/common/Footer";
import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Exp from "@/components/Home/Experience";
import Header from "@/components/Home/Header";
import Loader from "@/components/Loader";
import "@/styles/global.css";
import "@/styles/scroll.css";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main>
      <AnimateSharedLayout>
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Header />
              <Banner />
              <About />
              <Exp />
              <Footer />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </main>
  );
}
