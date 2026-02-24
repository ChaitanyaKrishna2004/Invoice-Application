import React, { useState } from 'react'

const Login = () => {
    const [Login, setLogin] = useState("");
    const [Password, setPassword] = useState("");

    const handlelogin = () => {
        const res = axios({
            method: 'post',
            url: '',
            data: {
                Login,
                Password
            }
        })
    };

    return (
        <div className="flex justify-center m-20">
            <div className="card card-dash bg-base-300 w-96">
                <div className="card-body m-5">
                    <h2 className="card-title justify-center ">Login</h2>
                    <fieldset className="fieldset my-2">
                        <legend className="fieldset-legend">Username or Email </legend>
                        <input type="text" value={Login} onChange={(e) => setLogin(e.target.value)} placeholder="" className="input input-neutral" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password </legend>
                        <input type="text" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="" className="input input-neutral" />
                    </fieldset>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary m-2">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login