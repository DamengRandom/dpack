import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import moment from 'moment';

const primary = "#04a9f4";
const secondary = '#fff';

const styles = theme => ({
  form: {
    padding: theme.spacing.unit * 3
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: primary,
    color: secondary
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: '100%'
  }
});

class CostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      buyer: props.cost ? props.cost.buyer : '',
      date: props.cost ? props.cost.date : moment.utc().format('YYYY/MM/DD'),
      thing: props.cost ? props.cost.thing : '',
      cost: props.cost ? props.cost.cost : 0,
      flag: props.cost ? props.cost.flag : ''
    }
    
    this.getBuyer = this.getBuyer.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getThing = this.getThing.bind(this);
    this.getCost = this.getCost.bind(this);
    this.getFlag = this.getFlag.bind(this);
    this.disableSubmit = this.disableSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getBuyer = (e) => {
    const buyer = e.target.value;
    this.setState({ buyer });
  }

  getDate = (e) => {
    const date = e.target.value;
    this.setState({ date });
  }

  getThing = (e) => {
    const thing = e.target.value;
    this.setState({ thing });
  }

  getCost = (e) => {
    const cost = e.target.value;
    this.setState({ cost });
  }

  getFlag = (e) => {
    const flag = e.target.value;
    this.setState({ flag });
  }

  disableSubmit = () => {
    return (this.state.buyer.length > 0 && this.state.cost.length > 0) ? false : true;
  }

  onSubmit = (e) => {
    e.preventDefault();
    let normalisedData = {
      buyer: this.state.buyer,
      date: this.state.date,
      thing: this.state.thing,
      cost: this.state.cost,
      flag: this.state.flag
    }
    if(normalisedData){
      this.props.onSubmit(normalisedData);
    }
  }

  render(){
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.form}>
          <TextField id="buyer"
            label="Buyer Name"
            placeholder="E.g.: Damon"
            className={classes.textField}
            required
            value={this.state.buyer}
            onChange={this.getBuyer} />
          <TextField id="datePicker" 
            label="Select Record Date"
            type="date"
            defaultValue={this.state.date}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            onChange={this.getDate} />
          <TextField id="thing"
            label="Thing(s) Description"
            placeholder="E.g.: Milk (x2) [$6.99]"
            multiline
            rows="4"
            className={classes.textField}
            value={this.state.thing}
            onChange={this.getThing} />
          <TextField id="cost"
            label="Total Cost"
            placeholder="E.g.: $10.99"
            type="number"
            required
            className={classes.textField}
            value={this.state.cost}
            onChange={this.getCost} />
          <TextField id="flag"
            label="Flag Name"
            placeholder="E.g.: Shopping"
            className={classes.textField}
            value={this.state.flag}
            onChange={this.getFlag} />
          <Button variant="raised" 
            color="primary" 
            className={classes.button}
            onClick={this.onSubmit}
            disabled={this.disableSubmit()}>Submit</Button>
        </form>
      </div>
    )
  }
}

CostForm.protoTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(CostForm);