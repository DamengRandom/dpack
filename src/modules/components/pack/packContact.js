import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import Grid from 'material-ui/Grid';
import Slide from 'material-ui/transitions/Slide';
import Tooltip from 'material-ui/Tooltip';
// components

const primary = "#bbb";
const secondary = '#fff';

const styles = theme => ({
  root: {
    backgroundColor: primary,
    color: secondary
  },
  footer: {
    textAlign: 'right',
    padding: '2rem',
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
  },
  wechatLogo: {
    width: '100%'
  },
  closeButton: {
    backgroundColor: primary,
    color: secondary
  }
});

const Transition = (props) => {
  return <Slide direction="up" {...props} />
}

class PackContact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClickClose = () => {
    this.setState({ open: false });
  }

  render(){
    const { classes } = this.props;
    const selfIntro = `Hi there, I am <Dameng /> who is a Front-end developer ..`;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.footerText}>
              <h4 className={classes.footContact}>About Author</h4>
              <p className={classes.footContact}>{selfIntro}</p>
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
                <IconButton onClick={ this.handleClickOpen }>
                  <span className={classes.footerLink}><i className="fab fa-weixin"></i></span>
                </IconButton>
              </Tooltip>
              <Dialog open={this.state.open}
                transition={Transition}
                keepMounted
                onClose={this.handleClickClose}>
                <DialogTitle>WeChat QR Code: </DialogTitle>
                <DialogContent>
                  <p>Wechat ID: Damon0503</p>
                  <img className={classes.wechatLogo} src="http://res.cloudinary.com/dameng/image/upload/v1519810375/wechat_qr_zxu6pg.jpg" alt="QR Code" />
                </DialogContent>
                <Button onClick={this.handleClickClose} className={classes.closeButton}>
                  Close
                </Button>
              </Dialog>
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