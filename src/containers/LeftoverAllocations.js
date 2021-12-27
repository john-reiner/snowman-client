import React, {useState, useEffect} from 'react'
import { TextField, Typography, Grid} from '@mui/material'

export default function LeftoverAllocations(props) {

    const [spending, setSpending] = useState('')
    const [savings, setSavings] = useState('')
    const [burning, setBurning] = useState('')

    const handleSpendingChange = e => e.target.value.length <= 2 && setSpending(e.target.value)
    const handleSavingsChange = e => e.target.value.length <= 2 && setSavings(e.target.value)
    const handleBurningChange = e => e.target.value.length <= 2 && setBurning(e.target.value)

    // useEffect(() => {
    //     if (spending !== '' && savings !== '' && burning === '') {
    //         setBurning(100 - (+spending + +savings))
    //     }
    //     if (savings !== '' && burning !== '' && spending === '') {
    //         setSpending(100 - (+burning + +savings))
    //     }
    //     if (spending !== '' && burning !== '' && savings === '') {
    //         setSavings(100 - (+burning + +spending))
    //     }
    // }, [spending, savings, burning, props.afterBills])

    // console.log(spending)

    return (
        <Grid container spacing={2}>
            <Grid container item spacing={2} justifyContent="space-around" alignItems="center">
                <Grid item xs={4} >
                    <Typography variant="p" color="initial" align="left">% Spending:</Typography>
                </Grid>
                <Grid item xs={4} >
                    <TextField 
                        id="standard-basic" 
                        type="number" 
                        variant="standard" 
                        value={spending}
                        onChange={handleSpendingChange} 
                    />
                </Grid>
                <Grid item xs={4} >
                    <Typography variant="p" color="initial" align="right">${((spending / 100) * props.afterBills).toFixed(2)}</Typography>
                </Grid>
            </Grid>
            <Grid container item spacing={2} justifyContent="space-around" alignItems="center">
            <Grid item xs={4}>
                    <Typography variant="p" color="initial" align="left">% Savings:</Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        id="standard-basic" 
                        type="number" 
                        variant="standard"
                        value={savings}
                        onChange={handleSavingsChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="p" color="initial" align="right">${((savings / 100) * props.afterBills).toFixed(2)}</Typography>
                </Grid>
            </Grid>
            <Grid container item spacing={2} justifyContent="space-around" alignItems="center">
            <Grid item xs={4}>
                    <Typography variant="p" color="initial" align="left">% Burning:</Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        id="standard-basic" 
                        type="number" 
                        variant="standard"
                        value={burning}
                        onChange={handleBurningChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="p" color="initial" align="right">${((burning / 100) * props.afterBills).toFixed(2)}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}