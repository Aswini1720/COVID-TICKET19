
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
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
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
             <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Payment Confirmed</h1>
            <h3>&nbsp;&nbsp;&nbsp;Thanks for the payment!!!</h3>
          
            <p>&nbsp;&nbsp;&nbsp;Your Ticket has been generated Successfully.</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;

