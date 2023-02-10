import React from 'react'
import LogsTable from '../Components/LogsTable';

function Logs() {
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <div style={{ marginTop: "20px", width: "80%" }}>
                <LogsTable />
            </div>
        </div>
    )
}

export default Logs