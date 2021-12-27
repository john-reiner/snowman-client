import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDelete(props) {

    const handleBillDelete = () => {
        fetch(`http://localhost:3001/bills/${props.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "bearer " + localStorage.getItem('snowmanToken')
            },
        })
        .then(response => response.json())
        .then(bill => {
            props.setReloadBills(true)
            props.handleClose(false)
        })
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={() => props.handleClose(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Delete " + props.title + "?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete your {props.title} bill?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => props.handleClose(false)}>Disagree</Button>
                <Button onClick={handleBillDelete} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
