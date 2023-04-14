import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import Component from './Component'
import { keyCloak } from './keyCloak'
import Private from './Private'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Component name="Welcome" />,
    },
    {
        path: '/home',
        element: (
            <Private>
                <Component name="Home" />
            </Private>
        ),
    },
    {
        path: '/private',
        element: (
            <Private>
                <Component name="Private" />
            </Private>
        ),
    },
])

const App = () => (
    <div>
        <ReactKeycloakProvider authClient={keyCloak}>
            <RouterProvider router={router} />
        </ReactKeycloakProvider>
    </div>
)

export default App
