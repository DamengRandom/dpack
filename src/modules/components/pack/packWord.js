import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
import GridList, { GridListTile } from 'material-ui/GridList';

const primary = "#04a9f4";
const secondary = '#fff';

const styles = theme => ({
  root: {
    fontFamily: `'Quicksand', sans-serif`
  },
  backgroundGrid: {
    backgroundColor: primary,
    backgroundImage: `url(${'http://res.cloudinary.com/dameng/image/upload/v1519463327/dgrid_uqvsmi.png'})`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    backgroundSize: '5%'
  },
  innerHeader: {
    height: '100%',
    padding: '10%',
    textAlign: 'center'
  },
  title: {
    marginTop: '0rem',
    color: secondary,
    fontFamily: `'Pacifico', cursive`
  },
  titleBorder: {
    color: secondary,
    width: '3.2rem',
    marginTop: '-0.8rem',
    borderBottom: `0.2rem solid ${secondary}`
  },
  motto: {
    marginTop: '2rem',
    color: secondary
  },
  author: {
    fontSize: '2rem'
  }
});

class PackWord extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <GridList cols={1} spacing={0} cellHeight={260} className={classes.root}>
        <GridListTile cols={1}>
          <div className={classes.backgroundGrid}>
            <div className={classes.innerHeader}>
              <h2 className={classes.title}>D-Pack</h2>
              <hr className={classes.titleBorder} />
              <p className={classes.motto}>DPack: A platform to demo works</p>
            </div>
          </div>
        </GridListTile>
      </GridList>
    )
  }
}

PackWord.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(PackWord);