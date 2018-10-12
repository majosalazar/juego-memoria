 import React, { Component } from 'react';
 import Card from '../Card/Card';
 import './table.css'

 class Table extends Component {
   render() {
     return (
       <div className="table">
        {
          this.props.deck
          .map((card) => <Card icono={card.icono}/>)
        }
       </div>
     );
   }
 };

 export default Table;