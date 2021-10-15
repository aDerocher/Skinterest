import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneCanvas } from "./../store/canvas";
import canvasCover from "./../images/squid-circle-icon-Black.png"
import DiscoverInks from "./DiscoverInks";
import "../styles/canvas-profile-page.css";

function CanvasProfilePage() {
    const params = useParams();    
    let history = useHistory();
    const dispatch = useDispatch();
    console.log(params)
  
  //   const [show, setShow] = useState(false);
  //   const [showFollowers, setShowFollowers] = useState(false);
  //   const [showFollowings, setShowFollowings] = useState(false);
    useEffect(() => {
        dispatch(getOneCanvas(params.canvas_id));
    }, [dispatch]);
  
    const user = useSelector((state) => state.session.user);
    const curCanvas = useSelector((state) => state.canvases[0]);
    const canvasInksArr = curCanvas?.inks;

    console.log("pppppppppppppppp", canvasInksArr)
    const editCanvas = (e) => {
        e.preventDefault();
        history.push(`/canvases/${curCanvas.id}/edit-canvas`)
    }


  return (
    <div className="canvas-p-profile-page-container">
      <div className="canvas-p-profile-page-header">
        <div className="canvas-p-profile-image">
          <span className="canvas-p-image-circle">
            <img src="" alt="" />
          </span>
        </div>
        <div className="canvas-p-profile-name">
          <h1>{curCanvas?.name}</h1>
        </div>
        <div className="three-canvas-options">
            <div className="canvas-option-container">
                <button className="canvas-option-btn"><i className="fas fa-star"></i></button>
                <p className="option-label">More Ideas</p>
            </div>
            <div className="canvas-option-container">
                <button className="canvas-option-btn"><i className="fas fa-th"></i></button>
                <p className="option-label">Organize</p>
            </div>
            <div className="canvas-option-container">
                <button className="canvas-option-btn"><i className="fas fa-align-left"></i></button>
                <p className="option-label">Notes</p>
            </div>
        </div>
      </div>
      <div className="canvas-p-profile-page-body">
        

        <div className="canvas-p-profile-page-edit">
            <button onClick={e => editCanvas(e)}>Edit</button>
        </div>

      </div>
      <div className="canvas-p-profile-page-collection">

      </div>
        <DiscoverInks user_id={null} canvasInksArr={canvasInksArr}/>
    </div>
  );
}

export default CanvasProfilePage;
