import React from 'react'

const toggleContext = React.createContext({
    showSideDrawer: false,
    onToggle: () => {}
})

export default toggleContext;