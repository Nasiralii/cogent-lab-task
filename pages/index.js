import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LastSection from "@/components/LastSection";
import Navbar from "@/components/Navbar";
import SignUp from "@/components/SignUp";
import Solution from "@/components/Solution";
import React from "react";

export default function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Solution />
      <SignUp />
      <LastSection />
      <Footer />
    </div>
  );
}
