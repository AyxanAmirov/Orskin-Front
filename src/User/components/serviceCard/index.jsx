import { Link } from "react-router-dom";

function ServiceCard({ image, titleImage, title, delay }) {
    return (
        <Link to={`/services/${title.toLowerCase()}`}
            className="shadow-xl flex flex-col justify-between gap-[20px] bg-white border-r-solid border-r-[1px] border-r-[#D6D6D6] border-l-solid border-l-[1px] border-l-[#D6D6D6] border-t-[1px] border-t-[#D6D6D6]" data-aos="zoom-in" data-aos-delay={delay * 150}>
            <div className="p-[30px]">
                <img src={image} alt="service" className="mb-[30px] w-full" />
                {
                    titleImage ? <img src={titleImage} alt="service" className="mx-auto" /> :
                        <p className="text-center xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[15px] uppercase">
                            {title}
                        </p>
                }
            </div>
            <div >
                <button className="w-full text-center py-[15px] bg-[#EDE1D4] ">
                    See More
                </button>
            </div>
        </Link>
    );
}

export default ServiceCard;
