import fire from "./firebase";
import './App.css';
import React,{useState,useEffect} from "react";
import Login from "./Login";
import Hero from "./Hero";


function App() {
  const [user,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [passwordError,setpasswordError]=useState("");
  const [emailError,setemailError]=useState("");
  const [hasAccount,sethasAccount]=useState(false);
 
  const clearInputs=()=>{
    setEmail("");
    setPassword("");
}
  const clearErrors=()=>{
    setemailError("");
    setpasswordError("");
  }

  const handleLogin=()=>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setemailError(err.message);
          break;
          case "auth/wrong-password":
            setpasswordError(err.message)
            break;
            default:
              return
            
      }
    })
  }

  const handleSigUp=()=>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        setemailError(err.message);
          break;
          case "auth/weak-password":
            setpasswordError(err.message)
            break;
            default:
              return
            
      }
    })
  }

  const handlogout=()=>{
    fire.auth().signOut();
 }
 const authListener=()=>{
   fire.auth().onAuthStateChanged(user=>{
     if(user){
      clearInputs();
      setUsername(user);
     }
     else{
       setUsername("");
     }
   })
 }
  
 useEffect(() => {
   authListener();
   
 })
  
 
 
 
 return (
    <div className="App">
      {user ?(
        <Hero email={email} handlogout={handlogout}/>
      ):
      <Login email={email} 
     setEmail={setEmail} 
     password={password} 
     setPassword={setPassword} 
     handleLogin={handleLogin} 
     handleSigUp={handleSigUp} 
     hasAccount={hasAccount}
     sethasAccount={sethasAccount}
     emailError={emailError}
     passwordError={passwordError}
     />}
     
     
    </div>
  );
}

export default App;
