import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App'
import Login from './container/Login'
import Register from './container/Register'
import NoMatch from './container/NoMatch'
import ProtectedRoute from './components/ProtectedRoute'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>} />
        <Route path="/login" element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute>} />
        <Route path="/register" element={
          <ProtectedRoute loginOnly={false}>
            <Register />} />
          </ProtectedRoute>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
