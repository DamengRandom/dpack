import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
import Grid from 'material-ui/Grid';
// components
import Layout from '../../../shared/components/layout';
import PackContact from './packContact';
import PackWord from './packWord';
import PackWorks from './packWorks';


const styles = theme => ({

});

class Pack extends React.Component {
  render(){
    return (
      <Layout>
        <div>
          <PackWord />
          <PackWorks />
          <PackContact />
        </div>
      </Layout>
    )
  }
}

Pack.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(Pack);