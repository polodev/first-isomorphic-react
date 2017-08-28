import React from 'react'
import App from '../client/components/App.js'
import ReactDOMServer from 'react-dom/server'

const html = ReactDOMServer.renderToString(<App />)
module.exports = html
