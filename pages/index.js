/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ThinkCreateGrow from "@/components/ThinkCreateGrow";
import Hero from "@/components/Fragments/Hero";
import Partners from "@/components/Fragments/Partners";
import About from "@/components/Fragments/About";
import Portfolio from "@/components/Fragments/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <About />
      <Portfolio />
    </main>
  );
}
