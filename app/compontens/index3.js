/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */

import React, { Component } from 'react';
import Card from './card';

export default class Index3 extends Component {

  constructor(){
      super();
      this.state = {
        list:[
        {
          titulo:"Texto randômico",
          descricao:"Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos",
          capa:"dist/img/bak3.jpg"
        },
        {
          titulo:"Passagens de Lorem Ipsum",
          descricao:"Existem muitas variações disponíveis de passagens de Lorem Ipsum Com mais de 2000 anos Com mais de 2000 a",
          capa:"dist/img/bak4.jpg"
        },
        {
          titulo:"Consectetur adipiscing",
          descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
          capa:"dist/img/bak5.jpg"
        },
        {
          titulo:"Mistaken idea",
          descricao:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ",
          capa:"dist/img/bak6.jpg"
        }
      ]
      }
  }

  render() {
    return (
      <div className='container'>
      {this.state.list.map(function(card,index) {
        console.log('card',card);
        return (
          <div className='column' key={index}>
            <Card capa={card.capa} titulo={card.titulo} descricao={card.descricao}></Card>
          </div>
        );
      })}

      </div>

    )
  }
}
