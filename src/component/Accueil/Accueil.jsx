import React, { useEffect, useState } from "react";
import "./Accueil.scss";
import { FaLocationDot } from "react-icons/fa6";
import { image } from "../../autre/data.js";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Accueil = () => {
    const [products] = useState([
        { name: "Collecte déchets", price: 150 },
        { name: "Tri sélectif", price: 89 },
        { name: "Recyclage", price: 120 }
    ]);

    const countA = useMotionValue(0);
    const countB = useMotionValue(0);
    const countC = useMotionValue(0);

    const roundedA = useTransform(countA, Math.round);
    const roundedB = useTransform(countB, Math.round);
    const roundedC = useTransform(countC, Math.round);

    const [valA, setValA] = useState(0);
    const [valB, setValB] = useState(0);
    const [valC, setValC] = useState(0);

    useEffect(() => {
        const animationA = animate(countA, products[0].price, { duration: 10, repeat: Infinity, repeatType: "loop" });
        const animationB = animate(countB, products[1].price, { duration: 10, repeat: Infinity, repeatType: "loop" });
        const animationC = animate(countC, products[2].price, { duration: 10, repeat: Infinity, repeatType: "loop" });

        const unsubA = roundedA.on("change", v => setValA(v));
        const unsubB = roundedB.on("change", v => setValB(v));
        const unsubC = roundedC.on("change", v => setValC(v));

        return () => {
            animationA.stop();
            animationB.stop();
            animationC.stop();
            unsubA();
            unsubB();
            unsubC();
        };
    }, [countA, countB, countC, roundedA, roundedB, roundedC, products]);

    return (
        <div className="acceuil-grid">
            <div className="info">
                <h1>Bienvenue! sur notre plateforme de gestion de déchets</h1>
                <p>Notre plateforme de gestion de déchets est conçue pour aider les entreprises et les collectivités à gérer efficacement leurs déchets.</p>
                <div className="contenair-recherche">
                    <input type="text" />
                    <FaLocationDot className="icon" />
                    <span className="btn">Chercher</span>
                </div>
                <div className="achivements">
                    <div className="items">
                        <h3>
                            <span>€</span>
                            <motion.strong>{valA}</motion.strong>
                        </h3>
                        <span>{products[0].name}</span>
                    </div>
                    <div className="items">
                        <h3>
                            <span>€</span>
                            <motion.strong>{valB}</motion.strong>
                        </h3>
                        <span>{products[1].name}</span>
                    </div>
                    <div className="items">
                        <h3>
                            <span>€</span>
                            <motion.strong>{valC}</motion.strong>
                        </h3>
                        <span>{products[2].name}</span>
                    </div>
                </div>
            </div>
            <div className="contenair-image">
                <img className="image-accueil" src={image.home6} alt="" />
            </div>
        </div>
    );
};
export default Accueil;
