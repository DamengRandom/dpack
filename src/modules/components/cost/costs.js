import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../../../shared/services/firebase';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableHead, TableRow, TableCell } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
// actions
import { startReadCosts } from '../../../actions/costs';
// components
import Layout from '../../../shared/components/layout';
import Cost from './cost';

const styles = theme => ({
  desktopContainer: {
    maxWidth: '100%',
    padding: theme.spacing.unit * 3
  },
  mobileContainer: {
    width: '100%',
    padding: theme.spacing.unit
  },
  root: {
    width: '100%',
    maxHeight: '60vh',
    display: 'block',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    overflowY: 'auto'
  },
  table: {
    width: '100%'
  }
})

class Costs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      costs: []
    }
  }

  renderCosts = () => {
    return this.props.costs.map((cost) => {
      return <Cost key={cost.id} cost={cost} />
    });
  }

  render(){
    const { classes } = this.props;
    return (
      <Layout>
        <div className={ window.innerWidth < 600 ? classes.mobileContainer : classes.desktopContainer}>
          <Link to='/createCost'>Create Cost</Link>
          <Paper className={classes.root}>  
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Buyer
                  </TableCell>
                  <TableCell>
                    Date                    
                  </TableCell>
                  <TableCell>
                    Thing(s)
                  </TableCell>
                  <TableCell>
                    Cost
                  </TableCell>
                  <TableCell>
                    Flag                    
                  </TableCell>
                  <TableCell>
                    View / Edit               
                  </TableCell>
                </TableRow>
              </TableHead>
              { this.props.costs && this.renderCosts() }
              { this.props.costs.length === 0 && <TableBody>
                <TableRow>
                  <TableCell>
                    <p align='center'>No Data Yet ..</p>
                  </TableCell>
                </TableRow>
                </TableBody> }
            </Table>
          </Paper>
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

Costs.proptypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(styles, {withTheme: true})(Costs));