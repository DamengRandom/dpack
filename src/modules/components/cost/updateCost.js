import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
// icons
import DeleteIcon from 'material-ui-icons/Delete';
// components
import Layout from '../../../shared/components/layout';
import CostForm from './costForm';
// actions
import { startReadCosts, startUpdateCost, startDeleteCost } from "../../../actions/costs";

const primary = "#04a9f4";
const secondary = '#fff';
const alert = '#F44336';

const styles = theme => ({
  deleteButton: {
    backgroundColor: alert,
    color: secondary,
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
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
    this.props.history.push('/costs');
  }

  onUpdate = (update) => {
    this.props.startUpdateCost(this.props.cost.id, update);
    this.props.startReadCosts(update);
    this.props.history.push('/costs');
  }

  render(){
    const { classes } = this.props;
    return (
      <Layout>
        <div>
          <CostForm onSubmit={this.onUpdate} cost={this.props.cost} />
          <Button variant="fab" onClick={this.onDelete} className={classes.deleteButton}>
            <DeleteIcon />
          </Button>
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
    startReadCosts: (update) => dispatch(startReadCosts(update)),
    startUpdateCost: (id, update) => dispatch(startUpdateCost(id, update)),
    startDeleteCost: (id) => dispatch(startDeleteCost(id))
  }
}

UpdateCost.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(UpdateCost));