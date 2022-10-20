import React from 'react'
import tw from "tailwind-styled-components";

const Login = () => {
  return (
    <Wrapper>
        <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.jpg" />
        <LoginInTo>
            Log in to access your account
        </LoginInTo>

        <SignInButton>Sign in with Google</SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper=tw.div`
    flex flex-col bg-gray-200 h-screen p-4
`

const UberLogo = tw.img`
  flex-1 h-20 m-2
`;

const LoginInTo = tw.div`
  text-4xl ml-3 mr-4
`;

const SignInButton=tw.button`
    bg-black text-white py-4 px-8 mt-8 text-center self-center w-full
`