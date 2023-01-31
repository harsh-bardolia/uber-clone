import { useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { StarIcon } from '@heroicons/react/24/outline';

function Search() {
  const [pickup, setPickUp] = useState("");
  const [dropoff, setDropOff] = useState("");
  console.log(pickup);
  console.log(dropoff);
  return (
    <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"></BackButton>
        </Link>
      </ButtonContainer>
      {/* Input Container */}
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/00000/square-full.png" />
          {/* <Square src='https://static.vecteezy.com/system/resources/previews/001/209/957/original/square-png.png' /> */}
        </FromToIcons>

        <InputBoxes>
          <Input
            placeholder="Choose starting point"
            value={pickup}
            onChange={(e) => setPickUp(e.target.value)}
          />
          <Input
            placeholder="To Destination"
            value={dropoff}
            onChange={(e) => setDropOff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/00000/plus-math.png" />
      </InputContainer>

      {/* Saved Places  */}

      <SavedPlaces>
        {/* <StarIcon src="https://img.icons8.com/ios-filled" /> */}
        <StarIcon className="text-white h-10 w-10 bg-gray-400 rounded-full p-2 " />
        <p className="pl-1">Saved Places</p>
      </SavedPlaces>

      {/* Confirm Locations */}
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <ConfirmButtonContainer>Confirm Locations</ConfirmButtonContainer>
      </Link>
    </Wrapper>
  );
}

export default Search;

const Wrapper = tw.div`
 bg-gray-200 h-screen
`;
const ButtonContainer = tw.div`
  bg-white px-4
`;
const BackButton = tw.img`
  h-12 cursor-pointer
`;
const InputContainer = tw.div`
  bg-white flex items-center px-4 mb-2
`;
const FromToIcons = tw.div`
  w-10 mr-2 flex flex-col items-center 
`;
const Circle = tw.img`
  h-2.5
`;
const Line = tw.img`
  h-10
`;
const Square = tw.img`
  h-3
`;
const InputBoxes = tw.div`
flex flex-col flex-1
`;
const Input = tw.input`
h-10 my-2 rounded-lg p-2 bg-gray-200 outline-none border-none
`;

const PlusIcon = tw.img`
  h-10 w-10 bg-gray-200 rounded-full ml-3
`;

const SavedPlaces = tw.div`
  flex items-center bg-white px-4 py-2
`;
// const StarIcon = tw.img`
//   bg-gray-400 h-10 w-10 rounded-full p-2
// `;

const ConfirmButtonContainer = tw.div`
  bg-black text-white mt-2 mx-4 text-center py-3 px-4 text-lg cursor-pointer
`;
