import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar'
import Home from './pages/1.home/Home'
import Products from './pages/2.products/Products'
import Buy from './pages/3.buy/Buy'
import Lists from './pages/4.lists/Lists'
import Settings from './pages/5.settings/Settings'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div>
      <Router>

        <Footer />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/buy' element={<Buy />} />
          <Route exact path='/lists' element={<Lists />} />
          <Route exact path='/settings' element={<Settings />} />
        </Routes>
        

        <Navbar />

      </Router>
      
    </div>
  )
}

export default App
