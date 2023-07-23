/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ThinkCreateGrow from "@/components/ThinkCreateGrow";
import Hero from "@/components/Fragments/Hero";
import Partners from "@/components/Fragments/Partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
    </main>
  );
}
