import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";
import Map from "./components/Map";
import Link from "next/link";
import { auth, provider } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { BeakerIcon, StarIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="h-6 w-6 text-blue-500"/>
      <p>...</p>
    </div>
  )
}

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();


  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);

  return (
    <Wrapper>

      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => {
                signOut(auth);
              }}
            />
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
bg-white flex-1 p-4 dark:bg-gray-700
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
  mr-4 w-30 text-sm font-semibold dark:text-white
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full cursor-pointer  
`;
const ActionButtons = tw.div`
  flex 
`;

const ActionButton = tw.div`
  flex-1 bg-gray-200 m-1 h-32 text-xl rounded-lg items-center flex flex-col justify-center
  transform hover:scale-105 dark:bg-white dark:text-gray-700 md:m-2
  `;

const ActionButtonImage = tw.img`
  h-3/5 
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl rounded-lg p-4 flex items-center mt-8 dark:bg-white dark:text-gray-700
`;
