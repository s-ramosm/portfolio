import React, {Component} from 'react';
import Home from '../../pages/home';
import Productos from '../../pages/productos';
import './navbar_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faFolderOpen, faHome } from '@fortawesome/free-solid-svg-icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


export default class Menu extends Component {

    
    
    menuItem(props) {

        return <NavLink className="item" activeClassName="selected" to = {"/".concat(props.nombre)}> <FontAwesomeIcon icon={props.icon}/>  {props.nombre}</NavLink>
    }

    state = {
        seleccionado :"Home"
    }

    render(){
        
        return <div>

                
                <FontAwesomeIcon icon={["far", "coffee"]} />
                <FontAwesomeIcon icon={["fas", "coffee"]} />
                <FontAwesomeIcon icon="coffee" />
                <FontAwesomeIcon icon={["fab", "github"]} />
                <Router>
                    <nav style={general_style}>

                        <this.menuItem nombre ="Home" icon ={faHome} />
                        <this.menuItem nombre ="Productos" icon = {faFolderOpen}  />
                        <this.menuItem nombre ="Contacto"  icon = {faAddressBook} />

                    </nav>
                    

                    <Switch>
                        
                        <Route path="/Home">
                            <Home />
                        </Route>

                        <Route path="/productos">
                            <Productos />
                        </Route>
                        
                        <Route path="/contacto"> 
                            <Home/>
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>
                    
                    </Switch>

                </Router>
        </div>
    }
}





const general_style =  {
    backgroundColor : '#191414',
    color :  '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    padding : '0 10px 0 10px'

}

