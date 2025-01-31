import styles from "./App.module.css"
import { Navbar } from './components/navbar/navbar';
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Services } from "./components/services/services";
import { Contact } from "./components/contact/contact";

function App() {

  return (
      <div className={styles.App}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
      </div>
  )
}

export default App
