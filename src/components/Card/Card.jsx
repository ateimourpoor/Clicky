//===================================================================
import React from 'react';
import './Card.css';

const Card = ({props, handlePick, name, image, id}) => {
	
  return (

    <div {...props} className="card" onClick={ () => handlePick(id) }>
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
    </div>
  );
};
export default Card;
