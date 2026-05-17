import { Navbar } from "@/components/Navbar";
// import { Hero } from "@/components/Hero"; // Original Hero
import { HeroModern } from "@/components/HeroModern";
import { Logos } from "@/components/Logos";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { CaseStudies } from "@/components/CaseStudies";
import { WorkProcess } from "@/components/WorkProcess";
import { HomeBlog } from "@/components/HomeBlog";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <HeroModern />
      <Logos />
      <About />
      <Services />
      {/* <Pricing /> */}
      <CaseStudies />
      <WorkProcess />
      <Stats />
      <FAQ />
      <HomeBlog />
      <Footer />
    </main>
  );
}
