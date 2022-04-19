import React from "react"

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">

      <div className="container">
        <a class="navbar-brand fw-bold fs-2" href="#">M.Bilal Arif</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#Services">Sevices</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#Projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#Testimonials">Testimonials</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">Blog</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="ms-5 nav-link active rounded-pill btn btn-outline-secondary" href="#">Hire Me &nbsp; <i class="fas fa-handshake"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar
