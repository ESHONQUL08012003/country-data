import React from "react";
import "./style.scss"

function index(props) {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="state">
          <img
            style={{ width: "560px", height: "401px" }}
            src="https://flagcdn.com/uz.svg"
            alt=""
          />
        </div>

        <div >
          <div>
            <h2 className="text-black mb-5">Belgium</h2>

            <div className="d-flex justify-content-between">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Native: </strong>
                </li>
                <li className="mb-3">
                  <strong>Population: </strong>
                </li>
                <li className="mb-3">
                  <strong>Region: </strong>
                </li>
                <li className="mb-3">
                  <strong>Sub Region : </strong>
                </li>
                <li className="mb-3">
                  <strong>Capital: </strong>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Top Level Domain: : </strong>
                </li>
                <li className="mb-3">
                  <strong>Currencies: </strong>
                </li>
                <li className="mb-3">
                  <strong>Languages: </strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex gap-5 align-items-center">
            <span>Border Countries:</span>
            <button className="btn btn-light border shadow">France</button>
            <button className="btn btn-light border shadow">Germany</button>
            <button className="btn btn-light border shadow">Netherlands</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
