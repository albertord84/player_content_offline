/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */

import React, { Component } from 'react'
import Card from './card';

export default class List extends Component {


  render() {
    const openmodal = this.props.openmodal;
    return (
      <div className='container'>
      {this.props.list.map(function(card,index) {
        return (
          <div className='column' key={index} onClick={() => openmodal(card)}>
            <Card capa={card.capa} titulo={card.nome || card._nome} descricao={card.descricao}></Card>
          </div>
        );
      })}
      </div>
    )
  }
}
