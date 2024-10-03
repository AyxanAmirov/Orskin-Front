import React from 'react'
import { partners } from '../../../data/data'
import "./style.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



function HomePartners() {
    return (
        <div className="flex  w-full justify-center pb-[40px] partners">
            <div className="col-lg-11 col-md-9 col-sm-9 col-9 ">

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    className="mySwiper"
                >

                    {
                        partners.map(item => (
                            <SwiperSlide>
                                <img key={item.id} src={item.image} alt={item.title} className="object-contain" />

                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    )
}

export default HomePartners