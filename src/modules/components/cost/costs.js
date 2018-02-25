import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Table, { TableBody, TableHead, TableRow, TableCell } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
// icons
import AddIcon from 'material-ui-icons/Add';
// components
import Layout from '../../../shared/components/layout';
import Cost from './cost';

const primary = "#04a9f4";
const secondary = '#fff';

const styles = theme => ({
  desktopContainer: {
    maxWidth: '100%',
    padding: theme.spacing.unit * 3
  },
  mobileContainer: {
    width: '90%',
    padding: theme.spacing.unit,
    display: 'block',
    margin: '0 auto'
  },
  root: {
    width: '98%',
    margin: '1%',
    maxHeight: '100%',
    display: 'block',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    overflowY: 'auto'
  },
  gridList: {
    width: '100%',
    height: '100%'
  },
  table: {
    width: '100%'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    backgroundColor: primary,
    color: secondary
  }
})

class Costs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      costs: this.props.costs
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
          <Grid container spacing={24}>
            <Grid item xs={12}>
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
                        View/Edit               
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  { this.state.costs && this.renderCosts() }
                  { this.state.costs.length === 0 && <TableBody>
                    <TableRow>
                      <TableCell>
                        <p align='center'>No Data Yet ..</p>
                      </TableCell>
                    </TableRow>
                    </TableBody> }
                </Table>
              </Paper>
            </Grid>
          </Grid>
          <Button variant="fab" className={classNames(classes.fab)} component={Link} to='/createCost'>
            <AddIcon />
          </Button>
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