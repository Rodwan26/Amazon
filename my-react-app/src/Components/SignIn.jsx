import  { useState } from "react";
import { Link } from "react-router-dom";
import amazonsignin from "../assets//icons/logo-amazon-login.png";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../Firebase"
import { useNavigate } from "react-router";
export default function SignIn() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleSignIn =(e)=>{
    e.preventDefault()
    const auth = getAuth(); 
    signInWithEmailAndPassword(auth,email,password).then((Auth)=>{
      if(Auth){
   navigate("/")

      }
     
  })}
   const handleSignin = (e)=>{
    e.preventDefault()

    createUserWithEmailAndPassword(auth,email,password).then((Auth)=>{
      if(Auth){
        navigate("/")
      }
    }).catch((error)=>alert(error.message))


   }
    return (
        <div className="container"> 

       
      
        <Link to="/" style={{textAlign:"center"}}><img style={{width:"110px"}} src={amazonsignin}></img></Link>       
       <form className="signInForm">
       <span className="SignIn" style={{fontWeigth: "800", fontSize:"30px" ,marginButtom:"30px"}}>Sign in </span>
        <div className="input">
        <span> E-mail</span>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
  <div className="input">
  <span>Password</span>
   <input type="password"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
  </div>
 
   <button className="signinbtn" onClick={handleSignIn} >Sign In</button>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, optio.</p>   
<button onClick={handleSignin} type="submit">Create your Amazon Account</button>
       </form>
        
     
      </div>
    );
  }
  