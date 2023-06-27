import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import tuborg_slide1 from '../images/tuborg_slide1.jpg';
import tuborg_slide2 from '../images/tuborg_slide2.jpg';
import tuborg_slide3 from '../images/tuborg_slide3.jpg';

import lenscart_slide1 from '../images/lenscart_slide1.webp'
import lenscart_slide2 from '../images/lenscart_slide2.gif'
import lenscart_slide3 from '../images/lenscart_slide3.webp'
import lenscart_slide4 from '../images/lenscart_slide4.webp'
import lenscart_slide5 from '../images/lenscart_slide5.gif'

import asset11 from '../images/asml/asset 11.jpeg';
import asset12 from '../images/asml/asset 12.jpeg';

import slide1 from '../images/asml/slide1.jpg';
import slide2 from '../images/asml/slide2.jpg';
import slide3 from '../images/asml/slide3.jpg';
import slide4 from '../images/asml/slide4.jpg';
import slide5 from '../images/asml/slide5.jpg';
import slide6 from '../images/asml/slide6.jpg';
import slide7 from '../images/asml/slide7.png';
import slide8 from '../images/asml/slide8.png';

import s1 from '../images/dew/s1.jpg';
import s2 from '../images/dew/s2.png';
import s3 from '../images/dew/s3.png';



const Slider = () => {
  return (
    <div className='sm:w-3/5 lg:w-3/5 mx-1 py-1'>
      <Carousel showThumbs={false} autoPlay showArrows={true} infiniteLoop>
        <div>
          <img src={s1} className="h-[180px]" alt="img_2" />
        </div>

        <div>
          <img src={s2} className="h-[180px]" alt="img_2" />
        </div>

        <div>
          <img src={s3} className="h-[180px]" alt="img_2" />
        </div>

        {/* <div>
          <img src={slide8} className="h-[180px]" alt="img_2" />
        </div>


        <div>
          <img src={slide2} className="h-[180px]" alt="img_2" />
        </div>

        <div>
          <img src={slide5} className="h-[180px]" alt="img_2" />
        </div> */}


        {/* <div>
          <img src={slide4} className="h-[180px]" alt="img_2" />
        </div> */}

        {/* <div>
          <img src={lenscart_slide2} className="h-[180px]" alt="img_2" />
        </div>

        <div>
          <img src={lenscart_slide3} className="h-[180px]" alt="img_1" />
        </div>

        <div>
          <img src={lenscart_slide4} className="h-[180px]" alt="img_1" />
        </div>

        <div>
          <img src={lenscart_slide5} className="h-[180px]" alt="img_1" />
        </div> */}

      </Carousel>
    </div>
  )
}

export default Slider;
