import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
    root: {
        backgroundColor: 'rgb(206,206,206)',
        boxShadow: 'none',
        },
    expandIcon: {
        top: "18%",
        right: "5%",
    }
}

function TunedExpansion(props) {
    const { classes } = props;

    return (

        <ExpansionPanel classes={{
            root: classes.root
        }}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} classes={{
                expandIcon: classes.expandIcon
            }}>
                {props.summary}
                
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div class="services-it_outsourcing_sub" style={{ display: "grid" }}>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default withStyles(styles)(TunedExpansion);