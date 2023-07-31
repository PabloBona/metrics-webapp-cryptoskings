import { useSelector } from "react-redux"

const Currency = () => {
  const coinData = useSelector(state => state.coinSlice)
  console.log(coinData)
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-12 vh-100">
        <h1>Currency</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Currency