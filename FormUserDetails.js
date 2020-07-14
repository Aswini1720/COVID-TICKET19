
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
     <div> <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='xs'
          ><div className="title">
             <h1 className="titlee" >&nbsp;&nbsp;MTC Ticket Booker </h1>
            </div>
            <TextField
              placeholder="&nbsp;Enter Your First Name"
              label=" First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="&nbsp;Enter Your Last Name"
              label=" Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="&nbsp;Enter Your 12-digit AadharNumber"
               label=" AadharNumber"
              onChange={handleChange('aadharNumber')}
              defaultValue={values.aadharNumber}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              maxWidth="xs"
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default FormUserDetails;

