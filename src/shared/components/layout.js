import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
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
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
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
      height: '100vh',
    },
  },
  content: {
    backgroundColor: secondaryColor,
    width: '100%',
    // padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class Layout extends React.Component {
  state = {
    mobileOpen: false,
  };

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
        <div className={classes.drawerLayout}>
          <Typography variant="title" color="inherit" noWrap className={classes.menuTitle}>
            Dameng Pack
          </Typography>
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

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

export default withStyles(styles, { withTheme: true })(Layout);