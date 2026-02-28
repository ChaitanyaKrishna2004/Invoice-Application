import React, { useState } from 'react'
import { Base_URL } from '../utils/constans';
import axios from 'axios';
import { useNavigate } from "react-router";

const Login = () => {
    const [Login, setLogin] = useState("cckkaa1236@gmail.com");
    const [Password, setPassword] = useState("Chaitanya@#1234");
    const [msg, setmsg] = useState("");

    const navigate = useNavigate();
    const handlelogin = async () => {
        try {
            const res = await axios({
                method: 'post',
                url: Base_URL + '/auth/login',
                data: {
                    login: Login,
                    password: Password
                }
            })
            setmsg(res?.response?.data)
            console.log(res.data);
            navigate("/");
        }
        catch (error) {
            console.log(error);
        }
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
                        <button className="btn btn-primary m-2" onClick={handlelogin}>Login</button>
                    </div>
                </div>
            </div>
            <tost msg={msg} />
        </div>
    )
}

export default Login