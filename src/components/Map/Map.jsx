import React from 'react'
import GoogleMapReact from 'google-map-react'
import './style.css'
import '../../App.css'
const Map = ({ coords, places, setCoords, setBounds }) => {
  return (
    <div className='mapContainer'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC6R7opVYfdFFJuIgOLjzZw0dve_WmuYyE' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lan: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={''}
      >
        {places?.map((place) => {
          return (
            <div
              className='markerContainer'
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
            >
              <h3> {place.name}</h3>
              <img
                src={
                  place.photo
                    ? place.photo.images.medium.url
                    : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                }
              />
              <h4 readOnly>{place.rating} Star</h4>
            </div>
          )
        })}
      </GoogleMapReact>
    </div>
  )
}

export default Map
