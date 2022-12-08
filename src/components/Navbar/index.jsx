import "./navbar.scss";



function index() {

  return (
    <header className="py-4 position-fixed top-0 w-100 bg-light shadow">
      <div className="container">
        <div className="d-flex justify-content-between">
          <span className="fw-bold text-dark fs-5">Where in the world?</span>

          <select className="form-select select-them">
            <option value="DarkMode">Dark Mode</option>
            <option value="SunMode">Light Mode</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default index;
