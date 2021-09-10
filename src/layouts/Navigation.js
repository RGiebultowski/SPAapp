import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Nav.css';

const list = [
    {
        name: "Strona główna",
        path: "/",
        exact: true
    },
    {
        name: "Produkty",
        path: "/products"
    },
    {
        name: "Kontakt",
        path: "/contact"
    },
    {
        name: "Panel Admina",
        path: "/admin"
    },
]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return ( 
        <>
        <nav className="mainNav">
            <ul>
                {menu}
                {/* <li>
                    <NavLink to = "/"></NavLink>
                </li>
                <li>
                    <NavLink to = "products"></NavLink>
                </li>
                <li>
                    <NavLink to = "contact"></NavLink>
                </li>
                <li>
                    <NavLink to = "admin"></NavLink>
                </li> */}
            </ul>
        </nav>
        </>
    );
}
 
export default Navigation;