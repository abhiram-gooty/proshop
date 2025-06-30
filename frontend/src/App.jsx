import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
// import HomeScreen from './pages/homeScreen'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <main className='py-3'>
      <Container>
        <Outlet />
      </Container>
     </main>
     <Footer/>
    </>
  )
}

export default App
