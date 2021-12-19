import React, {useState} from 'react'
import { Dialog, FormHelperText, DialogContentText, TextField, DialogTitle, DialogContent, Button, DialogActions, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export default function NewBill(props) {

    const [newBill, setNewBill] = useState({
        title: "",
        due_date: 1,
        amount_due: "",
        balance: null,
        interest_rate: null
    })

    const handleChange = e => setNewBill({...newBill, [e.target.name] : e.target.value})

    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3001/bills', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': "bearer " + localStorage.getItem('snowmanToken')
            },
            body: JSON.stringify(newBill),
        })
        .then(response => response.json())
        .then(bill => {
            if (bill) {
                console.log(bill)
            }
        })
    }

    const renderMenuItems = () => {
        let num = 0
        return Array(28).fill().map(number => {
            num ++
            return <MenuItem value={num}>{num}</MenuItem>
        })
    }

    console.log(newBill)

    return (
        <Dialog open={props.newBillModalShow} onClose={() => props.setNewBillModalShow(false)}>
    `       <DialogTitle>Set up a new Bill</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Enter your bill information.
            </DialogContentText>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            > 
                <TextField
                    required
                    autoFocus
                    id="outlined-required"
                    label="Required"
                    value={newBill.title}
                    onChange={handleChange}
                    helperText="Bill Title"
                    name="title"
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Due Date</InputLabel>
                    <Select
                        required
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={newBill.due_date}
                        label="Due Date"
                        onChange={handleChange}
                        name='due_date'
                    >
                        {renderMenuItems()}
                    </Select>
                    <FormHelperText>Due Date</FormHelperText>
                </FormControl>
                <TextField
                    required
                    margin="dense"
                    id="name"
                    label="Amount Due"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            
            </Box>
                        <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
                        <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
                        <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={() => props.setNewBillModalShow(false)}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>`
        </Dialog>
    )
}
