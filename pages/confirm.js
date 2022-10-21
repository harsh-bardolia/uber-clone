import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import CarInfo from "./components/CarInfo";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setpickupCoordinates] = useState([0,0]);
  const [dropOffCoordinates, setSetDropOffCoordinates] = useState([0,0]);

  const getPickupCoordinates = (pickup) => {
    // const pickup = "Dwarka";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiY3lsYW4tZXZlciIsImEiOiJjbDh6b29zMGYwMjN3M3BvM2NwZG9wejZqIn0.4wyuP6XQAACiN0bPpS0-vw",
          limit: 1,
        })
    )
      .then((Response) => Response.json())
      .then((data) => {
        setpickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropoff) => {
    // const dropoff = "Rajkot";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiY3lsYW4tZXZlciIsImEiOiJjbDh6b29zMGYwMjN3M3BvM2NwZG9wejZqIn0.4wyuP6XQAACiN0bPpS0-vw",
          limit: 1,
        })
    )
      .then((Response) => Response.json())
      .then((data) => {
        setSetDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"></BackButton>
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />

      <RideContainer>
        <CarInfo
          pickupCoordinates={pickupCoordinates}
          dropOffCoordinates={dropOffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex flex-col flex-1 h-screen 
`;

const ButtonContainer = tw.div`
  bg-white rounded-full z-10 absolute m-2
`;
const BackButton = tw.img`
h-10 cursor-pointer
`;
const RideContainer = tw.div`
  flex flex-1 flex-col bg-white h-1/2 
`;

const ConfirmButtonContainer = tw.div`
  border-t-2
`;
const ConfirmButton = tw.div`
bg-black text-white mx-4 my-4 py-4 text-center text-xl cursor-pointer 
`;
