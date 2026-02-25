import React from "react";
import "./contact.scss";
import { image } from "../../autre/data.js";
const Contact = () => {
  return (
    <div className="sous-container-contact">
        <span className="titre">Contact</span>
        <h2 className="sous-titre">
        Envoyer nous un message
        </h2>
        <div className="grid">
            <div className="gauche">
                <form>
                <div className="nom">
                  <label htmlFor="">Nom</label>
                  <input type="text" />
                </div>
                  <div className="email">
                     <label htmlFor="">Email</label>
                       <input type="email" />
                  </div>
                    <div className="message">
                  <label htmlFor="">Message</label>
                  <textarea rows={5}></textarea>
                  </div>
                  <button type="submit">Envoyer</button>
                </form>
            </div>
            <div className="droite">
               <div className="contenair-image">
                <div className="image-un">
                  <img src={image.home3} alt="" />
                </div>
                <img src={image.home6} alt="" className="image-deux"/>
               <img src={image.home4} alt=""className="image-trois" />
               </div>
            </div>
        </div>
    </div>
  );
}
export default Contact