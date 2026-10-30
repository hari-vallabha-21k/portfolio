import Nav from "./components/Nav";
import { useInView } from "./hooks/useInView";
import About from "./sections/About";
import Contact from "./sections/Contact";
import DataRoom from "./sections/DataRoom";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import Skills from "./sections/Skills";
import Stack from "./sections/Stack";
import Work from "./sections/Work";

export default function App() {
  useInView();
  return (
    <div className="relative bg-paper text-ink font-sans">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Work />
        <DataRoom />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}
