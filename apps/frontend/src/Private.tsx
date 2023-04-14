import React, { FC, PropsWithChildren } from 'react'

import { useKeycloak } from '@react-keycloak/web'

const Private: FC<PropsWithChildren> = ({ children }) => {
    const { keycloak } = useKeycloak()

    const isLoggedIn = keycloak.authenticated

    return isLoggedIn ? <>{children}</> : <div>You must log in</div>
}

export default Private
