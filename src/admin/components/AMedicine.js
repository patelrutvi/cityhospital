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

export default function AMedicine() {
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
            <DialogTitle>Medicine</DialogTitle>
            <DialogContent>
                <DialogContentText>
                   
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="mname"
                    label="Medicine Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    sx={{ margin: '10px',padding:'25px 0 0 0' }}
                />
                   <TextField
                    autoFocus
                    margin="dense"
                    id="expdate"
                    label="Exp Date"
                    type="date"
                    fullWidth
                    variant="standard"
                    sx={{ margin: '10px',padding:'25px 0 0 0' }}
                />
                   <TextField
                    autoFocus
                    margin="dense"
                    id="mprice"
                    label="Price"
                    type="number"
                    fullWidth
                    variant="standard"
                    sx={{ margin: '10px',padding:'25px 0 0 0' }}
                />
            </DialogContent>


            {/* <Button variant="outlined" onClick={handleClickOpen}>
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