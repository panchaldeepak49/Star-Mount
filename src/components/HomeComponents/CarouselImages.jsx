import React,{ useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '/Images/warehouse1.jpg'
import Img2 from '/Images/warehouse2.jpg'
import Img3 from '/Images/warehouse3.jpg'
import erpImg from '/Images/erp.jpeg'
import sesImg from '/Images/ses.jpeg'
import Img4 from '/Images/warehouse4.jpg'
import { IoChevronForward } from "react-icons/io5"
import { IoChevronBack } from "react-icons/io5"

const CarouselImages = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="absolute  top-[50%] invisible sm:visible z-50 right-10  bg-white p-2 rounded-md cursor-pointer" onClick={onClick}>
                {/* Add your forward arrow icon or any content here */}
                <IoChevronForward />
            </div>
        );
    };
  
    const PrevArrow = (props) => {
      const { onClick } = props;
      return (
          <div className="absolute  top-[50%] invisible sm:visible z-50  left-10 bg-white p-2 rounded-md cursor-pointer" onClick={onClick}>
              {/* Add your backward arrow icon or any content here */}
              <IoChevronBack />
          </div>
      );
  };
//   invisible sm:visible
      const settings = {
          autoplay: true, // Set to true if you want automatic sliding
          autoplaySpeed: 3500, // Interval in milliseconds  4000(prev)
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          rtl: true,
          fade: false,
          beforeChange: (current, next) => setCurrentIndex(next),
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        };
  
        const handleMouseEnter = () => {
          setIsPaused(true);
        };
      
        const handleMouseLeave = () => {
          setIsPaused(false);
        };
  

  return (
    <>
    <div className=''
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}>

       <Slider {...settings} initialSlide={currentIndex} >

        {/* <div className=' bg-orange-400 flex justify-center items-center '>
            <img className='h-96 sm:ml-96 ' src={erpImg} alt='missing'/>
        </div> */}

        <div className='bg-green-400 outline-none'>
           <img className='w-[100%] h-60 sm:h-96 sm:ml-0' src={Img1} alt='missing'/>
        </div>

        <div className=' bg-red-400 outline-none'>
            {/* <p className='text-red-600'>Streamline your business with our end to end IT solutions</p> */}
            <img className='w-[100%] h-60 sm:h-96  sm:ml-0' src={sesImg} alt='missing'/>
        </div>

        <div className='bg-green-400 outline-none'>
           <img className='w-[100%] h-60 sm:h-96  sm:ml-0' src={Img2} alt='missing'/>
        </div>

        {/* <div className=' bg-orange-400 '>
            <img className='w-[100%] h-60 sm:h-96   sm:ml-0' src={Img3} alt='missing'/>
        </div> */}

        {/* <div className='bg-blue-400'>
            <img className='w-[100%] h-60 sm:h-96  sm:ml-0' src={Img4} alt='missing'/>
        </div> */}
       </Slider>
       </div>
    </>
  )
}

export default CarouselImages