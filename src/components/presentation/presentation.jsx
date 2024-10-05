import React from "react";
import "./presentation.css"


const MiniItem = (props) => {
    const name = props.name
    return (
            <div className="item_container">
                {name}
            </div>
    )
}

const PresentationCard = (props) =>{
    const { description, name } = props.data;
    const roles  = props.roles
    return (
        <> 
        <div className="presentation_card_container">
            <img src="developer.jpg" alt="backend developer" />
            <div className="presentation_card_data">
                <h1>{name}</h1>
                {description}
                <div className="roles">
                    {roles.map((item, index) => (
                            <MiniItem key={index} name={item} />
                    ))}
                </div>
                <div className="cv_container">
                    <div className="item" onClick={ () => { window.location.href = "/CV español.pdf"}}>
                        <a href="/CV español.pdf"> HV </a> <img src="espanol.png" alt="" srcset="" />        
                    </div>
                    <div className="item" onClick={ () => { window.location.href = "/Currículum vítae (Ingles) (5).pdf"}}>
                    <a href="/Currículum vítae (Ingles) (5).pdf"> CV </a> <img src="eng.png" alt="" srcset="" />
                    </div>
                    
                </div>
            </div>
        </div>
            
        </>
    )
}



export {PresentationCard , MiniItem}