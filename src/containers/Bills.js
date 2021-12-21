import React, {useState, useEffect} from 'react'
import Bill from '../components/Bill'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { TableRow, TableCell, TableContainer, Table, TableHead,TableBody, Button, Stack } from '@mui/material'


export default function Bills(props) {

    const [open, setOpen] = useState(false)
    const [bills, setBills] = useState([])

    useEffect(() => {
        fetchBills()
    }, [])

    const fetchBills = () => {
        
    }
    
    const renderBills = () => {
        return props.bills.map(bill => {
            return <Bill 
                        title={bill.title} 
                        amount_due={bill.amount_due} 
                        interest_rate={bill.interest_rate} 
                        balance={bill.balance}
                        due_date={bill.due_date} 
                        id={bill.id}
                        key={bill.id}
                        handleBillModalShow={props.handleBillModalShow}
                    />
        });
    }

    return (
        <Container>
            <Stack spacing={2}>
                <Typography variant="h4" color="initial" align="center">Bills</Typography>
                <Button variant="outlined" onClick={props.setNewBillModalShow}>Add A Bill</Button>
                <TableContainer >
                    <Table aria-label="collapsible table">
                        <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Due Date</TableCell>
                            <TableCell align="right">Amount Due</TableCell>
                            <TableCell align="right">Interest Rate</TableCell>
                            <TableCell align="right">Balance</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {renderBills()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Container>
        
    )
}

            // <table>
            //     <thead>
            //         <tr>
            //             <th>Title</th>
            //             <th>Due Date</th>
            //             <th>Amount Due</th>
            //             <th>Interest Rate</th>
            //             <th>Balance</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {renderBills()}
            //     </tbody>
            // </table>
            // <button  onClick={() => props.setNewBillModalShow(true)}>New Bill</button>