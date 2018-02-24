import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui/styles";
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import GridList, { GridListTile } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
// components
import Layout from '../../../shared/components/layout';

const styles = theme => ({
  root: {
    width: '90%',
    display: 'block',
    margin : '0 auto',
    padding: '2.5%'
  },
  card: {
    maxWidth: 320,
    display: 'block',
    margin : '0 auto',
  },
  media: {
    height: 200,
  },
});

class PackWorks extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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
              <CardActions>
                <Link to='/costs'>
                  <Button size="small" color="primary">
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
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
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