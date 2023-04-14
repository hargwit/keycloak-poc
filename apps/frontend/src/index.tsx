import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const domNode = document.getElementById('root')

if (!domNode) throw new Error('Unable to find root element. Cannot render application.')

const root = createRoot(domNode)

root.render(<App />)
