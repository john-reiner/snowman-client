import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Bills from './Bills'
import NewBill from './NewBill'

export default function Main(props) {

    const [newBillModalShow, setNewBillModalShow] = useState(false)

    return (
        <Container fluid>
        
        <NewBill
            show={newBillModalShow}
            onHide={() => setNewBillModalShow(false)}
        />
            <Row>
                <Col sm={4}>
                    <Bills setNewBillModalShow={setNewBillModalShow} bills={props.user.bills}/>
                </Col>
                <Col sm={8}>
                    IDK
                </Col>
            </Row>
        </Container>
    )
}
