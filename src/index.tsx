import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

function _sendToAnalytics(metric: any) {
    const body = JSON.stringify(metric)
    const url = 'https://example.com/analytics'

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
    if (navigator.sendBeacon) {
        navigator.sendBeacon(url, body)
    } else {
        fetch(url, { body, method: 'POST', keepalive: true })
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
