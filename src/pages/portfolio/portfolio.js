import React, {Component} from 'react';
import "./portfolio.css";
import   {FaGithub} from 'react-icons/fa';
import {BiWorld} from 'react-icons/bi';

class CardProductPortfolio extends Component {

    render (){
        return <div className="proyect"> 
        
        <div className = "product-card">
            <div className="card-head"> {this.props.name} </div>
            <div className="card-description">
                {this.props.description}
            </div>

        </div>
        <div className = "product-data">
            <div className="img-container">
                <img className="image-product" src={this.props.imageLink} alt='Logo Producto '></img>
            </div>

            <div className= "bar-product">
                <div className="bar-product-icons" >
                <FaGithub /><a className="text-icon" href= {this.props.github}>Github</a> <br/>
                <BiWorld /><a  className="text-icon" href= {this.props.link}>Proyecto</a>
                </div>
            </div>

        </div>
        </div>
    }
}

export default CardProductPortfolio;