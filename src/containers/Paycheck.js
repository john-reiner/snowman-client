import { Container, Button, Grid, Typography, Divider, Box, Stack } from '@mui/material'
import React, {useState, useEffect} from 'react'
import LeftoverAllocations from './LeftoverAllocations';
import NumberFormat from 'react-number-format';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


export default function Paycheck() {

    const [paycheck, setPaycheck] = useState('')
    const [paycheckDate, setPaycheckDate] = useState('')
    const [nextCheckDate, setNextCheckDate] = useState('')
    const [totalBills, setTotalBills] = useState(0)
    const [afterBills, setAfterBills] = useState(0)
    const [dateError, setdateError] = useState(false)

    const handlePaycheckChange = e => setPaycheck(e.target.value)

    useEffect(() => {
        if (totalBills > 0) {
            handleTotalAfterCheck()
        }
    }, [totalBills])

    const calculateBills = () => {
        if (paycheckDate !== '' && nextCheckDate !== '') {
            fetch('http://localhost:3001/calculate', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': "bearer " + localStorage.getItem('snowmanToken')
                }, body: JSON.stringify({'paycheck_date': paycheckDate.getDate(), 'next_date': nextCheckDate.getDate()}),
            })
            .then(response => response.json())
            .then(total => {
                setTotalBills(+total)
                handleTotalAfterCheck()
            })
        } else {
            setdateError(true)
        }

    }

    const handleTotalAfterCheck = () => {
        let returnArray = []
        for (let i = 0; i < paycheck.length; i++) {
            const element = paycheck[i];
            if (element !== '$' && element !== ',') {
                returnArray.push(element)
            }
            
        }
        setAfterBills((+returnArray.join('') - +totalBills).toFixed(2))
    }

    return (
        <Container>
            <Box >
                <Typography variant="h4" color="initial" align="center">Paycheck</Typography>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}> 
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Paycheck Date"
                                value={paycheckDate}
                                onChange={(newValue) => {
                                    setPaycheckDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Next Paycheck Date"
                                value={nextCheckDate}
                                onChange={(newValue) => {
                                    setNextCheckDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={2}>
                            <NumberFormat
                                thousandsGroupStyle="thousand"
                                value={paycheck}
                                prefix="$"
                                decimalSeparator="."
                                displayType="input"
                                type="text"
                                thousandSeparator={true}
                                allowNegative={true}
                                decimalScale={2} 
                                placeholder="Amount"
                                onChange={handlePaycheckChange}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color="success" onClick={calculateBills}>
                            Enter
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="p" color="initial" align="center">Amount leftover after Bills Are Paid: ${afterBills}</Typography>
                    </Grid>
                    <Grid item >
                        <LeftoverAllocations afterBills={afterBills} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
