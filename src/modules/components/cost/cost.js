import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Slide from 'material-ui/transitions/Slide';
// icons 
import EditIcon from 'material-ui-icons/Edit';
import ZoomInIcon from 'material-ui-icons/ZoomIn';
// components
import Layout from '../../../shared/components/layout';

const styles = theme => ({
  iconPadding: {
    paddingRight: theme.spacing.unit * 1.5
  },
  tableCell: {
    maxWidth: '6rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
});

const Transition = (props) => {
  return <Slide direction="up" {...props} />
}

class Cost extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClickClose = () => {
    this.setState({ open: false });
  }

  renderCost = ({classes} = this.props) => (
    <TableRow>
      <TableCell>
        <p className={classes.tableCell}>{this.props.cost.buyer}</p>
      </TableCell>
      <TableCell>
        <p>{this.props.cost.date}</p>
      </TableCell>
      <TableCell>
        <p className={classes.tableCell}>{this.props.cost.thing}</p>
      </TableCell>
      <TableCell>
        <p>{this.props.cost.cost}</p>
      </TableCell>
      <TableCell>
        <p className={classes.tableCell}>{this.props.cost.flag}</p>
      </TableCell>
      <TableCell>
        <ZoomInIcon className={classes.iconPadding} onClick={ this.handleClickOpen } />
        <Link to={`/updateCost/${this.props.cost.id}`}><EditIcon className={classes.iconPadding} /></Link>
      </TableCell>
    </TableRow>
  )
  render(){
    return (
      <TableBody>
        { this.props.cost && this.renderCost() }  
        <Dialog open={this.state.open}
          transition={Transition}
          keepMounted
          onClose={this.handleClickClose}>
          <DialogTitle>Detail for Buyer: { this.props.cost.buyer }</DialogTitle>
          <DialogContent>
            <i>{ this.props.cost.date }</i>
            <DialogContentText>
              <p>{ this.props.cost.thing }</p>
            </DialogContentText>
            <p>{this.props.cost.cost}</p>
            <p>{this.props.cost.flag}</p>
            <DialogActions>
              <Button onClick={this.handleClickClose}>
                Close
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </TableBody>  
    )
  }
}

Cost.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(Cost);