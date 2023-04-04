import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Component from './Component'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Component name="home" />,
    },
])

const App = () => (
    <div>
        <RouterProvider router={router} />
    </div>
)

export default App
