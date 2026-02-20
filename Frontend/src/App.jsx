import './App.css'
import Body from './components/Body'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
