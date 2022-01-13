import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import './list.css'

class List extends Component {

    render() {

        return <div className="middel" >
            <div className = "menu">
                    <li className = "listItem" id="lenguajes">
                        <a  href = "#lenguajes" className="listbtn" >Lenguajes de programación</a>
                        <div className= "smenu">
                            <a href = "#lenguajes" >JavaScript</a>
                            <a href = "#lenguajes" >Python</a>
                            <a href = "#lenguajes">Java</a>
                        </div>
                    </li>

                    <li className = "listItem" id = "database">
                        <a className="listbtn" href= "#database">Bases de datos</a>
                        <div className= "smenu">
                            <a  href= "#database">Postgrest</a>
                            <a href= "#database" >Mongo DB</a>
                            <a href= "#database" >Elasticsearch</a>
                        </div>

                    </li>

            </div>

        </div>

    }   
} 

export default List;