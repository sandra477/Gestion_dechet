import React from "react";
import "./footer.scss";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () =>{
 return(
   <div className="sous-contenair-contact">
      <div className="top">
        <FaFacebookSquare className="social-icon"/>
        <FaLinkedin className="social-icon"/>
        <FaYoutube className="social-icon"/>
        <FaWhatsappSquare className="social-icon"/>
        <FaSquareXTwitter className="social-icon"/>
        <FaGoogle className="social-icon"/>
      </div>
      <div className="bottom">
        &copy; 2026 Gestion Dechet/Sc2r.com - Designed by Sandra T.
      </div>
   </div>
    )
}
export default Contact