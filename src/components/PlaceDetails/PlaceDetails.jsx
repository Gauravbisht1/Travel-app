import React from 'react'
import '../../App.css'
import './style.css'
import { AiFillPhone, AiFillStar } from 'react-icons/ai'
const PlaceDetails = ({ place }) => {
  return (
    <div className='PlaceDetails'>
      <div className='card'>
        <img
          className='image'
          src={
            place.photo
              ? place.photo.images.medium.url
              : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
          }
        />
        <h2>{place.name}</h2>
        <div className='box'>
          <h2 readOnly>
            <AiFillStar />
          </h2>
          <h5>Out of {place.num_reviews} reviews</h5>
        </div>
        <div className='box'>
          <h3>Price</h3>
          <h5>{place.price_level}</h5>
        </div>
        <div className='box'>
          <h3>Ranking</h3>
          <h5>{place.ranking}</h5>
        </div>
        <div className='box'>
          <i className='fa fa-map-marker'></i>

          <h6 style={{ marginLeft: '20px', fontSize: '16px' }}>
            {place?.address && place.address}
          </h6>
        </div>
        <div className='box'>
          <AiFillPhone />
          <h5>{place.phone}</h5>
        </div>
        <div className='buttons'>
          <button
            className='btn'
            onClick={() => window.open(place.web_url, '_blank')}
          >
            Trip Advisor
          </button>
          <button
            className='btn'
            onClick={() => window.open(place.website, '_blank')}
          >
            Website
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetails
