import React, {Component} from "react";

import logo from "../img/qx7jYSYm_400x400.jpg";

import Saludos from "./Saludos.jsx";

import "./Header.jsx";

class Header extends Component {
    render() {
        let nombre = "Gustavo la rana"
        return (
            <h1 className="saludos"><img  src={logo} height= "50px" />Tu portal de montaña <Saludos nick={nombre} /></h1>
        )
    }
}

export default Header;