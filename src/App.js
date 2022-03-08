import './App.css'
import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'
import Map from './components/Map/Map.jsx'
import List from './components/List/List.jsx'
import { getPlacesData } from './api'
function App() {
  const [places, setPlaces] = useState([])
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const [coords, setCoords] = useState({})
  const [bounds, setBounds] = useState({})
  const [filteredPlaces, setFilteredPlaces] = useState([])
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating)

    setFilteredPlaces(filtered)
  }, [rating])

  useEffect(() => {
    if (bounds) {
      // console.log(bounds)
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0))
        setFilteredPlaces([])
        setRating('')
      })
    }
  }, [bounds, type])

  return (
    <div className='container'>
      <Header />
      <div className='section'>
        <List
          places={filteredPlaces.length ? filteredPlaces : places}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
        <Map
          className='mapContainer'
          setBounds={setBounds}
          setCoords={setCoords}
          coords={coords}
          places={filteredPlaces.length ? filteredPlaces : places}
        />
      </div>
    </div>
  )
}

export default App
