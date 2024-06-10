import React, { useEffect, useState } from 'react'
import './dashboard.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleCarouselContent from './SingleCarouselContent';
import MobileFooter from '../martFooter/MobileFooter';



export default function Dashboard() {


  let todaysDealData = [
    {
        img: 'src/assets/images/buyer/deal-1.png',
        text : 'Deal Of The Day',
        color: 'bg-orange-500'
    },
    {
        img: 'src/assets/images/buyer/deal-2.png',
        text : 'Deal Of The Day',
        color: 'bg-pink-500'
    },
    {
        img: 'src/assets/images/buyer/deal-3.png',
        text : 'Deal Of The Day',
        color: 'bg-teal-500'
    },
    {
        img: 'src/assets/images/buyer/deal-4.png',
        text : 'Deal Of The Day',
        color: 'bg-green-500'
    },
    {
        img: 'src/assets/images/buyer/deal-5.png',
        text : 'Deal Of The Day',
        color: 'bg-blue-500'
    },

  ]


  let topCategoriesData = [
    {
      img: "src/assets/images/buyer/deal-1.png",
      text: 'Railing'
    },
    {
      img: "src/assets/images/buyer/deal-2.png",
      text: 'Window'
    },
    {
      img: "src/assets/images/buyer/deal-3.png",
      text: 'Boundary Wall'
    },
    {
      img: "src/assets/images/buyer/deal-4.png",
      text: 'Flooring'
    },
    {
      img: "src/assets/images/buyer/deal-5.png",
      text: 'Electrical'
    }
  ]


    const [activeButton , setActiveButton] = useState(1)



    // Toggle between active button Products section 
    let activeButtonHandler = (data)=>{
        setActiveButton(data)
    }



    // Responsive breakpoint for multi Image Carousel 
    const responsive = {
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 5,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }




  return (
    <>

    <div className="topSlider ">

    <div id="carouselExample" className="carousel slide ">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <SingleCarouselContent color={'bg-orange-200'} circleClr={'bg-orange-300'}/>
    </div>

    <div className="carousel-item">
   <SingleCarouselContent color={'bg-blue-200'} circleClr={'bg-blue-300'}/>
    </div>

    <div className="carousel-item">
   <SingleCarouselContent color={'bg-purple-200'} circleClr={'bg-purple-300'}/>
    </div>


    <div className="carousel-item">
   <SingleCarouselContent color={'bg-green-200'} circleClr={'bg-green-300'}/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-black rounded-3xl " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-black rounded-3xl " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>


    <div className="promotionBenefits elementShadow sm:mx-4 mx-4 mt-4 rounded-[10px] flex py-2.5 flex-wrap">

    <img src="src/assets/images/buyer/payon-delivery.png" alt=""  className='sm:h-11 mx-3 h-8'/>
    <img src="src/assets/images/buyer/easy-return.png" alt="" className='sm:h-11 mx-3 h-8'/>
      <img src="src/assets/images/buyer/ontimedelivery.png" alt="" className='ontimedeliveryImg sm:h-11 mx-3 h-8 '/>
      
    </div>
    <div className="offers grid grid-cols-12 sm:mx-4 gap-4 mt-4 mx-4" >
    <div className='lg:col-span-4 xl:col-span-3 col-span-12 md:col-span-6  elementShadow rounded-[10px] p-2 flex  flex-col '>

        <h2 className='text-xl mt-3 ml-6 font-bold'>Prime Day is July 15<sup>th</sup> And <br /> 16<sup>th</sup></h2>

        <img src="src\assets\images\buyer\offer.png" alt="offers" className='w-[85%] self-center mt-3'/>

        <p className='text-sm text-red-500 mt-3 mb-3 ml-8'>Explore All Prime Days Offers <i className="fa-solid fa-chevron-right"></i></p>
    </div>

    
    <div className='lg:col-span-4 xl:col-span-3 col-span-12 md:col-span-6 elementShadow rounded-[10px] p-2 flex  flex-col ' >
        <h2 className='text-xl font-bold mt-3 ml-6'>Up To 65 % Off | Clearance <br />Store</h2>

        <img src="src\assets\images\buyer\clearance.png" alt="clearance" className='w-[85%] self-center mt-3'/>

        <p className='text-sm text-red-500 mt-3 mb-3 ml-8'>View More <i className="fa-solid fa-chevron-right"></i></p>
    </div>


    


    <div className='lg:col-span-4 xl:col-span-3 col-span-12 md:col-span-6 elementShadow rounded-[10px] sm:p-2 flex  flex-col'>
        <h2 className='text-xl font-bold mt-3 ml-6'>Design Your Home | Anuda Mart Brands & More</h2>
    
        <div className="pricing grid grid-cols-12 self-center gap-x-6 gap-y-2">

        <div className='col-span-6 mt-3  cursor-pointer hover:text-[#e40f15]'>
            <img src="src/assets/images/buyer/redbrick.png" alt="bricks" />
            <p className='text-[12px] mt-1'>Starting ₹110 Red <br />Bricks</p>
        </div>

        <div className='col-span-6 mt-3  cursor-pointer hover:text-[#e40f15]'>
        <img src="src/assets/images/buyer/cementblock.png" alt="cementblock" />
            <p className='text-[12px] mt-1'>Starting ₹110 Cement <br />Blocks</p>


        </div>
        <div className='col-span-6 mt-4  cursor-pointer hover:text-[#e40f15]'>

        <img src="src/assets/images/buyer/cement.png" alt="cement" />
            <p className='text-[12px] mt-1'>Starting ₹310 Cement</p>


        </div>
        <div className='col-span-6 mt-4  cursor-pointer hover:text-[#e40f15]'>

        <img src="src/assets/images/buyer/steeliron.png" alt="steeliron" />
            <p className='text-[12px] mt-1'>Starting ₹455 Steel & <br />Iron</p>
            </div>
        </div>

        <p className='text-sm text-red-500 mt-1.5 mb-3 ml-8'>View More <i className="fa-solid fa-chevron-right"></i></p>
    </div>


    <div className='lg:col-span-4 xl:col-span-3 col-span-12 md:col-span-6  elementShadow rounded-[10px] p-2 flex  flex-col'>


    <h2 className='text-xl font-bold mt-3 ml-6'>Sign In For Your Best <br />Experience</h2>

        <button className='w-11/12 bg-[#e40f15] rounded-3xl h-10 text-white ml-3 mt-4 font-bold hover:bg-black'>Sign In Securely</button> 

           <div className='flex justify-end'> 
        <img src="src/assets/images/buyer/googlead.png" alt="goolead" className='w-[80%] mt-4 mr-2'/>
        </div>
    </div>


    </div>


    



<div className="todaysDeal elementShadow rounded-[10px] mx-4 sm:mx-4  mt-4 pb-5 ">
<div className="dealTitle flex justify-between mb-2 items-center sm:mx-10 mx-4">
        <h2 className='sm:text-2xl font-bold mt-4 text-xl'>Today's Deal</h2>
        <p className='text-sm text-[#e40f15] sm:mx-5 sm:pt-5 pt-4'>See All Details <i className="fa-solid fa-chevron-right"></i></p>    
    </div>   




    <div className="carousel mt-5">

    <Carousel
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  dotListclassName=""
  focusOnSelect={false}
  infinite
  itemclassName=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  responsive={responsive}
  shouldResetAutoplay
  showDots={false}
  sliderclassName=""
  slidesToSlide={1}

>
  {todaysDealData.map((i) =>{
        return  <div className='flex  flex-col justify-center items-center' key={i.img}>
        <img src={i.img} alt="" />
        
        <div className="discountPercent mt-2 flex justify-start items-center ">
            <button className='w-30 p-2 rounded-3xl bg-[#e40f15] text-white font-bold text-xs'>Up To 35% OFF</button>
            <p className='text-xs text-[#e40f15] ml-4'>{i.text}</p>
        </div>
        </div>
  })}

</Carousel>

    </div>
</div>



<div className="newArrivals mx-4 elementShadow rounded-[10px] mt-4">
  <div className="navs pt-4 mb-3 border-b-2 ">
    <ul className='list-none flex mx-3 font-bold font-mono antialiased '>
        <li className={`mx-3 ${activeButton === 1 ? 'border-b-4 border-red-500 pb-2' : ''}`}>
            <button onClick={()=>activeButtonHandler(1)}>New Arrivals</button>
        </li>
        <li className={`mx-3 ${activeButton === 2 ? 'border-b-4 border-red-500 pb-2' : ''}`}>
            <button onClick={()=>activeButtonHandler(2)}>On Sale</button>
        </li>
        <li className={`mx-3 ${activeButton === 3 ? 'border-b-4 border-red-500 pb-2' : ''}`}>
            <button onClick={()=>activeButtonHandler(3)}>Best Rated</button>
        </li>
    </ul>
  </div>

  <div className="items grid grid-cols-8 gap-2 mx-3 pb-4">
    <div className=''>
    <div className='col-span-6 mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
            <img src="src/assets/images/buyer/redbrick.png" alt="bricks" />
            <p className='text-[12px] mt-1'>Starting ₹110 Red <br />Bricks</p>
        </div>
    </div>
    <div className=''>

    <div className='col-span-6 mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
        <img src="src/assets/images/buyer/cementblock.png" alt="cementblock" />
            <p className='text-[12px] mt-1'>Starting ₹110 Cement <br />Blocks</p>


        </div>


    </div>
    <div className=''><div className='col-span-6 mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
            <img src="src/assets/images/buyer/redbrick.png" alt="bricks" />
            <p className='text-[12px] mt-1'>Starting ₹110 Red <br />Bricks</p>
        </div>
        
    </div>



    <div className=''>

    <div className='col-span-6 mt-4 ml-3 cursor-pointer hover:text-[#e40f15]'>

<img src="src/assets/images/buyer/cement.png" alt="cement" />
    <p className='text-[12px] mt-1'>Starting ₹310 Cement</p>


</div>

    </div>
    <div className=''>

    <div className='col-span-6 mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
        <img src="src/assets/images/buyer/cementblock.png" alt="cementblock" />
            <p className='text-[12px] mt-1'>Starting ₹110 Cement <br />Blocks</p>


        </div>

    </div>
    <div className=''>

    <div className='col-span-6 mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
            <img src="src/assets/images/buyer/redbrick.png" alt="bricks" />
            <p className='text-[12px] mt-1'>Starting ₹110 Red <br />Bricks</p>
        </div>

    </div>
    <div className=''>

    <div className='col-span-6 mt-4 ml-3 cursor-pointer hover:text-[#e40f15]'>

<img src="src/assets/images/buyer/cement.png" alt="cement" />
    <p className='text-[12px] mt-1'>Starting ₹310 Cement</p>


</div>


    </div>
    <div className=''>

    <div className='col-span-6 mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
        <img src="src/assets/images/buyer/cementblock.png" alt="cementblock" />
            <p className='text-[12px] mt-1'>Starting ₹110 Cement <br />Blocks</p>


        </div>
    </div>





    <div className=''>
    <div className=' mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
            <img src="src/assets/images/buyer/redbrick.png" alt="bricks" />
            <p className='text-[12px] mt-1'>Starting ₹110 Red <br />Bricks</p>
        </div>
    </div>
    <div className=''>

    <div className='mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
        <img src="src/assets/images/buyer/cementblock.png" alt="cementblock" />
            <p className='text-[12px] mt-1'>Starting ₹110 Cement <br />Blocks</p>


        </div>


    </div>
    <div className=''>
        <div className=' mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
            <img src="src/assets/images/buyer/redbrick.png" alt="bricks" />
            <p className='text-[12px] mt-1'>Starting ₹110 Red <br />Bricks</p>
        </div>
        
    </div>



    <div className=''>

    <div className='mt-4 ml-3 cursor-pointer hover:text-[#e40f15]'>

<img src="src/assets/images/buyer/cement.png" alt="cement" />
    <p className='text-[12px] mt-1'>Starting ₹310 Cement</p>


</div>

    </div>
    <div className=''>

    <div className='mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
        <img src="src/assets/images/buyer/cementblock.png" alt="cementblock" />
            <p className='text-[12px] mt-1'>Starting ₹110 Cement <br />Blocks</p>


        </div>

    </div>
    <div className=''>

    <div className='mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
            <img src="src/assets/images/buyer/redbrick.png" alt="bricks" />
            <p className='text-[12px] mt-1'>Starting ₹110 Red <br />Bricks</p>
        </div>

    </div>
    <div className=''>

    <div className=' mt-4 ml-3 cursor-pointer hover:text-[#e40f15]'>

<img src="src/assets/images/buyer/cement.png" alt="cement" />
    <p className='text-[12px] mt-1'>Starting ₹310 Cement</p>


</div>


    </div>
    <div className=''>

    <div className='mt-3 ml-3 cursor-pointer hover:text-[#e40f15]'>
        <img src="src/assets/images/buyer/cementblock.png" alt="cementblock" />
            <p className='text-[12px] mt-1'>Starting ₹110 Cement <br />Blocks</p>


        </div>
    </div>
  </div>

</div>





<div className="topCategories elementShadow sm:mx-4 mx-4 mt-4 rounded-[10px]">

    <div className="titles pt-4 flex items-center justify-between sm:mx-10 ">
        <h1 className='font-bold sm:text-2xl text-xl'>Top Categories</h1>
        <p className='text-[#e40f15] text-sm mr-2'>See All Details <i className="fa-solid fa-chevron-right"></i></p>
    </div>

    <div className="topCategoriesCarousel   mt-3 pb-2.5">


    <Carousel
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  dotListclassName=""
  focusOnSelect={false}
  infinite
  itemclassName=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  responsive={responsive}
  shouldResetAutoplay
  showDots={false}
  sliderclassName=""
  slidesToSlide={1}

>
  
  {topCategoriesData.map((i)=>{
    return(
      <div className=' flex flex-col justify-center items-center pt-2' key={i.text}>
          <img src={i.img} alt="" />
          <p className='py-2 ml-2 text-sm '>{i.text}</p>
    
      </div>
    )
  })}



</Carousel>


    </div>




</div>





<div className="promotions mt-4 mx-4 border-1 rounded-[10px] p-3 mb-4 overflow-hidden">
      <div className="promotionImages flex items-center justify-around py-2 slide-track">
        <img src="src/assets/images/buyer/b3-1.png" alt="" className="bg-none imgSlide" />
        <img src="src/assets/images/buyer/b4-1.png" alt="" className="bg-none imgSlide" />
        <img src="src/assets/images/buyer/b5-1.png" alt="" className="bg-none imgSlide" />
        <img src="src/assets/images/buyer/b6-1.png" alt="" className="bg-none imgSlide" />
        <img src="src/assets/images/buyer/b7-1.png" alt="" className="bg-none imgSlide" />
        <img src="src/assets/images/buyer/b8-1.png" alt="" className="bg-none imgSlide" />
        {/* Duplicate images for continuous effect */}
        <img src="src/assets/images/buyer/b3-1.png" alt="" className="bg-none imgSlide" />
        <img src="src/assets/images/buyer/b4-1.png" alt="" className="bg-none imgSlide" />
        <img src="src/assets/images/buyer/b5-1.png" alt="" className="bg-none imgSlide" />
        <img src="src/assets/images/buyer/b6-1.png" alt="" className="bg-none imgSlide" />
        <img src="src/assets/images/buyer/b7-1.png" alt="" className="bg-none imgSlide" />
        <img src="src/assets/images/buyer/b8-1.png" alt="" className="bg-none imgSlide" />
      </div>
    </div>

    <div className="h-12"></div>


    </>
  )
}
