// import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"


// import App from "../App"
function Navbar(props) {
  let bt = {
    textDecoration:'none',
    color:'red'
  }
  let co = {
    backgroundColor:"aliceblue"
  }
  let n = {
    textDecoration: "solid"
  }
  return (
    <>

      <nav className={`"navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} "`} style={co}>
        <div className="container-fluid">

          <a className="navbar-brand" href="/" style={n}>{props.title}</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <Link href={"/"}  style={bt}>
              <li className=" mx-1" >Home</li>
              </Link>
              <Link href={"/about"} style={bt}>
              <li className="  mx-1"  style={bt}>About</li>
                
             
              </Link>

            </ul>
            {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
            <div className={`form-check form-switch `}>
              <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">EnableDarkMode</label>

            </div>
            <div className="form-check form-switch mx-3" >
              <input className="form-check-input" onClick={props.trigger} type="checkbox" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">EnableRedMode</label>

            </div>
          </div>
        </div>
      </nav>

    </>
  )
};

//Default Props  
Navbar.defaultProps = {
  title: "Set the Title",
  about: "Set the About"
};

//Props Types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
};

export default Navbar