import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
// Boostrap
import 'bootstrap/dist/css/bootstrap.css'
// Views
import Home from './views/home';

function App() {
  const { store } = configureStore();
  return (
    <Provider store={store} >
        <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />}/>
            </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
