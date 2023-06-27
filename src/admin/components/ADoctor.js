import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function ADoctor() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box height={50} />

            <DialogTitle>Doctors</DialogTitle>
            <DialogContent >
                <DialogContentText>

                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    sx={{ margin: '10px',padding:'25px 0 0 0' }}
                />
                {/* <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    sx={{ margin: '5px' }}
                /> */}
                <TextField
                    autoFocus
                    margin="dense"
                    id="sp"
                    label="Specialty"
                    type="text"
                    fullWidth
                    variant="standard"
                    sx={{ margin: '10px',padding:'25px 0 0 0' }}
                />

            </DialogContent>
            {/* <Button variant="outlined" onClick={()=>setOpen(!open)}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
       
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog> */}
        </div>
    );
}