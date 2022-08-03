import React from 'react';
import { HashLink } from "react-router-hash-link";

function SwipeButtons(props) {
    return (
        <div className='btn-swipe-div beige-section'>
            <HashLink class="button-swipe" style={{ position: "absolute", left: "5%" }}
                to={props.prev}><i className="fa-solid fa-arrow-left-long"></i>
            </HashLink>
            <HashLink class="button-swipe" style={{ position: "absolute", right: "5%" }}
                to={props.next}><i className="fa-solid fa-arrow-right-long"></i></HashLink>
        </div>
    );
}

export default SwipeButtons;