import React, {useState, useEffect} from 'react'
import './App.css';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import Login from './components/Login';
import Main from './containers/Main';

function App() {

  const [user, setUser] = useState({
    loggedIn : false,
    loggedInUser : {}
  })

  useEffect(() => {
    LoginUser()
  }, [user.loggedIn])

  const LoginUser = () => {
    var token = localStorage.getItem('snowmanToken')
    if (token != null) {
      fetch('http://localhost:3001/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "bearer " + token
        }
      })
      .then(response => response.json())
      .then(user => {
        setUser({...user, loggedIn : true, loggedInUser : user})
      })
    }
  }

  // console.log(user)

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" color="initial" align="center">SnowMan</Typography>
      {/* <NavBar loggedIn={user.loggedIn} username={user.username}/> */}
      {user.loggedIn ? <Main user={user.loggedInUser}/> : <Login LoginUser={LoginUser} />}
    </Container>
  );
}

export default App;