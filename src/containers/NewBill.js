import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

export default function NewBill(props) {

    const [newBill, setNewBill] = useState({
        
    })

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Create a New Bill
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter bill title" />
                        <Form.Text className="text-muted">
                        What do you call this bill?
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="integer" placeholder="Day of the month due" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Payment</Form.Label>
                        <Form.Control type="integer" placeholder="Payment" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Interest Rate</Form.Label>
                        <Form.Control type="float" placeholder="interest rate" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
