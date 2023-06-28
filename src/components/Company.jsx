import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import asset43 from '../images/assets4/asset 0.jpeg'
import lenskart_logo from '../images/lenskart_logo.png';
import jio from '../images/asml/jio.png'
import company from '../images/asml/company.jpg'
import company2 from '../images/asml/company2.jpg'
import company3 from '../images/asml/company3.jpg'
import company4 from '../images/asml/company4.jpg'
import logo from '../images/dew/logo.webp';



const Company = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white w-full '>
            {/* [#2e9afe] */}
            <div className="options text-center text-white bg-red-800 py-2 px-1  items-center text-lg flex ">
                <svg xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate('/home')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className="flex-grow">Company Profile</div>
            </div>

            <div className="hp_company mt-4">
                <img src={logo} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={280} />
            </div>

            <div className='flex flex-col w-[88%] mx-auto justify-between items-center p-2'>
                <div className="flex items-center justify-between px-2 shadow-sm shadow-gray-400 py-3 mt-4 rounded-md w-full mx-auto">
                    <div className='text-sm'>Company Profile</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-4 h-4 stroke-gray-400 rotate-180  cursor-pointer ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>Mountaindw</div>
                    <div className='text-xs'>
                    About PepsiCo
PepsiCo products are enjoyed by consumers more than one billion times a day in more than 200 countries and territories around the world. PepsiCo generated more than $79 billion in net revenue in 2021, driven by a complementary beverage and convenient foods portfolio that includes Lay's, Doritos, Cheetos, Gatorade, Pepsi-Cola, Mountain Dew, Quaker, and SodaStream. PepsiCo's product portfolio includes a wide range of enjoyable foods and beverages, including many iconic brands that generate more than $1 billion each in estimated annual retail sales.

Guiding PepsiCo is our vision to Be the Global Leader in Beverages and Convenient Foods by Winning with PepsiCo Positive (pep+). pep+ is our strategic end-to-end transformation that puts sustainability and human capital at the center of how we will create value and growth by operating within planetary boundaries and inspiring positive change for planet and people. For more information, visit www.pepsico.com, and follow on Twitter, Instagram, Facebook, and LinkedIn @PepsiCo.


                    </div>
                    {/* <img src={lenskart_logo} alt="spacex" /> */}
                </div>
            </div>


        </div>
    )
}

export default Company