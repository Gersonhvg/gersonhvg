import Contact from "../../components/Contact/Contact"
import Presentation from "../../components/Presentation/Presentation"
import Projects from "../../components/Projects/Projects"
import MyServices from "../../components/MyServices/MyServices"

const Home = () => {
  return (
    <>
      <header>
        <Presentation />
      </header>
      <main>
        <MyServices />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}

export default Home
