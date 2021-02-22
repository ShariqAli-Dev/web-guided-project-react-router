import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'
import { BrowserRouter as Router} from 'react-router-dom'

// 👉 STEP 1 - Import React Router's Router

render(
  // Wrap the <App /> in a provider
  <Router>
    <App />
  </Router>
  , document.querySelector('#root')
)
