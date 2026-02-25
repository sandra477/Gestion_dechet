import React, { useState } from "react";
import "./valeurs.scss";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { FaCarSide } from "react-icons/fa6";
import { image } from "../../autre/data.js";

const Valeurs = () => {
  const [activeItem, setActiveItem] = useState("un");

  const updateActiveItem = (valeur) => {
    setActiveItem(valeur);
  };
    return (
        <div className="sous-container-valeurs">
            <div className="grid">
                <div className="gauche">
                    <div className="contenair-image">
                      <img src={image.home7} alt="" />
                    </div>
                </div>
                <div className="droit">
                  <span className="titre">Nos valeurs</span>

                  <h1 className="sous-titre">
                    Nous sommes engagés à fournir des services de gestion de déchets de
                    haute qualité, respectueux de l'environnement et socialement
                    responsables.
                  </h1>

                  <p className="description-valeurs">
                    Nous croyons que la gestion efficace des déchets est essentielle
                    pour protéger notre planète et améliorer la qualité de vie de
                    nos communautés. Nous nous engageons à travailler en étroite
                    collaboration avec nos clients pour comprendre leurs besoins
                    et leur fournir des solutions personnalisées.
                  </p>

                  <div className="liste-valeurs">
                    <div
                      className={activeItem === "un" ? "item active" : "item"}
                      onClick={() => updateActiveItem("un")}
                    >
                      <div className="head">
                        <IoShieldCheckmarkSharp className="valeur-icon" />
                        <span>Fiabilité</span>
                        <FaChevronDown className="valeur-icon" />
                      </div>
                      <p className="description">
                        Nous assurons la fiabilité de nos services et la continuité
                        des opérations pour nos clients.
                      </p>
                    </div>

                    <div
                      className={activeItem === "deux" ? "item active" : "item"}
                      onClick={() => updateActiveItem("deux")}
                    >
                      <div className="head">
                        <MdVisibility className="valeur-icon" />
                        <span>Visibilité</span>
                        <FaChevronDown className="valeur-icon" />
                      </div>
                      <p className="description">
                        Transparence des actions et reporting clair pour le suivi
                        environnemental.
                      </p>
                    </div>

                    <div
                      className={activeItem === "trois" ? "item active" : "item"}
                      onClick={() => updateActiveItem("trois")}
                    >
                      <div className="head">
                        <FaCarSide className="valeur-icon" />
                        <span>Satisfaction</span>
                        <FaChevronDown className="valeur-icon" />
                      </div>
                      <p className="description">
                        Orientation client et qualité de service pour garantir la
                        satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

            </div>
        </div>
   )
}



export default Valeurs

