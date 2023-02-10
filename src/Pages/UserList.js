import React, { useState } from 'react'
import UserTable from "../Components/UserTable";
import { Button } from '@mui/material'
import NewUserDialog from '../Components/NewUserDialog';
import EditUserDialog from '../Components/EditUserDialog';

function UserList() {
    const [openModalNewUser, setOpenModalNewUser] = useState(false)
    const [openModalEditUser, setOpenModalEditUser] = useState(false)

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <div style={{ marginTop: "20px", width: "80%" }}>
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
                    <Button variant="contained" onClick={() => setOpenModalNewUser(true)}>Add New User</Button>
                </div>
                <UserTable
                    setOpenModalEditUser={setOpenModalEditUser}
                />
            </div>
            <NewUserDialog
                isOpen={openModalNewUser}
                setIsOpen={setOpenModalNewUser}
            />
            <EditUserDialog
                isOpen={openModalEditUser}
                setIsOpen={setOpenModalEditUser}
            />
        </div>
    )
}

export default UserList