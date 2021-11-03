import React, {Component} from 'react';
import Home from '../../pages/home';
import Productos from '../../pages/productos';
import './navbar_style.css'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


export default class Menu extends Component {

    
    
    menuItem(props) {
        
        


        

        const link = "/".concat('',props.nombre.toLowerCase())

        return <NavLink className="item" activeClassName="selected" to = {"/".concat(props.nombre)}>{props.nombre}</NavLink>
    }

    state = {
        seleccionado :"Home"
    }

    render(){
        
        return <div>
                <Router>
                    <nav style={general_style}>

                        <this.menuItem nombre ="Home"  seleccionado = {this.props.seleccionado} />
                        <this.menuItem nombre ="Productos" seleccionado = {this.props.seleccionado} />
                        <this.menuItem nombre ="Contacto" seleccionado = {this.props.seleccionado} />

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

