import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// components
import Layout from '../../../shared/components/layout';
import Cost from './cost';

class Costs extends React.Component {
  constructor(props){
    super(props);
  }

  renderCosts = () => {
    if(this.props.costs){
      return this.props.costs.map((cost) => {
        return <Cost key={cost.id} cost={cost} />
      });
    }else {
      return <p>No Data Yet ..</p>
    }
  }

  render(){
    return (
      <Layout>
        <div>
          <Link to='/createCost'>Create Cost</Link>
          { this.renderCosts() }
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    costs: state.costs
  }
}

export default connect(mapStateToProps)(Costs);