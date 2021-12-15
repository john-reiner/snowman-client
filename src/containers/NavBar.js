import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

export default function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="justify-content-space-around">
                <Navbar.Brand >
                    <Navbar.Text>
                        SnowMan
                    </Navbar.Text>
                </Navbar.Brand>

                    {props.loggedIn && <Navbar.Text>Signed in as: {props.username}</Navbar.Text>}
                
            </Container>
        </Navbar>
    )
}
