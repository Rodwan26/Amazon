import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import SignIn from './Components/SignIn';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useAuth } from './context/GlobalState';
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";


export default function App() {
  const {dispatch} = useAuth()
  useEffect(() => {
    auth.onAuthStateChanged((AutUser)=>{
    if(AutUser){
      dispatch({type:"SET_USER",user:AutUser})

      
    }else{
      dispatch({type:"SET_USER",user:null})
    }
  })
  },[])

  return (
    <Routes>
      <Route path="/" element={<><Header />
      <Home/>
      </>} />
      <Route path="*" element={<h1>Page Not Found</h1>}/>
      <Route path="/signIn" element={<SignIn />} />
      <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
      
    </Routes>
  );
}
