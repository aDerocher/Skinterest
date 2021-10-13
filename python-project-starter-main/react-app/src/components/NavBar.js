
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import pinkSquidLogo from "./../images/squid-circle-icon-Black.png";
import magGlass from "./../images/magGlass.png";
import "../styles/navbar.css";
import "../styles/profileDD.css";
import ProfileDDModal from "./ProfileDDModal";


const NavBar = () => {
  // const [show, setShow] = useState(false)
  const [show, setShow] = useState(false);
  const history = useHistory();

  const user = useSelector(state => state.session.user);
  const userNameLetter = user.first_name[0].toUpperCase();

  const toProfile = (e) => {
    e.preventDefault();
    history.push(`/users/${user.id}`);
  };

  return (
      <nav className="nav-bar">
        <div className="nav-section nav-items-left">
          <div className="nav-item no-pad">
            <img className="nav-icon" src={pinkSquidLogo} alt="" />
          </div>
          <div className="nav-item">
            <a href="/">Home</a>
          </div>
          <div className="nav-item">Today</div>
        </div>

        <div className="nav-section nav-search-container">
          <div className="nav-search-box">
            <img className="search-icon" src={magGlass} alt="" />
            <input
              className="nav-search-input"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="nav-section nav-items-right">

            <div className="nav-item no-pad">
                <i className="fas fa-bell"></i>
            </div>
            <div className="nav-item no-pad">
                <i className="fas fa-comment-dots"></i>
            </div>
            <div className="nav-item no-pad user-letter" onClick={e=> toProfile(e)}>
              {userNameLetter}
            </div>
            <div className="nav-item no-pad">
              <button onClick={() => setShow(true) } className="chevron-btn"><i class="fas fa-chevron-down"></i></button>
              <ProfileDDModal onClose={() => setShow(false)} show={show}/>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
