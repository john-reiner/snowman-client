import React, {useState} from 'react'
import {Modal, Button, Table, FormControl, Form, Row, Col, InputGroup} from 'react-bootstrap'

export default function BillShow(props) {

    const [bill, setBill] = useState({})

    const [editing, setEditing] = useState(false)
    // const [editing, setEditing] = useState(false)

    // const handleBillEditClick = e => {
    //     setBill({...bill, [e.target.id] : props.bill[e.target.id]})
    //     // setEditing(true)
    // }

    

    const handleChange = e => setBill({...bill, [e.target.name] : e.target.value})

    console.log(bill)

    const renderFormat = () => {
        if (editing) {
            return (
                <Form>
                    <Row className="align-items-center">
                        <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInput">
                            Title
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            value={bill.title}
                            name='title'
                            onChange={handleChange}
                            placeholder={props.bill.title}
                        />
                        </Col>
                        <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInputGroup" >
                            Due Date
                        </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                value={bill.due_date}
                                name='due_date'
                                onChange={handleChange}
                                placeholder={props.bill.due_date}
                                type='number'
                                min={0}
                                max={31}
                            />
                        </Col>
                        <Col xs="auto">
                        <Form.Label htmlFor="inlineFormInputGroup" >
                            Amount Due
                        </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                value={bill.amount_due}
                                name='amount_due'
                                onChange={handleChange}
                                placeholder={props.bill.amount_due}
                                type='number'
                                min={0.01}
                                step={0.01}
                            />
                        </Col>
                        <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                        </Col>
                    </Row>
                </Form>
            )
        } else {
            return (
                <Table>
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
                        <tr>
                            <td id='title'>{props.bill.title}</td>
                            <td id='due_date'>{props.bill.due_date}</td>
                            <td id='amount_due'>{props.bill.amount_due}</td>
                            <td id='interest_rate'>{props.bill.interest_rate}</td>
                            <td id='balance'>{props.bill.balance}</td>
                        </tr>
                    </tbody>
                </Table>
            )
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.bill.title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {renderFormat()}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setEditing(!editing)}>Edit</Button>
            <Button variant="danger">Delete</Button>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
