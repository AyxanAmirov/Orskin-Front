import React from "react";
import NewWalpaper from "../../assets/images/whats-new.jpg";
import BlogImg from "../../assets/images/WhatsApp-Image-2024-06-28-at-11.45.00-1-800x1200.jpeg";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <div className="container ">
      <div className="mt-[230px] flex flex-col items-center">
        <h1 className="font-[400 ] text-[30px]">OUR BLOG</h1>
        <img src={NewWalpaper} alt="new" />
      </div>
      <div className="bb-blog pb-[50px] mt-[30px] mb-[90px]">
        <div className="flex flex-wrap">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <img src={BlogImg} alt="blog" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
            <div className="h-full w-full flex flex-col justify-between">
              <div className="max-w-[500px]">
                <div className="bt-blog mt-[60px] ">
                  <div className="px-[30px]">
                    <h3 className="text-[30px] font-[600] mb-[20px] hover:text-[#9AD6CC] duration-[.4s]">
                      <Link>Platelet Rich Fibrin (PRF) Plasmagel</Link>
                    </h3>
                    <p className="text-[#555555]">
                      Gently exfoliate away dull, dead skin with the
                      age-defying, complexion-boosting PHA Hydration Peel!
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-fit bg-[#a8d4cc]  self-end xl:py-[10px] lg:py-[10px] md:py-[10px] py-[8px] xl:px-[25px] lg:px-[25px] px-[20px] md:px-[25px] font-[600] text-[#ffffff] uppercase xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[17px] text-[17px]  duration-[.4s] hover:bg-[black] hover:text-[#a8d4cc]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
