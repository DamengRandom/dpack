import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';

// components
import MenuItems from './menuItems';
// style variables
const drawerWidth = 360;
const primaryColor = '#04a9f4';
const secondaryColor = '#fffff';

// style customise
const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor: primaryColor
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerLayout: theme.mixins.toolbar,
  drawerHeader: {
    display: 'block',
    margin: '0 auto',
    marginTop: '1rem'
  },
  avatar: {
    width: '60px',
    height: '60px',
    marginLeft: '1rem'
  },
  avatorName: {
    marginLeft: '1rem'
  },
  menuTitle: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem'
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
      borderRight: 'none'
    },
  },
  content: {
    backgroundColor: secondaryColor,
    width: '100%',
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileOpen: false,
      user: this.props.user || {},
    };
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  getCurrentPageTitle = () => {
    let pathName = (window.location.pathname);
    if(pathName === '/'){
      pathName = 'dashboard';
      return pathName.charAt(0).toUpperCase() + pathName.slice(1);
    }
    return (pathName.split('/')[1]).charAt(0).toUpperCase() + (pathName.split('/')[1]).slice(1);
  }

  render() {
    const { classes, theme, children } = this.props;
    const drawer = (
      <div>
        <div className={classNames(classes.drawerLayout, classes.drawerHeader)}>
          <Avatar alt="Avator" src={`${this.state.user.photoURL}`}
            className={classNames(classes.avatar, classes.bigAvatar)} />
          <h5 className={classes.avatorName}>Hi, {this.props.user.displayName}</h5>
        </div>
        <Divider />
        <MenuItems />
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                { this.getCurrentPageTitle() }
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}>
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <Fade in={true} style={{ transitionDelay: 500 }}>
              { children }   
            </Fade>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Layout));