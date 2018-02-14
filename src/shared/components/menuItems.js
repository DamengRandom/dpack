import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon } from 'material-ui/List';
// icons 
import HomeIcon from 'material-ui-icons/Home';
import ListIcon from 'material-ui-icons/List';
import LockOpenIcon from 'material-ui-icons/LockOpen';
import LockOutlineIcon from 'material-ui-icons/LockOutline';
import TouchAppIcon from 'material-ui-icons/TouchApp';

class MenuItems extends React.Component {
  render(){
    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link to='/'>Dashbaord</Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <Link to='/costs'>Daily Costs</Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <Link to='/signIn'>Sign In</Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TouchAppIcon />
          </ListItemIcon>
          <Link to='/signUp'>Sign Up</Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LockOutlineIcon />
          </ListItemIcon>
          <Link to='/'>Sign Out</Link>
        </ListItem>
      </div>
    );
  }
}

export default MenuItems;