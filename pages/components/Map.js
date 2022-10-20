import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiY3lsYW4tZXZlciIsImEiOiJjbDh6b29zMGYwMjN3M3BvM2NwZG9wejZqIn0.4wyuP6XQAACiN0bPpS0-vw';

const Map=(props)=> {
    console.log(props);
    useEffect(()=>{
        const map = new mapboxgl.Map({
          // in container: you have to put an ID for an Map
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center:[78.9629, 20.5937],
          // Here zoom: (Number) that number is used to represents the amount of we need to zoom,
          zoom:3,
        })

        if(props.pickupCoordinates){
          addToMap(map, props.pickupCoordinates);
        } 
        if(props.dropOffCoordinates){
          addToMap(map, props.dropOffCoordinates);
        }
        

        if(props.pickupCoordinates && props.dropOffCoordinates){

      // This map.fitBounds funtion is open source & search for it "Mapbox fit bounds"
      // Which helps to 'Zoom In' between 2 points

          map.fitBounds([
             props.pickupCoordinates,
             props.dropOffCoordinates
            ],{
              padding:70
            });
        }
      },[props.pickupCoordinates,props.dropOffCoordinates])


      // This addToMap funtion is open source & search for it "Mapbox addtomap"
      const addToMap = (map, coordinates)=>{
        const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
      }
    

  return (
    <Wrapper id='map'>

    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
  flex-1 h-1/2
`