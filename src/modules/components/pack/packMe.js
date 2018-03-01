import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
import GridList, { GridListTile } from 'material-ui/GridList';

const primary = "#e5262d";
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
    backgroundSize: '5%',
    marginTop: '2rem'
  },
  innerHeader: {
    height: '100%',
    padding: '4rem',
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
    borderBottom: `0.2rem solid ${secondary}`,
    display: 'block',
    margin: '0 auto'
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
    const motto = `Fortune always appreciate a hardworking man`;
    const { classes } = this.props;
    return (
      <GridList cols={1} spacing={0} cellHeight='auto' className={classes.root}>
        <GridListTile cols={1}>
          <div className={classes.backgroundGrid}>
            <div className={classes.innerHeader}>
              <h2 className={classes.title}>Perosnal motto</h2>
              <p className={classes.titleBorder}></p>
              <p className={classes.motto}>
                " {motto} "
              </p>
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