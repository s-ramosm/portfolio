import React from "react";
import '../styles.css'
import "./home.css"
import { PresentationCard} from "../../components/presentation/presentation";
import { CardSkillCarousell } from "../../components/skills/skills";
import { presentations_data, rolesAndSpecialties, skills, products, colors} from "../../utils/data";
import { ProductsPresentation } from "../../components/products/products";
import ColorSelector from "../../components/presentation/colors";


const Home = () =>{
    return (
        <>
            <PresentationCard data={presentations_data} roles={rolesAndSpecialties} />
            <ProductsPresentation products ={products} />
            <CardSkillCarousell skills={skills}  />
            <div className="ColorsContainer">
            {
                    colors.map((color, index) =>(
                      <div key={index}>
                        <ColorSelector data={color}  />
                      </div>
                    ))
                }
            </div>
            
        </>
    )
}


export default Home