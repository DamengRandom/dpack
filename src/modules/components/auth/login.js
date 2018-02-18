import React from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../../../shared/services/firebase';
// actions
import { startSignin } from '../../../actions/auth';

class Login extends React.Component {
  render(){
    return (
      <div>
        <button onClick={() => this.props.startSignin()} 
          className="button">Login</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {  
    startSignin: () => dispatch(startSignin()) 
  }
}

export default connect(undefined, mapDispatchToProps)(Login);