import React, {useState} from 'react'
import Bills from './Bills'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import NewBill from './NewBill'
// import BillShow from './BillShow'

export default function Main(props) {

    const [newBillModalShow, setNewBillModalShow] = useState(false)
    const [showBillModalShow, setShowBillModalShow] = useState(false)
    const [bill, setBill] = useState({})

    const handleBillModalShow = id => {
        var billToShow = props.user.bills.find(bill => bill.id === id)
        setShowBillModalShow(true)
        setBill(billToShow)
    }

    return (
            <Grid container spacing={2}>
                <Grid item xs={6} id='bills-container'>
                    <Paper elevation={3}>
                        <NewBill setNewBillModalShow={setNewBillModalShow} newBillModalShow={newBillModalShow}/>
                        <Bills handleBillModalShow={handleBillModalShow} setNewBillModalShow={setNewBillModalShow} bills={props.user.bills}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    IDK
                </Grid>
            </Grid>

    )
}