import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
// icons 
import HomeIcon from 'material-ui-icons/Home';
import ListIcon from 'material-ui-icons/List';
import LockOpenIcon from 'material-ui-icons/LockOpen';
import LockOutlineIcon from 'material-ui-icons/LockOutline';
import TouchAppIcon from 'material-ui-icons/TouchApp';
// actions
import { startSignout } from '../../actions/auth';

const styles = theme => ({
  button: {
    width: '100%',
    margin: '0rem',
    padding: '0.75rem',
    display: 'flex',
    justifyContent: 'left'
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class MenuItems extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        {
          this.props.isAuthenticated &&
          <div>
            <Button component={Link} to="/dashboard" className={classes.button}>
              <HomeIcon className={classes.leftIcon} /> 
              Dashboard
            </Button>
            <Button component={Link} to="/costs" className={classes.button}>
              <ListIcon className={classes.leftIcon} /> 
              Daily Costs
            </Button>
            <Button component={Link} to="/" onClick={() => this.props.startSignout()} className={classes.button}>
              <LockOutlineIcon className={classes.leftIcon} />
              Sign Out
            </Button>
          </div>
        }
        {
          !this.props.isAuthenticated &&
          <div>
            <Button component={Link} to="/" className={classes.button}>
              <LockOpenIcon className={classes.leftIcon} /> 
              Sign In
            </Button>
            <Button target="_blank" href="https://accounts.google.com/SignUp?hl=en-GB" className={classes.button}>
              <TouchAppIcon className={classes.leftIcon} />
              Sign Up
            </Button>
          </div>
        }
      </div>
    );
  }
}

MenuItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startSignout: () => dispatch(startSignout())
  }
}

// export default connect(undefined, mapDispatchToProps)(MenuItems);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(MenuItems));