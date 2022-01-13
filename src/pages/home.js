import React, {Component} from 'react';
import './home.css'
import List from '../util/list'
import CardProductPortfolio from './portfolio/portfolio';



function glassCard(props) { 
    return <div className='glass'> 
        <img className="imagen" src="developer.jpg" alt ="logo desarrollador backend" ></img>
        <div className = "ticket">
            Wilmer Sair Ramos Madera
            <hr className = "under"/>
            <h3>Soy un desarrollador con experiencia en backend y actualmente aprendiendo conceptos de frontend apasionado por la tecnologia y el desarrollo</h3>
        </div>
    </div>
}


class Home extends Component{

    render(){
        return <div className="container">
            <div className="mainTittle tittle"> 
                    {glassCard()}   
            </div>
        <div  className="data">
        <h2>Tecnologias conocidas </h2>
        <List />
        </div>
        <div  className="portfolio">

            <CardProductPortfolio 
                name = "My booking"
                description = "Una API que permite el registro de usuarios y la creación de calendarios de citas, solicitud de citas y ofraciemiento de servicios como (peluqueria, arreglo de uñas, limpieza... etc)"
                imageLink = "calendar.jpg"
            />
             
        </div>
      </div>
    }
}



export default Home; 


