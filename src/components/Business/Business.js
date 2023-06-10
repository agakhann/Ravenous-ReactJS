import React from "react";
import './Business.css';


class Business extends React.Component {
  render() {
    const {business} = this.props;
    const maps = 'http://maps.google.com/?q=' + business.address +' '+ business.city;
    return (
      <div className="Business">
        <div className="image-container">
         <a href={business.url} target="_blank" rel="noopener noreferrer"> 
          <img
            src={business.imageSrc}
            href = {business.url}
            alt = ''
          />
         </a> 
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <a href = {maps} >{business.address}</a>
            <p>{business.city}</p>
            <p>{business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
