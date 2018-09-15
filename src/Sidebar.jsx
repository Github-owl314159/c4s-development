import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
    state = {
      left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

      render() {
        const { classes } = this.props;
    
        const sideList = (
          <div className={classes.list}>
            <List style={{backgroundColor: "rgb(190,190,190)"}}><h3 style={{
              textAlign: 'center',
              fontSize: '2em'
              }}>Navigation</h3></List>
            <Divider />
            <List className="sidebar_innerlist" style={{backgroundColor: "rgb(206,206,206)"}}>
            <a href="#about" style={{
              textDecoration: 'none',
              fontSize: '215%',
              color: 'rgb(30,30,30)',
              display: 'block',
              marginLeft: '5vw'
            }}>About</a>
            </List>
            <List className="sidebar_innerlist" style={{backgroundColor: "rgb(206,206,206)"}}>
            <a href="#services" style={{
              textDecoration: 'none',
              fontSize: '215%',
              color: 'rgb(30,30,30)',
              display: 'block',
              paddingLeft: '5vw',
              borderTop: '1px solid rgba(0,0,0,0.2)'
            }}>Services</a>
            </List>
            <List className="sidebar_innerlist" style={{backgroundColor: "rgb(206,206,206)"}}>
            <a href="#clients" style={{
              textDecoration: 'none',
              fontSize: '215%',
              color: 'rgb(30,30,30)',
              display: 'block',
              paddingLeft: '5vw',
              borderTop: '1px solid rgba(0,0,0,0.2)'
            }}>Clients</a>
            </List>
            <List className="sidebar_innerlist" style={{backgroundColor: "rgb(206,206,206)"}}>
            <a href="#contact" style={{
              textDecoration: 'none',
              fontSize: '215%',
              color: 'rgb(30,30,30)',
              display: 'block',
              paddingLeft: '5vw',
              borderTop: '1px solid rgba(0,0,0,0.2)'
            }}>Contact</a>
            </List>
          </div>
        );
    
        // const fullList = (
        //   <div className={classes.fullList}>
        //     <List><h3>Navigation</h3></List>
        //     <Divider />
        //     <List><p>test</p></List>
        //   </div>
        // );

        return (
            <div id='sidebar_div'>
              <Button onClick={this.toggleDrawer('left', true)}>
                  <FontAwesomeIcon icon="bars" className='bars' />
              </Button>
              <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                >
                  {sideList}
                </div>
              </Drawer>
        </div>
      );
    }
  }
  
  TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TemporaryDrawer);