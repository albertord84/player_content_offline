/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */
import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
import { NavLink } from 'react-router-dom'

import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import LeftItem from './leftItem';
var mainn = null;
export default class NavBar extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      current: this.props.pathname == '/'
        ? '/index'
        : this.props.pathname,
      materias:[
        {
          titulo:"Artes"
        },{
          titulo:"Ciências"
        },{
          titulo:"Espanhol"
        },{
          titulo:"Francês"
        },{
          titulo:"Geografia"
        },{
          titulo:"História"
        },{
          titulo:"Matemática"
        },{
          titulo:"Português"
        }
      ]
    }
    mainn = this;
  }

  handleClick(e) {
    console.log('click ', e);
    //this.setState({current: e.key});
  }

  render() {
    return (
      <div className="MenuLeft">
        {mainn.state.materias.map(function(card,index) {
          return (
            <LeftItem onClick2={mainn
            .handleClick
            .bind(this)}
            key={index}
            materia={card}
            selectedKeys={[mainn.state.current]}
            keyp="/"
            />
          );
        })}
      </div>
    )
  }
}
