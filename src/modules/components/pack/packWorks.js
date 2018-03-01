import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
import Button from 'material-ui/Button';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Slide from 'material-ui/transitions/Slide';
import Typography from 'material-ui/Typography';

const primary = "#04a9f4";
const secondary = '#fff';

const styles = theme => ({
  root: {
    width: '90%',
    display: 'block',
    margin : '0 auto',
    padding: '2.5%'
  },
  buttonRight: {
    display: 'block',
    margin : '0 auto',
    textAlign: 'right',
    paddingRight: '1rem'
  },
  titleBox: {
    marginBottom: '4rem'
  },
  worksTitle: {
    textAlign: 'center',
    color: primary
  },
  titleBorder: {
    color: primary,
    width: '3.2rem',
    marginTop: '-0.8rem',
    borderBottom: `0.2rem solid ${primary}`,
    display: 'block',
    margin: '0 auto'
  },
  card: {
    maxWidth: 320,
    display: 'block',
    margin : '0 auto',
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    backgroundColor: primary,
    color: secondary
  },
  media: {
    height: 200,
  },
});

const Transition = (props) => {
  return <Slide direction="up" {...props} />
}

class PackWorks extends React.Component {
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
    return (
      <div className={classes.root}>
        <div className={classes.titleBox}>
          <h2 className={classes.worksTitle}>Works</h2>
          <p className={classes.titleBorder}></p>
        </div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>  
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="http://res.cloudinary.com/dameng/image/upload/v1514523124/bg02_sjneye.jpg"
                title="Cost Records"
              />
              <CardContent>
                <Typography variant="headline" component="h2">
                  Daily Costs
                </Typography>
                <Typography component="p">
                  The feature is mainly focus on recording daily costs, which is trying to make life easier ..
                </Typography>
              </CardContent>
              <CardActions className={classes.buttonRight}>
                <Link to='/costs' className={classes.link}>
                  <Button variant="raised" size="small" className={classes.button}>
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="http://res.cloudinary.com/dameng/image/upload/v1515753435/highway-bg_yurafx.jpg"
                title="Whats Next"
              />
              <CardContent>
                <Typography variant="headline" component="h2">
                  What is next?
                </Typography>
                <Typography component="p">
                  There will be more new functions coming out, such as random decision making functions ..
                </Typography>
              </CardContent>
              <CardActions className={classes.buttonRight}>
                <Button variant="raised" size="small" onClick={this.handleClickOpen} className={classes.button}>
                  Learn More
                </Button>
                <Dialog open={this.state.open}
                  transition={Transition}
                  keepMounted
                  onClose={this.handleClickClose}>
                  <DialogTitle>Feature Developing List </DialogTitle>
                  <DialogContent>
                    <ol>
                      <li>
                        <p><b>Random Decision</b>: which helps user to make a random decision among choices</p>
                      </li>
                      <li>
                        <p><b>Time Counter with payment calculation</b>: which helps user count the working time and then calculate the daily rate</p>
                      </li>
                    </ol>
                  </DialogContent>
                  <Button onClick={this.handleClickClose} className={classes.closeButton}>
                    Close
                  </Button>
                </Dialog>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

PackWorks.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(PackWorks);