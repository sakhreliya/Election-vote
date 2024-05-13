import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function SideNavbar() {
  return (
    <>
      <div className='col-3'>
        <div className='side-bar'>
          <div className='co set-side-bar-h'>
            <div className='side-nav'>
              <ul className="nav flex-column side-ul">
                <li className="nav-item-sidebar">
                  <NavLink className="nav-Link" to={"/"} >Election</NavLink>
                </li> 
                <li className="nav-item-sidebar">
                  <NavLink className="nav-Link" to={"/admin/electionpartys"} >Election-Party</NavLink>
                </li>
                <li className="nav-item-sidebar">
                  <NavLink className="nav-Link" to={"/admin/partysconnect"} >Party-Connection</NavLink>
                </li>
                <li className="nav-item-sidebar">
                  <NavLink className="nav-Link" to={"/admin/evote"} >Vote</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNavbar