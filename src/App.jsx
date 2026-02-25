import React,{useRef} from 'react';
import './App.scss'
import NavBar from "./component/NavBar/NavBar.jsx"
import Accueil from "./component/Accueil/Accueil.jsx"
import Produit from "./component/Produit/Produit.jsx"
import Valeurs from "./component/Valeurs/valeurs.jsx"
import Contact from "./component/Contact/contact.jsx"  
import Footer from "./component/Footer/footer.jsx"
import  SCROLL from "./component/scROLL/scROLL.jsx"
//import { image } from "./autre/data.js"
function App() {
  // Création des refs pour chaque section
  const produitsRef = useRef(null);
  const valeursRef = useRef(null);
  const contactRef = useRef(null);

  return (

        <div className="app">
      <section className="contenair-acceuil">
        <div className="acceuil">
          
          <NavBar
        refs={{
          produitsRef,
          valeursRef,
          contactRef
        }} 
       />
          <Accueil/>
        </div>
      </section>
      <section ref={produitsRef} className="contenair-produit">
        <div className="produit">
        <Produit/>
        </div>
      </section>
      <section  ref={valeursRef} className="contenair-valeurs">
        <div className="valeurs">
          <Valeurs/>
        </div>
      </section>
      <section  ref={contactRef} className="contenair-contact">
        <div className="contact">
          <Contact/>
        </div>
      </section>
     <section className="contenair-footer">
      <div className="footer">
        <Footer/>
      </div>
     </section>
     <section className="contenair-scroll">
      <div className="scROLL">
        <SCROLL/>
    </div>
    </section>
    </div>
  )
}

export default App
   