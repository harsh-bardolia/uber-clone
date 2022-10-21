import React from 'react'
import tw from "tailwind-styled-components";
import { useEffect} from "react";
// import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import {auth, provider} from '../firebase';

const Login = () => {

  const router= useRouter()

  useEffect(()=>{

    onAuthStateChanged(auth , user =>{
      if(user){
        router.push('/')
      }
    })

  },[])

  return (
    <Wrapper>
        <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.jpg" />
        <Title>
            Log in to access your account
        </Title>
        <HeadImage src="https://i.ibb.co/CsV9RYZ/login-logo.jpg"/>

        <SignInButton onClick={()=>signInWithPopup(auth , provider)}>Sign in with Google</SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper=tw.div`
    flex flex-col bg-gray-200 h-screen p-4
`

const UberLogo = tw.img`
  h-20 w-auto self-start object-contain
`;
const HeadImage = tw.img`
  h-64 w-full self-start object-contain
`;

const Title = tw.div`
  text-5xl pt-4 text-gray-500
`;

const SignInButton=tw.button`
  bg-black text-white py-4 px-8 mt-8 text-center self-center w-full
`