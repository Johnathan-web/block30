import { useState } from 'react'
import BookList from './components/BookList'
import SingleBook from './components/SingleBook'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navigations'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'
import AccountPage from './components/Account'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<BookList />} />
    <Route path='/login' element={<LoginPage setToken={setToken}/>} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path="/books/:bookId" element={<SingleBook />} />
    <Route path='/account' element={<AccountPage token={token} setToken={setToken}/>} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
