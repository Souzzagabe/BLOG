import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useFetcher } from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './Login/Login'
import Register from './register/Register'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'
import Search from './pages/Search/Search'
import Post from './pages/Post/Post'
import EditPost from './pages/EditPost/EditPost'

function App() {
  const [user, setuser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setuser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className='App'>
        <AuthProvider value={{user}}>
          <BrowserRouter>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/posts/:id" element={<Post/>}/>
                <Route path="/Register" 
                element={!user ? <Register/> : <Navigate to ="/" />} 
                />
                <Route path="/Login" 
                element={!user ? <Login/> : <Navigate to ="/" />} 
                />
                <Route path="/posts/edit/:id" 
                element={user ? <EditPost/> : <Navigate to ="/Login" />} 
                />
                <Route path="/posts/create" 
                element={user ? <CreatePost/> : <Navigate to ="/Login" />} 
                />
                <Route path="/dashboard" 
                element={user ? <Dashboard/> : <Navigate to ="/Login" />} 
                />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
