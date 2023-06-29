import wind_turbines from '../images/wind-turbines.svg';
import wind from '../images/wind.jpg';
import React from 'react';
import asset9 from '../images/asml/asset 4.jpeg';


//[#0096D5] [#00bcd4]


const Card = ({ pre_sale, long_plan_state, product_type, product_image, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle, handleClick }) => {


  return (
    <div className='mx-2 shadow-2xl  bg-[#fafff9]  shadow-gray-800 pb-1'  >
      {/* <div className="title text-[#464945] font-bold text-lg">{plan_name}</div>         */}
      <div className="info text-xs flex flex-col items-center">
        <img src={product_image} alt="comp_img" className=' h-44 w-full mb-1' />
        <div className="title text-black w-full px-1 ml-1 text-center  font-semibold text-xl">{plan_name}</div>
        {product_type === 'long' && (<div className="text-xs font-black text-center px-1 ml-1 w-full  text-red-800 ">Daily Income, Daily Withdrawals</div>)}
        {/* {product_type==='short' && (<div className="text-xs p-1 w-full  text-red-500 font-extrabold">Daily Income, Daily Withdrawals</div>)} */}
        <div className=' w-full grid grid-cols-2 p-1 gap-2 text-[13px]'>
          <div className="basic_info flex justify-start gap-1 bg-white text-black py-2 px-2 mx-1">
            <div className='font-bold'>Product Price: </div>
            <div className=' text-red-600 font-bold'>&#8377;{new Intl.NumberFormat().format(plan_amount)}</div>
          </div>
          <div className="basic_info text-black flex justify-start gap-1 bg-white py-2  mx-1">
            <div className='font-bold'>Daily Income: </div>
            <div className='text-red-600 font-bold'>&#8377;{new Intl.NumberFormat().format(plan_daily_earning)}</div>
          </div>
          <div className="basic_info text-black flex justify-start gap-1 bg-white py-2 px-2 mx-1">
            <div className='font-bold'>Total Income: </div>
            <div className='text-red-600 font-bold'>&#8377;{new Intl.NumberFormat().format(plan_cycle * plan_daily_earning)}</div>
          </div>
          <div className="basic_info text-black flex justify-start gap-1 bg-white py-2  mx-1">
            <div className='font-bold'>Complete Cycle:</div>
            <div className='text-red-600 font-bold'>{plan_cycle} days</div>
          </div>

        </div>

        {/* {(plan_name==='Walton Plan 6' || plan_name==='Walton Plan 7' || plan_name==='Walton Plan 8' )?<div className="cursor-pointer btn text-white text-center p-2 mt-1 text-lg rounded-md  w-4/5 mx-auto bg-red-400"
            >Click to buy</div>: */}
      </div>

      {pre_sale === true ? (
        <div className="cursor-pointer btn text-black font-semibold text-center  py-2  px-2 mt-5 text-md mb-2 shadow-md  w-[55%] mx-auto bg-pre_sale">
          Pre-Sale
        </div>
      ) : null}

      {/* {console.log(pre_sale, product_type, long_plan_state)} */}

      {
        pre_sale === false ? (
          product_type === 'long' ? (
            <div className="cursor-pointer btn text-white font-semibold text-center  py-2  px-2 mt-5 text-md mb-2 shadow-md  w-[55%] mx-auto bg-red-700"
              onClick={() => handleClick(product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle)}>
              Buy Now
            </div>
          ) : (long_plan_state === true)  ? (
            <div className="cursor-pointer btn text-white font-semibold text-center  py-2  px-2 mt-5 text-md mb-2 shadow-md  w-[55%] mx-auto bg-red-700">
              Buy Now
            </div>
          ) : (
            <div className="cursor-pointer btn text-white font-semibold text-center  py-2  px-2 mt-5 text-md mb-2 shadow-md  w-[55%] mx-auto bg-red-700"
              onClick={() => handleClick(product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle)}>
              Buy Now
            </div>
          )
        ) : null
      }

      {/* <div className="cursor-pointer btn text-white font-semibold text-center  py-2  px-2 mt-5 text-md mb-2 shadow-md  w-[55%] mx-auto bg-red-700"
        onClick={() => handleClick(product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle)}>
        Buy Now
      </div> */}

    </div>
  )
}

export default Card