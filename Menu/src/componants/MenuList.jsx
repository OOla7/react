import data from "..data.jsx";
import { useState } from "react";
import './App.css';
 
const Menu = () => {
    const [Menus,setMenus] = useState(data);

    return (
       <section>
        <h1>Our menu </h1>
        <ul className="styled-list">
            {Menus.map (Menu.index) => (
                <li key={index} className="Lise-item">
                    <menu image={Menu.image} name={Menu.name} description={Menu.description}></menu>
                </li>
            )
        </ul>
       </section> 
    );
}
