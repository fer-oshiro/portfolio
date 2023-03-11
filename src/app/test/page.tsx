"use client";

import BigTitle from "@/components/common/BigTitle";
import "@/styles/global.css";
import { Inter } from "@next/font/google";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main>
      <BigTitle title="Desenvolvimento" />
    </main>
  );
}
