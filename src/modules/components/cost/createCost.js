import React from 'react';
import { connect } from "react-redux";
// components
import Layout from '../../../shared/components/layout';
import CostForm from "./costForm";
// actions
import { startCreateCost } from "../../../actions/costs";

class CreateCost extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit = (message) => {
    this.props.startCreateCost(message);
    if(message){
      this.props.history.push('/costs');
    }
  }
  
  render(){
    return (
      <Layout>
        <div>
          <CostForm onSubmit={this.onSubmit} />
        </div>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startCreateCost: (cost) => dispatch(startCreateCost(cost))
  }
}

export default connect(undefined, mapDispatchToProps)(CreateCost);