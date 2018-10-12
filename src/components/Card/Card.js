import React, { Component } from 'react';
import './card.css';
import FlipCard from 'react-flipcard';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <FlipCard>
          <div className="coverPage"></div>
          <div className="content">
            <i className={`fa ${this.props.icono} fa-5x`}></i>
          </div>
        
        </FlipCard>

      </div>
    )
  }
};

export default Card;