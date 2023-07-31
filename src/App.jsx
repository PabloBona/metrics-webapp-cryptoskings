import { Route, Routes } from 'react-router-dom'
import './App.css'
import Currency from './redux/components/Currency'
import Nav from './redux/components/Nav'
import CryptoSearch from './redux/components/CryptoSearch'
import Coin from './redux/components/Coin'
// import CoinDetail from './redux/components/CoinDetail'

function App() {
  

  return (
    <>
    <Nav />
    <CryptoSearch />
    <Routes>
      <Route path="/" element={<Coin />} />
      <Route path="/currency" element={<Currency />} />
      {/* <Route exact path="/coins/:id" component={CoinDetail} /> */}
    </Routes>
    </>
  )
}

export default App
