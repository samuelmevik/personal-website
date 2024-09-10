import Education from './pages/Education'
import Footer from './components/Footer'
import Header from './pages/Header'
import WorkExperience from './pages/WorkExperience'
import { useRef } from 'react'
import SnippetsFromMyLife from './pages/SnippetsFromMyLife'
import ThemeToggler from './components/ui/ThemeToggler'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Menu from './components/Menu'
import useRevealOnScroll from './hooks/RevealOnScroll'
import '@fontsource-variable/cinzel';
import '@fontsource/anonymous-pro';


function App() {
  const ref = useRef<HTMLDivElement>(null)
  useRevealOnScroll(ref)

  return (
    <div ref={ref} className='bg-white transition-colors duration-500 dark:bg-black dark:text-white'>
      <ThemeToggler />
      <Menu />
      <Header />
      <AboutMe />
      <SnippetsFromMyLife />
      <WorkExperience />
      <Education />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
