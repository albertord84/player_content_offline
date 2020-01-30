/**
 * @author Guoxing.Han(hancoson#163.com)
 * @time 2016/12/29.
 */

import React, { Component } from 'react'

export default class Card extends Component {


  render() {
    return (
      <article className="article">
        <img src={this.props.capa}></img>
        <div className="articleContent">
          <h2 className="article__title">{this.props.titulo}</h2>
          <p className="article__excerpt">{this.props.descricao}</p>
        </div>
      </article>
    )
  }
}
