import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Container } from './Styled/Container'

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <div className="container">
          <Route path="/" exact component={Home} />
        </div>
      </Container>
    </Router>
  )
}

export default App
