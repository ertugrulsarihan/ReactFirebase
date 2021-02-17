import React from "react";

const Login=(props)=>{
    const {email,setEmail
        ,password
        ,setPassword
        ,handleLogin
        ,handleSigUp
        ,hasAccount
        ,sethasAccount
        ,emailError
        ,passwordError} =props;
    return(
        <section className="login">
<div className="loginContainer">
<label>Username</label>
<input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
<p className="errorMsg">{emailError}</p>
<label>Password</label>
<input type="password" required autoFocus value={password} onChange={(e)=>setPassword(e.target.value)} />
<p className="errorMsg">{passwordError}</p>
<div className="btnContainer">
{hasAccount ? (
     <>
     <button onClick={handleLogin}>SignIn</button>
     <p>Dont have an account?<span onClick={()=>sethasAccount(!hasAccount)}>Sign up</span></p>
    </>
):(  <>
    <button onClick={handleSigUp}>SigUp</button>
     <p>Have account ? <span onClick={()=>sethasAccount(!hasAccount)}>Sign in</span> </p>
     </>
)}
</div>
</div>
        </section>
    )
}

export default Login;