import React from 'react'
import { partners } from '../../../data/data'
import "./style.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



function Partners() {
    return (
        <div className="flex  w-full justify-center pb-[40px] partners">
            <div className="col-lg-11 col-md-9 col-sm-9 col-9 ">

                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        140: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 4,
                        }
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        partners.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <img src={item.image} alt={item.title} className="object-contain" data-aos="zoom-in" 
                                width="auto" height="auto"/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    )
}

export default Partners