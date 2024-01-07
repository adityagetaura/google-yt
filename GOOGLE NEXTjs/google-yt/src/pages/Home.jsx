import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Home(){
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>

          {/* icon  */}
          <AppsIcon/>
          {/* Avatar  */}
          <AccountCircleIcon/>
        </div>
      </div>
      <div className="home__body">
        <img src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="image" />
        <div className="home__inputContainer">
          {/* Search  */}
          <Search hideButtons/>
        </div>
      </div>
    </div>
  )
}

export default Home;