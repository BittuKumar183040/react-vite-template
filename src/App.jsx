import './styles/App.css'
import NavBar from './components/NavBar';
import Hero from './section/Hero';
import About from './section/About';

function App() {

  return (
    <div id="parentDiv">
      <NavBar />
      <Hero />
      <About/>
    </div>
  )
}

export default App
