
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, aadharNumber, busNo,busRoute,dropLocation }
    } = this.props;
    return (
      
      <>
          <Dialog
            open
            fullWidth
            maxWidth='xs'
          >
            
            <h1>&nbsp;&nbsp;&nbsp;Confirm Ticket Data </h1>
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Aadhar" secondary={aadharNumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="BusNo" secondary={busNo} />
              </ListItem>
              <ListItem>
                <ListItemText primary="BusRoute" secondary={busRoute} />
              </ListItem>
              <ListItem>
                <ListItemText primary="DropLocation" secondary={dropLocation} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Pay</Button>
          </Dialog>
        </>
      
    );
  }
}

export default Confirm;

