import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import Currency from './components/Currency';
import Nav from './components/Nav';
import Coins from './components/Coins';
import CoinDetail from './components/CoinDetail';

function App() {
  const coinData = useSelector((state) => state.coinSlice.coin);
  const data = coinData.coins;
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/currency" element={<Currency data={data} />} />
        <Route exact path="/coins/:id" element={<CoinDetail />} />
      </Routes>
    </>
  );
}

export default App;
