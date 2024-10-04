import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import { feedbacks } from '../../../data/data';

function NewSlider() {
    return <div id='feedbacks'>
        <div
            className="w-full bg-cover bg-center py-[70px] relative"
            style={{
                backgroundImage: `url('https://orskin.ae/wp-content/uploads/2023/02/bg-testimonial-500x208.jpg')`,
            }}
        >
            <div className="container flex flex-col items-center feedback-item">
                <h3 className="xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[22px] text-[22px] text-[#2f2f2f] mb-[30px]">WHAT OUR CLIENTS SAY</h3>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        feedbacks.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="max-w-[700px] flex flex-col gap-[20px] text-center ">
                                    <p className="xl:text-xl lg:text-xl md:text-xl sm:text-[15px] text-[15px] text-[#393939] font-bold">
                                        {item.desc}
                                    </p>
                                    <h5 className="font-[400] tracking-[5px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px]">
                                        {item.author}
                                    </h5>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>

    </div>
}

export default NewSlider