import React from "react";
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
    
function RenderProduct({product}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={product.image} alt={product.name} />
                    <CardBody>
                        <CardText>{product.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function ProductInfo(props) {
        if (props.product) {
            return (
                <div className="container">
                    
                    <div className="row"> 
                        <RenderProduct product={props.product} /> 
                        
                    </div>
                </div>
            );
        }   
            return <div />;

    }




export default ProductInfo;