import { useEffect, useState } from "react";
import API from "../../api";
import "./contiures.scss";
import Card from "../../components/Cards";

import loader from "../../assets/svg/Spinner-0.5s-190px.svg"

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
    return (
        <img
          style={{position:"absolute", top:"40%", left:"50%", transform:"translate(-50%)" }}
          src={loader}
          alt={name}
        />
    );
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
              className="form-control ps-5 py-2 shadow" placeholder="Search for a country…"  type="text"/>
          </div>

          <select className="form-select py-2 select-region">
            <option disabled value="Filter by Region">
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <div className="row d-flex justify-content-center justify-content-md-between">
          {data.map((e, i) => {
            return <Card key={i} data={e} />;
          })}
        </div>
      </div>
    </>
  );
}

export default conturies;
