import '../../App.css'
import './style.css'
import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx'
import React from 'react'
const List = ({ places, type, setType, rating, setRating }) => {
  return (
    <div className='listContainer'>
      <div className='select'>
        <div className='heading'>
          <h1 style={{ marginTop: '1rem' }}>Food & Dining around you</h1>
          <div className='underline'></div>
        </div>
        <div className='forms'>
          <form className='formControl' style={{ margin: 'auto 2rem' }}>
            <label htmlFor='type'>
              <h4>Type</h4>
            </label>
            <select
              id='type'
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value='restaurants'>Restaurants</option>
              <option value='hotels'>Hotels</option>
              <option value='attractions'>Attractions</option>
            </select>
          </form>
          <form className='formControl'>
            <label htmlFor='rating'>
              <h4>Rating</h4>
            </label>

            <select
              id='rating'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value={0}>All</option>
              <option value={3}>Above 3.0</option>
              <option value={4}>Above 4.0</option>
              <option value={4.5}>Above 4.5</option>
            </select>
          </form>
        </div>
      </div>
      <div className='places'>
        {places.map((place, i) => {
          return <PlaceDetails className='PlaceDetails' place={place} />
        })}
      </div>
    </div>
  )
}

export default List
