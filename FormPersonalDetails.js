
import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='xs'
          >
            
           <h1>&nbsp;&nbsp;&nbsp; Enter Ticket Details </h1>
            
            <TextField
              placeholder=" &nbsp;Enter the BusNo"
              label="BusNo"
              onChange={handleChange('busNo')}
              defaultValue={values.busNo}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="&nbsp;Enter the BusRoute"
              label="BusRoute"
              onChange={handleChange('busRoute')}
              defaultValue={values.busRoute}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="&nbsp;Enter Your DropLocatiom"
              label="DropLocation"
              onChange={handleChange('dropLocation')}
              defaultValue={values.dropLocation}
              margin="normal"
              fullWidth
            />
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
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
