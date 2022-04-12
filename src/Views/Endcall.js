import React from "react";
import "../css/Endcall.css"
import image_trukkr from "../Components/images/Truck.png"
import Angry from "../Components/images/angry-regular.svg"
import Average from "../Components/images/average-regular.svg"
import good from "../Components/images/good-regular.svg"
import happy from "../Components/images/happy-regular.svg"
import sad from "../Components/images/frown-regular.svg"

export default function Endcall() {
    return (
        <div className="Main_end_Container">
            <div>
                <img className="Trukkr_img" src={image_trukkr} />
            </div>

            <div>
                <p className="End_txt">Call Ended</p>
            </div>
            <div>
                <p className="rate_txt" >How Would You Rate The Call?</p>
                <ul className="list_reaction">
                <li> <img className="Icon_reaction" src={Angry} /> </li>
                  <li>  <img className="Icon_reaction" src={sad} /></li>
                  <li> <img className="Icon_reaction" src={Average} /> </li>
                  <li> <img className="Icon_reaction" src={good} /> </li>
                  <li>  <img className="Icon_reaction"  src={happy} /> </li>
                </ul>
            </div>


        </div>
    )

}
