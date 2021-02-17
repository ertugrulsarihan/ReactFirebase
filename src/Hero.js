import React from "react";
 const Hero =(props)=>{
     const {handlogout,email}=props;
     return(
         <section className="hero">
             <nav>
         <h2>Welcome<span>{email}</span></h2>
         <button onClick={()=>handlogout()}>Logout</button>
         </nav>
         </section>
     )
 }

 export default Hero;