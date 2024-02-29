import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg    navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ms-5 mb-lg-0">
              <li className="nav-item  ms-5">
                <a
                  className="nav-link active  ms-4"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item  ms-4">
                <a className="nav-link  active  ms-5" href="#">
                  Link
                </a>
              </li>

              <li className="nav-item  ms-4">
                <a
                  className="nav-link active  ms-4"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
              <li className="nav-item  ms-4">
                <a
                  className="nav-link active  ms-5  "
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                              className="form-control me-2 
                "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
