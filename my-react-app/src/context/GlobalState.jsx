import {createContext,useContext,useReducer} from "react"
import {initialeState} from "./AppReducer.jsx"
import AppReducer from "./AppReducer.jsx"
const GlobalContext = createContext()

export default function GlobalState({children}) {
    const [state,dispatch] = useReducer(AppReducer,initialeState)
  return(<GlobalContext.Provider value={{basket:state.basket,user:state.user,dispatch:dispatch}}>
    {children}
  </GlobalContext.Provider>)
}
export const useAuth = ()=>{
   return  useContext(GlobalContext)
}
