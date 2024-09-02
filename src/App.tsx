import Education from './components/Education'
import Footer from './components/Footer'
import Header from './components/Header'
import WorkExperience from './components/WorkExperience'
import { useRef } from 'react'
import SnippetsFromMyLife from './components/SnippetsFromMyLife'
import ThemeToggler from './components/ThemeToggler'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Menu from './components/Menu'
import useRevealOnScroll from './hooks/RevealOnScroll'

function App() {
  const ref = useRef<HTMLDivElement>(null)
  useRevealOnScroll(ref)

  return (
    <div ref={ref} className='overflow-hidden bg-white transition-colors duration-500 dark:bg-black dark:text-white'>
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
