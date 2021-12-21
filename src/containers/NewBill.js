import React, {useState} from 'react'
import { Dialog, CircularProgress, FormHelperText, DialogContentText, TextField, DialogTitle, DialogContent, Button, DialogActions, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export default function NewBill(props) {

    const [loading, setLoading] = useState(false)

    const [newBill, setNewBill] = useState({
        title: "",
        due_date: 1,
        amount_due: '',
        balance: null,
        interest_rate: null
    })


    const handleChange = e => setNewBill({...newBill, [e.target.name] : e.target.value})
    // const handleAmountDueChange = e => {
    //     console.log(e.target.value)
    //     let valueArray = Array.from(e.target.value)
    //     console.log(valueArray)
    //     if (valueArray.length > 0) {
    //         for (let i = 0; i < valueArray.length; i++) {
    //             const index = valueArray.indexOf('.');
    //             valueArray.splice(index, 1);
    //             valueArray.splice(valueArray.length - 2, 0, '.')
    //             if (valueArray.length > 4 && valueArray[0] === '0') {
    //                 valueArray.splice(0, 1);
    //             }
    //             setNewBill({...newBill, [e.target.name] : valueArray.join('')})
    //         }
    //     } else {
    //         setNewBill({...newBill, [e.target.name] : e.target.value})
    //     }
    // }

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
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
                setLoading(false)
                handleClose()
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

    const handleClose = () => {
        setNewBill({
            title: "",
            due_date: 1,
            amount_due: '',
            balance: null,
            interest_rate: null
        })
        props.setNewBillModalShow(false)
    }

    console.log(newBill)

    return (
        <Dialog open={props.newBillModalShow} onClose={handleClose}>
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
                    id="outlined-number"
                    label="Amount Due"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText="Amount due each month"
                    value={newBill.amount_due}
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
                    value={newBill.interest_rate}
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
                    value={newBill.balance}
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
