import { useState, useEffect } from "react";

const index = (props) => {
  const {data:  {name, flag, population, region, capital, numericCode }}= props;

// for(let newObject of data){
//   var data = data[newObject]
// }

 

  // const [searchItem, setSearchItem] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  // const inputChang = (e) => {
  //   setSearchItem(e.target.value);
  // };

  // useEffect(() => {
  //   const result = props.filter((searchName) =>
  //     searchName.toLowerCase().includes(searchItem)
  //   );
  //   setSearchResult(result);
  // }, [searchItem]);

  return (
    <div className="col-3 mb-3" key={numericCode} style={{ width: "280px" }}>
      <div className="card">
        <img
          className="img-fluid rounded-0 rounded-top"
          style={{ height: "160px", width: "280px" }}
          src={flag}
          alt={name}
        />

        <div className="card-body">
          <h4 style={{ height: "40px", overflow: "hidden", padding: "10px 0" }}>
            {name}
          </h4>
          <ul className="list-unstyled">
            <li>
              <strong>Population: </strong>
              {population}
            </li>
            <li>
              <strong>Region: </strong>
              {region}
            </li>
            <li>
              <strong>Capital: </strong>
              {capital}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
