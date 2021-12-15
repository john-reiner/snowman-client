import React from 'react'
import { Button, Table } from 'react-bootstrap';
import Bill from '../components/Bill'

export default function Bills(props) {


    
    const renderBills = () => {
        return props.bills.map(bill => {
            return <Bill title={bill.title} amount_due={bill.amount_due} interest_rate={bill.interest_rate} due_date={bill.due_date} balance={bill.balance}/>
        });
    }

    return (
        <div>
            <h2>Bills</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Due Date</th>
                        <th>Amount Due</th>
                        <th>Interest Rate</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBills()}
                </tbody>
            </Table>
            <Button variant="primary" onClick={() => props.setNewBillModalShow(true)}>New Bill</Button>
        </div>
    )
}
