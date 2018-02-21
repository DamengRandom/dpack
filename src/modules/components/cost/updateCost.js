import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

// components
import Layout from '../../../shared/components/layout';
import CostForm from './costForm';
// actions
import { startUpdateCost, startDeleteCost } from "../../../actions/cost";

const styles = theme => ({
  button: {

  }
})

class UpdateCost extends React.Component {
  constructor(props){
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete = (id) => {
    this.props.startDeleteCost({
      id: this.props.cost.id
    });
  }

  onUpdate = (update) => {
    this.props.startUpdateCost(this.props.cost.id, update);
  }

  render(){
    const { classes } = this.props;
    return (
      <Layout>
        <div>
          <CostForm onSubmit={this.onUpdate} cost={this.props.cost} />
          <Button onClick={this.onDelete} className={classes.button}>Delete</Button>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cost: state.costs.find((eachCost) => {
      return eachCost.id === props.match.params.id
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startUpdateCost: (id, update) => dispatch(startUpdateCost(id, update)),
    startDeleteCost: (id) => dispatch(startDeleteCost(id))
  }
}

UpdateCost.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(UpdateCost));