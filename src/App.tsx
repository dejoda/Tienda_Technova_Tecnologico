
import  { Outlet } from 'react-router'
import './App.css'
import Header from './layout/header'
import Footer from './layout/footer'

function App() {

  return (
    <>
     <Header></Header>
     <main><Outlet/></main>
     <Footer></Footer>
    </>
  )
}

export default App
