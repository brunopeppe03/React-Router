import './Menu.css'
import React from "react";

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/insulina"> Param #02</Link>
                </li>
                <li>
                    <a href="/about">Sobre</a>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu