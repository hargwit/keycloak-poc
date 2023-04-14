import KeyCloak from 'keycloak-js'

export const keyCloak = new KeyCloak({
    url: process.env.KEYCLOAK_AUTH_URL || '',
    realm: process.env.KEYCLOAK_REALM || '',
    clientId: process.env.KEYCLOAK_CLIENT_ID || '',
})
