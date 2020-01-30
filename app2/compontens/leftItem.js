/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */

import React, { Component } from 'react'
import {IndexLink, Link} from 'react-router'

import {Menu, Icon} from 'antd';

export default class LeftItem extends Component {

  constructor(props) {
    super(props);
    this.state = { ativo : false };
    this.setAtivo = this.setAtivo.bind(this);
    //main = this;
  }

  setAtivo() {
    var atual = !this.state.ativo;
    this.setState({ativo:atual});
    //this.state.ativo = false;
    //main.setState();
  }


  render() {
    return (
      <div>
        <div className="ant-menu-item MenuItem MenuItem1" onClick={this.setAtivo} style={{backgroundColor:this.state.ativo? '' : '#ffffff'}}>
          <span>{this.props.materia.titulo}</span>
        </div>
        { this.state.ativo ? (
          <div>
            <Menu
              onClick={this.props.onClick2}
              selectedKeys={this.props.selectedKeys}
              mode="vertical">
              <Menu.Item key={this.props.keyp} className="MenuItem MenuItem1">
                <IndexLink to={"/materia/"+this.props.materia.titulo+"/0"}>1º ANO</IndexLink>
              </Menu.Item>
            </Menu>
            <Menu
              onClick={this.props.onClick2}
              selectedKeys={this.props.selectedKeys}
              mode="vertical">
              <Menu.Item key={this.props.keyp} className="MenuItem MenuItem1">
                <IndexLink to={"/materia/"+this.props.materia.titulo+"/1"}>2º ANO</IndexLink>
              </Menu.Item>
            </Menu>
            <Menu
              onClick={this.props.onClick2}
              selectedKeys={this.props.selectedKeys}
              mode="vertical">
              <Menu.Item key={this.props.keyp} className="MenuItem MenuItem1">
                <IndexLink to={"/materia/"+this.props.materia.titulo+"/2"}>3º ANO</IndexLink>
              </Menu.Item>
            </Menu>
            <Menu
              onClick={this.props.onClick2}
              selectedKeys={this.props.selectedKeys}
              mode="vertical">
              <Menu.Item key={this.props.keyp} className="MenuItem MenuItem1">
                <IndexLink to={"/materia/"+this.props.materia.titulo+"/3"}>4º ANO</IndexLink>
              </Menu.Item>
            </Menu>
            <Menu
              onClick={this.props.onClick2}
              selectedKeys={this.props.selectedKeys}
              mode="vertical">
              <Menu.Item key={this.props.keyp} className="MenuItem MenuItem1">
                <IndexLink to={"/materia/"+this.props.materia.titulo+"/4"}>5º ANO</IndexLink>
              </Menu.Item>
            </Menu>
          </div>
        ) : ""  }

      </div>
    )
  }
}
