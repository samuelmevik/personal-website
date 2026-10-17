import "@fontsource-variable/cinzel";
import "@fontsource/anonymous-pro";
import "@fontsource/anonymous-pro/700.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import ThemeToggler from "./components/ui/ThemeToggler";
import AboutMe from "./pages/AboutMe";
import Header from "./pages/Header";
import MyExperience from "./pages/MyExperience";
import Projects from "./pages/Projects";
import SnippetsFromMyLife from "./pages/SnippetsFromMyLife";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
