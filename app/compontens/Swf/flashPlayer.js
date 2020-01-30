import React, { Component } from 'react';
import { ReactSWF } from 'react-swf';

export default class FlashPlayer extends Component {


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
