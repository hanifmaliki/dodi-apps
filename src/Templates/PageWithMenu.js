import React from 'react'
import Menu from '../Components/Menu'

function PageWithMenu({ children }) {
    return (
        <div>
            <Menu />
            {children}
        </div>
    )
}

export default PageWithMenu