import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import Tooltip from 'material-ui/Tooltip';
// components
import Layout from '../../../shared/components/layout';

const primary = "#bbb";
const secondary = '#fff';

const styles = theme => ({
  root: {
    marginTop: '2rem',
    backgroundColor: primary,
    color: secondary
  },
  footer: {
    textAlign: 'right',
    paddingRight: '2rem',
    margin: '0px',
    width: 'auto'
  },
  footerText: {
    paddingLeft: '2rem'
  },
  footContact: {
    paddingLeft: '0.8rem'
  },
  footerIcons: {
    fontSize: '1.6rem',
    paddingRight: '0.8rem' 
  },
  footerLink: {
    color: secondary,
    cursor: 'pointer'
  }
});

class PackContact extends React.Component {
  render(){
    const { classes } = this.props;
    const motto = `Fortune always appreciate a hardworking man`;
    const selfIntro = `Hi there, I am <Dameng /> who is a Front-end developer ..`;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.footerText}>
              <h4>About Author</h4>
              <p>{selfIntro}</p>
              <h4>Perosnal Motto</h4>
              <p>{motto}</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.footerText}>
              <h4 className={classes.footContact}>Contact</h4> 
              <Tooltip id="tooltipEmail" title="damonwu0605@gmail.com" className={classes.footerIcons}>
                <IconButton>
                  <a className={classes.footerLink} href="mailto:damonwu0605@gamil.com" target="_blank"><i className="fas fa-envelope"></i></a>
                </IconButton>
              </Tooltip>
              <Tooltip id="tooltipGithub" title="https://github.com/DamengRandom" className={classes.footerIcons}>
                <IconButton>
                  <a className={classes.footerLink} href="https://github.com/DamengRandom" target="_blank"><i className="fab fa-github"></i></a>
                </IconButton>
              </Tooltip>
              <Tooltip id="tooltipWeChat" title="WechatID: Damon0503" className={classes.footerIcons}>
                <IconButton>
                  <span className={classes.footerLink}><i className="fab fa-weixin"></i></span>
                </IconButton>
              </Tooltip>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <p className={classes.footer}>Dameng Pack <i className="far fa-copyright"></i> 2018</p>
          </Grid>
        </Grid>
      </div>
    )
  }
}

PackContact.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(PackContact);