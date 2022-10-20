import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import { useEffect } from "react";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Harsh Bardolia</Name>
            <UserImage src="https://d1fdloi71mui9q.cloudfront.net/nt1YE1dQc2ro7YN6euwS_n4iCg7Oq60cG0l75" />
          </Profile>
        </Header>

        {/* ActionButtons */}
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uperx.png" />
              Ride
            </ActionButton>
          </Link>
          <Link href="/search">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            2-Wheels
          </ActionButton>
          </Link>
          <Link href="/search">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
          </Link>
        </ActionButtons>

        {/* InputButton */}
        <InputButton>Where to Go?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen bg-green-100
`;

const ActionItems = tw.div`
bg-white flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-30 text-sm
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 
`;
const ActionButtons = tw.div`
  flex 
`;

const ActionButton = tw.div`
  flex-1 bg-gray-200 m-1 h-32 text-xl rounded-lg items-center flex flex-col justify-center
  transform hover:scale-105 
  `;

const ActionButtonImage = tw.img`
  h-3/5 
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
