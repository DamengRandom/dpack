import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
// actions
import { startSignin } from '../../../actions/auth';

const primary = "#04a9f4";
const secondary = '#fff';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${"http://res.cloudinary.com/dameng/image/upload/v1514523124/bg02_sjneye.jpg"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  outer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBox: {
    textAlign: 'center'
  },
  brand: {
    color: secondary,
    fontSize: '2.4rem',
    fontFamily: `'Pacifico', cursive`
  },
  borderline: {
    border: `0.2rem solid ${secondary}`,
    width: '4rem',
    textAlign: 'center',
    marginTop: '-1rem',
    marginBottom: '2rem'
  },
  loginButton: {
    margin: theme.spacing.unit,
    backgroundColor: secondary,
    color: primary
  }
});

class Login extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div className="loginContainer">
        <Grid container spacing={0} className={classes.outer}>
          <Grid item xs={12} sm={12} className={classes.loginBox}>
            <h1 className={classes.brand}>D Pack</h1> 
            <hr className={classes.borderline} />
            <Button variant="raised" onClick={() => this.props.startSignin()} 
              className={classes.loginButton}>Login</Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {  
    startSignin: () => dispatch(startSignin()) 
  }
}

export default connect(undefined, mapDispatchToProps)(withStyles(styles, {withTheme: true})(Login));
