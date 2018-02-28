import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
// components
import Layout from '../../../shared/components/layout';
import PackContact from './packContact';
import PackMe from './packMe';
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
          <PackMe />
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