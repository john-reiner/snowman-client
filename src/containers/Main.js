import React, {useState} from 'react'
import Bills from './Bills'
import Paycheck from './Paycheck'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import SnowMan from './SnowMan'

import NewBill from './NewBill'
// import BillShow from './BillShow'

export default function Main(props) {

    const [newBillModalShow, setNewBillModalShow] = useState(false)
    const [showBillModalShow, setShowBillModalShow] = useState(false)
    const [bill, setBill] = useState({})
    const [reloadBills, setReloadBills] = useState(false)

    const handleBillModalShow = id => {
        var billToShow = props.user.bills.find(bill => bill.id === id)
        setShowBillModalShow(true)
        setBill(billToShow)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={6} id='bills-container'>
                <Paper elevation={3}>
                    <NewBill setReloadBills={setReloadBills} setNewBillModalShow={setNewBillModalShow} newBillModalShow={newBillModalShow}/>
                    <Bills reloadBills={reloadBills} setReloadBills={setReloadBills} handleBillModalShow={handleBillModalShow} setNewBillModalShow={setNewBillModalShow} bills={props.user.bills}/>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>
                    <Paycheck />
                </Paper>
                <Paper>
                    <SnowMan />
                </Paper>
            </Grid>
        </Grid>
    )
}