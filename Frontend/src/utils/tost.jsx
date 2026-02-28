import React from 'react'

const tost = (msg) => {
    return (
        <div className="toast toast-top toast-center">
            <div className="alert alert-success">
                <span>{msg}</span>
            </div>
        </div>
    )
}

export default tost