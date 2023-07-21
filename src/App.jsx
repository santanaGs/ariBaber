import './App.css'
import { About } from './components/About'
import { Footer } from './components/Footer/Index'
import { Header } from './components/Header'
import { Local } from './components/Local'
import { Servicos } from './components/Servicos'

function App() {

  return (
    <div>
      <Header />
      <About />
      <Servicos />
      <Local/>
      <Footer/>
    </div>
  )
}

export default App
