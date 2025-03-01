import { useState } from 'react'
import SAMPLE_TOOLS from '../data/sample_tools.json';
import HomePage from './HomePage'

function App() {
  return (
    <body>
      <HomePage tools={SAMPLE_TOOLS} />
    </body>
  )
}

export default App
