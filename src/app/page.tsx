"use client";
import { useState } from "react";
import { ModeToggle } from "@/components/atoms/DarkModeToggle";
import { Footer } from "@/components/organisms/footer";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Link from "next/link";
import LoadingScreen from "@/components/template/loading-screen";
import ServiceSection from "@/components/sections/service";
import AboutSection from "@/components/sections/about";
import Header from "@/components/organisms/header";
import FAQSection from "@/components/sections/faq";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) return <LoadingScreen onFinish={() => setIsLoading(false)} />; // Tampilkan loading

  return (
    <div className="container mx-auto h-fit w-full flex flex-col max-w-[1200px] min-h-screen">
      <Header />
      <main className="flex flex-col h-full flex-1">
        <HeroSection />
        <Portfolio />
        <ServiceSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
