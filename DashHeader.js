import React from 'react'
import Image from 'react-bootstrap/Image';
import img6 from '../assets/images/logo1.png';
import './DashHeader.css';
import { Link } from 'react-router-dom';

const DashHeader = () => {
  return (
    <div className='dashheader'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a className="navbar-brand" href="#"><Image src={img6}
              width="100"
              height="100"
              alt="React Bootstrap logo"
            /></a>
      <div class="collapse navbar-collapse auto">
        <ul class="navbar-nav ms-auto mb-lg-0 p-2">
          <li class="nav-item">
            <div className='box'>
              <input type = 'text' placeholder='Search your fav one...'></input>
              <a href='#'>
              <i class='fas' className="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
          </li>
          <li class="nav-item">
            <Link to={"/Cart"}>
            <i id='i1' class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <i id='i2' class="fa-sharp fa-solid fa-map-location-dot"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default DashHeader