import React from "react";
import './products.css'


const CardProduct = ({product, index}) => {
    return(
        <div className={`product_container product_${index}`}>
            <div className="product_info">
                <div className="product_title">
                    <h1>{product.title}</h1>
                </div>
                <div className="product_description">
                    {product.description}
                </div>
            </div>
            
            <div className="product_image_container">
                <img src={product.img} alt="software product" />
            </div>
            
        </div>
    )
}

const ProductsPresentation = ({products}) => {


    console.log(products)
    return (
        <>
            <h1 style={{paddingLeft: '3%' , }}>Productos o Servicios</h1>
            <div className="products_presentation_container">
                
                {
                    products.map((product , index) => (
                        <CardProduct key={index} product={product} index={index} />
                    ))
                }
            </div>
        </>
        
    )
}


export {ProductsPresentation}