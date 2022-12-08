import { useEffect, useState } from "react";
import API from "../../api";
import "./contiures.scss";
import Card from "../../components/Cards";

function conturies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    API.getAll().then((result) => {
      setData(result.data);
      if (result.data) {
        setLoading(true);
      }
    });
  }, []);

  if (!loading) {
    <h1 className="mt-5">LOADING...</h1>;
  }

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="searchInput">
            <label className="search-icon" htmlFor="search">
              <i class="fas fa-search"></i>
            </label>
            <input
              id="search"
              className="form-control ps-5 py-2 shadow"
              placeholder="Search for a country…"
              type="text"
            />
          </div>

          <select className="form-select py-2 select-region">
            <option value="Africa">Africa</option>
            <option value="America">America</option>
          </select>
        </div>

        <div className="row d-flex justify-content-center">
         
            {
              data.map(e=>{
               return( 
               <Card data={e}/>
               )
              })
            }
          
        </div>
      </div>
    </>
  );
}

export default conturies;
