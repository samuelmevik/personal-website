import Footer from "./components/Footer";
import Header from "./pages/Header";
import MyExperience from "./pages/MyExperience";
import { useRef } from "react";
import SnippetsFromMyLife from "./pages/SnippetsFromMyLife";
import ThemeToggler from "./components/ui/ThemeToggler";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import useRevealOnScroll from "./hooks/RevealOnScroll";
import "@fontsource-variable/cinzel";
import "@fontsource/anonymous-pro";
import Menu from "./components/Menu";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  useRevealOnScroll(ref);

  return (
    <div
      ref={ref}
      className="bg-[var(--bg)] text-[var(--fg)] transition-colors duration-500"
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ThemeToggler />
      <Menu />
      <main id="main">
        <Header />
        <AboutMe />
        <SnippetsFromMyLife />
        <MyExperience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
