import { useSelector } from "react-redux"

const Home = () => {
  const coinData = useSelector(state => state.coinSlice)
  console.log(coinData)
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12 vh-100">
        <h1>Home</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home