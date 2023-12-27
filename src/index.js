import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import store from './redux/store'
import './index.css'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <React.StrictMode><App store={store}/></React.StrictMode>
)

reportWebVitals();
