import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div className='flex md:flex-row flex-col items-center space-y-10 md:justify-evenly justify-center w-full mx-auto bg-base-200 py-20'>
            <div>
                Company Logo
            </div>
            <div className=''>
                <h1 className='font-bold'>Service</h1>
                <div className='flex flex-col'>
                    <a href=""> Branding</a>
                    <a href=""> Branding</a>
                    <a href=""> Branding</a>
                    <a href=""> Branding</a>
                </div>

            </div>
            <div>
                <h1 className='font-bold'>Company</h1>
                <div className='flex flex-col'>
                    <a href="">About us</a>
                    <a href="">About us</a>
                    <a href="">About us</a>
                    <a href="">About us</a>
                </div>

            </div>
            <div>
                <h1 className='font-bold '>Legal</h1>
                <div className='flex flex-col'>
                    <a href="">Terms of use</a>
                    <a href="">Terms of use</a>
                    <a href="">Terms of use</a>
                    <a href="">Terms of use</a>
                </div>

            </div>
            <div>
                <h1 className='text-center'>Sociel Media</h1>
                <div className='flex gap-6 mt-2 justify-center'>
                    <a href=""><FaFacebook /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaInstagramSquare /></a>
                    <a href=""><FaLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer