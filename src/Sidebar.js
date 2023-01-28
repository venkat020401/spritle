import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar({ isVisible }) {
  return (
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Spritle<sup>Calculator</sup></div>
      </a>

      <hr class="sidebar-divider my-0" />

      {
        isVisible ? <><li class="nav-item active">
          <Link class="nav-link" to={"/portal/calculator"}>
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Calculator</span></Link>
        </li>

          <hr class="sidebar-divider" />

          <li class="nav-item">
            <Link class="nav-link" to={"/portal/history"}>
              <i class="fas fa-fw fa-chart-area"></i>
              <span>History</span></Link>
          </li></> : ""
      }


    </ul>
  )
}

export default Sidebar