import React, {useState, useEffect } from 'react'
import { Dialog, CircularProgress, FormHelperText, DialogContentText, TextField, DialogTitle, DialogContent, Button, DialogActions, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export default function EditBill(props) {
    const [loading, setLoading] = useState(false)

    const [bill, setBill] = useState({
        title: "",
        due_date: 1,
        amount_due: '',
        balance: '',
        interest_rate: ''
    })

    useEffect(() => {
        console.log(props.editShow)
        if (props.editShow === true) {
            getBill()
        }
    }, [props.editShow])


    const handleChange = e => setBill({...bill, [e.target.name] : e.target.value})

    const getBill = () => {
        setLoading(true)
        fetch(`http://localhost:3001/bills/${props.id}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': "bearer " + localStorage.getItem('snowmanToken')
            }
        })
        .then(response => response.json())
        .then(bill => {
            if (bill) {
                setLoading(false)
                setBill(bill)
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        fetch(`http://localhost:3001/bills/${bill.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': "bearer " + localStorage.getItem('snowmanToken')
            },
            body: JSON.stringify(bill),
        })
        .then(response => response.json())
        .then(updatedBill => {
            if (updatedBill) {
                console.log(updatedBill)
                setLoading(false)
                props.setReloadBills(true)
                handleClose()
            }
        })
    }

    const renderMenuItems = () => {
        let num = 0
        return Array(28).fill().map(number => {
            num ++
            return <MenuItem key={number + 123} value={num}>{num}</MenuItem>
        })
    }

    const handleClose = () => {
        setBill({
            title: "",
            due_date: 1,
            amount_due: '',
            balance: '',
            interest_rate: ''
        })
        props.setEditShow(false)

    }

    return (
        <Dialog open={props.editShow} onClose={handleClose}>
            <DialogTitle>Edit {bill.title}</DialogTitle>
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
                    value={bill.title}
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
                        value={bill.due_date}
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
                    id="outlined-number"
                    label="Amount Due"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText="Amount due each month"
                    value={bill.amount_due}
                    onChange={handleChange}
                    name='amount_due'
                />
                <TextField
                    required
                    id="outlined-number"
                    label="Interest Rate"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText="Interest Rate"
                    value={bill.interest_rate}
                    onChange={handleChange}
                    name='interest_rate'
                />
                <TextField
                    required
                    id="outlined-number"
                    label="Balance"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText="Remaining Balance"
                    value={bill.balance}
                    onChange={handleChange}
                    name='balance'
                />
            </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                {loading ? <CircularProgress /> : <Button onClick={handleSubmit}>Submit</Button>}
            </DialogActions>`
        </Dialog>
    )
}
