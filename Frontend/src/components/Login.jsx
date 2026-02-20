import React from 'react'

const Login = () => {
    return (
        <div className="flex justify-center m-20">
            <div className="card card-dash bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title justify-center m-5">Login</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Login</legend>
                        <input type="text" placeholder="" className="input input-neutral" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">password</legend>
                        <input type="text" placeholder="" className="input input-neutral" />
                    </fieldset>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary m-5">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login