import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router";
import appStore from './utils/appStore';

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
