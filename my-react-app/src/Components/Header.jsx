import logo from '../assets/icons/amazonLogo.jfif';
import "../App.css";
import search from "../assets/icons/search-interface-symbol.png";
import grocy from "../assets/icons/grocery-store.png";
import { Link } from 'react-router-dom';
import {useAuth} from "../context/GlobalState"
import {auth} from "../Firebase"
export default function Header() {
  const {user,basket} = useAuth()
  console.log(user?.email)
  const SignOut =(e)=>{
  e.preventDefault()
    auth.signOut()
    console.log("yes")
  }
  return (
    <div className="header flex">
      <Link className="logo" to="/">
        <img style={{ maxWidth: "90px" }} src={logo} alt="Logo" />
      </Link>

      <div className="search">
        <input style={{ marginTop: "0px" }} type="text" />
        <img
          style={{
            width: "20px",
            background: "yellow",
            padding: "9px",
            borderRadius: "5px",
          }}
          src={search}
          alt="Search Icon"
        />
      </div>

      <div className="signIn flexitem"  onClick={SignOut}>
        <span>Hello {user? `${user.email}` : "Guest"}</span>
        <Link to={!user && "/signIn"}>{user ? "Sign Out" : "Sign In" }</Link>
      </div>
      <div className="orders flexitem">
        <span>Returns</span>
        <Link to="/orders">& Orders</Link>
      </div>
      <div className="prime flexitem">
        <span>YOUR</span>
        <Link to="/prime">Prime</Link>
      </div>
      <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={grocy} />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
    </div>
  );
}
