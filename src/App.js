import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Coins from './components/Coins';
import CoinDetail from './components/CoinDetail';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route exact path="/coins/:id" element={<CoinDetail />} />
      </Routes>
    </>
  );
}

export default App;
