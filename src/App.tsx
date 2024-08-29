import Education from './components/Education'
import Footer from './components/Footer'
import Header from './components/Header'
import WorkExperience from './components/WorkExperience'
import { useEffect } from 'react'
import SnippetsFromMyLife from './components/SnippetsFromMyLife'
import ThemeToggler from './components/ThemeToggler'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Menu from './components/Menu'





// <Profile className='py-4 sm:py-12' />
function App() {

  useEffect(() => {
    function animate() {
      const reveals = document.querySelectorAll('.reveal')
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", animate, { passive: true })

    return () => {
      window.removeEventListener("scroll", animate);
    };

  })

  return (
    <div className='overflow-hidden bg-white transition-colors duration-500 dark:bg-black dark:text-white'>
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
