import Products from "../../components/products/products.jsx";
import { Link } from "react-router-dom";
import Partners from "../../components/partners/index.jsx";
import Feedbacks from "../../components/feedbacks/index.jsx";
import {
  productData,
  facialSection,
  services,
  homeSlider
} from "../../../data/data.jsx";
import ServiceCard from "../../components/serviceCard/index.jsx";
import Slider from "../../components/slider/index.jsx";




function Home() {

  return (
    <>
      <Slider slides={homeSlider} />
      <div className="w-full  bg-walpaper bg-no-repeat bg-center bg-cover mb-[60px] py-[80px]">
        <div className="max-w-[1100px] m-auto container">
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[50px]">
            {
              services.map((item, index) => {
                return index < 3 ? <ServiceCard key={item.id} {...item} delay={index} /> : null
              })
            }
          </div>
        </div>
      </div>
      <div className="container">
        <Partners />
        <div className="mt-[50px] flex w-full flex-col items-center gap-[20px]">
          <h2 className="text-[#393939] font-[400] xl:text-[50px] lg:text-[50px] md:text-[45px] sm:text-[45px] text-[33px]  uppercase" data-aos="zoom-in" >
            Shop
          </h2>
          <h4 className="font-bold xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[13px] text-center" data-aos="zoom-in">
            WE BRING YOU THE BEST IN SKINCARE PRODUCTS
          </h4>
          <div className="grid max-w-[1140px] w-[90%] m-auto grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between pb-[50px]">
            {productData.map(product => (
              <Products key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-[30px]">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="zoom-in">
          <img
            src={facialSection.banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="zoom-in">
          <div className="w-full flex items-center flex-col text-center md:gap-[20px]">
            <div className="xl:max-w-[350px] lg:max-w[350px] md:max-w-[350px] sm:max-w-[260px] max-w-[200px] flex flex-col items-center xl:gap-[30px] lg:gap-[30px] md:gap-[20px]">
              <img
                src={facialSection.titleImage}
                alt="title"
                className="xl:w-[100%] lg:w-[100%] md:w-[220px] sm:w-[220px] w-[150px]" data-aos="zoom-in"
              />
              <h4 className="text-[#393939] font-bold xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[16px] text-[14px] my-[15px]" data-aos="zoom-in">{facialSection.title}</h4>
              <p className="font-bold xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px]" data-aos="zoom-in">
                {facialSection.description}
              </p>
            </div>

            <Link to={"/contact"} className="block w-100">
              <button className="w-full xl:p-[10px] lg:p-[10px] md:p-[10px] sm:p-[5px] bg-[#f0c6cf] hover:bg-[#EDE1D4] duration-[.3s] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] " data-aos="zoom-in">Book Now
              </button>
            </Link>
          </div>
        </div>
      </div >
      <Feedbacks />
    </>
  );
}

export default Home;
