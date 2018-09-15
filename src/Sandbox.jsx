import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      width: '100%',
    },
    heading: {
      fontSize: '100%',
      fontWeight: '300',
    },
  };

function Sandbox(props) {
    const { classes } = props;

    return (
        <ExpansionPanel >
            <ExpansionPanelSummary expandIcon={ <ExpandMoreIcon/> } style={{backgroundColor: 'red'}}>
                summary
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                details
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default Sandbox;