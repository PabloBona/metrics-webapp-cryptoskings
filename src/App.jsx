import { Route, Routes } from 'react-router-dom';
import './App.css';
import Currency from './components/Currency';
import Nav from './components/Nav';
import CryptoSearch from './components/CryptoSearch';
import Coins from './components/Coins';
// import CoinDetail from './redux/components/CoinDetail'

function App() {
  return (
    <>
      <Nav />
      <CryptoSearch />
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/currency" element={<Currency />} />
        {/* <Route exact path="/coins/:id" component={CoinDetail} /> */}
      </Routes>
    </>
  );
}

export default App;
