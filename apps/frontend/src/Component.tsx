import React from 'react'

type ComponentProps = {
    name: string
}

const Component: React.FC<ComponentProps> = ({ name }) => <div>{name}</div>

export default Component
