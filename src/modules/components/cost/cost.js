import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Slide from 'material-ui/transitions/Slide';
import Tooltip from 'material-ui/Tooltip';
// icons 
import EditIcon from 'material-ui-icons/Edit';
import ZoomInIcon from 'material-ui-icons/ZoomIn';
// components
import Layout from '../../../shared/components/layout';

const primary = "#04a9f4";
const secondary = '#fff';

const styles = theme => ({
  iconPadding: {
    paddingRight: theme.spacing.unit * 1.5,
    cursor: 'pointer',
    color: primary
  },
  tableCell: {
    maxWidth: '6rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  closeButton: {
    backgroundColor: primary,
    color: secondary
  },
  chip: {
    backgroundColor: primary,
    color: secondary
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
        <Chip label={this.props.cost.flag} className={classes.chip} />
      </TableCell>
      <TableCell>
        <Tooltip id="tooltipZoomIn" title="View" placement="bottom">
          <ZoomInIcon className={classes.iconPadding} onClick={ this.handleClickOpen } className={classes.iconPadding} />
        </Tooltip>
        <Tooltip id="tooltipEdit" title="Edit" placement="bottom">
          <Link to={`/updateCost/${this.props.cost.id}`}><EditIcon className={classes.iconPadding} /></Link>
        </Tooltip>
      </TableCell>
    </TableRow>
  )
  render(){
    const {classes} = this.props;
    return (
      <TableBody>
        { this.props.cost && this.renderCost() }  
        <Dialog open={this.state.open}
          transition={Transition}
          keepMounted
          onClose={this.handleClickClose}>
          <DialogTitle>Detail for Buyer: { this.props.cost.buyer }</DialogTitle>
          <DialogContent>
            <i>Dated on: { this.props.cost.date }</i>
            <p>Thing(s) [Bought]: </p>
            <DialogContentText>
              { this.props.cost.thing }
            </DialogContentText>
            <p>Total Cost: {this.props.cost.cost}</p>
            <p>Category{this.props.cost.flag}</p>
            <DialogActions>
              <Button onClick={this.handleClickClose} className={classes.closeButton}>
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