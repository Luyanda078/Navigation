import React from "react"
import { Link,useNavigate } from "react-router-dom"

function Login(){
 const  goToHome =useNavigate()
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={()=>goToHome('/home')}>Go To Home Page</button>

        <br></br>
        <Link to='/signUp'>Don't have an account Sign Up</Link>
        </div>
    )

}
export default Login