import React from 'react';
import '../css/Waiting.css'
import image_trukkr from "../Components/images/Truck.png";

export default function Waiting() {
    return (
        <>
            <div className="main_div">
                <img className="Trukkr_img" src={image_trukkr} />
                <h1 className="waiting_text" >Waiting For Host...</h1>
                {/* <Button_nxt/> */}
            </div>
        </>
    )
}

