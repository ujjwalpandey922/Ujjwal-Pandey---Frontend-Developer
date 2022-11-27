import Baner from './components/Baner/Baner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Rockets from './components/Rockets/Rockets'
import SearchInfo from './components/Search/SearchInfo'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Baner/>
      <SearchInfo/>
      <Rockets/>
      <Footer/>
    </div>
  )
}

export default App
