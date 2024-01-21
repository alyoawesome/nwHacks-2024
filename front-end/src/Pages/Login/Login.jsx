import React from "react";
import "./Login.css"
export default function Login() {
    return (
        <><><><div><h1>Stay Quenched</h1>


        </div><div className="form-container">
                <label>Username</label>
                <input
                    type="username"
                    className="form-control"
                    placeholder="Username" />


            </div></><div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password" />


            </div></><div className="button">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div></>

    );
}