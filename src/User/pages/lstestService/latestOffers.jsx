import OffersImage from "../../assets/image/treatment-offers.webp";
import { services } from "../../../data/data";
function LatestOffers() {

  let { image, description, items } = services[5].moreinfo
  return (
    <div className="container ">
      <div className="mt-[260px]">
        <h1 className="text-[#2f2f2f] text-[55px] text-center" data-aos="zoom-in">OUR LATEST</h1>
        <div className="w-full flex justify-center">
          <img src={OffersImage} alt="offers" data-aos="zoom-in"
            width={"auto"} height={"auto"} loading="Lazy"
          />
        </div>
        <div className="p-[40px] custom-shadow-1 flex-col md:flex-row  my-[50px] flex gap-[10px]">
          <img src={image} alt="inform" data-aos="zoom-in"
            width={"100%"} height={"auto"} loading="lazy"
          />
          <div className="px-[30px] pt-[30px] flex flex-col gap-[20px]">
            <p className="text-[#393939] text-[18px] leading-[26px]" data-aos="zoom-in">{description}</p>
            {
              items.map(item => (
                <div key={item.id}>
                  <h3 className="text-[#393939] text-[18px] leading-[26px] font-bold" data-aos="zoom-in">{item.title}n</h3>
                  <p className="text-[#393939] text-[18px] leading-[26px]" data-aos="zoom-in">{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestOffers;
