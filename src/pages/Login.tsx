import React from 'react'
import styled from 'styled-components';
import image from '../assets/zamtel_logo.png';
import { Player } from '@lottiefiles/react-lottie-player';
import './Login.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';


const StyledDiv = styled.div`
/* Add your background pattern here */
background-image: repeating-radial-gradient(  #2BB359 80%,#2f312f 90%,#3f4549 90%);
background-size: 65px 65px;
`;

function Login() {
    return (
        <div  className='w-[100%] flex justify-between h-[100vh]' >
            <StyledDiv  className='flex flex-col items-center justify-center flex-1 '>
                <img src={image} style={{ height: 100, width: 100 }} alt="" className='mt-20' />
                <h1 className='text-white text-center text-4xl font-bold mt-10'>Change Management System</h1>
                <div className='mt-20'>
                    <Player
                        autoplay
                        loop
                        src="../../login_animation.json"
                        style={{ height: '300px', width: '300px' }}
                    >
                    </Player>
                </div>

            </StyledDiv>
            <div className='flex flex-1 justify-center flex-col px-20  relative items-center mt-16'>
                <h1 className='text-4xl font-semibold'>Welcome Back!</h1>
                <h3 className='text-2xl py-2 mb-4'>Login</h3>

                <div className="InputContainer">
                    <AccountCircleIcon className='text-white  ml-2 rounded-full' />
                    <input placeholder="Enter your GN" id="input" className="input" name="text" type="text" />
                </div>

                <div className="InputContainer mt-4">
                    <LockIcon className='text-white  ml-2 rounded-full' />
                    <input placeholder="Enter Password" id="input" className="input" name="text" type="text" />
                </div>

                <button className="btn  w-32 mt-10">
                    <span>Login</span>
                </button>
            </div>
        </div>
    )
}

export default Login