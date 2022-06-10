import React from 'react'
import { Pagination } from 'swiper';
import './Test.css'
import  Mama1 from '../../img/Mama1.jpeg'
import  balu from '../../img/balu.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';






const Test = () => {
       const clients = [
           {
            
               img: Mama1,
               review : <h6 className='elite'> <u>Elite Technology</u><br/>
                              Manager
                               </h6>
             
             

           },
           {
                  img : balu,
                   review : <h6 className='balu'> <u> Elite Technology</u> <br/>
                                frontend developer
                             
                           </h6>
        
        
           }
     
       ]

  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
            <span> Clints always get</span>
            <span> Exceptional Work</span>
            <span> from me</span>
            
          
                <swiper

                    module= {[Pagination]}
                    slidesPerviw={2}
                    pagination={{clickable:true}}
                    >
                     {clients .map((client,index)=>{
                         return(
                             <SwiperSlide key ={index}>
                                 <div className='testimonial'>
                                 <img src = { client.img} alt=""/>
                                 <span>{ client.review}</span>
                                </div>
                             </SwiperSlide>
                         )

                     }                 
                     )}
                </swiper>

            </div>

        </div>
     
 
  );
};

export default Test


