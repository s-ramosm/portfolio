import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './skills.css'

const StarRating = ({ stars }) => {
    const renderStars = () => {
      let starElements = [];
      for (let i = 0; i < stars; i++) {
        starElements.push(<FontAwesomeIcon key={i} icon={faStar} />);
      }
      return starElements;
    };
  
    return (
      <div className="star-rating">
        {renderStars()}
      </div>
    );
  };


const CardSkill = (props) => {

    const skill = props.skill

    return (
        <div className="card_skill">
            <div className="icon">
                <FontAwesomeIcon icon={skill.icon}  size="2x" />
            </div>
            <div className="card_skill_description">
                <h2>{skill.name}</h2>
                <div style={{display: "flex", gap: '5px'}}>
                  <StarRating stars={skill.stars} /> ({skill.stars})
                </div>
                
                {skill.anos} Años
            </div>
        </div>
    )
}


const CardSkillCarousell = (props) => {


    const [offsetX, setOffsetX] = useState(0);  
    const skills = props.skills
    const NSkills = skills.length;
    const limit =  NSkills *280 - window.innerWidth
    

    const moverElementos = () => {
      setOffsetX(prevOffsetX => {
        const newOffsetX = prevOffsetX - 250;
        if (-newOffsetX >= limit) {
          return 0;
        }
        return newOffsetX;
      });
    };
  
    useEffect(() => {
      const interval = setInterval(moverElementos, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
        < div className="technical_skills_container" >
        <h1>Technical Skills</h1>
            <div className="carousell_container">
                
                {
                    skills.map((skill, index) =>(
                      <div key={index} style={{ transform: `translateX(${offsetX}px)`, transition: 'transform 0.5s ease' }}>
                        <CardSkill skill={skill}  />
                      </div>
                    ))
                }
            </div>
        </ div>
        

    )
}


export {CardSkill, CardSkillCarousell}