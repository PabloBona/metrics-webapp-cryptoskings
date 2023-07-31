import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './redux/components/Home'
import Currency from './redux/components/Currency'
import Nav from './redux/components/Nav'
import CryptoSearch from './redux/components/CryptoSearch'

function App() {
  

  return (
    <>
    <Nav />
    <CryptoSearch />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/currency" element={<Currency />} />
    </Routes>
    </>
  )
}

export default App
