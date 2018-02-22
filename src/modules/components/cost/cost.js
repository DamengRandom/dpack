import React from 'react';
// components
import Layout from '../../../shared/components/layout';

class Cost extends React.Component {
  constructor(props){
    super(props);
  }
  renderCost = () => (
    <div>
      <p>{this.props.cost.buyer}</p>
      <p>{this.props.cost.date}</p>
      <p>{this.props.cost.thing}</p>
      <p>{this.props.cost.cost}</p>
      <p>{this.props.cost.flag}</p>
    </div>
  )
  render(){
    return (
      <div>
        { this.props.cost && this.renderCost() }      
      </div>
    )
  }
}

export default Cost;