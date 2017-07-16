import React from 'react'
import { render } from 'react-dom'
import App from './App'

const config = CONFIG ? require(CONFIG) : null

render(<App config={config} />, app)
