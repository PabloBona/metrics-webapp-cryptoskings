import { useEffect, useState } from "react";
import "../style/CryptoSearch.css"

const CryptoSearch = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
  setSearchValue(e.target.value.trim());
}
  
useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);


  return (
    <div className="background py-2">
    <form onChange={handleInputChange} value={searchValue} className="container">
      <div className="row align-items-center">
        <div className="col-8 col-sm-8">
          <input  type="text"  className="form-control" placeholder="Bitcoin, Ethereum, etc." />
        </div>
        <div className="col-2 col-sm-4">
          <button type="button" className="btn btn-primary">Search</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default CryptoSearch