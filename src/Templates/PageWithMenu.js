import React, { useEffect, useState } from 'react'
import Menu from '../Components/Menu'
import { useNavigate } from 'react-router-dom'

function PageWithMenu({ children }) {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})
    useEffect(() => {
        const token = localStorage.getItem('token')
        const token_obj = token ? JSON.parse(token) : {};
        !token_obj.email ? navigate('/login') : setUserData(token_obj)
    }, [navigate])
    return (
        <div>
            <Menu userData={userData} />
            {children}
        </div>
    )
}

export default PageWithMenu