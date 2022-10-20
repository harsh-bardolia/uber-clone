import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../data/carList";

const CarInfo = ({ pickupCoordinates, dropOffCoordinates }) => {
  const [rideDuration, setRateDuration] = useState(0);

  useEffect(() => {
    rideDuration= fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token=pk.eyJ1IjoiY3lsYW4tZXZlciIsImEiOiJjbDh6b29zMGYwMjN3M3BvM2NwZG9wejZqIn0.4wyuP6XQAACiN0bPpS0-vw`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setRateDuration(data.routes[0].duration / 100);
      });

    // console.log(dropOffCoordinates[0]);
    // let distance = Math.sqrt((Math.pow(dropOffCoordinates[0] - pickupCoordinates[0]),2) + (Math.pow(dropOffCoordinates[1] - pickupCoordinates[1]),2));
  }, [dropOffCoordinates,pickupCoordinates]);

  return (
    <Wrapper>
      <CarTitle>Choose a ride, or swipe up for more!</CarTitle>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl}></CarImage>
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>{'₹'+ (rideDuration * car.multiplier).toFixed()}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default CarInfo;

const Wrapper = tw.div`
  flex-1 overflow-y-scroll flex flex-col
`;
const CarTitle = tw.div`
  text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div`
  overflow-y-scroll 
`;
const Car = tw.div`
  flex p-4 items-center text-sm border-b 
`;
const CarImage = tw.img`
  h-14 mr-4
`;
const CarDetails = tw.div`
  flex-1
`;
const Service = tw.div`
  font-bold
`;
const Time = tw.div`
  text-xs text-cyan-500 
`;
const Price = tw.div`
  px-4 text-sm
`;
