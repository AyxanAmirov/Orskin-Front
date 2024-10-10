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
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >

                    {
                        partners.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <img  src={item.image} alt={item.title} className="object-contain" data-aos="zoom-in" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    )
}

export default Partners