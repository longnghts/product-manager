import React from 'react';

const Card = props => {
    return(
        <div className='card' style={{width: '18rem', display: 'inline-block'}}>
            <img style={{width: '180px'}}src={props.product.image} alt={props.product.title} />
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <h6>{props.product.category}</h6>
                <h6>${props.product.price}</h6>
                <small className='card-text'>{props.product.description}</small>
            </div>
        </div>

    );
}

export default Card;