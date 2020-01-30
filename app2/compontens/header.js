/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2017/1/11.
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Header extends Component {

  render() {
    return (
      <header>
        <div className="main" style={{height:"56px",justifyContent:"space-between"}}>
          <img src="img/logo.png" className="logoImg"></img>
          <input type="text" className="inputSearch" placeholder="Pesquisar"></input>
          <div className="userImg">
          </div>
        </div>
      </header>
    )
  }
}
